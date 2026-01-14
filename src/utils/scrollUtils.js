let hasHandledScroll = false;

export const scrollToSection = (sectionId, instant = false) => {
  if (!sectionId) return;

  if (window.location.pathname !== '/') {
    window.location.href = `${window.location.origin}/`;
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = sectionId === 'personal' ? 0 : -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: instant ? 'auto' : 'smooth' });
    hasHandledScroll = true;
  } else {
    setTimeout(() => scrollToSection(sectionId, instant), 100);
  }
};

export const handleInitialScroll = () => {
  if (typeof window === 'undefined' || !window.location.hash) return;

  const sectionId = window.location.hash.replace('#', '');
  if (!sectionId) return;

  hasHandledScroll = false;

  const attemptScroll = (attempts = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      scrollToSection(sectionId, true);
    } else if (attempts < 20) {
      setTimeout(() => attemptScroll(attempts + 1), 100);
    }
  };

  attemptScroll();
};
