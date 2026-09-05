/* ==========================================================================
   CONFIG — edit content here. No HTML/CSS editing needed for new entries.
   ========================================================================== */

const CONFIG = {

  // Cycles inside the hero "terminal" typewriter. Add/remove strings freely.
  typewriterPhrases: [
    "Game Design",
    "Roblox Studio",
    "Luau",
    "Python",
    "AI",
    "Machine Learning"
  ],

  // Education / course history, rendered as a build-log list (newest first).
  // Duplicate the object below to add an entry — no fields are optional.
    timeline: [
        // SEKOLAH
        {
        type: "sekolah",           // "kursus" atau "sekolah"
        tag: "2026 — sekarang",
        title: "SMA Negeri 1 Depok",
        desc: "Hasil dari usaha di masa SMP, lanjut fokus ke coding & kompetisi untuk membangun portfolio."
        },
        {
        type: "sekolah",           // "kursus" atau "sekolah"
        tag: "2023 — 2026",
        title: "SMP Negeri 2 Depok",
        desc: "Mulai serius ikut kompetisi coding, terutama di bidang game development."
        },
        {
        type: "sekolah",           // "kursus" atau "sekolah"
        tag: "2017 — 2023",
        title: "SD Mardi Yuana Depok",
        desc: "Mulai tertarik dunia digital dikelas 4, dimulai dari membuat game di PowerPoint, juga animasi menggunakan Pivot dan Code.org."
        },
        {
        type: "sekolah",           // "kursus" atau "sekolah"
        tag: "2015 — 2017",
        title: "TK Siloam Depok",
        desc: "Belum kepikiran bikin game, karena makanan diminta orang aja masih suka nangis."
        },
        {
        type: "sekolah",           // "kursus" atau "sekolah"
        tag: "2014 — 2015",
        title: "BIMBA AIUEO",
        desc: 'Jangankan membuat coding, membaca saja aku sulit. Aku baru lancar ini "BDG.. BDG.. KMPSY"'
        },


        // KURSUS
        {
        type: "kursus",
        tag: "2026 - sekarang",
        title: "Timedoor Academy — AI Developer",
        desc: "Kursusnya gratis, dapat Timedoor Scholarship pemenang lomba. Pendalaman materi AI dan machine learning dengan Python."
        },
        {
        type: "kursus",
        tag: "2024",
        title: "Codero — GDevelpop",
        desc: "Kursusnya gratis, dapat Codero Scholarship pemenang lomba. Dasar game development dengan GDevelop."
        },
        {
        type: "kursus",
        tag: "2023",
        title: "Algorithmics Indonesia — Python Start & Python Pro 2",
        desc: "Dasar Python sampai Advanced Python. PyQt5, Kivy, PyGames, Pandas, dll."
        },
        {
        type: "kursus",
        tag: "2022",
        title: "Heztek Indonesia — Basic HTML, & CSS",
        desc: "Dasar HTML & CSS, membuat website sederhana."
        },
        {
        type: "kursus",
        tag: "2021",
        title: "Empire Code Indonesia — Roblox Studio",
        desc: "Dasar Roblox Studio, membuat game sederhana di Roblox, dan seterusnya dipelajari otodidak."
        },
        {
        type: "kursus",
        tag: "2021",
        title: "Programmer Cilik oleh Sekolah.mu — Code.org & Scratch",
        desc: "Awal dari semua perjalanan belajar coding. Menggunakan Code.org dan dasar Scratch."
        },
        {
        type: "kursus",
        tag: "2019",
        title: "Sekolah Robotika Hypertech — Dasar Robotik dengan Lego",
        desc: "Hobi main Lego, lalu belajar membuat Lego yang bisa bergerak. Tapi terhenti karena pandemi Covid-19."
        },
        // { type: "kursus", tag: "...", title: "...", desc: "..." },
        // { type: "sekolah", tag: "...", title: "...", desc: "..." },
    ],

    
/*
    ___        __    _                                     __      
   /   | _____/ /_  (_)__ _   _____  ____ ___  ___  ____  / /______
  / /| |/ ___/ __ \/ / _ \ | / / _ \/ __ `__ \/ _ \/ __ \/ __/ ___/
 / ___ / /__/ / / / /  __/ |/ /  __/ / / / / /  __/ / / / /_(__  ) 
/_/  |_\___/_/ /_/_/\___/|___/\___/_/ /_/ /_/\___/_/ /_/\__/____/  
                                                                   
*/
  // Achievements. `rank` controls the corner badge color: "gold" | "silver" | "bronze" | "" (default purple).
  // `category` is used by the filter tabs above the grid — reuse a category string to group entries.
  achievements: [
    {
      rank: "silver",
      category: "Ai",
      title: "KodioKids Independence Tech Competition 2026",
      organizer: "KodioKids",
      location: "Bekasi, Jawa Barat",
      desc: "Juara 2 kategori Ai Poster challenge."
      //certUrl: "assets/sertifikat/example.png"
    },
    {
      rank: "EX",
      category: "Ai",
      title: "#JuaraVibeCoding",
      organizer: "Google Developer Groups",
      location: "Online",
      desc: "Pengalaman berpartisipasi pada event #JuaraVibeCoding dari Google Developer Groups. Membuat Web App dengan Google Ai Studio dan Google Cloud Platform.",
      certUrl: "assets/sertifikat/GJVC.jpeg"
    },
    {
      rank: "silver",
      category: "Roblox Studio",
      title: "Young Coder World Cup 2025",
      organizer: "Timedoor Academy",
      location: "Online (Global Internasional)",
      desc: "Juara 2 kategori Game Maker Intermediate tingkat internasional.",
      certUrl: "assets/sertifikat/YCWCInter2nd.png"
    },
    {
      rank: "gold",
      category: "Roblox Studio",
      title: "Young Coder World Cup 2025",
      organizer: "Timedoor Academy & EKRAF",
      location: "Jakarta Pusat, DKI Jakarta",
      desc: "Juara 1 kategori Game Maker Intermediate tingkat nasional dan lanjut ke babak internasional.",
      certUrl: "assets/sertifikat/YCWCNat1st.jpg"
    },
    {
      rank: "silver",
      category: "Roblox Studio",
      title: "Information Technology Creative Competition 2025",
      organizer: "Universitas Udayana",
      location: "Online (Nasional)",
      desc: "Juara 2 kategori Kids Game Programming SMP tingkat nasional.",
      certUrl: "assets/sertifikat/ITCCUDYNNat2nd.jpg"
    },
    {
      rank: "best story",
      category: "Roblox Studio",
      title: "Information Technology Creative Competition 2025",
      organizer: "Universitas Udayana",
      location: "Online (Nasional)",
      desc: "Alur cerita terbaik kategori Kids Game Programming SMP tingkat nasional.",
      certUrl: "assets/sertifikat/ITCCUDYNNatBestStory.jpg"
    },
    {
      rank: "bronze",
      category: "Roblox Studio",
      title: "International Environmental Coding Competition 2025 - Regional Stage",
      organizer: "Koding Next",
      location: "BSD, Banten",
      desc: "Top 3 kategori Roblox Studio tingkat regional.",
      certUrl: "assets/sertifikat/IECCReg3rd.jpg"
    },
    {
      rank: "gold",
      category: "Scratch",
      title: "Mini Scratch Competition 2025 Love My Earth",
      organizer: "Koding Next",
      location: "Online (Instagram)",
      desc: "Juara 1 animasi menggunakan Scratch memperingati Hari Bumi.",
      certUrl: "assets/sertifikat/MiniScratch1st.jpg"
    },
    {
      rank: "gold",
      category: "Roblox Studio",
      title: "Codero National Competition 2024",
      organizer: "Codero",
      location: "Bintaro, Banten",
      desc: "Juara 1 kategori Roblox Studio tingkat nasional.",
      certUrl: "assets/sertifikat/CNC24Nas1st.jpg"
    },
    {
      rank: "EX",
      category: "Roblox Studio",
      title: "Code With Me 2022",
      organizer: "Heztek Indonesia",
      location: "Online",
      desc: "Menjadi speaker pada live coding di Heztek Indonesia. Membuat game sederhana di Roblox Studio.",
      linkUrl: "https://www.youtube.com/watch?v=W6QMNns1xtY"
    },
    // { rank: "gold", category: "Web", title: "...", organizer: "...", location: "...", desc: "...", certUrl: "..." },
  ],

  // Skill chips. `level` is a short free-text label (e.g. "3+ tahun", "belajar").
  skills: [
    { name: "Roblox Studio", level: "Mahir" },
    { name: "Python", level: "Terbiasa" },
    { name: "Web Development", level: "Cukup Paham" },
    { name: "GDevelop", level: "Belajar Dasar" },
    // { name: "Python", level: "menengah" },
  ],


/*
    ____               _           __      
   / __ \_________    (_)__  _____/ /______
  / /_/ / ___/ __ \  / / _ \/ ___/ __/ ___/
 / ____/ /  / /_/ / / /  __/ /__/ /_(__  ) 
/_/   /_/   \____/_/ /\___/\___/\__/____/  
                /___/                      
 */

  // Projects for works.html.
  projects: [
    {
      title: "Hand Tracking Trend",
      desc: "Sedikit FOMO membuat trend hand tracking, bedanya ini menggunakan Touch Designer bukan edit manual.",
      image: "assets/karya/touchdesigner1.jpeg",
      link: ["nil", "nil"],
      tags: ["Touch Designer", "Hand Tracking", "Mediapipe"]
    },
    {
      title: "Hairalyze",
      desc: "Proyek vibe coding dengan Google Ai Studio dan Google Cloud Platform. Bisa menganalisis rambut dan kulit kepala, lalu memberi saran perawatan rambut. Proyek ini dibuat untuk keperluan #JuaraVibeCoding 2026. Walau tidak lolos Top 100, ini tetap menjadi pengalaman berharga untuk belajar AI Studio dan konfiguraasi dengan Google Cloud.",
      image: "assets/karya/GJVC.jpeg",
      link: ["Link Demo Video", "https://www.linkedin.com/posts/gilbertus-malvin-purwijaya_juaravibecoding-jvc-activity-7466824843804499968--RhY?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"],
      tags: ["Ai Studio", "Google Cloud"]
    },
    {
      title: "Working Calculator Model",
      desc: "Mencoba membuat model kalkulator di Roblox Studio yang bisa dipakai berhitung.",
      image: "assets/karya/rblxcalc.jpeg",
      link: ["nil", "nil"],
      tags: ["Roblox Studio", "Game Development", "Luau"]
    },
    {
      title: "Mediapipe Digital Mouse",
      desc: "Bisa menggerakkan dan menekan cursor dengan gerakan tangan.",
      image: "assets/karya/pydigitalmouse.jpeg",
      link: ["nil", "nil"],
      tags: ["Python", "Hand Tracking", "Mediapipe"]
    },
    {
      title: "Mediapipe Hand Tracking Test",
      desc: "Mencoba hand tracking dengan Mediapipe, baru bisa memindahkan kotak di layar dengan gerakan tangan.",
      image: "assets/karya/pymediapipetest.jpeg",
      link: ["nil", "nil"],
      tags: ["Python", "Hand Tracking", "Mediapipe"]
    },
    {
      title: "Shift at The Smart Zoo",
      desc: "Game simulasi bekerja di kebun binatang modern dengan AI Assistant, yang akan membantu memberi arahan saat kita kerja. Tapi dengan munculnya kejadian yang menyuruh kita memutuskan mau tetap ikuti saran AI atau dari hati kita sendiri. Game ini dulu dibuat untuk keperluan YCWC 2025.",
      image: "https://tr.rbxcdn.com/180DAY-55b3eeb2835ac07e2cf272232fea3db7/768/432/Image/Webp/noFilter",
      link: ["Link Roblox", "https://www.roblox.com/games/86723143240397/Shift-at-the-Smart-Zoo"],
      tags: ["Roblox Studio", "Game Development", "Luau"]
    },
    {
      title: "Technoguardians: Guardians of the Grid",
      desc: "Game cerita berlatar di future era, berperan sebagai polisi digital di kota kecil dan melaksanakan misi disana. Game ini dulu dibuat untuk keperluan ITCC Udayana 2025. Proyeknya menang juara 2 tingkat nasional dan alur cerita terbaik.",
      image: "https://tr.rbxcdn.com/180DAY-8b3450a40013ffde71bf3115431fa652/768/432/Image/Webp/noFilter",
      link: ["Link Roblox", "https://www.roblox.com/games/99556333273088/Technoguardians-Guardians-of-the-Grid"],
      tags: ["Roblox Studio", "Game Development", "Luau"]
    },
    {
      title: "Little Care",
      desc: "Animasi pendek tentang pentingnya menjaga lingkungan. Dulu dibuat untuk lomba Kids Hackathon 2025 dari educourse.id, proyeknya tidak lolos :(",
      image: "assets/karya/littlecarescratch.png",
      link: ["Link Scratch", "https://scratch.mit.edu/projects/1230849040/"],
      tags: ["Scratch", "Animation"]
    },
    {
      title: "Don't Wait for Tomorrow",
      desc: "Animasi pendek untuk memperingati hari bumi. Dulu dibuat untuk lomba Mini Scratch Competition 2025 dari Koding Next, proyeknya menang juara 1.",
      image: "assets/karya/dontwaitfortomorrowscratch.png",
      link: ["Link Scratch", "https://scratch.mit.edu/projects/1160915075/"],
      tags: ["Scratch", "Animation"]
    },
    {
      title: "Frozen Step",
      desc: "Game eksplorasi di Antartika, menjelajah gua, gunung, dan kawasan-kawasan yang ada di Antaratika. Game ini dulu dibuat untuk keperluan CNC 2024. Proyeknya menang juara 1 tingkat nasional.",
      image: "https://tr.rbxcdn.com/180DAY-e037754cc2c44fcc82bf92be59badb93/768/432/Image/Webp/noFilter",
      link: ["Link Roblox", "https://www.roblox.com/games/101469570508709/Frozen-Step"],
      tags: ["Roblox Studio", "Game Development", "Luau"]
    },
    {
      title: "Perpustakaan Pintar SMPN 2 Depok",
      desc: "Sebuah proyek website untuk mempermudah siswa dalam mengakses dan melihat koleksi buku perpustakaan SMPN 2 Depok. Website ini dibuat untuk keperluan Olimpiade Penelitian Siswa Indonesia (OPSI) 2025, tetapi sayangnya tidak lolos. Walau begitu, ini tetap menajdi pengalaman berharga untuk belajar web development.",
      image: "assets/karya/smartlibrary.png",
      link: ["Link Dokumen", "https://drive.google.com/file/d/1Ufs1lbD1_R7gk0TBru3BtS459urbahf4/view?usp=sharing"],
      tags: ["Website Development", "Localhost", "Olimpiade Penelitian Siswa Indonesia"]
    },
    {
      title: "V Nextbots",
      desc: "Game sandbox dikejar Nextbot, trend pada maasanya. Dengan map luas, bisa dijelajah dan menyimpan easteregg.",
      image: "https://tr.rbxcdn.com/180DAY-af9b4dce8e0c518eac3429989fb19d60/768/432/Image/Png/noFilter",
      link: ["Link Roblox", "https://www.roblox.com/games/11868335773/V-Nextbots"],
      tags: ["Roblox Studio", "Game Development", "Luau"]
    },
    {
      title: "Python Minecraft",
      desc: "Game Minecraft tapi di re-create pake python. Perbedaanya yaitu cuma ini simplifiednya, yaa udah gitu aja sih, cuma buat latihan python aja.",
      image: "assets/karya/minecraftpython.png",
      link: ["nil", "nil"],
      tags: ["Python", "Game Development", "Ursina"]
    },
    {
      title: "Space Invanders",
      desc: "Game 2D tembak-tembakan diluar angkasa dengan pesawat tempur.",
      image: "assets/karya/spaceinvanders.png",
      link: ["nil", "nil"],
      tags: ["Python", "Game Development", "PyGame"]
    },
    {
      title: "Python Ping Pong",
      desc: "Game pingpong 2 pemain. Up & Down arrow untuk player 1, dan W & S untuk player 2.",
      image: "assets/karya/pingpongpython.png",
      link: ["nil", "nil"],
      tags: ["Python", "Game Development", "PyGame"]
    },
    // { title: "...", desc: "...", image: "...", link: "...", tags: ["..."] },
  ],
  
    // Foto strip di homepage. Tiap kolom scroll sendiri ("up" atau "down"),
  // dan setiap gambar di sini harus unik — jangan ada yang sama di kolom lain.
  galleryStrip: [
    { direction: "up", images: ["assets/foto/ycwc%20(15).jpeg", "assets/foto/aq.jpeg", "assets/foto/cnc24%20(7).jpeg"] },
    { direction: "down", images: ["assets/foto/opsi%20(2).jpeg", "assets/foto/iecc25%20(2).jpeg", "assets/foto/opsi%20(4).jpeg"] },
    { direction: "up",   images: ["assets/foto/cnc24%20(5).jpeg", "assets/foto/opsi%20(5).jpeg", "assets/foto/ycwc%20(23).jpeg"] }
    // { direction: "down", images: ["assets/foto/10.jpg", "..."] },
  ],

};



/* ==========================================================================
   RENDERERS
   ========================================================================== */

function renderTimeline() {
  const kursusEl = document.getElementById("buildlog-kursus");
  const sekolahEl = document.getElementById("buildlog-sekolah");
  if (!kursusEl || !sekolahEl) return;

  const toHTML = item => `
    <div class="log-entry reveal">
      <span class="log-tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;

  kursusEl.innerHTML = CONFIG.timeline.filter(i => i.type === "kursus").map(toHTML).join("");
  sekolahEl.innerHTML = CONFIG.timeline.filter(i => i.type === "sekolah").map(toHTML).join("");
}

function renderAchievements(filter = "Semua") {
  const el = document.getElementById("achv-grid");
  if (!el) return;
  const items = filter === "Semua"
    ? CONFIG.achievements
    : CONFIG.achievements.filter(a => a.category === filter);

  el.innerHTML = items.map(a => `
    <div class="achv-card reveal visible">
      ${a.rank ? `<span class="achv-rank ${a.rank}">${a.rank}</span>` : ""}
      <h3>${a.title}</h3>
      <p class="achv-org">${a.organizer}</p>
      <p class="achv-loc">📍 ${a.location}</p>
      <p class="achv-desc">${a.desc}</p>
      ${a.certUrl ? `<a class="cert" href="${a.certUrl}" target="_blank" rel="noopener">Lihat Sertifikat →</a>` : ""}
      ${a.linkUrl ? `<a class="link" href="${a.linkUrl}" target="_blank" rel="noopener">Lihat Video →</a>` : ""}
    </div>
  `).join("");
}

function renderFilters() {
  const row = document.getElementById("filter-row");
  if (!row) return;
  const categories = ["Semua", ...new Set(CONFIG.achievements.map(a => a.category))];
  row.innerHTML = categories.map((cat, i) => `
    <button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${cat}">${cat}</button>
  `).join("");

  row.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      row.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAchievements(btn.dataset.cat);
    });
  });
}

function renderSkills() {
  const el = document.getElementById("skills-grid");
  if (!el) return;
  el.innerHTML = CONFIG.skills.map(s => `
    <span class="skill-chip">${s.name} <span class="lvl">· ${s.level}</span></span>
  `).join("");
}

function renderProjects() {
  const el = document.getElementById("works-grid");
  if (!el) return;
  el.innerHTML = CONFIG.projects.map(p => {
    const [label, url] = p.link;
    const linkHTML = label === "nil"
      ? ""
      : `<a class="project-link" href="${url}" target="_blank" rel="noopener">${label} →</a>`;

    return `
      <article class="project-card reveal visible">
        <div class="project-img"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          ${linkHTML}
          <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderGalleryStrip() {
  const el = document.getElementById("gallery-track");
  if (!el) return;
  el.innerHTML = CONFIG.galleryStrip.map(col => {
    const imgs = col.images.map(src => `<img class="gcard" src="${src}" alt="">`).join("");
    return `<div class="gcol gcol-${col.direction}"><div class="gcol-inner">${imgs}${imgs}</div></div>`;
  }).join("");
}

/* ==========================================================================
   HERO TYPEWRITER — the page's one deliberate motion moment
   ========================================================================== */

function startTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const phrases = CONFIG.typewriterPhrases;
  let i = 0, char = 0, deleting = false;

  function tick() {
    const word = phrases[i];
    el.textContent = deleting ? word.slice(0, char--) : word.slice(0, char++);

    let delay = deleting ? 45 : 85;
    if (!deleting && char === word.length + 1) { delay = 1400; deleting = true; }
    if (deleting && char === 0) { deleting = false; i = (i + 1) % phrases.length; delay = 300; }

    setTimeout(tick, delay);
  }
  tick();
}

/* ==========================================================================
   NAV — mobile drawer + scroll shadow
   ========================================================================== */

function initNav() {
  const toggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      drawer.classList.toggle("active");
    });
    drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      toggle.classList.remove("active");
      drawer.classList.remove("active");
    }));
  }
}

/* ==========================================================================
   REVEAL ON SCROLL — single restrained pass, respects reduced-motion
   ========================================================================== */

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ==========================================================================
   INIT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderFilters();
  renderAchievements();
  renderSkills();
  renderProjects();
  startTypewriter();
  initNav();
  initReveal();
  renderGalleryStrip();
});
