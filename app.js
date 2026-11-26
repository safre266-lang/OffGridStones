/* OffGridStones — language switcher, topic filter, question box.
 * UI text is translated from the dictionary below.
 * Posts are written in English (data/posts.json). To add a translated post, add
 * "translations": { "tr": { "title": "...", "body": "..." } } to its entry.
 * Brand names are wrapped in translate="no" in the HTML and are never in the dictionary. */

// Connect a real form endpoint (Formspree / Netlify Forms) to receive questions.
// Example: "https://formspree.io/f/yourFormId". Left empty = nothing is sent anywhere.
const FORM_ENDPOINT = "";

const I18N = {
  en: {
    language: "Language", tagline: "stones · culture · slow travel", heroTitle: "Notes from off the grid.",
    intro: "A quiet personal research blog: natural stones, cultural details, places I pass through, and the curiosity of a pharmacy mind. No faces, no noise — just observations.",
    t_stones: "Natural Stones & Minerals", d_stones: "Structure, character, meaning and care notes.",
    t_culture: "Cultural Notes & Travel", d_culture: "Motifs, traditions and the atmosphere of places.",
    t_lifestyle: "Lifestyle & Slow Living", d_lifestyle: "Calm rituals and everyday aesthetics.",
    t_etsy: "Etsy Collection", d_etsy: "handmade natural stone jewelry.",
    latest: "Latest notes", showAll: "Show all", askTitle: "Ask a question",
    askText: "About stones, culture, travel or pharmacy curiosity — write below and I will read and answer later.",
    askPlaceholder: "Your question or note…", send: "Send", thanks: "Thank you — your note was received.",
    footer: "Traditional and cultural notes are shared as folklore, not medical advice.",
    enOnly: "Article text is in English."
  },
  es: {
    language: "Idioma", tagline: "piedras · cultura · viaje lento", heroTitle: "Notas desde fuera de la red.",
    intro: "Un blog personal y tranquilo de investigación: piedras naturales, detalles culturales, lugares por los que paso y la curiosidad de una mente farmacéutica. Sin rostros, sin ruido: solo observaciones.",
    t_stones: "Piedras naturales y minerales", d_stones: "Estructura, carácter, significado y cuidados.",
    t_culture: "Notas culturales y viajes", d_culture: "Motivos, tradiciones y atmósfera de los lugares.",
    t_lifestyle: "Estilo de vida y vida lenta", d_lifestyle: "Rituales tranquilos y estética cotidiana.",
    t_etsy: "Colección de Etsy", d_etsy: "joyería artesanal de piedras naturales.",
    latest: "Últimas notas", showAll: "Ver todo", askTitle: "Haz una pregunta",
    askText: "Sobre piedras, cultura, viajes o curiosidad farmacéutica: escribe abajo y la leeré y responderé más tarde.",
    askPlaceholder: "Tu pregunta o nota…", send: "Enviar", thanks: "Gracias: tu nota fue recibida.",
    footer: "Las notas tradicionales y culturales se comparten como folclore, no como consejo médico.",
    enOnly: "El texto del artículo está en inglés."
  },
  zh: {
    language: "语言", tagline: "石头 · 文化 · 慢旅行", heroTitle: "来自“离网”的笔记。",
    intro: "一个安静的个人研究博客：天然石、文化细节、途经之地，以及药学人的好奇心。没有面孔，没有喧嚣，只有观察。",
    t_stones: "天然石与矿物", d_stones: "结构、特性、寓意与养护笔记。",
    t_culture: "文化笔记与旅行", d_culture: "图案、传统与地方的氛围。",
    t_lifestyle: "生活方式与慢生活", d_lifestyle: "宁静的仪式与日常之美。",
    t_etsy: "Etsy 系列", d_etsy: "手工天然石饰品。",
    latest: "最新笔记", showAll: "显示全部", askTitle: "提个问题",
    askText: "关于石头、文化、旅行或药学好奇心：请在下方留言，我会稍后阅读并回复。",
    askPlaceholder: "你的问题或留言…", send: "发送", thanks: "谢谢，已收到你的留言。",
    footer: "传统与文化相关内容仅作为民俗分享，不构成医疗建议。",
    enOnly: "文章正文为英文。"
  },
  ar: {
    language: "اللغة", tagline: "أحجار · ثقافة · سفر هادئ", heroTitle: "ملاحظات من خارج الشبكة.",
    intro: "مدونة بحثية شخصية هادئة: أحجار طبيعية، وتفاصيل ثقافية، وأماكن أمرّ بها، وفضول عقل صيدلاني. بلا وجوه وبلا ضجيج، مجرد ملاحظات.",
    t_stones: "الأحجار الطبيعية والمعادن", d_stones: "البنية والطبع والمعنى وملاحظات العناية.",
    t_culture: "ملاحظات ثقافية وسفر", d_culture: "الزخارف والتقاليد وأجواء الأماكن.",
    t_lifestyle: "نمط الحياة والحياة الهادئة", d_lifestyle: "طقوس هادئة وجماليات يومية.",
    t_etsy: "مجموعة Etsy", d_etsy: "مجوهرات يدوية من الأحجار الطبيعية.",
    latest: "أحدث الملاحظات", showAll: "عرض الكل", askTitle: "اطرح سؤالاً",
    askText: "عن الأحجار أو الثقافة أو السفر أو الفضول الصيدلاني: اكتب أدناه وسأقرأ وأجيب لاحقاً.",
    askPlaceholder: "سؤالك أو ملاحظتك…", send: "إرسال", thanks: "شكراً، تم استلام ملاحظتك.",
    footer: "الملاحظات التقليدية والثقافية تُشارك كتراث شعبي وليست نصيحة طبية.",
    enOnly: "نص المقال باللغة الإنجليزية."
  },
  fr: {
    language: "Langue", tagline: "pierres · culture · voyage lent", heroTitle: "Notes hors réseau.",
    intro: "Un blog de recherche personnel et paisible : pierres naturelles, détails culturels, lieux traversés et curiosité d'un esprit de pharmacie. Pas de visages, pas de bruit, seulement des observations.",
    t_stones: "Pierres naturelles et minéraux", d_stones: "Structure, caractère, signification et entretien.",
    t_culture: "Notes culturelles et voyage", d_culture: "Motifs, traditions et atmosphère des lieux.",
    t_lifestyle: "Art de vivre et slow living", d_lifestyle: "Rituels calmes et esthétique du quotidien.",
    t_etsy: "Collection Etsy", d_etsy: "bijoux artisanaux en pierres naturelles.",
    latest: "Dernières notes", showAll: "Tout afficher", askTitle: "Poser une question",
    askText: "Sur les pierres, la culture, le voyage ou la curiosité pharmaceutique : écrivez ci-dessous, je lirai et répondrai plus tard.",
    askPlaceholder: "Votre question ou note…", send: "Envoyer", thanks: "Merci, votre note a bien été reçue.",
    footer: "Les notes traditionnelles et culturelles relèvent du folklore, pas d'un avis médical.",
    enOnly: "Le texte de l'article est en anglais."
  },
  de: {
    language: "Sprache", tagline: "Steine · Kultur · langsames Reisen", heroTitle: "Notizen abseits des Netzes.",
    intro: "Ein ruhiger, persönlicher Recherche-Blog: Natursteine, kulturelle Details, Orte auf meinem Weg und die Neugier eines pharmazeutischen Geistes. Keine Gesichter, kein Lärm, nur Beobachtungen.",
    t_stones: "Natursteine & Mineralien", d_stones: "Aufbau, Charakter, Bedeutung und Pflege.",
    t_culture: "Kulturnotizen & Reisen", d_culture: "Motive, Traditionen und die Atmosphäre von Orten.",
    t_lifestyle: "Lifestyle & Slow Living", d_lifestyle: "Ruhige Rituale und alltägliche Ästhetik.",
    t_etsy: "Etsy-Kollektion", d_etsy: "handgefertigter Natursteinschmuck.",
    latest: "Neueste Notizen", showAll: "Alle anzeigen", askTitle: "Eine Frage stellen",
    askText: "Zu Steinen, Kultur, Reisen oder pharmazeutischer Neugier: unten schreiben, ich lese und antworte später.",
    askPlaceholder: "Deine Frage oder Notiz…", send: "Senden", thanks: "Danke, deine Notiz ist angekommen.",
    footer: "Traditionelle und kulturelle Hinweise sind Folklore, keine medizinische Beratung.",
    enOnly: "Der Artikeltext ist auf Englisch."
  },
  tr: {
    language: "Dil", tagline: "taşlar · kültür · yavaş seyahat", heroTitle: "Şebekenin dışından notlar.",
    intro: "Sakin, kişisel bir araştırma blogu: doğal taşlar, kültürel detaylar, yolumun düştüğü yerler ve bir eczacı aklının merakı. Yüz yok, gürültü yok; sadece gözlemler.",
    t_stones: "Doğal Taşlar ve Mineraller", d_stones: "Yapı, karakter, anlam ve bakım notları.",
    t_culture: "Kültür Notları ve Seyahat", d_culture: "Motifler, gelenekler ve mekânların atmosferi.",
    t_lifestyle: "Yaşam Tarzı ve Yavaş Yaşam", d_lifestyle: "Sakin ritüeller ve gündelik estetik.",
    t_etsy: "Etsy Koleksiyonu", d_etsy: "el yapımı doğal taş takılar.",
    latest: "Son notlar", showAll: "Tümünü göster", askTitle: "Soru sor",
    askText: "Taşlar, kültür, seyahat ya da eczacılık merakı hakkında aşağıya yaz; okuyup daha sonra yanıtlarım.",
    askPlaceholder: "Sorun veya notun…", send: "Gönder", thanks: "Teşekkürler, notun alındı.",
    footer: "Geleneksel ve kültürel notlar halk bilgisi olarak paylaşılır, tıbbi tavsiye değildir.",
    enOnly: "Yazı metni İngilizcedir."
  }
};
const RTL = new Set(["ar"]);

let lang = localStorage.getItem("ogs-lang") || "en";
if (!I18N[lang]) lang = "en";
let topic = null;
let posts = [];

const $ = (s) => document.querySelector(s);
const tr = (k) => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || "";

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL.has(lang) ? "rtl" : "ltr";
  $("#lang").value = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = tr(el.dataset.i18nPlaceholder); });
  renderPosts();
}

function renderPosts() {
  const list = topic ? posts.filter((p) => p.topic === topic) : posts;
  const box = $("#posts");
  box.textContent = "";
  list.forEach((p) => {
    const t = (p.translations && p.translations[lang]) || null;
    const art = document.createElement("article");
    art.className = "post";
    const meta = document.createElement("div"); meta.className = "meta"; meta.textContent = `${tr("t_" + p.topic)} · ${p.date}`;
    const h = document.createElement("h3"); h.textContent = t ? t.title : p.title;
    const b = document.createElement("p"); b.textContent = t ? t.body : p.body;
    art.append(meta, h, b);
    if (!t && lang !== "en") { const n = document.createElement("p"); n.className = "note-en"; n.textContent = tr("enOnly"); art.append(n); }
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
$("#lang").addEventListener("change", (e) => { lang = e.target.value; localStorage.setItem("ogs-lang", lang); applyLang(); });

$("#ask-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = $("#ask-status");
  const question = $("#q").value.trim();
  if (!question) return;
  if (FORM_ENDPOINT) {
    try {
      const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ question, lang }) });
      if (!r.ok) throw new Error(r.status);
    } catch (err) { status.textContent = "Error — please try again later."; return; }
  } else {
    console.info("[OffGridStones] FORM_ENDPOINT is empty; question was not sent anywhere:", question);
  }
  status.textContent = tr("thanks");
  e.target.reset();
});

fetch("data/posts.json").then((r) => r.json()).then((d) => { posts = d; applyLang(); }).catch(() => { applyLang(); });
