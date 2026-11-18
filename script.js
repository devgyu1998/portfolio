(() => {
  'use strict';

  const content = window.PORTFOLIO_CONTENT;
  const page = document.body.dataset.page;
  const app = document.getElementById('portfolio-app');
  if (!content || !app) return;

  const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const shortNames = { clarinet: 'Clarinet 고도화', soldier: '장병체감형 AI 챗봇', ts: 'TS AI 공용플랫폼', sc301: 'SC301 AI 상담·예약 챗봇', company: '기업 홈페이지', suwon: '수원시 복지민원 검색', ukkikki: 'Ukkikki', grabpic: 'GrabPic', yutnori: '밀정 윷놀이' };
  const projectUrl = project => `./project.html?id=${encodeURIComponent(project.id)}`;
  const projectKind = project => project.kind === 'work' ? '업무 프로젝트' : '팀 프로젝트 · SSAFY';
  const organization = project => project.kind === 'work' ? content.career.company : 'SSAFY 10기';
  const tokens = items => items.map(item => `<span class="technology-token">${escape(item)}</span>`).join(' ');
  const copyIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path></svg>';
  const email = () => `<span class="email-contact"><span data-email>${escape(content.contact.email)}</span><button class="copy-email" type="button" data-copy-email aria-label="이메일 주소 복사" title="이메일 주소 복사">${copyIcon}</button></span>`;
  const github = () => `<a href="${escape(content.contact.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub 프로필 (새 탭)">GitHub ↗</a>`;
  const contact = () => `<div class="contact-links">${email()}${github()}</div>`;
  const details = items => `<dl class="detail-list">${items.map(item => `<div><dt>${escape(item.title)}</dt><dd>${escape(item.text)}</dd></div>`).join('')}</dl>`;
  const sectionHeading = (title, english, link = '') => `<div class="section-heading"><h2>${title}</h2><span>${english}</span>${link}</div>`;
  const activePage = page === 'project' ? 'projects' : page;
  const navigation = [ ['resume', './index.html', '프로필'], ['projects', './projects.html', '프로젝트'] ];
  const header = `<a class="skip-link" href="#main">본문 바로가기</a><header class="site-header"><div class="header-inner"><a class="brand" href="./index.html" aria-label="양성규 프로필"><strong>양성규</strong><span>Full Stack Developer</span></a><nav class="primary-nav" aria-label="주 메뉴">${navigation.map(([id, url, label]) => `<a href="${url}"${activePage === id ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav></div></header>`;
  const footer = `<footer class="site-footer"><span>양성규 · Full Stack Developer</span><a class="footer-github" href="${escape(content.contact.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a class="back-top" href="#main">맨 위로 ↑</a></footer><div class="snackbar" role="status" aria-live="polite" aria-atomic="true"></div>`;
  const sidebar = (title, entries) => `<aside class="page-sidebar"><div class="sidebar-sticky"><p class="sidebar-heading">${escape(title)}</p><nav class="section-nav" aria-label="페이지 목차">${entries.map(([id, label]) => `<a href="#${escape(id)}">${escape(label)}</a>`).join('')}</nav><div class="sidebar-contact"><span class="contact-label">Contact</span>${email()}${github()}</div></div></aside>`;
  const shell = (title, entries, body) => `${header}<div class="page-shell">${sidebar(title, entries)}<main id="main" class="document" tabindex="-1">${body}</main></div>${footer}`;

  function resumeProject(project) {
    return `<article class="resume-row"><div class="row-meta"><h3>${escape(shortNames[project.id])}</h3><p>${escape(organization(project))}</p><p class="numeric">${escape(project.period)}</p></div><div class="row-body"><div class="project-summary-title"><h3><a href="${projectUrl(project)}">${escape(project.name)}</a></h3><a href="${projectUrl(project)}" aria-label="${escape(shortNames[project.id])} 상세 보기">↗</a></div><p>${escape(project.description)}</p><p class="compact-tech">${project.skills.map(escape).join(' · ')}</p><a class="text-link" href="${projectUrl(project)}">담당 업무 자세히 보기 <span aria-hidden="true">→</span></a></div></article>`;
  }

  function resume() {
    const selected = ['soldier', 'ts', 'ukkikki'].map(id => content.projects.find(project => project.id === id));
    const education = content.education.map(entry => `<article class="education-row"><div class="education-top"><h3>${escape(entry.title)}</h3><p class="numeric">${escape(entry.period)}</p></div>${entry.summary ? `<p>${escape(entry.summary)}</p>` : ''}${entry.details.length ? `<details class="education-more"><summary>교육·협업 내용 보기</summary>${details(entry.details)}</details>` : ''}</article>`).join('');
    const body = `<section class="resume-intro" id="about"><figure class="profile-photo"><img src="./profile.jpg" alt="양성규 프로필 사진" width="354" height="472"></figure><div class="profile-heading"><h1>양성규</h1><span class="role-label">Full Stack Developer</span></div><p class="headline">${content.hero.titleHtml}</p><p class="intro-description">${escape(content.hero.intro)}</p>${contact()}</section>
      <section class="resume-section" id="experience">${sectionHeading('경력', 'Experience')}<article class="resume-row"><div class="row-meta"><h3>${escape(content.career.company)}</h3><p class="numeric">${escape(content.career.period)}</p><p>연구원 · 정규직</p></div><div class="row-body"><p class="position">웹 풀스택 개발자</p><p>${content.career.summaryHtml}</p><ul class="simple-list">${content.career.details.map(item => `<li>${escape(item.title)}</li>`).join('')}</ul></div></article></section>
      <section class="resume-section" id="projects">${sectionHeading('주요 프로젝트', 'Selected Projects', '<a class="heading-link" href="./projects.html">전체 9개 보기 →</a>')}${selected.map(resumeProject).join('')}</section>
      <section class="resume-section" id="skills">${sectionHeading('기술 스택', 'Skills')}<dl class="skill-list">${content.skills.map(group => `<div><dt>${escape(group.label)}</dt><dd>${tokens(group.items)}</dd></div>`).join('')}</dl></section>
      <section class="resume-section" id="education">${sectionHeading('학력·활동', 'Education & Activities')}${education}</section>
      <section class="contact-section" id="contact">${sectionHeading('연락처', 'Contact')}<p>채용이나 협업에 관한 연락은 이메일로 부탁드립니다.</p>${contact()}</section>`;
    return shell('프로필', [['about', '소개'], ['experience', '경력'], ['projects', '주요 프로젝트'], ['skills', '기술 스택'], ['education', '학력·활동'], ['contact', '연락처']], body);
  }

  function projects() {
    const body = `<div class="page-intro"><p class="page-kicker">PROJECTS</p><h1>프로젝트</h1><p>업무와 팀 프로젝트에서 직접 맡은 개발 내용을 정리했습니다.</p></div><div class="project-toolbar"><div class="project-filters" aria-label="프로젝트 종류">${[['all', '전체', 9], ['work', '업무', 6], ['team', '팀', 3]].map(([id, label, count]) => `<button type="button" data-filter="${id}" aria-pressed="${id === 'all'}">${label}<span>${count}</span></button>`).join('')}</div><p class="project-count" aria-live="polite">9개 프로젝트</p></div><div class="project-index">${content.projects.map(project => `<article class="project-index-row" id="project-${project.id}" data-kind="${project.kind}"><p class="index-meta"><span class="kind-label">${escape(projectKind(project))}</span><span>${escape(organization(project))}</span><span class="numeric">${escape(project.period)}</span></p><h2><a href="${projectUrl(project)}">${escape(project.name)}</a></h2><p class="index-description">${escape(project.description)}</p><p class="compact-tech">${project.skills.map(escape).join(' · ')}</p><a class="text-link" href="${projectUrl(project)}">프로젝트 상세 보기 <span aria-hidden="true">→</span></a><a class="project-arrow" href="${projectUrl(project)}" aria-label="${escape(project.name)} 상세 보기">↗</a></article>`).join('')}</div>`;
    return shell('프로젝트', content.projects.map(project => [`project-${project.id}`, shortNames[project.id]]), body);
  }

  function projectGallery(project) {
    const images = project.overview?.gallery;
    if (!images?.length) return '';
    const first = images[0];
    const counter = `01 / ${String(images.length).padStart(2, '0')}`;
    return `<div class="project-gallery" data-project-gallery="${escape(project.id)}" role="region" aria-label="서비스 대표 화면 갤러리">
      <div class="project-gallery-heading"><span>서비스 대표 화면</span><span>화면을 선택하면 확대됩니다</span></div>
      <figure class="project-gallery-stage"><button class="project-gallery-open" type="button" data-gallery-open aria-haspopup="dialog" aria-label="${escape(first.title)} 화면 확대"><img data-gallery-image src="${escape(first.src)}" alt="${escape(first.title + '. ' + first.description)}" decoding="async"></button><figcaption><div><strong data-gallery-title>${escape(first.title)}</strong><p data-gallery-description>${escape(first.description)}</p></div><span class="project-gallery-count" data-gallery-count aria-live="polite" aria-atomic="true">${counter}</span></figcaption></figure>
      <div class="project-gallery-navigation"><button type="button" class="project-gallery-arrow" data-gallery-step="-1" aria-label="이전 대표 화면">‹</button><div class="project-gallery-thumbnails" aria-label="대표 화면 선택">${images.map((item, i) => `<button type="button" class="project-gallery-thumbnail" data-gallery-index="${i}" aria-pressed="${i === 0}" aria-label="${i + 1}. ${escape(item.title)} 화면 선택"><img src="${escape(item.src)}" alt="" loading="lazy" decoding="async"><span>${escape(item.title)}</span></button>`).join('')}</div><button type="button" class="project-gallery-arrow" data-gallery-step="1" aria-label="다음 대표 화면">›</button></div>
      <dialog class="project-gallery-dialog" aria-labelledby="gallery-dialog-title"><div class="project-gallery-dialog-header"><h2 id="gallery-dialog-title">서비스 대표 화면</h2><button type="button" data-gallery-close autofocus>닫기 ×</button></div><img data-gallery-image src="${escape(first.src)}" alt="${escape(first.title + '. ' + first.description)}"><div class="project-gallery-dialog-caption"><div><strong data-gallery-title>${escape(first.title)}</strong><p data-gallery-description>${escape(first.description)}</p></div><div class="project-gallery-dialog-controls"><button type="button" data-gallery-step="-1" aria-label="이전 대표 화면">←</button><span data-gallery-count aria-live="polite" aria-atomic="true">${counter}</span><button type="button" data-gallery-step="1" aria-label="다음 대표 화면">→</button></div></div></dialog>
    </div>`;
  }

  function projectDevelopment(project) {
    if (!project.development?.length) return '';
    return `<section class="detail-section" id="development"><h2>주요 개발 내용</h2>${project.development.map((entry, index) => {
      const demo = entry.demo;
      return `<article class="development-entry"><h3><span class="development-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>${escape(entry.title)}</h3>${entry.paragraphs.map(paragraph => `<p>${escape(paragraph)}</p>`).join('')}${demo ? `<details class="project-demo" data-project-demo="${index}"><summary><span class="project-demo-icon" aria-hidden="true"></span><span>${escape(demo.title)} 시연 보기</span><span class="project-demo-fold" aria-hidden="true">펼치기</span></summary><figure class="project-demo-player"><button type="button" class="project-demo-stage" data-demo-play aria-label="${escape(demo.title)} 시연 재생" aria-pressed="false"><img src="${escape(demo.poster)}" alt="${escape(demo.title)} 미리보기" width="${demo.width}" height="${demo.height}" loading="lazy" decoding="async"><span class="project-demo-overlay" aria-hidden="true">▶</span></button><figcaption><span>${escape(demo.title)}</span><button type="button" data-demo-play aria-label="${escape(demo.title)} 시연 재생" aria-pressed="false">▶ 재생</button></figcaption></figure></details>` : ''}</article>`;
    }).join('')}</section>`;
  }

  function projectDetail() {
    const project = content.projects.find(item => item.id === new URLSearchParams(location.search).get('id'));
    if (!project) return shell('프로젝트', [['main', '프로젝트']], '<div class="page-intro"><h1>프로젝트를 찾을 수 없습니다.</h1><p><a class="text-link" href="./projects.html">프로젝트 목록으로 돌아가기 →</a></p></div>');
    document.title = `${shortNames[project.id]} · 양성규 | 포트폴리오`;
    const index = content.projects.indexOf(project);
    const previous = content.projects[index - 1];
    const next = content.projects[index + 1];
    const detailsTitle = project.detailsTitle || '담당 업무';
    const overview = project.overview || {};
    const resourceSections = project.resources?.length ? [['resources', '사용 기술·관련 자료']] : [['technologies', '사용 기술'], ...(project.recordLink ? [['record', '소스 코드']] : [])];
    const resourceContent = project.resources?.length
      ? `<section class="detail-section" id="resources"><h2>사용 기술·관련 자료</h2><p class="skill-tokens">${tokens(project.skills)}</p>${project.resources.map(resource => `<div class="project-resource"><a class="record-link" href="${escape(resource.url)}" target="_blank" rel="noopener noreferrer">${escape(resource.title)} ↗</a>${resource.description ? `<p>${escape(resource.description)}</p>` : ''}</div>`).join('')}</section>`
      : `<section class="detail-section" id="technologies"><h2>사용 기술</h2><p class="skill-tokens">${tokens(project.skills)}</p></section>${project.recordLink ? `<section class="detail-section" id="record"><h2>소스 코드</h2><a class="record-link" href="${escape(project.recordLink)}" target="_blank" rel="noopener noreferrer">GitHub 저장소 보기 ↗</a></section>` : ''}`;
    const body = `<nav class="breadcrumb" aria-label="현재 위치"><a href="./projects.html">프로젝트</a><span aria-hidden="true">/</span><span>${escape(shortNames[project.id])}</span></nav><section class="detail-intro" id="overview"><p class="page-kicker">${escape(projectKind(project))}</p><h1>${escape(overview.title || project.name)}</h1><div class="project-metadata"><span class="numeric">${escape(project.period)}</span><span>${escape(organization(project))}</span>${overview.team ? `<span>${escape(overview.team)}</span>` : ''}${overview.status ? `<span>${escape(overview.status)}</span>` : ''}</div><p class="project-description">${escape(overview.description || project.description)}</p>${overview.role ? `<p class="project-role"><strong>담당 역할</strong><span>${escape(overview.role)}</span></p>` : ''}${projectGallery(project)}</section>${projectDevelopment(project)}<section class="detail-section" id="responsibilities"><h2>${escape(detailsTitle)}</h2>${details(project.details)}</section>${resourceContent}<nav class="project-pagination" aria-label="다른 프로젝트">${previous ? `<a class="previous-project" href="${projectUrl(previous)}"><span>← 이전 프로젝트</span>${escape(shortNames[previous.id])}</a>` : ''}${next ? `<a class="next-project" href="${projectUrl(next)}"><span>다음 프로젝트 →</span>${escape(shortNames[next.id])}</a>` : ''}</nav>`;
    return shell('프로젝트 상세', [['overview', project.overview ? '프로젝트 소개' : '개요'], ...(project.development?.length ? [['development', '주요 개발 내용']] : []), ['responsibilities', detailsTitle], ...resourceSections], body);
  }

  app.innerHTML = ({ resume, projects, project: projectDetail }[page] || resume)();
  document.querySelectorAll('[data-project-demo]').forEach(details => {
    const project = content.projects.find(item => item.id === new URLSearchParams(location.search).get('id'));
    const demo = project.development[Number(details.dataset.projectDemo)].demo;
    const player = details.querySelector('.project-demo-player');
    const image = player.querySelector('img');
    const buttons = [...player.querySelectorAll('[data-demo-play]')];
    let playing = false;
    function setPlaying(next) {
      playing = next;
      image.src = playing ? demo.src : demo.poster;
      image.alt = playing ? demo.alt : `${demo.title} 미리보기`;
      player.classList.toggle('is-playing', playing);
      buttons.forEach(button => {
        button.setAttribute('aria-pressed', String(playing));
        button.setAttribute('aria-label', `${demo.title} 시연 ${playing ? '정지' : '재생'}`);
      });
      player.querySelector('figcaption button').textContent = playing ? '■ 정지' : '▶ 재생';
    }
    buttons.forEach(button => button.addEventListener('click', () => setPlaying(!playing)));
    details.addEventListener('toggle', () => {
      details.querySelector('.project-demo-fold').textContent = details.open ? '접기' : '펼치기';
      if (!details.open && playing) setPlaying(false);
      scheduleToc();
    });
  });
  const gallery = document.querySelector('[data-project-gallery]');
  if (gallery) {
    const images = content.projects.find(project => project.id === gallery.dataset.projectGallery).overview.gallery;
    const thumbnails = [...gallery.querySelectorAll('[data-gallery-index]')];
    const strip = gallery.querySelector('.project-gallery-thumbnails');
    const dialog = gallery.querySelector('dialog');
    const openButton = gallery.querySelector('[data-gallery-open]');
    let selected = 0;
    function centerThumbnail() {
      const active = thumbnails[selected];
      const styles = getComputedStyle(strip);
      const edge = Math.max(0, (strip.clientWidth - active.getBoundingClientRect().width) / 2 - parseFloat(styles.columnGap) - parseFloat(styles.paddingLeft));
      strip.style.setProperty('--gallery-edge', `${edge}px`);
      const bounds = active.getBoundingClientRect();
      const stripBounds = strip.getBoundingClientRect();
      strip.scrollTo({ left: strip.scrollLeft + bounds.left - stripBounds.left - (strip.clientWidth - bounds.width) / 2, behavior: 'instant' });
    }
    function selectImage(index, focusThumbnail = false) {
      selected = (index + images.length) % images.length;
      const item = images[selected];
      gallery.querySelectorAll('[data-gallery-image]').forEach(image => {
        image.src = item.src;
        image.alt = `${item.title}. ${item.description}`;
      });
      gallery.querySelectorAll('[data-gallery-title]').forEach(title => { title.textContent = item.title; });
      gallery.querySelectorAll('[data-gallery-description]').forEach(description => { description.textContent = item.description; });
      gallery.querySelectorAll('[data-gallery-count]').forEach(count => { count.textContent = `${String(selected + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`; });
      openButton.setAttribute('aria-label', `${item.title} 화면 확대`);
      thumbnails.forEach((button, i) => button.setAttribute('aria-pressed', String(i === selected)));
      const active = thumbnails[selected];
      centerThumbnail();
      if (focusThumbnail && !dialog.open) active.focus({ preventScroll: true });
    }
    gallery.addEventListener('click', event => {
      const thumbnail = event.target.closest('[data-gallery-index]');
      if (thumbnail) selectImage(Number(thumbnail.dataset.galleryIndex));
      const step = event.target.closest('[data-gallery-step]');
      if (step) selectImage(selected + Number(step.dataset.galleryStep));
      if (event.target.closest('[data-gallery-open]')) dialog.showModal();
      if (event.target.closest('[data-gallery-close]')) dialog.close();
    });
    gallery.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const thumbnail = event.target.closest('[data-gallery-index]');
      const current = thumbnail ? Number(thumbnail.dataset.galleryIndex) : selected;
      const targets = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: images.length - 1 };
      if (!(event.key in targets)) return;
      event.preventDefault();
      selectImage(targets[event.key], Boolean(thumbnail));
    });
    new ResizeObserver(centerThumbnail).observe(strip);
    centerThumbnail();
  }
  let toastTimer;
  const snackbar = document.querySelector('.snackbar');
  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
      clearTimeout(toastTimer);
      button.disabled = true;
      try {
        await navigator.clipboard.writeText(content.contact.email);
        snackbar.textContent = '복사되었습니다';
      } catch {
        const emailText = button.parentElement.querySelector('[data-email]');
        const range = document.createRange();
        range.selectNodeContents(emailText);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        snackbar.textContent = '선택된 이메일 주소를 직접 복사해 주세요.';
      } finally {
        button.disabled = false;
        toastTimer = setTimeout(() => { snackbar.textContent = ''; }, 3000);
      }
    });
  });

  function applyFilter(kind) {
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === kind)));
    const rows = [...document.querySelectorAll('.project-index-row')];
    rows.forEach(row => { row.hidden = kind !== 'all' && row.dataset.kind !== kind; });
    document.querySelector('.project-count').textContent = `${rows.filter(row => !row.hidden).length}개 프로젝트`;
    scheduleToc();
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  const tocLinks = [...document.querySelectorAll('.section-nav a')];
  tocLinks.forEach(link => link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (target?.hidden && page === 'projects') applyFilter('all');
  }));
  let queued = false;
  function updateToc() {
    queued = false;
    const readingLine = document.querySelector('.site-header').offsetHeight + 70;
    let active = tocLinks.find(link => !document.getElementById(link.hash.slice(1))?.hidden);
    tocLinks.forEach(link => {
      const target = document.getElementById(link.hash.slice(1));
      if (target && !target.hidden && target.getBoundingClientRect().top <= readingLine) active = link;
    });
    if (window.scrollY > 0 && window.scrollY + innerHeight >= document.documentElement.scrollHeight - 2) {
      active = [...tocLinks].reverse().find(link => !document.getElementById(link.hash.slice(1))?.hidden);
    }
    tocLinks.forEach(link => { if (link === active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }
  function scheduleToc() { if (!queued) { queued = true; requestAnimationFrame(updateToc); } }
  window.addEventListener('scroll', scheduleToc, { passive: true });
  window.addEventListener('resize', scheduleToc);
  window.addEventListener('hashchange', scheduleToc);
  updateToc();
  if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
})();
