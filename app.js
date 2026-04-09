const scenicPlaces = [
  {
    name: "Dolomitas",
    region: "Italia",
    caption: "Picos dramáticos, verde vivo e uma sensação de grandeza quieta.",
    photoId: "1500530855697-b586d89ba3ee",
  },
  {
    name: "Lago Moraine",
    region: "Canada",
    caption: "Agua azul profunda e montanhas que parecem pintadas a mão.",
    photoId: "1506744038136-46273834b3fb",
  },
  {
    name: "Hallstatt",
    region: "Austria",
    caption: "Casas a beira do lago, montanhas ao fundo e uma quietude quase impossivel.",
    photoId: "1501785888041-af3ef285b470",
  },
  {
    name: "Salar de Uyuni",
    region: "Bolivia",
    caption: "Ceu espelhado, horizonte infinito e um silencio de outro mundo.",
    photoId: "1507525428034-b723cf961d3e",
  },
  {
    name: "Lençois Maranhenses",
    region: "Brasil",
    caption: "Dunas, lagoas cristalinas e um brilho natural que nunca cansa.",
    photoId: "1470770903676-69b98201ea1c",
  },
  {
    name: "Lofoten",
    region: "Noruega",
    caption: "Fiordes frios, mar profundo e vilas pequenas cercadas de beleza bruta.",
    photoId: "1511497584788-876760111969",
  },
  {
    name: "Kioto",
    region: "Japao",
    caption: "Templos, neblina suave e uma serenidade delicada no ar.",
    photoId: "1493976040374-85c8e12f0c0e",
  },
  {
    name: "Ilhas Faroe",
    region: "Atlantico Norte",
    caption: "Falésias verdes, nevoa poetica e o tipo de vista que desacelera por dentro.",
    photoId: "1500534314209-a25ddb2bd429",
  },
  {
    name: "Banff",
    region: "Canada",
    caption: "Pinhais densos, lago glacial e um azul que parece inventado.",
    photoId: "1464822759023-fed622ff2c3b",
  },
  {
    name: "Patagonia",
    region: "Chile",
    caption: "Vento, gelo, lagos e uma beleza crua que limpa a mente.",
    photoId: "1517821365201-7734f463f34b",
  },
  {
    name: "Alpes Suicos",
    region: "Suica",
    caption: "Vales largos, vilas discretas e luz dourada descendo pelas montanhas.",
    photoId: "1500043357865-c6b8827edf39",
  },
  {
    name: "Yosemite",
    region: "Estados Unidos",
    caption: "Granito, cachoeiras e uma escala que recoloca tudo no lugar.",
    photoId: "1441974231531-c6227db76b6e",
  },
];

const fallbackVerses = [
  {
    reference: "Salmos 23:1",
    text: "O Senhor e o meu pastor; de nada terei falta.",
    version: "NVI",
  },
  {
    reference: "Isaias 41:10",
    text: "Nao tema, pois eu estou com voce; nao tenha medo, pois eu sou o seu Deus.",
    version: "NVI",
  },
  {
    reference: "Mateus 11:28",
    text: "Venham a mim, todos os que estao cansados e sobrecarregados, e eu darei descanso a voces.",
    version: "NVI",
  },
  {
    reference: "Joao 14:27",
    text: "Deixo a paz a voces; a minha paz dou a voces.",
    version: "NVI",
  },
  {
    reference: "Jeremias 29:11",
    text: "Porque sou eu que conheco os planos que tenho para voces, diz o Senhor.",
    version: "NVI",
  },
  {
    reference: "Romanos 12:12",
    text: "Alegrem-se na esperanca, sejam pacientes na tribulacao, perseverem na oracao.",
    version: "NVI",
  },
  {
    reference: "Filipenses 4:6",
    text: "Nao andem ansiosos por coisa alguma, mas em tudo, pela oracao e suplicas, apresentem seus pedidos a Deus.",
    version: "NVI",
  },
  {
    reference: "Josue 1:9",
    text: "Seja forte e corajoso. Nao se apavore, nem desanime, pois o Senhor, o seu Deus, estara com voce por onde voce andar.",
    version: "NVI",
  },
  {
    reference: "Proverbios 3:5",
    text: "Confie no Senhor de todo o seu coracao e nao se apoie em seu proprio entendimento.",
    version: "NVI",
  },
  {
    reference: "Lamentacoes 3:22-23",
    text: "As misericordias do Senhor sao a causa de nao sermos consumidos; renovam-se cada manha.",
    version: "NVI",
  },
  {
    reference: "1 Corintios 16:14",
    text: "Facam tudo com amor.",
    version: "NVI",
  },
  {
    reference: "Hebreus 11:1",
    text: "Ora, a fe e a certeza daquilo que esperamos e a prova das coisas que nao vemos.",
    version: "NVI",
  },
];

const background = document.getElementById("background");
const locationName = document.getElementById("locationName");
const locationMeta = document.getElementById("locationMeta");
const locationCaption = document.getElementById("locationCaption");
const refreshPhotoButton = document.getElementById("refreshPhotoButton");
const landscapeModeButton = document.getElementById("landscapeModeButton");
const heroQuote = document.getElementById("heroQuote");
const heroQuoteAuthor = document.getElementById("heroQuoteAuthor");
const heroQuoteSource = document.getElementById("heroQuoteSource");
const clock = document.getElementById("clock");
const dateElement = document.getElementById("date");
const verseReference = document.getElementById("verseReference");
const verseText = document.getElementById("verseText");
const verseVersion = document.getElementById("verseVersion");
const verseStatus = document.getElementById("verseStatus");
const verseSource = document.getElementById("verseSource");

const todayKey = new Date().toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" });
const photoRotationKey = "nova-aba-sagrada.photo-index";
const verseCachePrefix = "nova-aba-sagrada.verse.";
const verseErrorCachePrefix = "nova-aba-sagrada.verse-error.";
const verseSessionFallbackKey = "nova-aba-sagrada.verse-session-fallback";
const quoteBatchCacheKey = "nova-aba-sagrada.quote-batch";
const quoteSelectionKey = "nova-aba-sagrada.quote-selection";
const unsplashAppName = "nova-aba-sagrada";

const fallbackQuotes = [
  {
    text: "A paz vem de dentro. Nao a procure a sua volta.",
    author: "Buda",
  },
  {
    text: "Simplicidade e o ultimo grau de sofisticacao.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Aquilo que fazemos repetidamente e o que nos transforma.",
    author: "Aristoteles",
  },
  {
    text: "Onde ha amor ha vida.",
    author: "Mahatma Gandhi",
  },
  {
    text: "A verdadeira viagem de descoberta nao consiste em procurar novas paisagens, mas em ter novos olhos.",
    author: "Marcel Proust",
  },
  {
    text: "A pressa e inimiga da contemplacao.",
    author: "Provérbio",
  },
];

function dayNumberFrom(dateString) {
  return dateString
    .split("-")
    .map(Number)
    .reduce((accumulator, value) => accumulator + value, 0);
}

function getDailyIndex(items, offset = 0) {
  return (dayNumberFrom(todayKey) + offset) % items.length;
}

function setPhoto(index) {
  const place = scenicPlaces[index % scenicPlaces.length];
  const imageUrl = `url('https://images.unsplash.com/photo-${place.photoId}?auto=format&fit=crop&w=2200&q=80&fm=jpg&crop=entropy&cs=tinysrgb&sig=${Date.now()}&utm_source=${unsplashAppName}&utm_medium=referral')`;
  document.documentElement.style.setProperty("--photo-image", imageUrl);
  locationName.textContent = place.name;
  locationMeta.textContent = place.region;
  locationCaption.textContent = place.caption;
  localStorage.setItem(photoRotationKey, String(index % scenicPlaces.length));
}

function getInitialPhotoIndex() {
  const savedIndex = Number(localStorage.getItem(photoRotationKey));
  if (Number.isInteger(savedIndex) && savedIndex >= 0) {
    return savedIndex % scenicPlaces.length;
  }

  return getDailyIndex(scenicPlaces);
}

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  dateElement.textContent = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "America/Sao_Paulo",
  });
}

function setVerse(data) {
  verseReference.textContent = data.reference;
  verseText.textContent = data.text;
  verseVersion.textContent = data.version || "NVI";
}

function setHeroQuote(quote, sourceLabel) {
  heroQuote.textContent = quote.text;
  heroQuoteAuthor.textContent = quote.author ? `- ${quote.author}` : "- Autor desconhecido";
  heroQuoteSource.innerHTML = sourceLabel;
}

function setVerseStatus(text, mode = "default") {
  verseStatus.textContent = text;
  verseStatus.style.background =
    mode === "warning" ? "rgba(255, 205, 112, 0.16)" : "rgba(227, 199, 142, 0.12)";
  verseStatus.style.color = mode === "warning" ? "#ffd08d" : "";
}

function getFallbackVerse() {
  const savedFallback = sessionStorage.getItem(verseSessionFallbackKey);
  if (savedFallback) {
    return JSON.parse(savedFallback);
  }

  const randomFallback =
    fallbackVerses[Math.floor(Math.random() * fallbackVerses.length)];

  sessionStorage.setItem(verseSessionFallbackKey, JSON.stringify(randomFallback));
  return randomFallback;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getCachedQuoteSelection() {
  const selection = sessionStorage.getItem(quoteSelectionKey);
  if (!selection) {
    return null;
  }

  return JSON.parse(selection);
}

function storeQuoteSelection(quote) {
  sessionStorage.setItem(quoteSelectionKey, JSON.stringify(quote));
}

async function fetchHeroQuote() {
  const cachedSelection = getCachedQuoteSelection();
  if (cachedSelection) {
    setHeroQuote(
      cachedSelection,
      'Inspirational quotes via <a href="https://zenquotes.io/" target="_blank" rel="noreferrer">ZenQuotes</a>.'
    );
    return;
  }

  const now = Date.now();
  const batchCacheRaw = localStorage.getItem(quoteBatchCacheKey);

  if (batchCacheRaw) {
    const batchCache = JSON.parse(batchCacheRaw);
    if (Array.isArray(batchCache?.items) && batchCache.items.length > 0 && now < batchCache.expiresAt) {
      const selected = getRandomItem(batchCache.items);
      storeQuoteSelection(selected);
      setHeroQuote(
        selected,
        'Inspirational quotes via <a href="https://zenquotes.io/" target="_blank" rel="noreferrer">ZenQuotes</a>.'
      );
      return;
    }
  }

  try {
    const response = await fetch("https://zenquotes.io/api/quotes", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Falha HTTP ${response.status}`);
    }

    const payload = await response.json();
    const quotes = payload
      .filter((entry) => entry?.q && entry?.a)
      .map((entry) => ({
        text: entry.q,
        author: entry.a,
      }));

    if (!quotes.length) {
      throw new Error("ZenQuotes sem itens validos.");
    }

    localStorage.setItem(
      quoteBatchCacheKey,
      JSON.stringify({
        items: quotes,
        expiresAt: now + 1000 * 60 * 60 * 6,
      })
    );

    const selected = getRandomItem(quotes);
    storeQuoteSelection(selected);
    setHeroQuote(
      selected,
      'Inspirational quotes via <a href="https://zenquotes.io/" target="_blank" rel="noreferrer">ZenQuotes</a>.'
    );
  } catch (error) {
    const fallbackQuote = getRandomItem(fallbackQuotes);
    storeQuoteSelection(fallbackQuote);
    setHeroQuote(fallbackQuote, "Frase local aleatoria para manter a experiencia estavel.");
    console.warn("Quote aleatoria indisponivel agora.", error);
  }
}

function getVerseErrorKey() {
  return `${verseErrorCachePrefix}${todayKey}`;
}

function markVerseErrorLogged(message) {
  sessionStorage.setItem(getVerseErrorKey(), message);
}

function wasVerseErrorLogged(message) {
  return sessionStorage.getItem(getVerseErrorKey()) === message;
}

async function fetchDailyVerse() {
  const cachedVerse = localStorage.getItem(`${verseCachePrefix}${todayKey}`);
  if (cachedVerse) {
    const parsed = JSON.parse(cachedVerse);
    if (parsed?.source === "api") {
      setVerse(parsed);
      setVerseStatus("Cache do dia");
      verseSource.textContent = "Versiculo recuperado do cache local da extensao.";
      return;
    }

    localStorage.removeItem(`${verseCachePrefix}${todayKey}`);
  }

  const endpoint = "https://www.abibliadigital.com.br/api/verses/nvi/random";

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Falha HTTP ${response.status}`);
    }

    const payload = await response.json();
    const versePayload = {
      reference:
        payload?.book?.name && payload?.chapter?.number && payload?.number
          ? `${payload.book.name} ${payload.chapter.number}:${payload.number}`
          : getFallbackVerse().reference,
      text: payload?.text || getFallbackVerse().text,
      version: String(payload?.version || "NVI").toUpperCase(),
      source: "api",
    };

    localStorage.setItem(`${verseCachePrefix}${todayKey}`, JSON.stringify(versePayload));
    setVerse(versePayload);
    setVerseStatus("API ao vivo");
    verseSource.textContent = "Versiculo carregado pela API ABibliaDigital.";
  } catch (error) {
    const fallback = getFallbackVerse();
    const errorMessage =
      error instanceof Error ? error.message : "Falha desconhecida ao buscar o versiculo.";

    setVerse(fallback);
    setVerseStatus("Fallback local", "warning");
    verseSource.textContent =
      "A API nao respondeu bem agora; a extensao sorteou um versiculo local para manter a experiencia estavel.";

    // A API pode oscilar com 500. Registramos no maximo uma vez por sessao
    // para evitar poluir o console quando o fallback ja cobre a experiencia.
    if (!wasVerseErrorLogged(errorMessage)) {
      console.warn(`Versiculo do dia indisponivel agora: ${errorMessage}`);
      markVerseErrorLogged(errorMessage);
    }
  }
}

let currentPhotoIndex = getInitialPhotoIndex();

refreshPhotoButton.addEventListener("click", () => {
  let nextIndex = Math.floor(Math.random() * scenicPlaces.length);

  if (scenicPlaces.length > 1) {
    while (nextIndex === currentPhotoIndex) {
      nextIndex = Math.floor(Math.random() * scenicPlaces.length);
    }
  }

  currentPhotoIndex = nextIndex;
  setPhoto(currentPhotoIndex);
});

function enableLandscapePreview() {
  document.body.classList.add("landscape-preview");
}

function disableLandscapePreview() {
  document.body.classList.remove("landscape-preview");
}

landscapeModeButton.addEventListener("mouseenter", enableLandscapePreview);
landscapeModeButton.addEventListener("mouseleave", disableLandscapePreview);
landscapeModeButton.addEventListener("focus", enableLandscapePreview);
landscapeModeButton.addEventListener("blur", disableLandscapePreview);
landscapeModeButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  const active = document.body.classList.toggle("landscape-preview");
  landscapeModeButton.textContent = active ? "Voltar textos" : "Ver paisagem";
});

setPhoto(currentPhotoIndex);
updateClock();
setInterval(updateClock, 1000);
fetchHeroQuote();
fetchDailyVerse();
