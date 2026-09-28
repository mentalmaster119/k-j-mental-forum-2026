/**
 * The 3rd Japan-Korea International Mental Coaching Forum 2026
 * Interactive Client Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentLang = localStorage.getItem('forum_lang') || 'en';
  let currentPhase = 'pre'; // 'pre', 'day', 'post'
  let currentFilter = 'all';

  // Elements
  const langButtons = document.querySelectorAll('.lang-btn');
  const phaseButtons = document.querySelectorAll('.phase-btn');
  const phaseBannerText = document.getElementById('phase-banner-text');
  const programTableBody = document.getElementById('program-table-body');
  const speakersGrid = document.getElementById('speakers-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('abstract-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const toastElement = document.getElementById('toast-notification');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const contactForm = document.getElementById('contact-form');

  // Initialize
  setLanguage(currentLang);
  setPhase(currentPhase);
  renderProgramTable();
  renderSpeakers();

  // Language Event Listeners
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });

  // Phase Event Listeners
  phaseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const phase = btn.getAttribute('data-phase');
      if (phase && phase !== currentPhase) {
        setPhase(phase);
      }
    });
  });

  // Speaker Filter Event Listeners
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderSpeakers();
    });
  });

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // Modal Close Events
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const t = FORUM_DATA.i18n[currentLang];
      const successMsgs = {
        en: "Thank you! Your message has been transmitted to the Forum Secretariat.",
        ko: "감사합니다! 포럼 사무국으로 문의가 정상 접수되었습니다.",
        ja: "ありがとうございます！事務局へお問い合わせが送信されました。"
      };
      showToast(successMsgs[currentLang] || successMsgs.en);
      contactForm.reset();
    });
  }

  // Back to Top
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Functions

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('forum_lang', lang);

    // Update active class on buttons
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    const dict = FORUM_DATA.i18n[lang];
    if (!dict) return;

    // Update Document Meta
    document.title = dict.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.meta.description);

    // Update Text Elements by data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const text = getNestedValue(dict, keyPath);
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n-placeholder');
      const text = getNestedValue(dict, keyPath);
      if (text !== undefined) {
        el.setAttribute('placeholder', text);
      }
    });

    // Update Phase Banner
    updatePhaseUI();

    // Re-render components with translated contents
    renderProgramTable();
    renderSpeakers();
    renderMaterials();
    renderVenueGuides();
  }

  function setPhase(phase) {
    currentPhase = phase;
    phaseButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-phase') === phase);
    });
    updatePhaseUI();
  }

  function updatePhaseUI() {
    const dict = FORUM_DATA.i18n[currentLang];
    const phaseInfo = dict.phases[currentPhase];
    if (!phaseInfo) return;

    if (phaseBannerText) {
      phaseBannerText.textContent = phaseInfo.banner;
    }

    // Hero CTAs
    const heroCta1 = document.getElementById('hero-cta-primary');
    const heroCta2 = document.getElementById('hero-cta-secondary');
    if (heroCta1) heroCta1.textContent = phaseInfo.heroCtaPrimary;
    if (heroCta2) heroCta2.textContent = phaseInfo.heroCtaSecondary;

    // Materials status notice
    const materialsStatus = document.getElementById('materials-status-note');
    if (materialsStatus) {
      materialsStatus.textContent = phaseInfo.materialsStatus;
    }
  }

  function renderProgramTable() {
    if (!programTableBody) return;
    const dict = FORUM_DATA.i18n[currentLang];
    const catDict = dict.program.categories;

    let html = '';
    FORUM_DATA.sessions.forEach(session => {
      const sessionLang = session[currentLang] || session.en;
      const categoryName = catDict[session.categoryKey] || session.categoryKey;
      const badgeClass = `badge-${session.categoryKey}`;

      html += `
        <tr>
          <td class="program-time-col">
            <span class="program-time">${session.time}</span>
          </td>
          <td>
            <span class="program-badge ${badgeClass}">${categoryName}</span>
          </td>
          <td>
            <div class="program-session-title">${sessionLang.title}</div>
            <div class="program-session-desc">${sessionLang.desc}</div>
          </td>
          <td class="program-speaker-col">
            ${sessionLang.speaker}
          </td>
        </tr>
      `;
    });
    programTableBody.innerHTML = html;
  }

  function renderSpeakers() {
    if (!speakersGrid) return;
    const dict = FORUM_DATA.i18n[currentLang];

    let filtered = FORUM_DATA.speakersList;
    if (currentFilter !== 'all') {
      filtered = FORUM_DATA.speakersList.filter(s => s.category === currentFilter);
    }

    let html = '';
    filtered.forEach(speaker => {
      const name = currentLang === 'ko' ? speaker.nameKo : (currentLang === 'ja' ? speaker.nameJa : speaker.nameEn);
      const role = currentLang === 'ko' ? speaker.roleKo : (currentLang === 'ja' ? speaker.roleJa : speaker.roleEn);
      const org = currentLang === 'ko' ? speaker.orgKo : (currentLang === 'ja' ? speaker.orgJa : speaker.orgEn);
      const topic = currentLang === 'ko' ? speaker.topicKo : (currentLang === 'ja' ? speaker.topicJa : speaker.topicEn);

      const flagText = speaker.category === 'keynote' ? 'Keynote' : (speaker.country === 'KR' ? '🇰🇷 Korea' : '🇯🇵 Japan');
      const initials = getInitials(speaker.nameEn);

      const materialBtnText = dict.speakers.btnMaterials;
      const abstractBtnText = dict.speakers.btnAbstract;

      html += `
        <div class="speaker-card" data-speaker-id="${speaker.id}">
          <div class="speaker-card-header" style="background: ${speaker.avatarBg};">
            <span class="speaker-flag-badge">${flagText}</span>
            <div class="speaker-avatar-wrap" style="background: ${speaker.avatarBg};">
              <span>${initials}</span>
            </div>
          </div>
          <div class="speaker-card-body">
            <h3 class="speaker-name">${name}</h3>
            <div class="speaker-role">${role}</div>
            <div class="speaker-org">${org}</div>
            <div class="speaker-topic-box">
              <div class="speaker-topic-label">Presentation Topic</div>
              <div class="speaker-topic-title">${topic}</div>
            </div>
            <div class="speaker-card-actions">
              <button class="btn-card-outline" onclick="openAbstractModal('${speaker.id}')">
                ${abstractBtnText}
              </button>
              <a href="${speaker.materialUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-primary">
                ${materialBtnText}
              </a>
            </div>
          </div>
        </div>
      `;
    });
    speakersGrid.innerHTML = html;
  }

  function renderMaterials() {
    const materialsContainer = document.getElementById('materials-card-grid');
    if (!materialsContainer) return;
    const dict = FORUM_DATA.i18n[currentLang];

    let html = '';
    dict.materials.cards.forEach(card => {
      const link = FORUM_DATA.driveLinks[card.linkKey] || FORUM_DATA.driveLinks.root;
      html += `
        <div class="material-card">
          <div class="material-card-icon">📂</div>
          <span class="material-card-badge">${card.badge}</span>
          <h3 class="material-card-title">${card.title}</h3>
          <p class="material-card-desc">${card.desc}</p>
          <a href="${link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.65rem 1.2rem;">
            ${card.buttonText} ↗
          </a>
        </div>
      `;
    });
    materialsContainer.innerHTML = html;

    // Folder Tree
    const treeEl = document.getElementById('drive-tree-view');
    if (treeEl) {
      treeEl.textContent = dict.materials.folderTree.join('\n');
    }
  }

  function renderVenueGuides() {
    const guidesGrid = document.getElementById('venue-guides-grid');
    if (!guidesGrid) return;
    const dict = FORUM_DATA.i18n[currentLang];

    const iconMap = {
      checkin: "🎫",
      train: "🚆",
      lunch: "🍱",
      language: "🌐",
      reception: "🥂"
    };

    let html = '';
    dict.venue.guides.forEach(g => {
      const icon = iconMap[g.icon] || "📌";
      html += `
        <div class="guide-card">
          <div class="guide-icon-wrap">${icon}</div>
          <div>
            <h4 class="guide-title">${g.title}</h4>
            <span class="guide-time-badge">${g.time}</span>
            <p class="guide-desc">${g.desc}</p>
          </div>
        </div>
      `;
    });
    guidesGrid.innerHTML = html;
  }

  // Modal Open Handler attached to window for inline onclick
  window.openAbstractModal = function(speakerId) {
    const speaker = FORUM_DATA.speakersList.find(s => s.id === speakerId);
    if (!speaker || !modalOverlay) return;

    const name = currentLang === 'ko' ? speaker.nameKo : (currentLang === 'ja' ? speaker.nameJa : speaker.nameEn);
    const org = currentLang === 'ko' ? `${speaker.orgKo} · ${speaker.roleKo}` : (currentLang === 'ja' ? `${speaker.orgJa} · ${speaker.roleJa}` : `${speaker.orgEn} · ${speaker.roleEn}`);
    const topic = currentLang === 'ko' ? speaker.topicKo : (currentLang === 'ja' ? speaker.topicJa : speaker.topicEn);
    const abstract = currentLang === 'ko' ? speaker.abstractKo : (currentLang === 'ja' ? speaker.abstractJa : speaker.abstractEn);

    document.getElementById('modal-speaker-name').textContent = name;
    document.getElementById('modal-speaker-org').textContent = org;
    document.getElementById('modal-topic-title').textContent = topic;
    document.getElementById('modal-abstract-text').textContent = abstract;

    const downloadLink = document.getElementById('modal-download-link');
    if (downloadLink) {
      downloadLink.href = speaker.materialUrl;
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3500);
  }

  function getInitials(name) {
    if (!name) return 'MF';
    const parts = name.replace('Prof.', '').trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
  }
});
