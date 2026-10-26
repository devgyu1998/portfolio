(() => {
  const links = [...document.querySelectorAll('.dot-nav a')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));
  let scheduled = false;

  function updateCurrentSection() {
    scheduled = false;
    const readingLine = Math.min(window.innerHeight * 0.3, 160);
    let current = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= readingLine) current = index;
    });
    // 짧은 마지막 섹션도 페이지 하단에서 선택되도록 합니다.
    if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = sections.length - 1;
    }
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateCurrentSection);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  updateCurrentSection();

  const copyButton = document.querySelector('.copy-email');
  const email = document.getElementById('contact-email');
  const copyStatus = document.querySelector('.copy-status');
  let resetCopyTimer;

  copyButton.addEventListener('click', async () => {
    window.clearTimeout(resetCopyTimer);
    copyButton.disabled = true;
    copyStatus.textContent = '';
    try {
      await navigator.clipboard.writeText(email.textContent.trim());
      copyStatus.textContent = '복사되었습니다';
      resetCopyTimer = window.setTimeout(() => {
        copyStatus.textContent = '';
      }, 2500);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(email);
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = '자동 복사가 제한됐어요. 선택된 주소를 직접 복사해 주세요.';
      resetCopyTimer = window.setTimeout(() => {
        copyStatus.textContent = '';
      }, 5000);
    } finally {
      copyButton.disabled = false;
    }
  });
})();
