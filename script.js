(() => {
  'use strict';
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const labTabs = [...document.querySelectorAll('[data-lab]')];
  const labPanels = [...document.querySelectorAll('[data-panel]')];
  const revealItems = [...document.querySelectorAll('[data-reveal]')];

  const setMenu = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.classList.toggle('open', open);
    mobileMenu.style.display = open ? 'grid' : '';
  };

  menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  mobileMenu?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1000) setMenu(false); }, { passive: true });

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 18);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  labTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.lab;
      labTabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      labPanels.forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === target));
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

/* =========================
   THEME SWITCHER
========================= */

const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('portfolio-theme');

const preferredTheme =
  window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';

const initialTheme = savedTheme || preferredTheme;

document.documentElement.dataset.theme = initialTheme;

const updateThemeButton = () => {
  const theme = document.documentElement.dataset.theme;

  themeToggle.textContent = theme === 'dark' ? '☀' : '☾';

  themeToggle.setAttribute(
    'aria-label',
    theme === 'dark'
      ? 'Switch to light mode'
      : 'Switch to dark mode'
  );
};

updateThemeButton();

themeToggle?.addEventListener('click', () => {

  const nextTheme =
    document.documentElement.dataset.theme === 'dark'
      ? 'light'
      : 'dark';

  document.documentElement.dataset.theme = nextTheme;

  localStorage.setItem('portfolio-theme', nextTheme);

  updateThemeButton();
});

/* =========================
   LOCALIZATION
========================= */

const langToggle = document.getElementById('langToggle');

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
      'QA/QC engineer building confidence across UI, APIs, data, automation and performance — with a testing-first mindset and production experience.'
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
      'مهندس جودة برمجيات أعمل على اختبار الواجهات وواجهات API وقواعد البيانات والأتمتة والأداء، مع التركيز على جودة المنتج من منظور هندسي.'
  }

};

let currentLang =
  localStorage.getItem('portfolio-language') || 'en';

function setLanguage(lang) {

  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir =
    lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]')
    .forEach(element => {

      const key = element.dataset.i18n;

      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }

    });

  langToggle.textContent =
    lang === 'en' ? 'AR' : 'EN';

  localStorage.setItem(
    'portfolio-language',
    lang
  );
}

setLanguage(currentLang);

langToggle?.addEventListener('click', () => {

  setLanguage(
    currentLang === 'en' ? 'ar' : 'en'
  );

});

})();
