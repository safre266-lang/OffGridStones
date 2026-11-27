/* OffGridStones — live auto-translation, topic filter, question box.
 *
 * Write everything in English (index.html, data/posts.json). The language menu
 * uses the free Google Website Translator to translate the whole page live,
 * including posts. Brand names are protected with translate="no" in the HTML
 * (use class="notranslate" / translate="no" on any other name you want kept as-is).
 *
 * NOTE: translation needs to run from http(s) (VS Code Live Server, GitHub Pages),
 * not by double-clicking index.html (file://).
 */

// Connect a real form endpoint (Formspree / Netlify Forms) to receive questions.
// Example: "https://formspree.io/f/yourFormId". Empty = nothing is sent anywhere.
const FORM_ENDPOINT = "";

const RTL = new Set(["ar"]);
const TOPIC_LABEL = { stones: "Natural Stones & Minerals", culture: "Cultural Notes & Travel", lifestyle: "Lifestyle & Slow Living" };

const $ = (s) => document.querySelector(s);
let topic = null;
let posts = [];

/* ---------- Live translation (Google Website Translator) ---------- */
function currentLang() {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-z-]+)/i);
  return m ? m[1] : "en";
}
function setLang(l) {
  const host = location.hostname;
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  // clear old cookies (path + host variants), then set the new one
  document.cookie = `googtrans=; ${expire}; path=/`;
  if (host) document.cookie = `googtrans=; ${expire}; path=/; domain=${host}`;
  if (l !== "en") {
    document.cookie = `googtrans=/en/${l}; path=/`;
    if (host && host.includes(".")) document.cookie = `googtrans=/en/${l}; path=/; domain=${host}`;
  }
  location.reload();
}
function initTranslate() {
  const l = currentLang();
  document.documentElement.dir = RTL.has(l) ? "rtl" : "ltr"; // Google does not flip direction itself
  $("#lang").value = l;
  $("#lang").addEventListener("change", (e) => setLang(e.target.value));
  if (l === "en") return; // no need to load the translator for English
  window.googleTranslateElementInit = () => {
    new google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "es,zh-CN,ar,fr,de,tr", autoDisplay: false }, "google_translate_element");
  };
  const s = document.createElement("script");
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.append(s);
}

/* ---------- Posts ---------- */
function renderPosts() {
  const list = topic ? posts.filter((p) => p.topic === topic) : posts;
  const box = $("#posts");
  box.textContent = "";
  list.forEach((p) => {
    const art = document.createElement("article");
    art.className = "post";
    const meta = document.createElement("div"); meta.className = "meta"; meta.textContent = `${TOPIC_LABEL[p.topic] || p.topic} · ${p.date}`;
    const h = document.createElement("h3"); h.textContent = p.title;
    const b = document.createElement("p"); b.textContent = p.body;
    art.append(meta, h, b);
    if (p.etsy) {
      const a = document.createElement("a"); a.className = "shop"; a.href = p.etsy.url; a.target = "_blank"; a.rel = "noopener";
      a.textContent = p.etsy.label + " →"; art.append(a);
    }
    box.append(art);
  });
  $("#show-all").hidden = !topic;
  document.querySelectorAll(".topic[data-topic]").forEach((el) => el.classList.toggle("active", el.dataset.topic === topic));
}

document.querySelectorAll(".topic[data-topic]").forEach((el) => {
  el.addEventListener("click", () => { topic = el.dataset.topic; renderPosts(); $("#posts-title").scrollIntoView({ behavior: "smooth" }); });
});
$("#show-all").addEventListener("click", () => { topic = null; renderPosts(); });

/* ---------- Manga → Real Life drawings ---------- */
// Add images in data/drawings.json; put image files in the drawings/ folder.
function renderDrawings(list) {
  const box = $("#gallery");
  box.textContent = "";
  if (!list.length) {
    for (let i = 0; i < 3; i++) {
      const f = document.createElement("div");
      f.className = "frame empty";
      const t = document.createElement("span");
      t.textContent = i === 0 ? "First drawings coming soon" : "On the drawing board";
      f.append(t);
      box.append(f);
    }
    return;
  }
  list.forEach((d) => {
    const fig = document.createElement("figure");
    fig.className = "frame";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pic";
    if (d.warning) { btn.classList.add("sensitive"); btn.dataset.warning = d.warning; }
    btn.setAttribute("aria-label", `Open image: ${d.character}`);
    const img = document.createElement("img");
    img.src = d.image; img.alt = d.alt || `Realistic image of ${d.character}${d.series ? " from " + d.series : ""}`;
    img.loading = "lazy"; img.decoding = "async";
    btn.append(img);
    btn.addEventListener("click", () => openLightbox(d, img.alt));
    const cap = document.createElement("figcaption");
    const name = document.createElement("strong"); name.textContent = d.character; name.className = "notranslate"; name.translate = false;
    cap.append(name);
    const sub = [d.series, d.credit].filter(Boolean).join(" · ");
    if (sub) { const s = document.createElement("span"); s.textContent = sub; cap.append(s); }
    fig.append(btn, cap);
    box.append(fig);
  });
}
function openLightbox(d, alt) {
  const lb = $("#lightbox");
  $("#lb-img").src = d.image; $("#lb-img").alt = alt;
  const fig = $("#lb-orig-fig");
  fig.hidden = !d.original;
  $("#lb-orig").src = d.original || "";
  $("#lb-orig").alt = d.original ? `Original manhwa artwork of ${d.character}` : "";
  $(".lb-pair").classList.toggle("two", !!d.original);
  $("#lb-orig-fig figcaption").textContent = d.originalLabel || "Manhwa (original)";
  $("#lb-img").closest("figure").querySelector("figcaption").textContent = d.imageLabel || "Real life";
  $("#lb-title").textContent = d.character;
  $("#lb-series").textContent = [d.series, d.credit, d.date].filter(Boolean).join(" · ");
  $("#lb-note").textContent = [d.warning, d.note].filter(Boolean).join(" — ");
  lb.showModal();
}
$("#lightbox .close").addEventListener("click", () => $("#lightbox").close());
$("#lightbox").addEventListener("click", (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });

/* ---------- Question box ---------- */
$("#ask-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = $("#ask-status");
  const question = $("#q").value.trim();
  if (!question) return;
  if (FORM_ENDPOINT) {
    try {
      const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ question, lang: currentLang() }) });
      if (!r.ok) throw new Error(r.status);
    } catch (err) { status.textContent = "Error — please try again later."; return; }
  } else {
    console.info("[OffGridStones] FORM_ENDPOINT is empty; question was not sent anywhere:", question);
  }
  status.textContent = "Thank you — your note was received.";
  e.target.reset();
});

initTranslate();
fetch("data/drawings.json").then((r) => r.json()).then(renderDrawings).catch(() => renderDrawings([]));
fetch("data/posts.json").then((r) => r.json()).then((d) => { posts = d; renderPosts(); }).catch(() => {});
