"use strict";
const byId = (id) => document.getElementById(id);
const query = byId("query");
const theme = byId("theme");
const source = byId("source");
const situations = [
  ["Construire ou étendre", "Construction neuve"],
  ["Rénover un bâtiment", "Rénovation"],
  ["Louer, vendre ou gérer un immeuble", "Diagnostics et logement"],
  ["Exploiter un bâtiment", "Tertiaire et exploitation"],
  ["Équiper une toiture ou un parking", "Renouvelables et environnement"],
  ["Financer des travaux", "Financement"]
];
const normalize = (value) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const origin = (record) => new URL(record.url).hostname === "eur-lex.europa.eu" ? "EUR-Lex" : "Légifrance";
const element = (tag, value, className) => {
  const node = document.createElement(tag);
  node.textContent = value;
  if (className) node.className = className;
  return node;
};

for (const value of new Set(records.map((r) => r.theme))) theme.add(new Option(value, value));
for (const [label, value] of situations) {
  const button = element("button", label);
  button.type = "button";
  button.dataset.theme = value;
  button.addEventListener("click", () => {
    theme.value = theme.value === value ? "" : value;
    render();
  });
  byId("situations").append(button);
}
for (const gap of gaps) byId("gaps").append(element("li", gap));

function render() {
  const tokens = normalize(query.value).split(" ").filter(Boolean);
  const selected = records.filter((record) => {
    const searchable = normalize([record.title, record.ref, record.body, record.theme].join(" "));
    return (!theme.value || theme.value === record.theme)
      && (!source.value || source.value === origin(record))
      && tokens.every((token) => searchable.includes(token));
  });
  for (const button of byId("situations").children) {
    button.setAttribute("aria-pressed", String(button.dataset.theme === theme.value));
  }
  byId("count").textContent = new Intl.NumberFormat("fr-FR").format(selected.length) + (selected.length === 1 ? " résultat" : " résultats");
  const container = byId("results");
  container.replaceChildren();
  if (!selected.length) container.append(element("p", "Aucune fiche dans cet inventaire avec ces filtres."));
  for (const record of selected) {
    const card = document.createElement("article");
    const details = document.createElement("details");
    details.append(element("summary", "Champ et dispositions"), element("p", record.body));
    const link = element("a", "Lire sur " + origin(record) + " ↗");
    link.href = record.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Lire « " + record.title + " » sur " + origin(record) + " dans un nouvel onglet");
    card.append(element("span", record.theme, "theme"), element("h3", record.title), element("p", record.ref), details, link);
    container.append(card);
  }
}

query.addEventListener("input", render);
for (const select of [theme, source]) select.addEventListener("change", render);
byId("reset").addEventListener("click", () => {
  query.value = "";
  theme.value = "";
  source.value = "";
  render();
  query.focus();
});
render();

const cards = byId("article-cards");
const filters = byId("article-filters");
const reader = byId("reader");
let activeSection = "";
for (const section of ["", ...new Set(articles.map(([category]) => category))]) {
  const button = element("button", section || "Tous les articles");
  button.type = "button";
  button.dataset.section = section;
  button.addEventListener("click", () => {
    activeSection = section;
    renderArticles();
  });
  filters.append(button);
}

function renderArticles() {
  cards.replaceChildren();
  for (const button of filters.children) {
    button.setAttribute("aria-pressed", String(button.dataset.section === activeSection));
  }
  articles.forEach(([section, title, intro], index) => {
    if (activeSection && section !== activeSection) return;
    const article = document.createElement("article");
    const link = element("a", "Lire l’article ↗");
    link.href = "#article-" + (index + 1);
    link.setAttribute("aria-label", "Lire l’article « " + title + " »");
    article.append(element("span", section, "theme"), element("h3", title), element("p", intro), link);
    cards.append(article);
  });
}

let lastArticleTrigger;
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#article-']");
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  lastArticleTrigger = link;
  if (location.hash === link.hash) {
    event.preventDefault();
    openArticle();
  }
});
function openArticle() {
  const match = /^#article-(\d+)$/.exec(location.hash);
  const article = match && articles[Number(match[1]) - 1];
  if (!article) {
    if (reader.open) reader.close();
    return;
  }
  const [section, title, intro, paragraphs, sources] = article;
  const heading = element("h2", title);
  heading.id = "reader-title";
  const links = document.createElement("ul");
  for (const [label, url] of sources) {
    const item = document.createElement("li");
    const link = element("a", label + " ↗");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    item.append(link);
    links.append(item);
  }
  byId("reader-body").replaceChildren(
    element("span", section, "theme"), heading, element("p", intro),
    ...paragraphs.map((paragraph) => element("p", paragraph)),
    element("h3", "Sources"), links
  );
  if (!reader.open) reader.showModal();
  reader.scrollTop = 0;
}
window.addEventListener("hashchange", openArticle);
reader.addEventListener("close", () => {
  if (location.hash.startsWith("#article-")) history.replaceState(null, "", "#articles");
  if (lastArticleTrigger?.isConnected) lastArticleTrigger.focus({preventScroll:true});
  lastArticleTrigger = undefined;
});
renderArticles();
openArticle();

byId("email-subject").textContent = "Objet : " + contact.subject;
byId("email-body").textContent = contact.body;
if (contact.email) {
  const emailLink = byId("email-link");
  emailLink.href = "mailto:" + contact.email + "?subject=" + encodeURIComponent(contact.subject)
    + "&body=" + encodeURIComponent(contact.body.replace(/\n/g, "\r\n"));
  emailLink.hidden = false;
  byId("email-status").textContent = "Le bouton ouvre votre messagerie avec un brouillon à personnaliser.";
}

const careerFilters = byId("career-filters");
const careerCards = byId("career-cards");
let careerLevel = "";
for (const level of ["", ...new Set(careers.map(([group]) => group))]) {
  const button = element("button", level || "Tous les métiers");
  button.type = "button";
  button.dataset.level = level;
  button.addEventListener("click", () => {
    careerLevel = level;
    renderCareers();
  });
  careerFilters.append(button);
}

function renderCareers() {
  for (const button of careerFilters.children) {
    button.setAttribute("aria-pressed", String(button.dataset.level === careerLevel));
  }
  careerCards.replaceChildren();
  for (const [group, title, mission, training, pay, context, sources] of careers) {
    if (careerLevel && group !== careerLevel) continue;
    const card = element("article", "", "career-card");
    const details = document.createElement("details");
    const links = element("ul", "", "career-links");
    for (const [label, href] of sources) {
      const item = document.createElement("li");
      const link = element("a", label + " ↗");
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      item.append(link);
      links.append(item);
    }
    details.append(element("summary", "Diplômes, écoles et sources"), element("p", training), links);
    card.append(element("span", group, "theme"), element("h3", title), element("p", mission),
      element("strong", pay, "career-pay"), element("p", context), details);
    careerCards.append(card);
  }
}
renderCareers();
