(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const labTabs = [...document.querySelectorAll('[data-lab]')];
  const labPanels = [...document.querySelectorAll('[data-panel]')];
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  const themeToggle = document.getElementById('themeToggle');
  const langToggle = document.getElementById('langToggle');

  /* =========================
     LOCALIZATION
  ========================= */

  const LANGUAGE_STORAGE_KEY =
    'portfolio-language-user-choice-v3';

  const arText = {
    'Skip to content': 'تخطي إلى المحتوى',

    'Software Quality Engineering':
      'هندسة جودة البرمجيات',

    'Work': 'الأعمال',
    'Test Lab': 'مختبر الاختبار',
    'Experience': 'الخبرات',
    'Stack': 'التقنيات',
    'Contact': 'تواصل معي',

    'Software Quality Control Engineer':
      'مهندس مراقبة جودة البرمجيات',

    'I test the':
      'أختبر',

    'system':
      'النظام',

    ',':
      '،',

    'not just the screen.':
      'وليس الواجهة فقط.',

    'QA/QC engineer building confidence across UI, APIs, data, automation and performance — with a testing-first mindset and production experience.':
      'مهندس QA/QC أعمل على تعزيز الثقة في جودة الواجهات وواجهات API والبيانات والأتمتة والأداء، بعقلية تضع الاختبار أولًا وخبرة عملية على أنظمة حقيقية.',

    'View testing work':
      'استعرض أعمال الاختبار',

    'Download CV':
      'تحميل السيرة الذاتية',

    '2.5+ yrs':
      '+2.5 سنة',

    'hands-on QA':
      'خبرة عملية في QA',

    'Cairo':
      'القاهرة',

    'Egypt':
      'مصر',

    'LIVE':
      'مباشر',

    'UI & Functional':
      'الواجهات والاختبارات الوظيفية',

    'web / mobile / admin':
      'ويب / موبايل / لوحة إدارة',

    'PASS':
      'ناجح',

    'API & Data':
      'واجهات API والبيانات',

    'REST / SQL / validation':
      'REST / SQL / التحقق',

    'Automation':
      'الأتمتة',

    'RUNNING':
      'قيد التشغيل',

    'test cases @ Istinara':
      'حالات اختبار @ Istinara',

    'cases / release @ ADVIS':
      'حالة / إصدار @ ADVIS',

    'regression tests @ ITWORX':
      'اختبارات انحدار @ ITWORX',

    'collecting suites... ui, api, db, perf':
      'جاري تجميع الحزم... ui, api, db, perf',

    'risk-based coverage enabled':
      'تم تفعيل التغطية المبنية على المخاطر',

    'SCROLL TO INSPECT':
      'مرّر للاستعراض',

    'MANUAL TESTING':
      'الاختبار اليدوي',

    'API TESTING':
      'اختبار API',

    'WEB AUTOMATION':
      'أتمتة الويب',

    'MOBILE TESTING':
      'اختبار الموبايل',

    'DATABASE VALIDATION':
      'التحقق من قواعد البيانات',

    'PERFORMANCE TESTING':
      'اختبار الأداء',

    'AGILE DELIVERY':
      'التسليم بأسلوب Agile',

    'SELECTED WORK':
      'أعمال مختارة',

    'Evidence over buzzwords.':
      'الأدلة أهم من الشعارات.',

    'A mix of public QA projects and real product testing — each selected to show a different layer of quality engineering.':
      'مزيج من مشاريع QA العامة واختبارات منتجات حقيقية، تم اختيار كل منها لإظهار جانب مختلف من هندسة الجودة.',

    'AUTOMATION':
      'أتمتة',

    'FEATURED':
      'مميز',

    'SauceLab Web Automation Framework':
      'إطار أتمتة الويب لـ SauceLab',

    'Maintainable E2E UI automation built with Selenium, Java, TestNG, Maven and Page Object Model.':
      'إطار أتمتة E2E قابل للصيانة لواجهات المستخدم باستخدام Selenium وJava وTestNG وMaven ونمط Page Object Model.',

    'Open repository':
      'فتح المستودع',

    'REST API Testing Collection':
      'مجموعة اختبارات REST API',

    'Structured Postman collection covering positive and negative scenarios, validations and assertions.':
      'مجموعة Postman منظمة تغطي السيناريوهات الإيجابية والسلبية وعمليات التحقق والـ assertions.',

    'Load profile':
      'ملف الحمل',

    'Load':
      'الحمل',

    'scenario':
      'السيناريو',

    'Response':
      'الاستجابة',

    'analysis':
      'التحليل',

    'Stress':
      'الضغط',

    'signals':
      'المؤشرات',

    'PERFORMANCE':
      'الأداء',

    'Demoblaze Performance Testing':
      'اختبار أداء Demoblaze',

    'JMeter scenarios created to observe response behavior and application performance under load.':
      'سيناريوهات JMeter لمراقبة سلوك الاستجابة وأداء التطبيق تحت الحمل.',

    'Performance':
      'الأداء',

    'PROFESSIONAL':
      'خبرة عملية',

    'One product. Three surfaces. Multiple risk layers.':
      'منتج واحد. ثلاث واجهات. طبقات متعددة من المخاطر.',

    'Quality coverage across the URNT website, admin panel and mobile app — including manual, API, database, exploratory, regression and payment-related flows, with extensive defect discovery and retesting.':
      'تغطية جودة شاملة لموقع URNT ولوحة الإدارة وتطبيق الموبايل، تشمل الاختبار اليدوي وAPI وقواعد البيانات والاختبار الاستكشافي والانحدار وتدفقات الدفع، مع اكتشاف مكثف للعيوب وإعادة الاختبار.',

    'Web':
      'الويب',

    'Mobile':
      'الموبايل',

    'Database':
      'قاعدة البيانات',

    'Private production project · no public repository':
      'مشروع Production خاص · لا يوجد مستودع عام',

    'WEB':
      'ويب',

    'Customer Platform':
      'منصة العملاء',

    'ADMIN':
      'الإدارة',

    'Operations Panel':
      'لوحة العمليات',

    'MOBILE':
      'موبايل',

    'Mobile App':
      'تطبيق الموبايل',

    'INTERACTIVE TEST LAB':
      'مختبر اختبار تفاعلي',

    'How I think about quality.':
      'كيف أفكر في الجودة.',

    'Testing is not a checklist. It is a loop: understand risk, design coverage, observe behavior, isolate failure, communicate clearly, and verify the fix.':
      'الاختبار ليس قائمة تحقق. بل دورة مستمرة: فهم المخاطر، تصميم التغطية، مراقبة السلوك، عزل سبب الفشل، التواصل بوضوح، ثم التحقق من الإصلاح.',

    'API flow':
      'مسار API',

    'UI flow':
      'مسار UI',

    'Defect flow':
      'مسار العيب',

    '● READY':
      '● جاهز',

    'Request':
      'الطلب',

    'method · headers · payload':
      'method · headers · payload',

    'Validate':
      'التحقق',

    'status · schema · business rules':
      'status · schema · قواعد العمل',

    'Cross-check':
      'مطابقة النتائج',

    'database · downstream state':
      'قاعدة البيانات · الحالة اللاحقة',

    'Result':
      'النتيجة',

    'evidence captured':
      'تم حفظ الأدلة',

    'PAY NOW':
      'ادفع الآن',

    'Boundary values':
      'القيم الحدّية',

    'State transitions':
      'انتقالات الحالة',

    'Error paths':
      'مسارات الأخطاء',

    'Cross-browser':
      'عبر المتصفحات',

    'High':
      'عالي',

    'Payment succeeds but order state remains pending':
      'نجاح الدفع لكن حالة الطلب تظل معلقة',

    'Steps':
      'الخطوات',

    'Reproducible 4/4':
      'قابل لإعادة الإنتاج 4/4',

    'Evidence':
      'الأدلة',

    'Impact':
      'التأثير',

    'User can retry payment':
      'يمكن للمستخدم محاولة الدفع مرة أخرى',

    'READY FOR DEV':
      'جاهز للمطور',

    'EXPERIENCE':
      'الخبرات',

    'Built in real delivery teams.':
      'خبرة داخل فرق تطوير وتسليم حقيقية.',

    'Production QA across remote and Agile environments, with overlapping part-time engagements clearly separated.':
      'خبرة QA على أنظمة Production ضمن بيئات Remote وAgile، مع توضيح فترات العمل الجزئي المتداخلة.',

    'CURRENT':
      'حاليًا',

    'DEC 2025 — PRESENT':
      'ديسمبر 2025 — حتى الآن',

    'Designed and maintained ~1,000 test cases across multiple modules; defect discovery, retesting and release-quality support.':
      'صممت وحافظت على نحو 1,000 حالة اختبار عبر عدة وحدات، مع اكتشاف العيوب وإعادة الاختبار ودعم جودة الإصدارات.',

    'PART-TIME · REMOTE':
      'دوام جزئي · عن بُعد',

    'NOV 2025 — PRESENT':
      'نوفمبر 2025 — حتى الآن',

    'Part-time remote · Previous full-time engagement: Jul–Dec 2024 · High-volume defect discovery across web, mobile and admin flows.':
      'دوام جزئي عن بُعد · عمل سابق بدوام كامل: يوليو–ديسمبر 2024 · اكتشاف عدد كبير من العيوب عبر الويب والموبايل ولوحة الإدارة.',

    'REMOTE':
      'عن بُعد',

    'Software QA Tester · Freelance / Part-time':
      'مختبر برمجيات QA · عمل حر / دوام جزئي',

    'MAY 2025 — APR 2026':
      'مايو 2025 — أبريل 2026',

    '50+ test cases per release with defect reporting, tracking and verification through Azure DevOps.':
      'أكثر من 50 حالة اختبار لكل إصدار مع تسجيل العيوب وتتبعها والتحقق منها عبر Azure DevOps.',

    'INTERNSHIP':
      'تدريب',

    'Software Quality Control Engineer Intern':
      'متدرب مهندس مراقبة جودة البرمجيات',

    'FEB 2024 — JUL 2024':
      'فبراير 2024 — يوليو 2024',

    '150+ test cases designed, 200+ regression tests executed, and extensive defect reporting/retesting using TFS.':
      'تصميم أكثر من 150 حالة اختبار وتنفيذ أكثر من 200 اختبار انحدار، مع تسجيل وإعادة اختبار مكثف للعيوب باستخدام TFS.',

    'test cases designed':
      'حالات اختبار تم تصميمها',

    'at Istinara':
      'في Istinara',

    'test cases per release':
      'حالة اختبار لكل إصدار',

    'at ADVIS':
      'في ADVIS',

    'test cases executed':
      'حالات اختبار تم تنفيذها',

    'at URNT':
      'في URNT',

    'regression tests':
      'اختبارات انحدار',

    'at ITWORX':
      'في ITWORX',

    'TECH STACK':
      'التقنيات والأدوات',

    'Tools I use to find what breaks.':
      'أدوات أستخدمها لاكتشاف ما قد يتعطل.',

    'From exploratory testing to automation and backend-aware debugging.':
      'من الاختبار الاستكشافي إلى الأتمتة وتحليل المشكلات مع فهم للـ backend.',

    'Test Design':
      'تصميم الاختبارات',

    'Manual · Exploratory · Regression · Smoke · Web · Mobile · Defect Management':
      'يدوي · استكشافي · انحدار · Smoke · ويب · موبايل · إدارة العيوب',

    'Code':
      'البرمجة',

    'Delivery':
      'التسليم',

    'Backend basics':
      'أساسيات Backend',

    'Foundational knowledge':
      'معرفة تأسيسية',

    'CREDENTIAL':
      'الشهادة',

    'Certificate Code: 250513005 ↗':
      'كود الشهادة: 250513005 ↗',

    "LET'S CONNECT":
      'لنتواصل',

    'Need someone who can follow a bug':
      'تحتاج شخصًا يستطيع تتبع العيب',

    'across layers?':
      'عبر طبقات النظام؟',

    'Open to Software QA/QC and test automation opportunities where product quality is treated as engineering work.':
      'متاح لفرص Software QA/QC وأتمتة الاختبارات في بيئات تتعامل مع جودة المنتج كعمل هندسي.',

    'Email me':
      'راسلني',

    'Designed as a testing portfolio — not a PDF resume.':
      'مصمم كملف أعمال للاختبار — وليس مجرد سيرة ذاتية PDF.',

    'TOP ↑':
      'أعلى ↑'
  };

  const labels = {
    en: {
      home: 'Bahaa Ahmed home',
      nav: 'Primary navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLight: 'Switch to light mode',
      switchDark: 'Switch to dark mode',
      switchLanguage: 'Switch to Arabic',
      testingOutput: 'Testing command output',
      capabilities: 'Testing capabilities',
      performanceChart: 'Performance test line chart',
      workflow: 'Testing workflow examples',
      certificate: 'Verify ISTQB CTFL v4.0 certificate'
    },

    ar: {
      home: 'الصفحة الرئيسية لبهاء أحمد',
      nav: 'التنقل الرئيسي',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      switchLight: 'التبديل إلى الوضع الفاتح',
      switchDark: 'التبديل إلى الوضع الداكن',
      switchLanguage: 'التبديل إلى الإنجليزية',
      testingOutput: 'مخرجات أوامر الاختبار',
      capabilities: 'مجالات الاختبار',
      performanceChart: 'مخطط اختبار الأداء',
      workflow: 'أمثلة على سير عمل الاختبار',
      certificate: 'التحقق من شهادة ISTQB CTFL v4.0'
    }
  };

  /* =========================
     SYSTEM LANGUAGE
  ========================= */

  function getSystemLanguage() {
    const locale =
      navigator.languages?.[0] ||
      navigator.language ||
      'en';

    return locale
      .toLowerCase()
      .startsWith('ar')
        ? 'ar'
        : 'en';
  }

  const savedLanguage =
    localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    );

  /*
    Priority:

    1- User manually selected language
    2- Browser / system language
    3- English fallback
  */

  let currentLang =
    savedLanguage === 'ar' ||
    savedLanguage === 'en'
      ? savedLanguage
      : getSystemLanguage();

  /* =========================
     TEXT NODES
  ========================= */

  const normalizeText = (value) =>
    value
      .replace(/\s+/g, ' ')
      .trim();

  const originalTextNodes = [];

  const walker =
    document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent =
            node.parentElement;

          if (!parent) {
            return NodeFilter.FILTER_REJECT;
          }

          /*
            Never translate code itself.
          */

          if (
            parent.closest(
              'script, style, noscript, pre, code'
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return normalizeText(
            node.nodeValue
          )
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

  let textNode;

  while (
    (textNode = walker.nextNode())
  ) {
    originalTextNodes.push({
      node: textNode,
      original: textNode.nodeValue,
      key: normalizeText(
        textNode.nodeValue
      )
    });
  }

  function keepWhitespace(
    original,
    translated
  ) {
    const start =
      original.match(/^\s*/)?.[0] ||
      '';

    const end =
      original.match(/\s*$/)?.[0] ||
      '';

    return (
      start +
      translated +
      end
    );
  }

  function applyTextTranslations(
    lang
  ) {
    originalTextNodes.forEach(
      (item) => {

        if (
          !item.node.isConnected
        ) {
          return;
        }

        if (
          lang === 'ar' &&
          Object.prototype
            .hasOwnProperty
            .call(
              arText,
              item.key
            )
        ) {
          item.node.nodeValue =
            keepWhitespace(
              item.original,
              arText[item.key]
            );
        } else {
          item.node.nodeValue =
            item.original;
        }
      }
    );
  }

  /* =========================
     ACCESSIBILITY
  ========================= */

  function label(key) {
    return (
      labels[currentLang]?.[key] ||
      labels.en[key] ||
      key
    );
  }

  function updateAccessibility() {
    document
      .querySelector('.brand')
      ?.setAttribute(
        'aria-label',
        label('home')
      );

    document
      .querySelector('.desktop-nav')
      ?.setAttribute(
        'aria-label',
        label('nav')
      );

    document
      .querySelector('.terminal-snippet')
      ?.setAttribute(
        'aria-label',
        label('testingOutput')
      );

    document
      .querySelector('.signal-strip')
      ?.setAttribute(
        'aria-label',
        label('capabilities')
      );

    document
      .querySelector('.perf-visual svg')
      ?.setAttribute(
        'aria-label',
        label('performanceChart')
      );

    document
      .querySelector('.lab-tabs')
      ?.setAttribute(
        'aria-label',
        label('workflow')
      );

    document
      .querySelector(
        '.credentials-section a[aria-label]'
      )
      ?.setAttribute(
        'aria-label',
        label('certificate')
      );

    if (menuToggle) {
      const open =
        menuToggle.getAttribute(
          'aria-expanded'
        ) === 'true';

      menuToggle.setAttribute(
        'aria-label',
        open
          ? label('closeMenu')
          : label('openMenu')
      );
    }

    langToggle?.setAttribute(
      'aria-label',
      label('switchLanguage')
    );
  }

  /* =========================
     META
  ========================= */

  function updateMeta() {
    const meta =
      document.querySelector(
        'meta[name="description"]'
      );

    if (
      currentLang === 'ar'
    ) {
      document.title =
        'Bahaa Ahmed EL-Hamouly | مهندس QA / QC';

      meta?.setAttribute(
        'content',
        'بهاء أحمد الحامولي — مهندس مراقبة جودة برمجيات متخصص في الاختبار اليدوي وAPI والأتمتة وقواعد البيانات واختبار الأداء.'
      );
    } else {
      document.title =
        'Bahaa Ahmed EL-Hamouly | QA / QC Engineer';

      meta?.setAttribute(
        'content',
        'Bahaa Ahmed Elhamouly — Software Quality Control Engineer specializing in manual, API, automation, database and performance testing.'
      );
    }
  }

  /* =========================
     RTL / LTR
  ========================= */

  function updateDirection() {
    document.documentElement.lang =
      currentLang;

    document.documentElement.dir =
      currentLang === 'ar'
        ? 'rtl'
        : 'ltr';

    /*
      Keep technical blocks LTR.
    */

    document
      .querySelectorAll(
        `
        pre,
        code,
        .code-window,
        .terminal-snippet,
        .mini-api,
        .machine-bottom
        `
      )
      .forEach(
        (element) => {
          element.dir = 'ltr';
        }
      );

    /*
      Email / usernames remain LTR.
    */

    document
      .querySelectorAll(
        '.contact-links b'
      )
      .forEach(
        (element) => {
          element.dir = 'ltr';
        }
      );
  }

  /* =========================
     THEME
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

  document.documentElement
    .dataset.theme =
    savedTheme ||
    preferredTheme;

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
        ? label(
            'switchLight'
          )
        : label(
            'switchDark'
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
     SET LANGUAGE
  ========================= */

  function setLanguage(
    lang,
    {
      persist = false
    } = {}
  ) {
    currentLang =
      lang === 'ar'
        ? 'ar'
        : 'en';

    applyTextTranslations(
      currentLang
    );

    updateDirection();
    updateMeta();

    if (langToggle) {
      langToggle.textContent =
        currentLang === 'en'
          ? 'AR'
          : 'EN';
    }

    updateAccessibility();
    updateThemeButton();

    /*
      Save only when user
      manually changes language.
    */

    if (persist) {
      localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        currentLang
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
        ? label('closeMenu')
        : label('openMenu')
    );

    mobileMenu
      .classList
      .toggle(
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
      setMenu(
        menuToggle.getAttribute(
          'aria-expanded'
        ) !== 'true'
      );
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
     HEADER SCROLL
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

  labTabs.forEach(
    (tab) => {

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
                panel.dataset.panel ===
                  target
              );
            }
          );
        }
      );
    }
  );

  /* =========================
     REVEAL ANIMATION
  ========================= */

  if (
    'IntersectionObserver'
    in window
  ) {
    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {
                entry.target
                  .classList
                  .add(
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
      (item) =>
        observer.observe(
          item
        )
    );
  } else {
    revealItems.forEach(
      (item) =>
        item.classList.add(
          'visible'
        )
    );
  }

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

      setLanguage(
        nextLanguage,
        {
          persist: true
        }
      );
    }
  );

  /* =========================
     SYSTEM LANGUAGE CHANGE
  ========================= */

  window.addEventListener(
    'languagechange',
    () => {

      /*
        If user manually
        selected a language,
        don't override it.
      */

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

  setLanguage(
    currentLang
  );

})();
