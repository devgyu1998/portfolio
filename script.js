(() => {
  'use strict';

  const content = window.PORTFOLIO_CONTENT;
  const page = document.body.dataset.page;
  const app = document.getElementById('portfolio-app');
  if (!content || !app) return;

  const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const shortNames = { soldier: '장병체감형 AI 챗봇', ts: 'TS AI 공용플랫폼', sc301: 'SC301 AI 상담·예약 챗봇', company: '기업 홈페이지', suwon: '수원시 복지민원 검색', ukkikki: 'Ukkikki', grabpic: 'GrabPic', yutnori: '밀정 윷놀이' };
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
  const navigation = [ ['resume', './index.html', '이력서'], ['career', './career.html', '경력기술서'], ['projects', './projects.html', '프로젝트'] ];
  const header = `<a class="skip-link" href="#main">본문 바로가기</a><header class="site-header"><div class="header-inner"><a class="brand" href="./index.html" aria-label="양성규 이력서"><strong>양성규</strong><span>Full Stack Developer</span></a><nav class="primary-nav" aria-label="주 메뉴">${navigation.map(([id, url, label]) => `<a href="${url}"${activePage === id ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav></div></header>`;
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
      <section class="resume-section" id="experience">${sectionHeading('경력', 'Experience')}<article class="resume-row"><div class="row-meta"><h3>${escape(content.career.company)}</h3><p class="numeric">${escape(content.career.period)}</p><p>연구원 · 정규직</p></div><div class="row-body"><p class="position">웹 풀스택 개발자</p><p>${content.career.summaryHtml}</p><ul class="simple-list">${content.career.details.map(item => `<li>${escape(item.title)}</li>`).join('')}</ul><a class="text-link" href="./career.html">경력기술서 보기 <span aria-hidden="true">→</span></a></div></article></section>
      <section class="resume-section" id="projects">${sectionHeading('주요 프로젝트', 'Selected Projects', '<a class="heading-link" href="./projects.html">전체 8개 보기 →</a>')}${selected.map(resumeProject).join('')}</section>
      <section class="resume-section" id="skills">${sectionHeading('기술 스택', 'Skills')}<dl class="skill-list">${content.skills.map(group => `<div><dt>${escape(group.label)}</dt><dd>${tokens(group.items)}</dd></div>`).join('')}</dl></section>
      <section class="resume-section" id="education">${sectionHeading('학력·활동', 'Education & Activities')}${education}</section>
      <section class="contact-section" id="contact">${sectionHeading('연락처', 'Contact')}<p>채용이나 협업에 관한 연락은 이메일로 부탁드립니다.</p>${contact()}</section>
      <div class="document-next"><p>프로젝트별 담당 업무를 더 자세히</p><a href="./career.html">경력기술서 읽기 →</a></div>`;
    return shell('이력서', [['about', '소개'], ['experience', '경력'], ['projects', '주요 프로젝트'], ['skills', '기술 스택'], ['education', '학력·활동'], ['contact', '연락처']], body);
  }

  function career() {
    const work = content.projects.filter(project => project.kind === 'work');
    const body = `<div class="page-intro"><p class="page-kicker">WORK EXPERIENCE</p><h1>경력기술서</h1><p>AI 챗봇·지식관리 서비스의 웹 개발과 배포 경험입니다.</p></div><section class="company-overview" id="company-overview"><header class="company-heading"><h2>${escape(content.career.company)}</h2><p class="numeric">${escape(content.career.period)}</p></header><p class="position">${escape(content.career.position)}</p><p class="company-summary">${content.career.summaryHtml}</p>${details(content.career.details)}</section>${work.map(project => `<article class="career-project" id="${project.id}"><p class="page-kicker">${escape(projectKind(project))}</p><h2>${escape(project.name)}</h2><div class="project-metadata"><span class="numeric">${escape(project.period)}</span><a href="${projectUrl(project)}">프로젝트 상세 ↗</a></div><p class="project-description">${escape(project.description)}</p><h3 class="subheading">담당 업무</h3>${details(project.details)}<dl class="tech-detail"><dt>사용 기술</dt><dd>${tokens(project.skills)}</dd></dl></article>`).join('')}<div class="document-next"><p>업무 프로젝트와 SSAFY 팀 프로젝트</p><a href="./projects.html">프로젝트 전체 보기 →</a></div>`;
    return shell('경력기술서', [['company-overview', content.career.company], ...work.map(project => [project.id, shortNames[project.id]])], body);
  }

  function projects() {
    const body = `<div class="page-intro"><p class="page-kicker">PROJECTS</p><h1>프로젝트</h1><p>업무와 팀 프로젝트에서 직접 맡은 개발 내용을 정리했습니다.</p></div><div class="project-toolbar"><div class="project-filters" aria-label="프로젝트 종류">${[['all', '전체', 8], ['work', '업무', 5], ['team', '팀', 3]].map(([id, label, count]) => `<button type="button" data-filter="${id}" aria-pressed="${id === 'all'}">${label}<span>${count}</span></button>`).join('')}</div><p class="project-count" aria-live="polite">8개 프로젝트</p></div><div class="project-index">${content.projects.map(project => `<article class="project-index-row" id="project-${project.id}" data-kind="${project.kind}"><p class="index-meta"><span class="kind-label">${escape(projectKind(project))}</span><span>${escape(organization(project))}</span><span class="numeric">${escape(project.period)}</span></p><h2><a href="${projectUrl(project)}">${escape(project.name)}</a></h2><p class="index-description">${escape(project.description)}</p><p class="compact-tech">${project.skills.map(escape).join(' · ')}</p><a class="text-link" href="${projectUrl(project)}">프로젝트 상세 보기 <span aria-hidden="true">→</span></a><a class="project-arrow" href="${projectUrl(project)}" aria-label="${escape(project.name)} 상세 보기">↗</a></article>`).join('')}</div>`;
    return shell('프로젝트', content.projects.map(project => [`project-${project.id}`, shortNames[project.id]]), body);
  }

  function projectDetail() {
    const project = content.projects.find(item => item.id === new URLSearchParams(location.search).get('id'));
    if (!project) return shell('프로젝트', [['main', '프로젝트']], '<div class="page-intro"><h1>프로젝트를 찾을 수 없습니다.</h1><p><a class="text-link" href="./projects.html">프로젝트 목록으로 돌아가기 →</a></p></div>');
    document.title = `${shortNames[project.id]} · 양성규 | 포트폴리오`;
    const index = content.projects.indexOf(project);
    const previous = content.projects[index - 1];
    const next = content.projects[index + 1];
    const body = `<nav class="breadcrumb" aria-label="현재 위치"><a href="./projects.html">프로젝트</a><span aria-hidden="true">/</span><span>${escape(shortNames[project.id])}</span></nav><section class="detail-intro" id="overview"><p class="page-kicker">${escape(projectKind(project))}</p><h1>${escape(project.name)}</h1><div class="project-metadata"><span class="numeric">${escape(project.period)}</span><span>${escape(organization(project))}</span></div><p class="project-description">${escape(project.description)}</p></section><section class="detail-section" id="responsibilities"><h2>담당 업무</h2>${details(project.details)}</section><section class="detail-section" id="technologies"><h2>사용 기술</h2><p class="skill-tokens">${tokens(project.skills)}</p></section>${project.recordLink ? `<section class="detail-section" id="record"><h2>프로젝트 기록</h2><a class="record-link" href="${escape(project.recordLink)}" target="_blank" rel="noopener noreferrer">2024 프로젝트 기록 보기 ↗</a></section>` : ''}<nav class="project-pagination" aria-label="다른 프로젝트">${previous ? `<a class="previous-project" href="${projectUrl(previous)}"><span>← 이전 프로젝트</span>${escape(shortNames[previous.id])}</a>` : ''}${next ? `<a class="next-project" href="${projectUrl(next)}"><span>다음 프로젝트 →</span>${escape(shortNames[next.id])}</a>` : ''}</nav>`;
    return shell('프로젝트 상세', [['overview', '개요'], ['responsibilities', '담당 업무'], ['technologies', '사용 기술'], ...(project.recordLink ? [['record', '프로젝트 기록']] : [])], body);
  }

  app.innerHTML = ({ resume, career, projects, project: projectDetail }[page] || resume)();
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
