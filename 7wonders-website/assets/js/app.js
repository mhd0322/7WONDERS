const $ = (s, r = document) => r.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)];
const B = document.body,
  P = B.dataset.p,
  WID = B.dataset.w,
  F = location.pathname.split("/").pop() || "index.html";
let LG = "en";
try {
  LG = localStorage.getItem("lang") || "en";
} catch (e) {}
const I = LG == "id" ? 1 : 0,
  t = (k) => (D[k] || [k, k])[I],
  IMG = (n) => `./assets/img/${n}`,
  wl = (w) => `./wonder-${w.id}.html`,
  pad = (i) => "0" + (i + 1);
const st = (w) => (Array.isArray(w.st) ? w.st[I] : w.st);
/* ---- util kelas Tailwind ---- */
const rv = (c = "", d = 0) =>
  `data-rv style="transition-delay:${d}ms" class="opacity-0 translate-y-10 transition duration-1000 ease-out ${c}"`;
const EY = "font-cinzel text-[11px] tracking-[.35em] text-champagne uppercase";
const H2 = "font-serif text-4xl md:text-6xl leading-[1.05]";
const BTN =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-b from-[#E2C892] to-champagne text-obsidian transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(198,164,107,.35)]";
const BTN2 =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-champagne/50 text-ivory transition hover:bg-champagne hover:text-obsidian hover:-translate-y-0.5";
const GL =
  "rounded-2xl border border-champagne/20 bg-midnight/60 backdrop-blur-md";
const GT =
  "bg-[linear-gradient(90deg,#C6A46B,#F1EBDD,#A96E4D,#C6A46B)] bg-[length:300%_100%] bg-clip-text text-transparent animate-shine";
const sec = (k, h, body, c = "") =>
  `<section class="py-20 md:py-28 ${c}"><div class="mx-auto max-w-7xl px-5"><div ${rv("mb-12 max-w-2xl")}><p class="${EY}">${k}</p><h2 class="${H2} mt-3">${h}</h2></div>${body}</div></section>`;
const ico = {
  ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r=".8" fill="currentColor"/>',
  fb: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  wa: '<path d="M3 21l1.600-4.600A9 9 0 1 1 8 19.600L3 21z"/><path d="M9 8c0 4 3 7 7 7l1-2-2-1-1 1c-1-.4-2-1.400-2.600-2.600l1-1-1-2z"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  tt: '<path d="M14 3v10.500a3.500 3.500 0 1 1-3-3.470M14 3c.4 2.600 2 4 5 4.200"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  srch: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
  gem: '<path d="M6 3h12l4 6-10 12L2 9z"/>',
  bank: '<path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18"/>',
  heart:
    '<path d="M12 21C5 15 3 11 3 8a4.500 4.500 0 0 1 9-1 4.500 4.500 0 0 1 9 1c0 3-2 7-9 13z"/>',
};
const svg = (k, c = "h-5 w-5") =>
  `<svg class="${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.700" stroke-linecap="round" stroke-linejoin="round">${ico[k]}</svg>`;
const logo = (h = "h-9") =>
  `<img src="${IMG("logo-mark.svg")}" alt="" class="${h} w-auto">`;
const SOC = [
  ["ig", "Instagram", "@7wonders"],
  ["fb", "Facebook", "7WONDERS"],
  ["wa", "WhatsApp", "Official WhatsApp"],
  ["x", "X", "@7wonders"],
  ["tt", "TikTok", "@7wonders"],
];

/* ---- Bumi sinematik (canvas, tekstur malam hari) ---- */
function earth(cv, o = {}) {
  const S = o.size || 640;
  cv.width = cv.height = S;
  const x = cv.getContext("2d"),
    img = new Image();
  img.onload = () => {
    const c = document.createElement("canvas");
    c.width = img.width;
    c.height = img.height;
    const g = c.getContext("2d");
    g.drawImage(img, 0, 0);
    const T = g.getImageData(0, 0, img.width, img.height).data,
      tw = img.width,
      th = img.height,
      R = (S / 2) * 0.9,
      cx = S / 2,
      N = S * S,
      dl = new Float32Array(N),
      lt = new Float32Array(N),
      sh = new Float32Array(N),
      ok = new Uint8Array(N),
      tau = o.tilt ?? 0.45,
      ct = Math.cos(tau),
      sn = Math.sin(tau);
    for (let j = 0; j < S; j++)
      for (let i = 0; i < S; i++) {
        const vx = (i - cx) / R,
          vy = -(j - cx) / R,
          r2 = vx * vx + vy * vy,
          k = j * S + i;
        if (r2 >= 1) continue;
        ok[k] = 1;
        const vz = Math.sqrt(1 - r2),
          y1 = vy * ct + vz * sn,
          z1 = -vy * sn + vz * ct;
        lt[k] =
          Math.floor(
            (0.5 - Math.asin(Math.max(-1, Math.min(1, y1))) / Math.PI) * th,
          ) * tw;
        dl[k] = (Math.atan2(vx, z1) / (2 * Math.PI)) * tw;
        sh[k] = Math.pow(vz, 0.35) * 1.35;
      }
    const im = x.createImageData(S, S),
      Dt = im.data;
    let rot = ((o.lon ?? 0) / 360) * tw,
      last = performance.now();
    const gr = x.createRadialGradient(cx, cx, R * 0.97, cx, cx, R * 1.22);
    gr.addColorStop(0, "rgba(90,160,255,.65)");
    gr.addColorStop(0.35, "rgba(60,120,255,.25)");
    gr.addColorStop(1, "rgba(60,120,255,0)");
    const fr = (n) => {
      const dt = Math.min(60, n - last);
      last = n;
      rot -= (((dt / 1000) * (o.speed ?? 6)) / 360) * tw;
      for (let k = 0; k < N; k++) {
        if (!ok[k]) continue;
        let u = (dl[k] + rot) % tw;
        if (u < 0) u += tw;
        const q = (lt[k] + (u | 0)) * 4,
          s = sh[k],
          p = k * 4;
        Dt[p] = Math.min(255, T[q] * s);
        Dt[p + 1] = Math.min(255, T[q + 1] * s);
        Dt[p + 2] = Math.min(255, T[q + 2] * s + 8);
        Dt[p + 3] = 255;
      }
      x.putImageData(im, 0, 0);
      x.globalCompositeOperation = "destination-over";
      x.fillStyle = gr;
      x.fillRect(0, 0, S, S);
      x.globalCompositeOperation = "source-over";
      requestAnimationFrame(fr);
    };
    requestAnimationFrame(fr);
  };
  img.src = window.EARTH_TEX;
}

/* ---- Navigasi, footer ---- */
const NAV = [
  ["index.html", "home"],
  ["wonders.html", "wonders", 1],
  ["map.html", "map"],
  ["timeline.html", "timeline"],
  ["stories.html", "stories"],
  ["gallery.html", "gallery"],
  ["about.html", "about", 2],
  ["contact.html", "contact", 3],
];
const SUB = {
  1: WS.map((w) => [`wonder-${w.id}.html`, w.n]),
  2: [
    ["about.html#story", t("story")],
    ["about.html#mission", t("mission")],
  ],
  3: [
    ["contact.html#social", t("social")],
    ["contact.html#message", t("message")],
  ],
};
const act = (f) =>
  F == f || (f == "wonders.html" && F.startsWith("wonder-"))
    ? "text-champagne"
    : "text-ivory/80";
const nav =
  () => `<div id="pg" class="fixed left-0 top-0 z-[90] h-[3px] w-0 bg-champagne"></div>
<nav id="nv" class="fixed inset-x-0 top-0 z-50 transition duration-500"><div class="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5">
<a href="./index.html" class="flex items-center gap-3">${logo("h-9")}<span class="font-serif text-2xl tracking-wide">7WONDERS</span></a>
<div class="hidden items-center gap-7 text-[13px] lg:flex">${NAV.map((n) => (n[2] ? `<div class="group relative"><a href="./${n[0]}" class="${act(n[0])} transition hover:text-champagne">${t(n[1])} <span class="text-[9px]">▾</span></a><div class="invisible absolute left-0 top-full min-w-[230px] translate-y-3 pt-4 opacity-0 transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><div class="${GL} grid gap-1 p-2">${SUB[n[2]].map((s) => `<a href="./${s[0]}" class="rounded-lg px-3 py-2 hover:bg-champagne/15">${s[1]}</a>`).join("")}</div></div></div>` : `<a href="./${n[0]}" class="${act(n[0])} transition hover:text-champagne">${t(n[1])}</a>`)).join("")}</div>
<div class="flex items-center gap-4"><button id="sb" aria-label="Search" class="text-ivory/80 transition hover:text-champagne">${svg("srch", "h-5 w-5")}</button>
<div class="group relative hidden sm:block"><button class="flex items-center gap-1.5 text-[13px] text-ivory/80">${svg("globe", "h-4 w-4")} ${LG.toUpperCase()} <span class="text-[9px]">▾</span></button><div class="invisible absolute right-0 top-full translate-y-3 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><div class="${GL} grid min-w-[150px] p-2 text-sm"><button data-lang="en" class="rounded-lg px-3 py-2 text-left hover:bg-champagne/15">English</button><button data-lang="id" class="rounded-lg px-3 py-2 text-left hover:bg-champagne/15">Bahasa Indonesia</button></div></div></div>
<a href="./wonders.html" class="hidden rounded-full border border-champagne/60 bg-gradient-to-b from-[#E2C892] to-champagne px-5 py-2 text-[13px] font-semibold text-obsidian transition hover:-translate-y-0.5 md:inline-flex">${t("explore")} →</a>
<button id="mb" aria-label="Menu" class="lg:hidden">${svg("menu", "h-7 w-7")}</button></div></div>
<div id="mp" class="hidden max-h-[80vh] overflow-y-auto border-t border-champagne/20 bg-obsidian/95 px-5 py-4 backdrop-blur lg:hidden"><div class="grid gap-3 text-sm">${NAV.map((n) => `<a href="./${n[0]}" class="py-1">${t(n[1])}</a>`).join("")}<div class="flex gap-3 pt-2"><button data-lang="en" class="${BTN2} !px-4 !py-1.5">EN</button><button data-lang="id" class="${BTN2} !px-4 !py-1.5">ID</button></div></div></div></nav>
<div id="so" class="fixed inset-0 z-[80] hidden items-start justify-center bg-obsidian/95 px-5 pt-32 backdrop-blur"><div class="w-full max-w-xl"><input id="si" placeholder="${t("search")}" class="w-full rounded-xl border border-champagne/40 bg-white/5 px-5 py-4 outline-none focus:border-champagne" aria-label="Search"><div id="sr" class="mt-4 grid gap-2"></div></div></div>
<div id="lb" class="fixed inset-0 z-[80] hidden items-center justify-center bg-obsidian/95 p-5"></div>
<button id="tt" aria-label="Top" class="pointer-events-none fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-champagne font-bold text-obsidian opacity-0 transition duration-500">↑</button>`;
const foot =
  () => `<footer class="relative mt-10 overflow-hidden border-t border-champagne/20"><img src="${IMG("earth.jpg")}" alt="" class="absolute inset-0 h-full w-full object-cover opacity-50"><div class="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian/30"></div>
<div class="relative mx-auto max-w-4xl px-5 pt-20 text-center"><img src="${IMG("logo-mark.svg")}" alt="" class="mx-auto h-16 animate-float"><h2 class="mt-3 font-serif text-5xl tracking-wide">7WONDERS</h2><p class="mt-2 text-sm text-ivory/70">${t("tag")}</p>
<div class="mx-auto mt-8 flex max-w-lg gap-2"><input id="nl" placeholder="${t("nl_t")}" aria-label="Email" class="min-w-0 flex-1 rounded-full border border-champagne/30 bg-white/5 px-5 py-3 text-sm outline-none focus:border-champagne"><button data-nl class="${BTN}">${t("sub")}</button></div><p id="nlm" class="mt-2 min-h-5 text-sm text-champagne"></p>
<div class="mt-6 flex justify-center gap-3">${SOC.map((s) => `<a href="./contact.html#social" title="${s[1]}" class="grid h-11 w-11 place-items-center rounded-full border border-champagne/50 transition hover:-translate-y-1 hover:bg-champagne hover:text-obsidian">${svg(s[0])}</a>`).join("")}</div>
<div class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ivory/80">${NAV.map((n) => `<a href="./${n[0]}" class="hover:text-champagne">${t(n[1])}</a>`).join("")}</div></div>
<div class="relative mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-champagne/15 px-5 py-6 text-xs text-ivory/60 sm:flex-row"><p>${t("rights")}</p><p>${t("priv")} &nbsp;|&nbsp; ${t("terms")}</p></div></footer>`;

/* ---- Komponen ---- */
const wcard = (w, i) =>
  `<a href="${wl(w)}" ${rv("group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-champagne/20", i * 70)}><img src="${IMG(w.img)}" alt="${w.n}" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-[1600ms] group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent"></div><div class="absolute bottom-0 p-5"><p class="font-cinzel text-xs text-champagne">${pad(i)} / 07</p><h3 class="mt-1 font-serif text-3xl leading-none">${w.n}</h3><p class="mt-1 text-xs text-ivory/70">${w.c[I]} · ${w.ct[I]}</p><p class="mt-3 translate-y-2 text-sm text-champagne opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">${t("explore")} →</p></div></a>`;
const TLS = [...WS].sort((a, b) => a.ys - b.ys);
const tlRow = () =>
  `<div class="overflow-x-auto pb-6"><div class="relative mx-auto flex min-w-[860px] justify-between px-4"><div class="absolute left-10 right-10 top-12 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"></div>${TLS.map((w, i) => `<a href="${wl(w)}" ${rv("group relative w-28 text-center", i * 90)}><span class="relative mx-auto block h-24 w-24 overflow-hidden rounded-full border-2 border-champagne shadow-[0_0_25px_rgba(198,164,107,.35)] transition duration-500 group-hover:scale-110"><img src="${IMG(w.img)}" alt="${w.n}" class="h-full w-full object-cover" loading="lazy"></span><span class="mx-auto mt-3 block h-2.5 w-2.5 rounded-full bg-champagne shadow-[0_0_12px_#C6A46B]"></span><p class="mt-2 font-cinzel text-xs text-champagne">${w.yr}</p><p class="mt-1 text-sm">${w.n}</p></a>`).join("")}</div></div>`;
const scard = (s, i) =>
  `<button data-story="${i}" ${rv("group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-champagne/20 text-left", i * 100)}><img src="${IMG(s.img)}" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-[1600ms] group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent"></div><div class="absolute bottom-0 p-5"><h3 class="font-serif text-2xl leading-tight">${s.t[I]}</h3><p class="mt-1 text-xs text-ivory/70">${s.min} ${t("min")} · <span class="text-champagne">${t("read")} →</span></p></div></button>`;
const GAL = [
  ...WS.map((w) => [w.img, w.n, w.cat]),
  ["columns.jpg", "Ancient Columns", "ancient"],
  ["earth.jpg", "Earth at Night", "nature"],
];
const gtile = (g, i) =>
  `<button data-lb="${i}" data-cat="${g[2]}" class="group relative block overflow-hidden rounded-2xl border border-champagne/20 transition duration-500 ${i % 4 == 0 ? "aspect-[3/4]" : "aspect-[4/3]"}"><img src="${IMG(g[0])}" alt="${g[1]}" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-[1600ms] group-hover:scale-110"><span class="absolute bottom-3 left-3 rounded-full bg-obsidian/60 px-3 py-1 text-xs backdrop-blur">${g[1]}</span></button>`;
const hdr = (k, h, p, img) =>
  `<header class="relative overflow-hidden pb-16 pt-44"><img src="${IMG(img)}" alt="" class="absolute inset-0 h-full w-full animate-kb object-cover opacity-50"><div class="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian"></div><div class="relative mx-auto max-w-7xl px-5"><p ${rv(EY)}>${k}</p><h1 ${rv("mt-4 font-serif text-5xl leading-[1.02] md:text-7xl", 100)}>${h}</h1><p ${rv("mt-4 max-w-xl text-ivory/75", 200)}>${p}</p></div></header>`;
const pins = WS.map(
  (w, i) =>
    `<span class="absolute -translate-x-1/2 -translate-y-1/2" style="left:${(w.lng + 180) / 3.6}%;top:${(90 - w.lat) / 1.8}%"><span class="absolute inset-0 -m-2 rounded-full bg-champagne/50 animate-ring" style="animation-delay:${i * 300}ms"></span><span class="relative block h-2.5 w-2.5 rounded-full bg-ivory shadow-[0_0_14px_#C6A46B]"></span></span>`,
).join("");
const stat = (i, n, l) =>
  `<div class="flex items-center gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-champagne/50 text-champagne">${svg(i, "h-5 w-5")}</span><div><p class="font-serif text-4xl leading-none" ${typeof n == "string" ? "" : 'data-c="' + n + '"'}>${typeof n == "string" ? n : 0}</p><p class="mt-1 text-xs text-ivory/70">${l}</p></div></div>`;
const SL = ["colosseum.jpg", "petra.jpg", "taj-mahal.jpg"];

const PG = {
  index: () =>
    `<header class="relative min-h-screen overflow-hidden"><div id="slides" class="absolute inset-0">${SL.map((s, i) => `<img src="${IMG(s)}" alt="" class="absolute inset-0 h-full w-full animate-kb object-cover object-[70%_center] transition-opacity duration-[1800ms] ${i ? "opacity-0" : ""}">`).join("")}</div>
<div class="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/65 to-transparent"></div><div class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50"></div>
<div class="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-24 pt-28"><div class="max-w-2xl"><p id="h0" ${rv(EY)}>${t("eyebrow")}</p><h1 ${rv("mt-5 font-serif text-[22vw] leading-[.9] sm:text-8xl md:text-9xl " + GT, 150)}>7WONDERS</h1><p ${rv("mt-5 font-serif text-3xl italic leading-tight text-champagne md:text-5xl", 300)}>${t("h1b")}</p>
<div ${rv("mt-9 flex flex-wrap items-center gap-4", 450)}><button data-go="#journey" class="group flex items-center gap-3"><span class="grid h-14 w-14 place-items-center rounded-full border border-champagne/60 transition group-hover:bg-champagne group-hover:text-obsidian">▶</span><span class="text-sm">${t("watch")}</span></button></div></div>
<div class="absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-xs lg:flex"><button data-sl="-1" class="text-champagne">⌃</button><span class="font-cinzel text-lg"><span id="sn">01</span><span class="text-ivory/50"> / 03</span></span><button data-sl="1" class="text-champagne">⌄</button></div>
<div class="absolute bottom-6 right-6 hidden items-center gap-2 text-xs text-ivory/70 sm:flex">${t("scroll")} <span class="grid h-9 w-5 place-items-start justify-center rounded-full border border-champagne/50 pt-2"><span class="h-2 w-1 rounded-full bg-champagne animate-bob"></span></span></div></div></header>
<section id="journey" class="relative overflow-hidden border-t border-champagne/15"><div class="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[.9fr_1fr_1.1fr]">
<div ${rv("relative mx-auto aspect-square w-full max-w-[320px]")}><div class="absolute -inset-3 rounded-full border border-dashed border-champagne/50 animate-spin-slow"></div><div class="absolute -inset-8 rounded-full border border-champagne/20 animate-spin-rev"></div><img src="${IMG("columns.jpg")}" alt="" class="h-full w-full rounded-full object-cover shadow-[0_0_60px_rgba(198,164,107,.25)]"></div>
<div ${rv("", 150)}><p class="${EY}">${t("tl_t")}</p><h2 class="mt-3 font-serif text-4xl leading-tight md:text-5xl">${t("intro_t")}</h2><p class="mt-4 text-sm leading-relaxed text-ivory/75">${t("intro_p")}</p><a href="./wonders.html" class="${BTN2} mt-6">${t("more")} →</a></div>
<div ${rv("", 300)}><div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">${stat("pin", 7, t("s1"))}${stat("bank", 7000, t("s2"))}${stat("heart", t("bil"), t("s3"))}</div><div class="relative mt-6 overflow-hidden rounded-xl"><img src="${IMG("world-lights.jpg")}" alt="" class="w-full" loading="lazy"><div class="absolute inset-0">${pins}</div></div></div></div></section>` +
    sec(
      t("w_t").toUpperCase(),
      t("w_t"),
      `<p ${rv("-mt-6 mb-10 max-w-xl text-ivory/70")}>${t("w_p")}</p><div class="grid grid-cols-2 gap-4 md:grid-cols-4">${WS.map(wcard).join("")}</div>`,
    ) +
    sec(
      "MAP",
      t("map_t"),
      `<div ${rv("relative overflow-hidden rounded-3xl border border-champagne/20")}><img src="${IMG("world-lights.jpg")}" alt="" class="w-full" loading="lazy"><div class="absolute inset-0">${pins}</div><div class="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent"></div><div class="absolute bottom-6 left-6 max-w-xs"><p class="text-sm text-ivory/80">${t("map_p")}</p><a href="./map.html" class="${BTN} mt-4">${t("map_b")} →</a></div></div>`,
    ) +
    sec(
      "TIMELINE",
      t("tl_t"),
      tlRow() +
        `<a href="./timeline.html" class="${BTN2} mt-6">${t("tl_b")} ↓</a>`,
    ) +
    sec(
      "STORIES",
      t("st_t"),
      `<div class="grid gap-4 md:grid-cols-3">${ST.map(scard).join("")}</div>`,
    ) +
    sec(
      "GALLERY",
      t("gl_t"),
      `<div class="grid grid-cols-2 gap-4 md:grid-cols-4">${GAL.slice(0, 8).map(gtile).join("")}</div><a href="./gallery.html" class="${BTN2} mt-8">${t("gl_b")} →</a>`,
    ),
  wonders: () =>
    hdr("THE WONDERS", t("w_t"), t("w_p"), "colosseum.jpg") +
    `<section class="mx-auto max-w-7xl px-5 pb-20"><div class="grid grid-cols-2 gap-4 md:grid-cols-4">${WS.map(wcard).join("")}</div></section>` +
    sec(
      "COMPARE",
      t("tl_t"),
      `<div ${rv(GL + " overflow-x-auto p-4")}><table class="w-full min-w-[640px] text-left text-sm"><tr class="font-cinzel text-xs text-champagne"><th class="p-3">#</th><th class="p-3">${t("wonders")}</th><th class="p-3">${t("loc")}</th><th class="p-3">${t("period")}</th><th class="p-3">${t("civ")}</th><th class="p-3">UNESCO</th></tr>${WS.map((w, i) => `<tr class="border-t border-champagne/15"><td class="p-3 text-champagne">${pad(i)}</td><td class="p-3"><a class="hover:text-champagne" href="${wl(w)}">${w.n}</a></td><td class="p-3">${w.c[I]}</td><td class="p-3">${w.yr}</td><td class="p-3">${w.civ[I]}</td><td class="p-3">${st(w)}</td></tr>`).join("")}</table></div>`,
    ),
  wonder: () => {
    const w = WS.find((v) => v.id == WID),
      i = WS.indexOf(w),
      nx = WS[(i + 1) % 7],
      f = w.f[I],
      q = (a, b) =>
        `<div><p class="${EY} !text-[10px]">${a}</p><p class="mt-1 text-sm">${b}</p></div>`;
    return (
      `<header class="relative flex min-h-[92vh] items-end overflow-hidden"><img src="${IMG(w.img)}" alt="${w.n}" class="absolute inset-0 h-full w-full animate-kb object-cover"><div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/20"></div><div class="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-transparent"></div>
<div class="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-40"><a href="./wonders.html" class="text-sm text-champagne">← ${t("back")}</a><p ${rv(EY + " mt-6")}>${pad(i)} / 07 · ${w.ct[I]}</p><h1 ${rv("mt-2 font-serif text-6xl leading-[.95] md:text-9xl", 100)}>${w.n}</h1><p ${rv("mt-3 font-serif text-3xl italic text-champagne", 200)}>${w.tag[I]}</p><p ${rv("mt-4 max-w-lg text-ivory/80", 300)}>${w.d[I]}</p>
<div ${rv(GL + " mt-8 grid grid-cols-2 gap-5 p-5 md:grid-cols-4", 400)}>${q(t("loc"), w.c[I])}${q(t("civ"), w.civ[I])}${q(t("period"), w.yr)}${q(t("status"), st(w))}</div></div></header>` +
      sec(
        t("overview"),
        w.n,
        `<div class="grid items-center gap-10 md:grid-cols-2"><p ${rv("text-lg leading-relaxed text-ivory/85")}>${w.d[I]}</p><img ${rv("aspect-[4/3] w-full rounded-2xl border border-champagne/20 object-cover")} src="${IMG(w.img)}" alt="" loading="lazy"></div>`,
      ) +
      sec(
        t("history"),
        t("history"),
        `<p ${rv("max-w-2xl text-lg leading-relaxed text-ivory/85")}>${w.h[I]}</p>`,
        "bg-midnight/40",
      ) +
      sec(
        t("arch"),
        t("arch"),
        `<p ${rv("max-w-2xl text-lg leading-relaxed text-ivory/85")}>${w.a[I]}</p>`,
      ) +
      sec(
        t("facts"),
        t("facts"),
        `<div class="grid gap-5 md:grid-cols-2">${f.map((x, k) => `<div ${rv(GL + " p-7 font-serif text-2xl leading-snug", k * 120)}>${x}</div>`).join("")}</div>`,
        "bg-midnight/40",
      ) +
      sec(
        t("loc"),
        w.c[I] + " · " + w.ct[I],
        `<div class="grid gap-6 md:grid-cols-[1.4fr_1fr]"><div id="lm" class="h-[420px] overflow-hidden rounded-2xl border border-champagne/20"></div><div ${rv(GL + " self-start p-6")}><p class="${EY}">${Math.abs(w.lat)}°${w.lat < 0 ? "S" : "N"}, ${Math.abs(w.lng)}°${w.lng < 0 ? "W" : "E"}</p><a class="${BTN2} mt-5" target="_blank" rel="noopener" href="https://www.google.com/maps?q=${w.lat},${w.lng}">${t("gmaps")} →</a></div></div>`,
      ) +
      sec(
        t("visit"),
        t("visit"),
        `<div ${rv(GL + " max-w-2xl p-7")}><p>${w.v[I]}</p><p class="mt-4 text-xs text-ivory/60">${t("tix")}</p></div>`,
        "bg-midnight/40",
      ) +
      `<a href="${wl(nx)}" class="group relative block h-80 overflow-hidden"><img src="${IMG(nx.img)}" alt="" class="absolute inset-0 h-full w-full object-cover transition duration-[1600ms] group-hover:scale-110"><div class="absolute inset-0 grid place-items-center bg-obsidian/65 text-center"><div><p class="${EY}">${t("next")}</p><p class="mt-2 font-serif text-5xl md:text-7xl">${nx.n} →</p></div></div></a>`
    );
  },
  map: () => `<section class="relative min-h-screen overflow-hidden pt-28"><img src="${IMG("stars.jpg")}" alt="" class="absolute inset-0 h-full w-full object-cover opacity-60"><div class="relative mx-auto grid max-w-7xl gap-8 px-5 pb-10 lg:grid-cols-[320px_1fr]"><div><p ${rv(EY)}>${t("map")}</p><h1 ${rv("mt-3 font-serif text-5xl leading-tight md:text-6xl", 100)}>${t("map_t")}</h1><p ${rv("mt-3 text-sm text-ivory/75", 200)}>${t("map_p")}</p><div class="mt-6 grid gap-2">${WS.map((w, i) => `<button data-fly="${i}" ${rv(GL + " flex items-center gap-3 p-2 text-left transition hover:border-champagne", i * 70)}><img src="${IMG(w.img)}" alt="" class="h-10 w-10 rounded-full border border-champagne object-cover"><span class="text-sm">${w.n}</span></button>`).join("")}</div></div>
<div class="relative"><div id="mm" class="h-[68vh] min-h-[420px] overflow-hidden rounded-3xl border border-champagne/25"></div><div id="mc" class="${GL} absolute bottom-4 left-4 right-4 z-[500] flex items-center gap-4 p-3 md:right-auto md:w-[460px]"></div><p id="cc" class="absolute bottom-4 right-4 z-[500] hidden font-cinzel text-xs text-champagne md:block">0.0000° N, 0.0000° E</p></div></div></section>`,
  timeline: () =>
    hdr(t("timeline").toUpperCase(), t("tl_t"), t("tl_p"), "columns.jpg") +
    `<section class="mx-auto max-w-7xl px-5 pb-24">${tlRow()}<div class="mt-16 grid gap-5 md:grid-cols-2">${TLS.map((w, i) => `<a href="${wl(w)}" ${rv(GL + " flex gap-4 p-4 transition hover:border-champagne", i * 80)}><img src="${IMG(w.img)}" alt="" class="h-24 w-24 shrink-0 rounded-xl object-cover"><div><p class="font-cinzel text-xs text-champagne">${w.yr}</p><h3 class="font-serif text-2xl">${w.n}</h3><p class="text-sm text-ivory/70">${w.h[I]}</p></div></a>`).join("")}</div></section>`,
  stories: () =>
    hdr(t("stories").toUpperCase(), t("st_t"), t("st_p"), "machu-picchu.jpg") +
    `<section class="mx-auto max-w-7xl px-5 pb-24"><div class="grid gap-4 md:grid-cols-3">${ST.map(scard).join("")}</div></section>`,
  gallery: () =>
    hdr(t("gallery").toUpperCase(), t("gl_t"), t("gl_p"), "taj-mahal.jpg") +
    `<section class="mx-auto max-w-7xl px-5 pb-24"><div class="mb-8 flex flex-wrap gap-2">${["all", "ancient", "modern", "nature"].map((k, i) => `<button data-cat="${i ? k : "*"}" class="rounded-full border border-champagne/40 px-5 py-2 text-sm transition hover:bg-champagne hover:text-obsidian ${i ? "" : "bg-champagne text-obsidian"}">${t(k)}</button>`).join("")}</div><div id="gg" class="grid grid-cols-2 gap-4 md:grid-cols-4">${GAL.map(gtile).join("")}</div></section>`,
  about: () =>
    `<header class="relative overflow-hidden pb-16 pt-44"><img src="${IMG("columns.jpg")}" alt="" class="absolute inset-0 h-full w-full animate-kb object-cover opacity-60"><div class="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent"></div><div id="story" class="relative mx-auto max-w-7xl px-5"><p ${rv(EY)}>${t("ab_k")}</p><h1 ${rv("mt-4 max-w-xl font-serif text-5xl leading-[1.02] md:text-7xl", 100)}>${t("ab_h")}</h1><p ${rv("mt-5 max-w-lg text-ivory/80", 200)}>${t("ab_p")}</p><div ${rv("mt-10 grid max-w-xl grid-cols-3 gap-4", 300)}>${[
      [7, t("wonders")],
      [4, "Continents"],
      [t("bil"), t("s3")],
    ]
      .map(
        (s) =>
          `<div class="${GL} p-4 text-center"><p class="font-serif text-4xl text-champagne" ${typeof s[0] == "string" ? "" : 'data-c="' + s[0] + '"'}>${typeof s[0] == "string" ? s[0] : 0}</p><p class="mt-1 text-xs text-ivory/70">${s[1]}</p></div>`,
      )
      .join("")}</div></div></header>` +
    `<section id="mission" class="mx-auto max-w-4xl px-5 py-20"><p ${rv(EY)}>${t("mission")}</p><p ${rv("mt-4 font-serif text-3xl leading-snug md:text-4xl", 100)}>${t("ab_m")}</p><p ${rv("mt-8 text-sm text-ivory/65", 200)}>${t("ab_s")}</p></section>`,
  contact:
    () => `<header class="relative min-h-screen overflow-hidden pt-28"><img src="${IMG("stars.jpg")}" alt="" class="absolute inset-0 h-full w-full object-cover"><canvas id="ce" class="pointer-events-none absolute left-1/2 top-[52vh] aspect-square w-[150vw] max-w-none -translate-x-1/2"></canvas><div class="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-transparent"></div>
<div class="relative mx-auto grid max-w-7xl gap-10 px-5 pb-48 lg:grid-cols-[1.3fr_1fr]"><div><p ${rv(EY)}>${t("contact")}</p><h1 ${rv("mt-3 font-serif text-5xl leading-[1.02] md:text-7xl", 100)}>${t("ct_t")}</h1><p ${rv("mt-4 max-w-md text-ivory/75", 200)}>${t("ct_p")}</p>
<div id="social" class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">${SOC.map((s, i) => `<a href="#" ${s[1] == "WhatsApp" ? 'title="WhatsApp number coming soon"' : ""} ${rv(GL + " flex flex-col items-center gap-2 p-4 text-center transition hover:-translate-y-1 hover:border-champagne", i * 90)}><span class="grid h-12 w-12 place-items-center rounded-full border border-champagne/60 text-champagne">${svg(s[0], "h-6 w-6")}</span><span class="text-sm font-semibold">${s[1]}</span><span class="text-xs text-ivory/60">${s[2]}</span></a>`).join("")}</div></div>
<div id="message" ${rv(GL + " grid content-start gap-4 p-6", 300)}><p class="font-serif text-2xl">${t("message")}</p><input id="fn" placeholder="${t("name")}" aria-label="${t("name")}" class="rounded-xl border border-champagne/30 bg-white/5 px-4 py-3 outline-none focus:border-champagne"><input id="fe" type="email" placeholder="${t("email")}" aria-label="${t("email")}" class="rounded-xl border border-champagne/30 bg-white/5 px-4 py-3 outline-none focus:border-champagne"><textarea id="fm" rows="4" placeholder="${t("msg")}" aria-label="${t("msg")}" class="rounded-xl border border-champagne/30 bg-white/5 px-4 py-3 outline-none focus:border-champagne"></textarea><button data-send class="${BTN} justify-center">${t("send")} →</button><p id="fx" class="min-h-5 text-sm text-champagne"></p></div></div></header>`,
  nf: () =>
    `<header class="relative grid min-h-screen place-items-center overflow-hidden px-5 text-center"><img src="${IMG("columns.jpg")}" alt="" class="absolute inset-0 h-full w-full animate-kb object-cover opacity-70"><div class="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/30 to-obsidian"></div><div class="relative"><img src="${IMG("logo-mark.svg")}" alt="" class="mx-auto h-14 animate-float"><p ${rv("mt-4 font-serif text-9xl " + GT)}>404</p><h1 ${rv("font-serif text-4xl", 100)}>${t("nf_h")}</h1><p ${rv("mx-auto mt-3 max-w-md text-sm text-ivory/75", 200)}>${t("nf_p")}</p><a href="./index.html" ${rv(BTN + " mt-8", 300)}>${t("nf_b")} →</a></div></header>`,
};

/* ---- Splash: loading -> tombol Explore the World ---- */
const splashHTML =
  () => `<div id="sp" class="fixed inset-0 z-[200] overflow-hidden bg-obsidian transition duration-[1100ms]"><img src="${IMG("stars.jpg")}" alt="" class="absolute inset-0 h-full w-full animate-fade object-cover"><canvas id="spe" class="absolute left-1/2 top-[56vh] aspect-square w-[150vw] max-w-none -translate-x-1/2 animate-fade"></canvas>
<div class="absolute left-6 top-6 flex items-center gap-2">${logo("h-7")}<span class="font-serif text-xl">7WONDERS</span></div>
<div id="sp1" class="absolute inset-x-0 top-[22vh] flex flex-col items-center gap-5 transition duration-700"><img src="${IMG("logo-mark.svg")}" alt="" class="h-20 animate-spin-slow"><div class="h-[3px] w-56 overflow-hidden rounded-full bg-white/15"><div id="spb" class="h-full w-0 bg-champagne"></div></div><p class="text-xs tracking-[.3em] text-ivory/70"><span id="spp">0%</span> · ${t("load")}</p></div>
<div id="sp2" class="pointer-events-none absolute inset-x-0 top-[12vh] flex translate-y-6 flex-col items-center px-5 text-center opacity-0 transition duration-[1400ms]"><img src="${IMG("logo-mark.svg")}" alt="" class="h-20 animate-float"><h1 class="mt-3 font-serif text-6xl tracking-wide text-champagne md:text-8xl">7WONDERS</h1><p class="mt-3 text-lg text-ivory/85 md:text-2xl">${t("tag")}</p><button id="spx" class="mt-9 inline-flex items-center gap-3 rounded-full border border-champagne/40 bg-gradient-to-b from-[#22262c] to-obsidian px-8 py-4 text-sm font-semibold text-champagne shadow-[0_0_30px_rgba(198,164,107,.25)] transition hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(198,164,107,.5)]">${t("xw")} →</button></div></div>`;

/* ---- Render ---- */
let seen = 0;
try {
  seen = sessionStorage.getItem("sp");
} catch (e) {}
const SP = P == "index" && !seen;
$("#r").innerHTML =
  (SP ? splashHTML() : "") +
  nav() +
  `<main class="transition-opacity duration-500">${(PG[P] || PG.nf)()}</main>` +
  (P == "nf" ? "" : foot());

function boot() {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.remove("opacity-0", "translate-y-10");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.1 },
  );
  $$("[data-rv]").forEach((el) => io.observe(el));
  const co = new IntersectionObserver((es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      co.unobserve(e.target);
      const n = +e.target.dataset.c,
        s = performance.now();
      (function f(q) {
        const k = Math.min(1, (q - s) / 1800);
        e.target.textContent =
          Math.round(n * (1 - Math.pow(1 - k, 3))).toLocaleString("en-US") +
          (n >= 1000 ? "+" : "");
        if (k < 1) requestAnimationFrame(f);
      })(s);
    }),
  );
  $$("[data-c]").forEach((el) => co.observe(el));
}
if (SP) {
  B.classList.add("overflow-hidden");
  earth($("#spe"), { size: 720, speed: 5, tilt: 0.5, lon: 20 });
  const s0 = performance.now();
  (function f(n) {
    const p = Math.min(100, (n - s0) / 34);
    $("#spb").style.width = p + "%";
    $("#spp").textContent = Math.floor(p) + "%";
    if (p < 100) requestAnimationFrame(f);
    else
      setTimeout(() => {
        $("#sp1").classList.add("opacity-0");
        const b = $("#sp2");
        b.classList.remove("opacity-0", "translate-y-6", "pointer-events-none");
      }, 500);
  })(s0);
  $("#spx").onclick = () => {
    try {
      sessionStorage.setItem("sp", "1");
    } catch (e) {}
    const sp = $("#sp");
    sp.classList.add("opacity-0", "scale-110", "pointer-events-none");
    setTimeout(() => {
      sp.remove();
      B.classList.remove("overflow-hidden");
    }, 1150);
    boot();
  };
} else boot();

/* ---- Interaksi umum ---- */
const nv = $("#nv"),
  sc = () => {
    nv.classList.toggle("bg-obsidian/85", scrollY > 40);
    nv.classList.toggle("backdrop-blur-xl", scrollY > 40);
    nv.classList.toggle("border-b", scrollY > 40);
    nv.classList.toggle("border-champagne/20", scrollY > 40);
    $("#pg").style.width =
      (scrollY / (document.documentElement.scrollHeight - innerHeight || 1)) *
        100 +
      "%";
    $("#tt").classList.toggle("opacity-0", scrollY < 600);
    $("#tt").classList.toggle("pointer-events-none", scrollY < 600);
  };
addEventListener("scroll", sc, { passive: true });
sc();
$("#tt").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
$("#mb").onclick = () => $("#mp").classList.toggle("hidden");
$$("[data-lang]").forEach(
  (b) =>
    (b.onclick = () => {
      try {
        localStorage.setItem("lang", b.dataset.lang);
      } catch (e) {}
      location.reload();
    }),
);
const so = $("#so"),
  si = $("#si"),
  sr = $("#sr"),
  PGS = [
    ["index.html", t("home")],
    ["wonders.html", t("wonders")],
    ["map.html", t("map")],
    ["timeline.html", t("timeline")],
    ["stories.html", t("stories")],
    ["gallery.html", t("gallery")],
    ["about.html", t("about")],
    ["contact.html", t("contact")],
  ];
$("#sb").onclick = () => {
  so.classList.remove("hidden");
  so.classList.add("flex");
  si.focus();
};
so.onclick = (e) => {
  if (e.target == so) {
    so.classList.add("hidden");
    so.classList.remove("flex");
  }
};
addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    so.classList.add("hidden");
    so.classList.remove("flex");
    $("#lb").classList.add("hidden");
    $("#lb").classList.remove("flex");
  }
});
si.oninput = () => {
  const q = si.value.toLowerCase().trim();
  const r = q
    ? [
        ...WS.filter((w) =>
          (w.n + w.c.join() + w.ct.join() + w.tag.join())
            .toLowerCase()
            .includes(q),
        ).map((w) => [`wonder-${w.id}.html`, w.n + " · " + w.c[I]]),
        ...PGS.filter((p) => p[1].toLowerCase().includes(q)),
      ]
    : [];
  sr.innerHTML = r
    .map(
      (x) =>
        `<a href="./${x[0]}" class="${GL} block px-4 py-3 hover:border-champagne">${x[1]}</a>`,
    )
    .join("");
};
$$("[data-go]").forEach(
  (b) =>
    (b.onclick = () => $(b.dataset.go).scrollIntoView({ behavior: "smooth" })),
);
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (!a || a.target || e.ctrlKey || e.metaKey || e.shiftKey) return;
  const h = a.getAttribute("href");
  if (/^(#|http|mailto)/.test(h) || h.includes("#")) return;
  e.preventDefault();
  $("main").classList.add("opacity-0");
  setTimeout(() => {
    location.href = h;
  }, 400);
});
addEventListener("pageshow", () => $("main").classList.remove("opacity-0"));
$$("[data-nl]").forEach(
  (b) =>
    (b.onclick = () => {
      $("#nlm").textContent = /\S+@\S+\.\S+/.test($("#nl").value)
        ? t("nlok")
        : t("bad");
    }),
);
$$("[data-send]").forEach(
  (b) =>
    (b.onclick = () => {
      const ok =
        $("#fn").value.trim() &&
        /\S+@\S+\.\S+/.test($("#fe").value) &&
        $("#fm").value.trim();
      $("#fx").textContent = ok ? t("ok") : t("bad");
    }),
);
const lb = $("#lb");
function openLb(h) {
  lb.innerHTML = h;
  lb.classList.remove("hidden");
  lb.classList.add("flex");
}
lb.onclick = (e) => {
  if (e.target == lb) {
    lb.classList.add("hidden");
    lb.classList.remove("flex");
  }
};
$$("[data-lb]").forEach(
  (b) =>
    (b.onclick = () => {
      const g = GAL[+b.dataset.lb];
      openLb(
        `<div class="w-full max-w-5xl"><img src="${IMG(g[0])}" alt="${g[1]}" class="max-h-[78vh] w-full rounded-2xl object-contain"><p class="mt-3 font-serif text-2xl">${g[1]}</p></div>`,
      );
    }),
);
$$("[data-story]").forEach(
  (b) =>
    (b.onclick = () => {
      const s = ST[+b.dataset.story];
      openLb(
        `<div class="${GL} max-h-[85vh] w-full max-w-2xl overflow-y-auto"><img src="${IMG(s.img)}" alt="" class="aspect-[16/8] w-full rounded-t-2xl object-cover"><div class="p-7"><h3 class="font-serif text-4xl leading-tight">${s.t[I]}</h3><p class="mt-1 text-xs text-champagne">${s.min} ${t("min")}</p><p class="mt-4 leading-relaxed text-ivory/85">${s.p[I]}</p></div></div>`,
      );
    }),
);
$$("[data-cat]").forEach((b) => {
  if (b.tagName != "BUTTON" || b.hasAttribute("data-lb")) return;
  b.onclick = () => {
    $$("button[data-cat]:not([data-lb])").forEach((x) => {
      const on = x == b;
      x.classList.toggle("bg-champagne", on);
      x.classList.toggle("text-obsidian", on);
    });
    $$("[data-lb]").forEach((el) =>
      el.classList.toggle(
        "hidden",
        b.dataset.cat != "*" && el.dataset.cat != b.dataset.cat,
      ),
    );
  };
});
/* slider hero */
if (P == "index") {
  const im = $$("#slides img");
  let c = 0;
  const go = (d) => {
    im[c].classList.add("opacity-0");
    c = (c + d + im.length) % im.length;
    im[c].classList.remove("opacity-0");
    $("#sn").textContent = "0" + (c + 1);
  };
  $$("[data-sl]").forEach((b) => (b.onclick = () => go(+b.dataset.sl)));
  setInterval(() => go(1), 7000);
}
/* bumi di Contact */
if (P == "contact")
  earth($("#ce"), { size: 720, speed: 4, tilt: 0.5, lon: 60 });
/* peta Leaflet */
const MK = (w) =>
  L.divIcon({
    className: "",
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    html: `<div class="relative h-11 w-11"><span class="absolute inset-0 rounded-full bg-champagne/50 animate-ring"></span><img src="${IMG(w.img)}" alt="${w.n}" class="relative h-11 w-11 rounded-full border-2 border-champagne object-cover shadow-lg"></div>`,
  });
const TL_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  ATTR = "© OpenStreetMap contributors © CARTO";
if (P == "wonder" && window.L) {
  const w = WS.find((v) => v.id == WID),
    m = L.map("lm", { scrollWheelZoom: false }).setView([w.lat, w.lng], 5);
  L.tileLayer(TL_URL, {
    attribution: ATTR,
    subdomains: "abcd",
    maxZoom: 18,
  }).addTo(m);
  L.marker([w.lat, w.lng], { icon: MK(w) })
    .addTo(m)
    .bindPopup(`<b>${w.n}</b><br>${w.c[I]}`);
  setTimeout(() => m.invalidateSize(), 900);
  addEventListener("load", () => m.invalidateSize());
}
if (P == "map" && window.L) {
  const m = L.map("mm", {
    scrollWheelZoom: false,
    minZoom: 2,
    worldCopyJump: true,
  }).setView([22, 15], 2);
  L.tileLayer(TL_URL, {
    attribution: ATTR,
    subdomains: "abcd",
    maxZoom: 18,
  }).addTo(m);
  const card = (w) => {
    $("#mc").innerHTML =
      `<img src="${IMG(w.img)}" alt="" class="h-16 w-20 rounded-lg object-cover"><div class="min-w-0 flex-1"><p class="font-serif text-xl leading-tight">${w.n}</p><p class="text-xs text-ivory/70">${w.c[I]} · ${w.ct[I]}</p></div><a href="${wl(w)}" class="${BTN2} !px-4 !py-2 !text-xs">${t("view")} →</a>`;
  };
  const pick = (i) => {
    const w = WS[i];
    m.flyTo([w.lat, w.lng], 5, { duration: 2.2 });
    card(w);
  };
  WS.forEach((w, i) =>
    L.marker([w.lat, w.lng], { icon: MK(w) })
      .addTo(m)
      .on("click", () => pick(i)),
  );
  card(WS[0]);
  $$("[data-fly]").forEach((b) => (b.onclick = () => pick(+b.dataset.fly)));
  setTimeout(() => m.invalidateSize(), 900);
  addEventListener("load", () => m.invalidateSize());
  m.on("mousemove", (e) => {
    $("#cc").textContent =
      `${Math.abs(e.latlng.lat).toFixed(4)}° ${e.latlng.lat < 0 ? "S" : "N"}, ${Math.abs(((e.latlng.lng + 540) % 360) - 180).toFixed(4)}° ${((e.latlng.lng + 540) % 360) - 180 < 0 ? "W" : "E"}`;
  });
}
