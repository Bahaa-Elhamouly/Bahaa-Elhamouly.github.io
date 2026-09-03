(() => {
  'use strict';

  /* =========================
     DOM ELEMENTS
  ========================= */

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  const labTabs = [
    ...document.querySelectorAll('[data-lab]')
  ];

  const labPanels = [
    ...document.querySelectorAll('[data-panel]')
  ];

  const revealItems = [
    ...document.querySelectorAll('[data-reveal]')
  ];

  const themeToggle = document.getElementById('themeToggle');
  const langToggle = document.getElementById('langToggle');


  /* =========================
     LOCALIZATION
  ========================= */

  /*
    مهم:
    استخدمنا key جديد بدل portfolio-language
    لأن الكود القديم كان بيحفظ "en" تلقائياً
    وبالتالي كان يمنع لغة السيستم من إنها تشتغل.
  */

  const LANGUAGE_STORAGE_KEY =
    'portfolio-language-manual';

  const translations = {

    en: {
      navWork: 'Work',
      navLab: 'Test Lab',
      navExperience: 'Experience',
      navStack: 'Stack',
      contact: 'Contact',

      heroTitle:
        'I test the <em>system</em>,<br>not just the screen.',

      heroSubtitle:
        'QA/QC engineer building confidence across UI, APIs, data, automation and performance — with a testing-first mindset and production experience.',

      openMenu: 'Open menu',
      closeMenu: 'Close menu',

      switchLightMode: 'Switch to light mode',
      switchDarkMode: 'Switch to dark mode',

      switchLanguage: 'Switch to Arabic'
    },

    ar: {
      navWork: 'الأعمال',
      navLab: 'مختبر الاختبار',
      navExperience: 'الخبرات',
      navStack: 'التقنيات',
      contact: 'تواصل معي',

      heroTitle:
        'أختبر <em>النظام</em> بالكامل،<br>وليس الواجهة فقط.',

      heroSubtitle:
        'مهندس جودة برمجيات أعمل على اختبار الواجهات وواجهات API وقواعد البيانات والأتمتة والأداء، مع التركيز على جودة المنتج من منظور هندسي.',

      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',

      switchLightMode: 'التبديل إلى الوضع الفاتح',
      switchDarkMode: 'التبديل إلى الوضع الداكن',

      switchLanguage: 'التبديل إلى الإنجليزية'
    }

  };


  /* =========================
     GET SYSTEM LANGUAGE
  ========================= */

  function getSystemLanguage() {

    const browserLanguage =
      navigator.languages?.[0] ||
      navigator.language ||
      'en';

    const language =
      browserLanguage.toLowerCase();

    /*
      هيشتغل مع:
      ar
      ar-EG
      ar-SA
      ar-AE
      ar-KW
      ...
    */

    if (language.startsWith('ar')) {
      return 'ar';
    }

    return 'en';
  }


  /* =========================
     INITIAL LANGUAGE
  ========================= */

  /*
    الأولوية:

    1. اللغة اللي المستخدم اختارها بنفسه
    2. لغة الجهاز / Browser
    3. English fallback
  */

  const savedLanguage =
    localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    );

  let currentLang =
    savedLanguage === 'ar' ||
    savedLanguage === 'en'
      ? savedLanguage
      : getSystemLanguage();


  /* =========================
     LANGUAGE HELPERS
  ========================= */

  function translate(key) {

    return (
      translations[currentLang]?.[key] ||
      translations.en[key] ||
      key
    );

  }


  function updateLanguageAccessibility() {

    /*
      Menu button
    */

    if (menuToggle) {

      const isOpen =
        menuToggle.getAttribute(
          'aria-expanded'
        ) === 'true';

      menuToggle.setAttribute(
        'aria-label',
        isOpen
          ? translate('closeMenu')
          : translate('openMenu')
      );

    }


    /*
      Language button
    */

    if (langToggle) {

      langToggle.setAttribute(
        'aria-label',
        translate('switchLanguage')
      );

    }

  }


  /* =========================
     SET LANGUAGE
  ========================= */

  function setLanguage(
    lang,
    { save = false } = {}
  ) {

    /*
      Safety fallback
    */

    if (
      lang !== 'en' &&
      lang !== 'ar'
    ) {
      lang = 'en';
    }


    currentLang = lang;


    /*
      HTML lang + direction
    */

    document.documentElement.lang =
      lang;

    document.documentElement.dir =
      lang === 'ar'
        ? 'rtl'
        : 'ltr';


    /*
      Translate all elements
      containing data-i18n
    */

    document
      .querySelectorAll('[data-i18n]')
      .forEach((element) => {

        const key =
          element.dataset.i18n;

        const translatedText =
          translations[lang]?.[key];

        if (translatedText !== undefined) {

          /*
            innerHTML مستخدمة لأن heroTitle
            فيه <em> و <br>
          */

          element.innerHTML =
            translatedText;

        }

      });


    /*
      Language button
    */

    if (langToggle) {

      langToggle.textContent =
        lang === 'en'
          ? 'AR'
          : 'EN';

    }


    /*
      Accessibility labels
    */

    updateLanguageAccessibility();


    /*
      Theme aria-label
      لازم يتحدث بعد تغيير اللغة
    */

    updateThemeButton();


    /*
      نحفظ اللغة فقط لو المستخدم
      اختارها بنفسه من الزر.
    */

    if (save) {

      localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        lang
      );

    }

  }


  /* =========================
     MENU
  ========================= */

  const setMenu = (open) => {

    if (
      !menuToggle ||
      !mobileMenu
    ) {
      return;
    }


    menuToggle.setAttribute(
      'aria-expanded',
      String(open)
    );


    menuToggle.setAttribute(
      'aria-label',
      open
        ? translate('closeMenu')
        : translate('openMenu')
    );


    mobileMenu.classList.toggle(
      'open',
      open
    );


    mobileMenu.style.display =
      open
        ? 'grid'
        : '';

  };


  menuToggle?.addEventListener(
    'click',
    () => {

      const isOpen =
        menuToggle.getAttribute(
          'aria-expanded'
        ) === 'true';

      setMenu(!isOpen);

    }
  );


  mobileMenu?.addEventListener(
    'click',
    (event) => {

      if (
        event.target.closest('a')
      ) {

        setMenu(false);

      }

    }
  );


  document.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Escape'
      ) {

        setMenu(false);

      }

    }
  );


  window.addEventListener(
    'resize',
    () => {

      if (
        window.innerWidth > 1000
      ) {

        setMenu(false);

      }

    },
    {
      passive: true
    }
  );


  /* =========================
     HEADER ON SCROLL
  ========================= */

  const onScroll = () => {

    header?.classList.toggle(
      'scrolled',
      window.scrollY > 18
    );

  };


  onScroll();


  window.addEventListener(
    'scroll',
    onScroll,
    {
      passive: true
    }
  );


  /* =========================
     TEST LAB TABS
  ========================= */

  labTabs.forEach((tab) => {

    tab.addEventListener(
      'click',
      () => {

        const target =
          tab.dataset.lab;


        labTabs.forEach(
          (item) => {

            const active =
              item === tab;

            item.classList.toggle(
              'active',
              active
            );

            item.setAttribute(
              'aria-selected',
              String(active)
            );

          }
        );


        labPanels.forEach(
          (panel) => {

            panel.classList.toggle(
              'active',
              panel.dataset.panel === target
            );

          }
        );

      }
    );

  });


  /* =========================
     REVEAL ANIMATION
  ========================= */

  if (
    'IntersectionObserver' in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  'visible'
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12,
          rootMargin:
            '0px 0px -40px'
        }
      );


    revealItems.forEach(
      (item) => {

        observer.observe(item);

      }
    );

  } else {

    revealItems.forEach(
      (item) => {

        item.classList.add(
          'visible'
        );

      }
    );

  }


  /* =========================
     THEME SWITCHER
  ========================= */

  const savedTheme =
    localStorage.getItem(
      'portfolio-theme'
    );


  const preferredTheme =
    window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches
      ? 'light'
      : 'dark';


  const initialTheme =
    savedTheme ||
    preferredTheme;


  document.documentElement.dataset.theme =
    initialTheme;


  function updateThemeButton() {

    if (!themeToggle) {
      return;
    }


    const theme =
      document.documentElement
        .dataset.theme;


    themeToggle.textContent =
      theme === 'dark'
        ? '☀'
        : '☾';


    themeToggle.setAttribute(
      'aria-label',

      theme === 'dark'
        ? translate(
            'switchLightMode'
          )
        : translate(
            'switchDarkMode'
          )
    );

  }


  themeToggle?.addEventListener(
    'click',
    () => {

      const nextTheme =
        document.documentElement
          .dataset.theme === 'dark'
          ? 'light'
          : 'dark';


      document.documentElement
        .dataset.theme =
        nextTheme;


      localStorage.setItem(
        'portfolio-theme',
        nextTheme
      );


      updateThemeButton();

    }
  );


  /* =========================
     LANGUAGE BUTTON
  ========================= */

  langToggle?.addEventListener(
    'click',
    () => {

      const nextLanguage =
        currentLang === 'en'
          ? 'ar'
          : 'en';


      /*
        هنا بس بنحفظ اللغة
        لأن المستخدم اختارها بنفسه
      */

      setLanguage(
        nextLanguage,
        {
          save: true
        }
      );

    }
  );


  /* =========================
     SYSTEM LANGUAGE CHANGE
  ========================= */

  /*
    لو المستخدم ما اختارش لغة
    يدويًا والموبايل / Browser
    غير اللغة أثناء الموقع مفتوح،
    الموقع يتحدث تلقائياً.
  */

  window.addEventListener(
    'languagechange',
    () => {

      const manualLanguage =
        localStorage.getItem(
          LANGUAGE_STORAGE_KEY
        );


      if (!manualLanguage) {

        setLanguage(
          getSystemLanguage()
        );

      }

    }
  );


  /* =========================
     INITIALIZE
  ========================= */

  /*
    مهم:
    save = false

    يعني لو السيستم عربي
    هيعرض عربي من غير ما
    يحفظ حاجة في localStorage.
  */

  setLanguage(
    currentLang,
    {
      save: false
    }
  );

})();
