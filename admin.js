
// ============================================
// HIRUSHA APP STORE - ENHANCED ADMIN PANEL
// ============================================

const ADMIN_EMAIL = "hirushayt69@gmail.com";
const ADMIN_PASS_HASH = btoa("@#Htk0222@#");

// Default apps for reset
const DEFAULT_APPS = [
  {"id":1,"name":"Nova Launcher Prime","version":"8.0.5","size":"12 MB","category":"Tools","platform":"Android","description":"The most customizable launcher for Android. Customize your home screen with icons, themes, and gestures.","image":"https://play-lh.googleusercontent.com/3wIY_1EJ6kLS_-RJam4zKKnVcw2a_ea1O9jHjD1hXvps8JPBZxJz6Jz6Jz6Jz6Jz6=w480-h960-rw","downloadLink":"#","rating":4.8,"downloads":15420,"screenshots":["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=300&fit=crop"],"features":["Custom icon packs","Gesture controls","Night mode","Backup & restore","Unread counts"]},
  {"id":2,"name":"Adobe Photoshop","version":"2024.25.0","size":"2.4 GB","category":"Tools","platform":"Windows","description":"The world's best imaging and graphic design software. Create and enhance photographs, illustrations, and 3D artwork.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png","downloadLink":"#","rating":4.9,"downloads":89300,"screenshots":["https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop"],"features":["AI-powered editing","Neural filters","Sky replacement","Content-aware fill","Cloud documents"]},
  {"id":3,"name":"Genshin Impact","version":"4.6.0","size":"28 GB","category":"Games","platform":"Android","description":"An open-world action RPG with breathtaking visuals and elemental combat system. Explore the fantasy world of Teyvat.","image":"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Genshin_Impact_cover.jpg/220px-Genshin_Impact_cover.jpg","downloadLink":"#","rating":4.7,"downloads":245000,"screenshots":["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"],"features":["Open world exploration","Elemental combat","Co-op multiplayer","Regular updates","Cross-platform"]},
  {"id":4,"name":"Visual Studio Code","version":"1.89.0","size":"85 MB","category":"Tools","platform":"Windows","description":"Code editing. Redefined. Free, built on open source. Runs everywhere.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png","downloadLink":"#","rating":4.9,"downloads":562000,"screenshots":["https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop"],"features":["IntelliSense","Debugging","Git integration","Extensions marketplace","Terminal built-in"]},
  {"id":5,"name":"Spotify Premium","version":"8.9.0","size":"45 MB","category":"Mods","platform":"Android","description":"Modified version with unlimited skips, no ads, and high-quality audio streaming.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png","downloadLink":"#","rating":4.6,"downloads":32100,"screenshots":["https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop"],"features":["No ads","Unlimited skips","High quality audio","Offline mode","Seeking enabled"]},
  {"id":6,"name":"Minecraft Java Edition","version":"1.20.6","size":"850 MB","category":"Games","platform":"Windows","description":"Build anything you can imagine in this legendary sandbox game.","image":"https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png","downloadLink":"#","rating":4.9,"downloads":178000,"screenshots":["https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=400&h=300&fit=crop"],"features":["Infinite worlds","Multiplayer servers","Mod support","Ray tracing","Creative & Survival modes"]},
  {"id":7,"name":"YouTube Vanced","version":"18.45.2","size":"95 MB","category":"Mods","platform":"Android","description":"Enhanced YouTube client with built-in ad blocker, background playback, SponsorBlock.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png","downloadLink":"#","rating":4.8,"downloads":89000,"screenshots":["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"],"features":["Ad blocking","Background playback","SponsorBlock","Return dislikes","Custom themes"]},
  {"id":8,"name":"Microsoft Office 2024","version":"2404","size":"4.2 GB","category":"Tools","platform":"Windows","description":"Complete productivity suite with Word, Excel, PowerPoint, Outlook, and Teams.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png","downloadLink":"#","rating":4.7,"downloads":234000,"screenshots":["https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop"],"features":["AI Copilot","Cloud collaboration","Advanced templates","Data analysis","Presentation designer"]},
  {"id":9,"name":"PUBG Mobile","version":"3.2.0","size":"1.8 GB","category":"Games","platform":"Android","description":"The original battle royale experience on mobile. 100 players parachute onto an island.","image":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Pubg_battlegrounds_cover_art.jpg/220px-Pubg_battlegrounds_cover_art.jpg","downloadLink":"#","rating":4.5,"downloads":456000,"screenshots":["https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop"],"features":["Classic battle royale","Arena mode","Team deathmatch","Vehicles & weapons","Seasonal events"]},
  {"id":10,"name":"FL Studio Producer","version":"21.2.3","size":"1.1 GB","category":"Tools","platform":"Windows","description":"Complete digital audio workstation for music production.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/FL_Studio_20_logo.svg/1200px-FL_Studio_20_logo.svg.png","downloadLink":"#","rating":4.8,"downloads":67800,"screenshots":["https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop"],"features":["Piano roll","Mixer with effects","VST support","Audio recording","Lifetime free updates"]},
  {"id":11,"name":"CapCut Pro","version":"11.0.0","size":"180 MB","category":"Tools","platform":"Android","description":"All-in-one video editing app with AI features. Create stunning videos.","image":"https://play-lh.googleusercontent.com/3rj9ebrV9e7wE3ikOYd_7e0x5R6y0vWoQLsH2e6b2j9c1w8k3s7d4f5g6h7j8k9l0=w480-h960-rw","downloadLink":"#","rating":4.7,"downloads":198000,"screenshots":["https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"],"features":["AI auto-captions","Keyframe animation","Chroma key","Speed curves","Trending effects"]},
  {"id":12,"name":"Steam","version":"1716584432","size":"2 MB","category":"Tools","platform":"Windows","description":"The ultimate destination for playing, discussing, and creating games.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png","downloadLink":"#","rating":4.6,"downloads":312000,"screenshots":["https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"],"features":["Game store","Library management","Cloud saves","Remote play","Workshop mods"]}
];

// State
let apps = [];
let editingId = null;
let selectedAppIds = new Set();
let currentAdminSection = 'dashboard';

// DOM Elements
const loginView = document.getElementById('loginView');
const dashboardView = document.getElementById('dashboardView');
const loginForm = document.getElementById('loginForm');
const adminAppsTable = document.getElementById('adminAppsTable');
const addAppForm = document.getElementById('addAppForm');
const toastContainer = document.getElementById('toastContainer');

// ============================================
// AUTHENTICATION
// ============================================

function checkAuth() {
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  if (isLoggedIn) {
    showDashboard();
  } else {
    showLogin();
  }
}

function showLogin() {
  loginView.style.display = 'flex';
  dashboardView.style.display = 'none';
}

function showDashboard() {
  loginView.style.display = 'none';
  dashboardView.style.display = 'flex';
  dashboardView.classList.add('active');
  loadAllData();
  showAdminSection('dashboard');
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;

    if (!email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    const encodedInput = btoa(password);
    if (email === ADMIN_EMAIL && encodedInput === ADMIN_PASS_HASH) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      showToast('Welcome back, Hirusha! 👋', 'success');
      logActivity('login', 'Admin logged in');
      showDashboard();
    } else {
      showToast('Invalid email or password', 'error');
      loginForm.style.animation = 'shake 0.5s ease';
      setTimeout(() => loginForm.style.animation = '', 500);
    }
  });
}

function logout() {
  logActivity('logout', 'Admin logged out');
  localStorage.removeItem('isAdminLoggedIn');
  showToast('Logged out successfully', 'info');
  setTimeout(() => window.location.reload(), 500);
}

// ============================================
// DATA MANAGEMENT
// ============================================

function loadAllData() {
  apps = JSON.parse(localStorage.getItem('apps')) || DEFAULT_APPS;
  if (!localStorage.getItem('apps')) {
    localStorage.setItem('apps', JSON.stringify(DEFAULT_APPS));
    apps = [...DEFAULT_APPS];
  }
  renderDashboard();
  updateNavCounts();
  updateDataSizes();
}

function saveApps() {
  localStorage.setItem('apps', JSON.stringify(apps));
}

// ============================================
// NAVIGATION
// ============================================

function showAdminSection(section) {
  currentAdminSection = section;
  document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
  const target = document.getElementById(section + 'Section');
  if (target) target.style.display = 'block';

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[data-section="${section}"]`)?.classList.add('active');

  if (section === 'apps') { selectedAppIds.clear(); renderAdminApps(); updateBulkBar(); }
  if (section === 'dashboard') renderDashboard();
  if (section === 'reviews') renderReviews();
  if (section === 'backup') updateDataSizes();
  if (section === 'settings') loadSettings();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavCounts() {
  const appCount = apps.length;
  const reviews = getAllReviews();
  document.getElementById('navAppCount').textContent = appCount;
  document.getElementById('navReviewCount').textContent = reviews.length;
}

// ============================================
// DASHBOARD
// ============================================

function renderDashboard() {
  updateAdminStats();
  renderPlatformChart();
  renderCategoryChart();
  renderActivityFeed();
  renderTopApps();
}

function updateAdminStats() {
  const totalApps = apps.length;
  const totalDownloads = apps.reduce((sum, a) => sum + (a.downloads || 0), 0);
  const androidApps = apps.filter(a => a.platform === 'Android').length;
  const windowsApps = apps.filter(a => a.platform === 'Windows').length;
  const reviews = getAllReviews();
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  document.getElementById('adminStatApps').textContent = totalApps;
  document.getElementById('adminStatAndroid').textContent = androidApps;
  document.getElementById('adminStatWindows').textContent = windowsApps;
  document.getElementById('adminStatDownloads').textContent = formatNumber(totalDownloads);
  document.getElementById('adminStatReviews').textContent = reviews.length;
  document.getElementById('adminStatFavorites').textContent = favorites.length;
}

function renderPlatformChart() {
  const android = apps.filter(a => a.platform === 'Android').length;
  const windows = apps.filter(a => a.platform === 'Windows').length;
  const max = Math.max(android, windows, 1);

  const chart = document.getElementById('platformChart');
  if (!chart) return;

  chart.innerHTML = `
    <div class="bar-item">
      <div class="bar-value">${android}</div>
      <div class="bar" style="height: ${(android / max) * 140}px; background: linear-gradient(to top, var(--android-color), #2ed573)"></div>
      <div class="bar-label">🤖 Android</div>
    </div>
    <div class="bar-item">
      <div class="bar-value">${windows}</div>
      <div class="bar" style="height: ${(windows / max) * 140}px; background: linear-gradient(to top, var(--windows-color), #00a4ef)"></div>
      <div class="bar-label">🖥️ Windows</div>
    </div>
  `;
}

function renderCategoryChart() {
  const categories = {};
  apps.forEach(app => {
    categories[app.category] = (categories[app.category] || 0) + 1;
  });

  const container = document.getElementById('categoryChart');
  if (!container) return;

  const max = Math.max(...Object.values(categories), 1);
  const colors = ['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-pink)', 'var(--warning)', 'var(--success)'];

  container.innerHTML = Object.entries(categories).map(([cat, count], i) => {
    const pct = (count / max) * 100;
    return `
      <div style="display:flex;align-items:center;gap:0.75rem">
        <span style="font-size:0.85rem;font-weight:600;min-width:80px">${cat}</span>
        <div style="flex:1;height:8px;background:var(--bg-secondary);border-radius:4px;overflow:hidden">
          <div style="width:${pct}%;height:100%;background:${colors[i % colors.length]};border-radius:4px;transition:width 0.5s ease"></div>
        </div>
        <span style="font-size:0.85rem;font-weight:700;min-width:24px;text-align:right">${count}</span>
      </div>
    `;
  }).join('');
}

function renderActivityFeed() {
  const feed = document.getElementById('activityFeed');
  if (!feed) return;

  const activities = getActivityLog().slice(0, 8);
  if (activities.length === 0) {
    feed.innerHTML = '<div class="empty-state-small">No recent activity</div>';
    return;
  }

  const icons = { add: '✅', edit: '✏️', delete: '🗑️', login: '🔐', logout: '🚪', download: '⬇️', settings: '⚙️' };

  feed.innerHTML = activities.map(act => `
    <div class="activity-item">
      <div class="activity-icon ${act.type}">${icons[act.type] || '•'}</div>
      <div class="activity-content">
        <div class="activity-text">${act.message}</div>
        <div class="activity-time">${timeAgo(act.timestamp)}</div>
      </div>
    </div>
  `).join('');
}

function renderTopApps() {
  const list = document.getElementById('topAppsList');
  if (!list) return;

  const sorted = [...apps].sort((a, b) => (b.downloads || 0) - (a.downloads || 0)).slice(0, 5);

  if (sorted.length === 0) {
    list.innerHTML = '<div class="empty-state-small">No download data yet</div>';
    return;
  }

  list.innerHTML = sorted.map((app, i) => `
    <div class="top-app-item">
      <div class="top-app-rank">${i + 1}</div>
      <img src="${app.image}" style="width:36px;height:36px;border-radius:8px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
      <div class="top-app-info">
        <div class="top-app-name">${app.name}</div>
        <div class="top-app-meta">${app.platform} • ${app.category}</div>
      </div>
      <div class="top-app-dl">${formatNumber(app.downloads || 0)}</div>
    </div>
  `).join('');
}

// ============================================
// APPS MANAGEMENT (Enhanced Table)
// ============================================

function renderAdminApps() {
  if (!adminAppsTable) return;

  let filtered = [...apps];

  // Search
  const search = document.getElementById('adminSearchInput')?.value.toLowerCase() || '';
  if (search) {
    filtered = filtered.filter(a => a.name.toLowerCase().includes(search) || a.description.toLowerCase().includes(search));
  }

  // Platform filter
  const platform = document.getElementById('adminPlatformFilter')?.value || 'All';
  if (platform !== 'All') filtered = filtered.filter(a => a.platform === platform);

  // Category filter
  const category = document.getElementById('adminCategoryFilter')?.value || 'All';
  if (category !== 'All') filtered = filtered.filter(a => a.category === category);

  // Sort
  const sort = document.getElementById('adminSortFilter')?.value || 'newest';
  switch(sort) {
    case 'oldest': filtered.sort((a, b) => a.id - b.id); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'downloads': filtered.sort((a, b) => (b.downloads || 0) - (a.downloads || 0)); break;
    case 'rating': filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
    default: filtered.sort((a, b) => b.id - a.id);
  }

  const emptyMsg = document.getElementById('adminTableEmpty');
  if (filtered.length === 0) {
    adminAppsTable.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';

  adminAppsTable.innerHTML = filtered.map(app => {
    const isSelected = selectedAppIds.has(app.id);
    return `
      <tr>
        <td>
          <div class="checkbox-custom ${isSelected ? 'checked' : ''}" onclick="toggleSelectApp(${app.id})">
            ${isSelected ? '✓' : ''}
          </div>
        </td>
        <td>
          <div style="display:flex;align-items:center;gap:0.75rem">
            <img src="${app.image}" style="width:40px;height:40px;border-radius:8px;object-fit:cover" onerror="this.src='https://via.placeholder.com/40'">
            <div>
              <div style="font-weight:600">${app.name}</div>
              <div style="font-size:0.8rem;color:var(--text-muted)">${app.category}</div>
            </div>
          </div>
        </td>
        <td><span class="platform-badge badge-${app.platform.toLowerCase()}">${app.platform}</span></td>
        <td>${app.category}</td>
        <td>${app.version}</td>
        <td>${app.size}</td>
        <td>⭐ ${app.rating || 0}</td>
        <td>${formatNumber(app.downloads || 0)}</td>
        <td>
          <div class="table-actions">
            <button class="btn btn-sm btn-secondary" onclick="editApp(${app.id})">✏️ Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteApp(${app.id})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function filterAdminTable() {
  renderAdminApps();
}

// Bulk Selection
function toggleSelectApp(id) {
  if (selectedAppIds.has(id)) {
    selectedAppIds.delete(id);
  } else {
    selectedAppIds.add(id);
  }
  renderAdminApps();
  updateBulkBar();
}

function toggleSelectAll() {
  const visibleIds = getVisibleAppIds();
  const allSelected = visibleIds.every(id => selectedAppIds.has(id));

  if (allSelected) {
    visibleIds.forEach(id => selectedAppIds.delete(id));
  } else {
    visibleIds.forEach(id => selectedAppIds.add(id));
  }

  renderAdminApps();
  updateBulkBar();
}

function getVisibleAppIds() {
  let filtered = [...apps];
  const search = document.getElementById('adminSearchInput')?.value.toLowerCase() || '';
  if (search) filtered = filtered.filter(a => a.name.toLowerCase().includes(search) || a.description.toLowerCase().includes(search));
  const platform = document.getElementById('adminPlatformFilter')?.value || 'All';
  if (platform !== 'All') filtered = filtered.filter(a => a.platform === platform);
  const category = document.getElementById('adminCategoryFilter')?.value || 'All';
  if (category !== 'All') filtered = filtered.filter(a => a.category === category);
  return filtered.map(a => a.id);
}

function updateBulkBar() {
  const bar = document.getElementById('bulkActionsBar');
  const count = document.getElementById('selectedCount');
  if (!bar || !count) return;

  if (selectedAppIds.size > 0) {
    bar.style.display = 'flex';
    count.textContent = `${selectedAppIds.size} selected`;
  } else {
    bar.style.display = 'none';
  }
}

function bulkDelete() {
  if (!confirm(`Delete ${selectedAppIds.size} selected apps? This cannot be undone.`)) return;

  apps = apps.filter(a => !selectedAppIds.has(a.id));
  saveApps();
  selectedAppIds.clear();
  renderAdminApps();
  updateBulkBar();
  updateAdminStats();
  updateNavCounts();
  logActivity('delete', `Bulk deleted ${selectedAppIds.size} apps`);
  showToast(`Deleted ${selectedAppIds.size} apps`, 'success');
}

// ============================================
// ADD / EDIT APP
// ============================================

if (addAppForm) {
  addAppForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('appName').value.trim(),
      version: document.getElementById('appVersion').value.trim(),
      size: document.getElementById('appSize').value.trim(),
      category: document.getElementById('appCategory').value,
      platform: document.getElementById('appPlatform').value,
      description: document.getElementById('appDescription').value.trim(),
      image: document.getElementById('appImage').value.trim() || 'https://via.placeholder.com/64',
      downloadLink: document.getElementById('appDownload').value.trim() || '#',
      rating: parseFloat(document.getElementById('appRating').value) || 4.0,
      screenshots: document.getElementById('appScreenshots').value.split(',').map(s => s.trim()).filter(s => s),
      features: document.getElementById('appFeatures').value.split(',').map(s => s.trim()).filter(s => s),
      downloads: 0
    };

    if (!formData.name || !formData.version || !formData.category || !formData.platform) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    if (editingId) {
      const index = apps.findIndex(a => a.id === editingId);
      if (index > -1) {
        apps[index] = { ...apps[index], ...formData };
        logActivity('edit', `Updated app: ${formData.name}`);
        showToast('App updated successfully!', 'success');
      }
      cancelEdit();
    } else {
      const newApp = { id: Date.now(), ...formData };
      apps.push(newApp);
      logActivity('add', `Added new app: ${formData.name}`);
      showToast('App added successfully!', 'success');
    }

    saveApps();
    addAppForm.reset();
    document.getElementById('imagePreview').style.display = 'none';
    updateAdminStats();
    updateNavCounts();
    showAdminSection('apps');
  });
}

function editApp(id) {
  const app = apps.find(a => a.id === id);
  if (!app) return;

  editingId = id;
  document.getElementById('appName').value = app.name;
  document.getElementById('appVersion').value = app.version;
  document.getElementById('appSize').value = app.size;
  document.getElementById('appCategory').value = app.category;
  document.getElementById('appPlatform').value = app.platform;
  document.getElementById('appDescription').value = app.description;
  document.getElementById('appImage').value = app.image;
  document.getElementById('appDownload').value = app.downloadLink || '#';
  document.getElementById('appRating').value = app.rating || 4.0;
  document.getElementById('appScreenshots').value = (app.screenshots || []).join(', ');
  document.getElementById('appFeatures').value = (app.features || []).join(', ');

  previewImage();

  document.getElementById('formTitle').textContent = '✏️ Edit App';
  document.getElementById('formSubtitle').textContent = `Editing: ${app.name}`;
  document.getElementById('submitBtn').textContent = '💾 Update App';
  document.getElementById('cancelEditBtn').style.display = 'inline-flex';

  showAdminSection('add');
}

function cancelEdit() {
  editingId = null;
  addAppForm.reset();
  document.getElementById('imagePreview').style.display = 'none';
  document.getElementById('formTitle').textContent = '➕ Add New App';
  document.getElementById('formSubtitle').textContent = 'Fill in the details to publish a new app';
  document.getElementById('submitBtn').textContent = '➕ Add App';
  document.getElementById('cancelEditBtn').style.display = 'none';
}

function deleteApp(id) {
  const app = apps.find(a => a.id === id);
  if (!confirm(`Are you sure you want to delete "${app?.name || 'this app'}"?`)) return;

  apps = apps.filter(a => a.id !== id);
  saveApps();
  renderAdminApps();
  updateAdminStats();
  updateNavCounts();
  logActivity('delete', `Deleted app: ${app?.name}`);
  showToast('App deleted', 'info');
}

function previewImage() {
  const url = document.getElementById('appImage').value;
  const preview = document.getElementById('imagePreview');
  if (url) {
    preview.src = url;
    preview.style.display = 'block';
    preview.onerror = () => { preview.style.display = 'none'; };
  } else {
    preview.style.display = 'none';
  }
}

function previewAppFromForm() {
  const name = document.getElementById('appName').value || 'App Name';
  const desc = document.getElementById('appDescription').value || 'No description';
  const img = document.getElementById('appImage').value || 'https://via.placeholder.com/120';
  const platform = document.getElementById('appPlatform').value || 'Android';
  const version = document.getElementById('appVersion').value || '1.0.0';
  const size = document.getElementById('appSize').value || '0 MB';
  const rating = document.getElementById('appRating').value || 4.0;

  document.getElementById('previewModalBody').innerHTML = `
    <div style="text-align:center;margin-bottom:1.5rem">
      <img src="${img}" style="width:100px;height:100px;border-radius:20px;object-fit:cover;margin-bottom:1rem" onerror="this.src='https://via.placeholder.com/100'">
      <h2 style="font-size:1.5rem;font-weight:800">${name}</h2>
      <span class="platform-badge badge-${platform.toLowerCase()}" style="margin-top:0.5rem;display:inline-block">${platform}</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:1.5rem;text-align:center">
      <div><div style="font-size:0.75rem;color:var(--text-muted)">Version</div><div style="font-weight:700">${version}</div></div>
      <div><div style="font-size:0.75rem;color:var(--text-muted)">Size</div><div style="font-weight:700">${size}</div></div>
      <div><div style="font-size:0.75rem;color:var(--text-muted)">Rating</div><div style="font-weight:700">⭐ ${rating}</div></div>
    </div>
    <p style="color:var(--text-secondary);line-height:1.6">${desc}</p>
    <div style="margin-top:1.5rem;text-align:center">
      <span style="font-size:0.85rem;color:var(--text-muted)">👁️ This is a preview of how the app card will look</span>
    </div>
  `;
  document.getElementById('previewModal').classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

// ============================================
// REVIEWS MANAGEMENT
// ============================================

function getAllReviews() {
  const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
  const reviews = [];
  Object.entries(ratings).forEach(([appId, rating]) => {
    const app = apps.find(a => a.id == appId);
    if (app) {
      reviews.push({ appId: parseInt(appId), appName: app.name, rating, platform: app.platform, timestamp: Date.now() - Math.random() * 86400000 * 30 });
    }
  });
  return reviews;
}

function renderReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  let reviews = getAllReviews();

  const search = document.getElementById('reviewSearchInput')?.value.toLowerCase() || '';
  if (search) reviews = reviews.filter(r => r.appName.toLowerCase().includes(search));

  const sort = document.getElementById('reviewSort')?.value || 'newest';
  if (sort === 'highest') reviews.sort((a, b) => b.rating - a.rating);
  else if (sort === 'lowest') reviews.sort((a, b) => a.rating - b.rating);
  else reviews.sort((a, b) => b.timestamp - a.timestamp);

  if (reviews.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding:4rem 2rem;text-align:center">
        <div style="font-size:3rem;margin-bottom:1rem">⭐</div>
        <div style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">No reviews yet</div>
        <div style="color:var(--text-muted)">User ratings will appear here once submitted from the store.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div style="display:flex;align-items:center;gap:0.75rem">
          <span class="review-app-tag">
            <span class="platform-badge badge-${r.platform.toLowerCase()}" style="font-size:0.7rem;padding:0.15rem 0.4rem">${r.platform}</span>
            ${r.appName}
          </span>
        </div>
        <div class="review-stars">${'⭐'.repeat(r.rating)}${'<span style="opacity:0.3">⭐</span>'.repeat(5 - r.rating)}</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:0.85rem;color:var(--text-muted)">Rated ${timeAgo(r.timestamp)}</span>
        <button class="btn btn-sm btn-danger" onclick="deleteReview(${r.appId})">🗑️ Remove</button>
      </div>
    </div>
  `).join('');
}

function filterReviews() {
  renderReviews();
}

function deleteReview(appId) {
  const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
  delete ratings[appId];
  localStorage.setItem('ratings', JSON.stringify(ratings));
  renderReviews();
  updateAdminStats();
  updateNavCounts();
  showToast('Review removed', 'info');
}

// ============================================
// SETTINGS
// ============================================

function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('storeSettings')) || {};
  document.getElementById('settingStoreName').value = settings.storeName || 'Hirusha App Store';
  document.getElementById('settingDevName').value = settings.devName || 'Hirusha';
  document.getElementById('settingEmail').value = settings.email || 'hirushayt69@gmail.com';
  document.getElementById('settingTagline').value = settings.tagline || 'Premium Apps for Android & Windows PC';
  document.getElementById('settingTheme').value = settings.theme || 'dark';
  document.getElementById('settingAccent').value = settings.accent || 'cyan';
  document.getElementById('settingShowDownloads').checked = settings.showDownloads !== false;
  document.getElementById('settingYoutube').value = settings.youtube || '';
  document.getElementById('settingTelegram').value = settings.telegram || '';
  document.getElementById('settingGithub').value = settings.github || '';
}

function saveSettings() {
  const settings = {
    storeName: document.getElementById('settingStoreName').value,
    devName: document.getElementById('settingDevName').value,
    email: document.getElementById('settingEmail').value,
    tagline: document.getElementById('settingTagline').value,
    theme: document.getElementById('settingTheme').value,
    accent: document.getElementById('settingAccent').value,
    showDownloads: document.getElementById('settingShowDownloads').checked,
    youtube: document.getElementById('settingYoutube').value,
    telegram: document.getElementById('settingTelegram').value,
    github: document.getElementById('settingGithub').value
  };
  localStorage.setItem('storeSettings', JSON.stringify(settings));
  logActivity('settings', 'Updated store settings');
  showToast('Settings saved successfully!', 'success');
}

// ============================================
// BACKUP & DATA
// ============================================

function updateDataSizes() {
  const getSize = (key) => {
    const data = localStorage.getItem(key) || '';
    const bytes = new Blob([data]).size;
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  document.getElementById('dataSizeApps').textContent = getSize('apps');
  document.getElementById('dataSizeReviews').textContent = getSize('ratings');
  document.getElementById('dataSizeSettings').textContent = getSize('storeSettings');
  document.getElementById('dataSizeActivity').textContent = getSize('activityLog');
}

function exportData() {
  const data = {
    apps: JSON.parse(localStorage.getItem('apps')) || [],
    ratings: JSON.parse(localStorage.getItem('ratings')) || {},
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    settings: JSON.parse(localStorage.getItem('storeSettings')) || {},
    activityLog: JSON.parse(localStorage.getItem('activityLog')) || [],
    exportedAt: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `hirusha-store-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);

  logActivity('settings', 'Exported all store data');
  showToast('Full backup exported!', 'success');
}

function exportAppsOnly() {
  const data = {
    apps: JSON.parse(localStorage.getItem('apps')) || [],
    exportedAt: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `hirusha-apps-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast('Apps exported!', 'success');
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      const overwrite = document.getElementById('importOverwrite')?.checked;

      if (data.apps) {
        if (overwrite) {
          localStorage.setItem('apps', JSON.stringify(data.apps));
        } else {
          const existing = JSON.parse(localStorage.getItem('apps')) || [];
          const merged = [...existing, ...data.apps.filter(a => !existing.find(e => e.id === a.id))];
          localStorage.setItem('apps', JSON.stringify(merged));
        }
      }

      if (data.ratings) {
        const existing = JSON.parse(localStorage.getItem('ratings')) || {};
        const merged = overwrite ? data.ratings : { ...existing, ...data.ratings };
        localStorage.setItem('ratings', JSON.stringify(merged));
      }

      if (data.settings && overwrite) {
        localStorage.setItem('storeSettings', JSON.stringify(data.settings));
      }

      loadAllData();
      logActivity('settings', 'Imported data from file');
      showToast('Data imported successfully!', 'success');
    } catch (err) {
      showToast('Invalid JSON file', 'error');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (!confirm('Reset all apps to default demo data? This will overwrite current apps but keep settings and reviews.')) return;

  localStorage.setItem('apps', JSON.stringify(DEFAULT_APPS));
  loadAllData();
  logActivity('settings', 'Reset apps to default data');
  showToast('Reset to default apps complete', 'success');
}

function clearAllLocalStorage() {
  if (!confirm('⚠️ WARNING: This will delete ALL data including apps, reviews, settings, and activity logs. This cannot be undone!')) return;
  if (!confirm('Are you absolutely sure? Type "yes" to confirm.')) return;

  localStorage.clear();
  showToast('All data cleared. Reloading...', 'info');
  setTimeout(() => window.location.reload(), 1500);
}

// ============================================
// ACTIVITY LOG
// ============================================

function logActivity(type, message) {
  const log = JSON.parse(localStorage.getItem('activityLog')) || [];
  log.unshift({ type, message, timestamp: Date.now() });
  if (log.length > 50) log.pop();
  localStorage.setItem('activityLog', JSON.stringify(log));
}

function getActivityLog() {
  return JSON.parse(localStorage.getItem('activityLog')) || [];
}

function clearActivity() {
  localStorage.removeItem('activityLog');
  renderActivityFeed();
  showToast('Activity log cleared', 'info');
}

// ============================================
// UTILITIES
// ============================================

function formatNumber(num) {
  if (!num) return '0';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span> ${message}`;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Shake animation
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
  }
`;
document.head.appendChild(shakeStyle);

// Init
checkAuth();