
// ============================================
// HIRUSHA APP STORE - MAIN SCRIPT
// ============================================

// Demo Data
const defaultApps = [
  {
    id: 1,
    name: "Nova Launcher Prime",
    version: "8.0.5",
    size: "12 MB",
    category: "Tools",
    platform: "Android",
    description: "The most customizable launcher for Android. Customize your home screen with icons, themes, and gestures.",
    image: "https://play-lh.googleusercontent.com/3wIY_1EJ6kLS_-RJam4zKKnVcw2a_ea1O9jHjD1hXvps8JPBZxJz6Jz6Jz6Jz6Jz6=w480-h960-rw",
    downloadLink: "#",
    rating: 4.8,
    downloads: 15420,
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=300&fit=crop"
    ],
    features: ["Custom icon packs", "Gesture controls", "Night mode", "Backup & restore", "Unread counts"]
  },
  {
    id: 2,
    name: "Adobe Photoshop",
    version: "2024.25.0",
    size: "2.4 GB",
    category: "Tools",
    platform: "Windows",
    description: "The world's best imaging and graphic design software. Create and enhance photographs, illustrations, and 3D artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
    downloadLink: "#",
    rating: 4.9,
    downloads: 89300,
    screenshots: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop"
    ],
    features: ["AI-powered editing", "Neural filters", "Sky replacement", "Content-aware fill", "Cloud documents"]
  },
  {
    id: 3,
    name: "Genshin Impact",
    version: "4.6.0",
    size: "28 GB",
    category: "Games",
    platform: "Android",
    description: "An open-world action RPG with breathtaking visuals and elemental combat system. Explore the fantasy world of Teyvat.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Genshin_Impact_cover.jpg/220px-Genshin_Impact_cover.jpg",
    downloadLink: "#",
    rating: 4.7,
    downloads: 245000,
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
    ],
    features: ["Open world exploration", "Elemental combat", "Co-op multiplayer", "Regular updates", "Cross-platform"]
  },
  {
    id: 4,
    name: "Visual Studio Code",
    version: "1.89.0",
    size: "85 MB",
    category: "Tools",
    platform: "Windows",
    description: "Code editing. Redefined. Free, built on open source. Runs everywhere. Debug, refactor, and version control with ease.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    downloadLink: "#",
    rating: 4.9,
    downloads: 562000,
    screenshots: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop"
    ],
    features: ["IntelliSense", "Debugging", "Git integration", "Extensions marketplace", "Terminal built-in"]
  },
  {
    id: 5,
    name: "Spotify Premium",
    version: "8.9.0",
    size: "45 MB",
    category: "Mods",
    platform: "Android",
    description: "Modified version with unlimited skips, no ads, and high-quality audio streaming. Listen to millions of songs.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
    downloadLink: "#",
    rating: 4.6,
    downloads: 32100,
    screenshots: [
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=400&h=300&fit=crop"
    ],
    features: ["No ads", "Unlimited skips", "High quality audio", "Offline mode", "Seeking enabled"]
  },
  {
    id: 6,
    name: "Minecraft Java Edition",
    version: "1.20.6",
    size: "850 MB",
    category: "Games",
    platform: "Windows",
    description: "Build anything you can imagine in this legendary sandbox game. Explore infinite worlds and survive the night.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png",
    downloadLink: "#",
    rating: 4.9,
    downloads: 178000,
    screenshots: [
      "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560419015-7c27e6ce8b9c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop"
    ],
    features: ["Infinite worlds", "Multiplayer servers", "Mod support", "Ray tracing", "Creative & Survival modes"]
  },
  {
    id: 7,
    name: "YouTube Vanced",
    version: "18.45.2",
    size: "95 MB",
    category: "Mods",
    platform: "Android",
    description: "Enhanced YouTube client with built-in ad blocker, background playback, SponsorBlock, and return dislike button.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
    downloadLink: "#",
    rating: 4.8,
    downloads: 89000,
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop"
    ],
    features: ["Ad blocking", "Background playback", "SponsorBlock", "Return dislikes", "Custom themes"]
  },
  {
    id: 8,
    name: "Microsoft Office 2024",
    version: "2404",
    size: "4.2 GB",
    category: "Tools",
    platform: "Windows",
    description: "Complete productivity suite with Word, Excel, PowerPoint, Outlook, and Teams. Work smarter with AI Copilot.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png",
    downloadLink: "#",
    rating: 4.7,
    downloads: 234000,
    screenshots: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
    ],
    features: ["AI Copilot", "Cloud collaboration", "Advanced templates", "Data analysis", "Presentation designer"]
  },
  {
    id: 9,
    name: "PUBG Mobile",
    version: "3.2.0",
    size: "1.8 GB",
    category: "Games",
    platform: "Android",
    description: "The original battle royale experience on mobile. 100 players parachute onto an island and fight to be the last one standing.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Pubg_battlegrounds_cover_art.jpg/220px-Pubg_battlegrounds_cover_art.jpg",
    downloadLink: "#",
    rating: 4.5,
    downloads: 456000,
    screenshots: [
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
    ],
    features: ["Classic battle royale", "Arena mode", "Team deathmatch", "Vehicles & weapons", "Seasonal events"]
  },
  {
    id: 10,
    name: "FL Studio Producer",
    version: "21.2.3",
    size: "1.1 GB",
    category: "Tools",
    platform: "Windows",
    description: "Complete digital audio workstation for music production. Mix, master, and produce professional tracks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/FL_Studio_20_logo.svg/1200px-FL_Studio_20_logo.svg.png",
    downloadLink: "#",
    rating: 4.8,
    downloads: 67800,
    screenshots: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop"
    ],
    features: ["Piano roll", "Mixer with effects", "VST support", "Audio recording", "Lifetime free updates"]
  },
  {
    id: 11,
    name: "CapCut Pro",
    version: "11.0.0",
    size: "180 MB",
    category: "Tools",
    platform: "Android",
    description: "All-in-one video editing app with AI features. Create stunning videos with transitions, effects, and auto-captions.",
    image: "https://play-lh.googleusercontent.com/3rj9ebrV9e7wE3ikOYd_7e0x5R6y0vWoQLsH2e6b2j9c1w8k3s7d4f5g6h7j8k9l0=w480-h960-rw",
    downloadLink: "#",
    rating: 4.7,
    downloads: 198000,
    screenshots: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop"
    ],
    features: ["AI auto-captions", "Keyframe animation", "Chroma key", "Speed curves", "Trending effects"]
  },
  {
    id: 12,
    name: "Steam",
    version: "1716584432",
    size: "2 MB",
    category: "Tools",
    platform: "Windows",
    description: "The ultimate destination for playing, discussing, and creating games. Access thousands of PC games instantly.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png",
    downloadLink: "#",
    rating: 4.6,
    downloads: 312000,
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop"
    ],
    features: ["Game store", "Library management", "Cloud saves", "Remote play", "Workshop mods"]
  }
];

// State Management
let apps = JSON.parse(localStorage.getItem('apps')) || defaultApps;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentCategory = 'All';
let currentPlatform = 'All';
let searchQuery = '';

// DOM Elements
const appGrid = document.getElementById('appGrid');
const featuredSlider = document.getElementById('featuredSlider');
const searchInput = document.getElementById('searchInput');
const toastContainer = document.getElementById('toastContainer');
const appModal = document.getElementById('appModal');
const installModal = document.getElementById('installModal');
const loader = document.getElementById('loader');


// Highlight search matches in text
function highlightMatch(text, query) {
  if (!query || !text) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<mark style="background:linear-gradient(135deg,rgba(0,242,255,0.3),rgba(189,0,255,0.3));color:#fff;padding:0 2px;border-radius:3px;font-weight:600;">$1</mark>');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function clearSearch() {
  searchQuery = '';
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = '';
    input.style.paddingRight = '1.5rem';
  }
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) {
    clearBtn.style.opacity = '0';
    clearBtn.style.visibility = 'hidden';
  }
  renderApps();
  updateSearchStats();
}

function updateSearchStats() {
  const badge = document.getElementById('searchResultBadge');
  if (!badge) return;

  let filtered = apps;
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(app => {
      return app.name.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.category.toLowerCase().includes(q) ||
        app.platform.toLowerCase().includes(q) ||
        (app.features || []).some(f => f.toLowerCase().includes(q));
    });
    badge.textContent = `${filtered.length} result${filtered.length !== 1 ? 's' : ''}`;
    badge.style.opacity = '1';
  } else {
    badge.style.opacity = '0';
  }
}


// Initialize
function init() {
  applyTheme();
  renderFeatured();
  renderApps();
  setupEventListeners();
  setupScrollReveal();
  updateStats();
  updateSearchStats();

  // Hide loader
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1500);
}

// Theme Toggle
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme();
  showToast(`Switched to ${currentTheme} mode`, 'info');
}

// Stats
function updateStats() {
  const totalApps = apps.length;
  const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);

  document.getElementById('statTotalApps').textContent = totalApps;
  document.getElementById('statDownloads').textContent = formatNumber(totalDownloads);
  document.getElementById('statUsers').textContent = '50K+';
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

// Render Featured Apps
function renderFeatured() {
  const featured = apps.slice(0, 5);
  featuredSlider.innerHTML = featured.map(app => `
    <div class="featured-card glass" onclick="openAppModal(${app.id})">
      <div class="featured-bg" style="background-image: url('${app.screenshots[0] || app.image}')"></div>
      <div class="featured-overlay">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
          <img src="${app.image}" style="width:40px;height:40px;border-radius:10px;object-fit:cover">
          <span class="platform-badge badge-${app.platform.toLowerCase()}">${app.platform}</span>
        </div>
        <div class="featured-title">${app.name}</div>
        <div class="featured-meta">
          <span>⭐ ${app.rating}</span>
          <span>⬇️ ${formatNumber(app.downloads)}</span>
          <span>${app.size}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render App Grid
function renderApps() {
  let filtered = apps;

  // Search filter (real-time, searches name, description, category, platform, features)
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(app => {
      const nameMatch = app.name.toLowerCase().includes(q);
      const descMatch = app.description.toLowerCase().includes(q);
      const catMatch = app.category.toLowerCase().includes(q);
      const platMatch = app.platform.toLowerCase().includes(q);
      const featMatch = (app.features || []).some(f => f.toLowerCase().includes(q));
      return nameMatch || descMatch || catMatch || platMatch || featMatch;
    });
  }

  // Category filter
  if (currentCategory !== 'All') {
    filtered = filtered.filter(app => app.category === currentCategory);
  }

  // Platform filter
  if (currentPlatform !== 'All') {
    filtered = filtered.filter(app => app.platform === currentPlatform);
  }

  if (filtered.length === 0) {
    appGrid.innerHTML = `
      <div class="empty-state" style="animation: fadeIn 0.4s ease">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">No apps found</div>
        <div class="empty-text">
          ${searchQuery ? `No results for "<strong>${escapeHtml(searchQuery)}</strong>". Try a different keyword.` : 'Try adjusting your filters.'}
        </div>
        ${searchQuery ? `<button class="btn btn-primary" style="margin-top:1rem" onclick="clearSearch()">Clear Search</button>` : ''}
      </div>
    `;
    return;
  }

  appGrid.innerHTML = filtered.map((app, index) => createAppCard(app, index)).join('');
}

function createAppCard(app, index) {
  const isFav = favorites.includes(app.id);
  const userRating = ratings[app.id] || 0;

  return `
    <div class="app-card glass reveal" style="animation-delay: ${index * 0.05}s" data-id="${app.id}">
      <div class="app-card-header">
        <img src="${app.image}" alt="${app.name}" class="app-icon" onerror="this.src='https://via.placeholder.com/64'">
        <div class="app-info">
          <div class="app-name">${highlightMatch(app.name, searchQuery)}</div>
          <div class="app-meta">
            <span class="platform-badge badge-${app.platform.toLowerCase()}">${app.platform}</span>
            <span>${app.version}</span>
          </div>
          <div class="app-rating">
            ${generateStars(app.rating)}
            <span style="color:var(--text-muted);margin-left:0.25rem">${app.rating}</span>
          </div>
        </div>
      </div>
      <div class="app-card-body">
        <div class="app-description">${highlightMatch(app.description, searchQuery)}</div>
      </div>
      <div class="app-card-footer">
        <span class="app-size">📦 ${app.size}</span>
        <div class="card-actions">
          <button class="btn-icon ${isFav ? 'favorited' : ''}" onclick="toggleFavorite(event, ${app.id})" title="Favorite">
            ${isFav ? '❤️' : '🤍'}
          </button>
          <button class="btn btn-primary btn-sm" onclick="downloadApp(event, ${app.id})">
            ⬇️ Download
          </button>
        </div>
      </div>
    </div>
  `;
}

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '⭐';
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars += '⭐';
    } else {
      stars += '<span style="opacity:0.3">⭐</span>';
    }
  }
  return stars;
}

// Search & Filters
function setupEventListeners() {
  // Enhanced Real-Time Search with debouncing
  if (searchInput) {
    let searchTimeout;
    const searchContainer = searchInput.closest('.search-container');

    // Add clear button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'icon-btn';
    clearBtn.id = 'searchClearBtn';
    clearBtn.innerHTML = '✕';
    clearBtn.style.cssText = 'position:absolute;right:1rem;top:50%;transform:translateY(-50%);width:28px;height:28px;font-size:0.85rem;opacity:0;visibility:hidden;transition:all 0.2s ease;';
    clearBtn.onclick = () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.opacity = '0';
      clearBtn.style.visibility = 'hidden';
      searchInput.focus();
      renderApps();
      updateSearchStats();
    };
    searchContainer.appendChild(clearBtn);

    // Add result count badge
    const resultBadge = document.createElement('div');
    resultBadge.id = 'searchResultBadge';
    resultBadge.style.cssText = 'position:absolute;right:3rem;top:50%;transform:translateY(-50%);font-size:0.75rem;color:var(--text-muted);opacity:0;transition:opacity 0.2s ease;pointer-events:none;';
    searchContainer.appendChild(resultBadge);

    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      searchQuery = val;

      // Toggle clear button
      if (val.length > 0) {
        clearBtn.style.opacity = '1';
        clearBtn.style.visibility = 'visible';
        searchInput.style.paddingRight = '5rem';
      } else {
        clearBtn.style.opacity = '0';
        clearBtn.style.visibility = 'hidden';
        searchInput.style.paddingRight = '1.5rem';
      }

      // Debounced render
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        renderApps();
        updateSearchStats();
      }, 150);
    });

    // Keyboard shortcut Ctrl/Cmd + K to focus search
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      // Escape to clear
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.style.opacity = '0';
        clearBtn.style.visibility = 'hidden';
        searchInput.style.paddingRight = '1.5rem';
        renderApps();
        updateSearchStats();
        searchInput.blur();
      }
    });
  }

  // Category pills
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      renderApps();
    });
  });

  // Platform filters
  document.querySelectorAll('.filter-chip[data-filter="platform"]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-filter="platform"]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentPlatform = chip.dataset.value;
      renderApps();
    });
  });

  // Theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

  // Modal close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  // Header scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Favorites
function toggleFavorite(e, appId) {
  e.stopPropagation();
  const index = favorites.indexOf(appId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Removed from favorites', 'info');
  } else {
    favorites.push(appId);
    showToast('Added to favorites ❤️', 'success');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderApps();
}

// Downloads
function downloadApp(e, appId) {
  e.stopPropagation();
  const app = apps.find(a => a.id === appId);
  if (!app) return;

  // Increment download counter
  app.downloads++;
  localStorage.setItem('apps', JSON.stringify(apps));

  showToast(`Starting download: ${app.name}...`, 'success');
  updateStats();

  // Trigger actual file download
  const link = app.downloadLink;
  const isRealUrl = link && link !== '#' && link.trim() !== '' && link.startsWith('http');

  if (isRealUrl) {
    // Real URL: trigger browser download
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.download = app.name.replace(/[^a-z0-9]/gi, '_') + (app.platform === 'Android' ? '.apk' : '.exe');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    // Demo/placeholder: generate a dummy installer file so user actually gets a download
    const platform = app.platform || 'Android';
    const ext = platform === 'Android' ? 'apk' : 'exe';
    const filename = `${app.name.replace(/[^a-z0-9]/gi, '_')}_v${app.version.replace(/\./g, '_')}.${ext}`;

    const fileContent = `========================================
HIRUSHA APP STORE - DOWNLOAD RECEIPT
========================================

App Name: ${app.name}
Version: ${app.version}
Platform: ${app.platform}
Size: ${app.size}
Category: ${app.category}
Rating: ${app.rating} / 5.0

Description:
${app.description}

Features:
${(app.features || []).map(f => '• ' + f).join('\n')}

----------------------------------------
Downloaded from: Hirusha App Store
Developed by: Hirusha
Date: ${new Date().toLocaleString()}
----------------------------------------

This is a demo download file generated by the Hirusha App Store.
Replace the download link in the admin panel with a real URL to
download the actual application file.

========================================`;

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename + '.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Demo file downloaded (real URL not set)', 'info');
  }

  // Show install guide after short delay
  setTimeout(() => {
    openInstallModal(app);
  }, 1200);
}

// App Modal
function openAppModal(appId) {
  const app = apps.find(a => a.id === appId);
  if (!app) return;

  const userRating = ratings[app.id] || 0;
  const isFav = favorites.includes(appId);

  document.getElementById('modalBody').innerHTML = `
    <div class="app-detail-header">
      <img src="${app.image}" class="app-detail-icon" onerror="this.src='https://via.placeholder.com/120'">
      <div class="app-detail-info">
        <div class="app-detail-name">${app.name}</div>
        <div class="app-detail-meta">
          <div class="meta-item">
            <span class="meta-label">Version</span>
            <span class="meta-value">${app.version}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Size</span>
            <span class="meta-value">${app.size}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Platform</span>
            <span class="meta-value"><span class="platform-badge badge-${app.platform.toLowerCase()}">${app.platform}</span></span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Category</span>
            <span class="meta-value">${app.category}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Downloads</span>
            <span class="meta-value">${formatNumber(app.downloads)}</span>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-primary" onclick="downloadAppFromModal(${app.id})">
            ⬇️ Download Now
          </button>
          <button class="btn btn-icon ${isFav ? 'favorited' : ''}" onclick="toggleFavoriteFromModal(event, ${app.id})">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
    <div class="app-detail-body">
      <div class="section-heading">🖼️ Screenshots</div>
      <div class="screenshots-carousel">
        ${app.screenshots.map(src => `<img src="${src}" class="screenshot" onerror="this.style.display='none'">`).join('')}
      </div>

      <div class="section-heading">✨ Features</div>
      <ul class="features-list">
        ${app.features.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <div class="section-heading">📝 Description</div>
      <div class="app-description-full">${app.description}</div>

      <div class="section-heading">⭐ Rate this app</div>
      <div class="star-rating-input" id="starRatingInput">
        ${[1,2,3,4,5].map(i => `
          <span class="star ${i <= userRating ? 'active' : ''}" onclick="rateApp(${app.id}, ${i})">★</span>
        `).join('')}
      </div>
      ${userRating > 0 ? `<p style="color:var(--text-muted);margin-top:0.5rem;font-size:0.9rem">You rated this ${userRating} stars</p>` : ''}
    </div>
  `;

  appModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
  document.body.style.overflow = '';
}

function downloadAppFromModal(appId) {
  closeModal('appModal');
  downloadApp({ stopPropagation: () => {} }, appId);
}

function toggleFavoriteFromModal(e, appId) {
  toggleFavorite(e, appId);
  openAppModal(appId); // Refresh modal
}

function rateApp(appId, rating) {
  ratings[appId] = rating;
  localStorage.setItem('ratings', JSON.stringify(ratings));

  // Update app average rating (simulated)
  const app = apps.find(a => a.id === appId);
  if (app) {
    app.rating = ((app.rating * 10 + rating) / 11).toFixed(1);
    localStorage.setItem('apps', JSON.stringify(apps));
  }

  showToast(`Rated ${rating} stars!`, 'success');
  openAppModal(appId); // Refresh
}

// Install Guide Modal
function openInstallModal(app) {
  const isAndroid = app.platform === 'Android';
  document.getElementById('installGuideBody').innerHTML = `
    <h2 style="margin-bottom:1.5rem;font-size:1.5rem">How to install ${app.name}</h2>
    <div class="guide-steps">
      ${isAndroid ? `
        <div class="guide-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Download the APK</h4>
            <p>Click the download button and wait for the file to finish downloading.</p>
          </div>
        </div>
        <div class="guide-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Allow Unknown Sources</h4>
            <p>Go to Settings > Security > Enable "Unknown Sources" to allow installation.</p>
          </div>
        </div>
        <div class="guide-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Install the App</h4>
            <p>Open the downloaded file and tap "Install". Wait for installation to complete.</p>
          </div>
        </div>
        <div class="guide-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Launch & Enjoy</h4>
            <p>Open the app from your drawer and start using it!</p>
          </div>
        </div>
      ` : `
        <div class="guide-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Download the Installer</h4>
            <p>Click the download button and save the .exe or .msi file.</p>
          </div>
        </div>
        <div class="guide-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Run as Administrator</h4>
            <p>Right-click the installer and select "Run as administrator".</p>
          </div>
        </div>
        <div class="guide-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Follow Setup Wizard</h4>
            <p>Accept the license agreement and choose installation location.</p>
          </div>
        </div>
        <div class="guide-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Launch & Enjoy</h4>
            <p>Complete installation and launch from desktop or start menu!</p>
          </div>
        </div>
      `}
    </div>
    <div style="margin-top:2rem;padding:1rem;border-radius:12px;background:linear-gradient(135deg,rgba(0,242,255,0.1),rgba(189,0,255,0.1));border:1px solid var(--glass-border)">
      <strong style="color:var(--neon-cyan)">💡 Tip:</strong> <span style="color:var(--text-secondary)">Make sure you have enough storage space (${app.size}) before installing.</span>
    </div>
  `;
  installModal.classList.add('active');
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span> ${message}`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Scroll Reveal
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Persist default apps if not already stored
if (!localStorage.getItem('apps')) {
  localStorage.setItem('apps', JSON.stringify(defaultApps));
}

// Start
init();