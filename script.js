document.addEventListener('DOMContentLoaded', () => {
    const mots = [
      { mot: "Perspicace", def: "Qui comprend vite et bien, doté d'une intelligence pénétrante.", trad: "Perceptive" },
      { mot: "Impératif", def: "Qui s'impose avec force, autoritaire ou nécessaire.", trad: "Imperative" },
      { mot: "Dévoué", def: "Qui se consacre entièrement aux autres.", trad: "Devoted" },
      { mot: "Convivialité", def: "Capacité à créer une ambiance agréable, chaleureuse.", trad: "Conviviality" },
      { mot: "Sagacité", def: "Finesse d'esprit, clairvoyance.", trad: "Sagacity" },
      { mot: "Altruiste", def: "Qui se soucie d'autrui de manière désintéressée.", trad: "Altruistic" },
      { mot: "Austérité", def: "Caractère sévère, rigide ou dépouillé.", trad: "Austerity" },
      { mot: "Éloquence", def: "Art de bien parler, de convaincre par la parole.", trad: "Eloquence" },
      { mot: "Subtilité", def: "Finesse, délicatesse dans l'analyse ou l'expression.", trad: "Subtlety" },
      { mot: "Probité", def: "Honnêteté rigoureuse.", trad: "Probity" },
      { mot: "Résilience", def: "Capacité à surmonter les chocs, à rebondir.", trad: "Resilience" },
      { mot: "Laconique", def: "Qui s'exprime en peu de mots.", trad: "Laconic" },
      { mot: "Concis", def: "Bref et précis dans l'expression.", trad: "Concise" },
      { mot: "Pertinent", def: "Qui convient parfaitement au sujet.", trad: "Relevant" },
      { mot: "Exalté", def: "Transporté par une émotion intense.", trad: "Exalted" },
      { mot: "Méticuleux", def: "Très attentif aux moindres détails.", trad: "Meticulous" },
      { mot: "Prosaïque", def: "Manque d'originalité ou d'élévation.", trad: "Prosaic" },
      { mot: "Intransigeant", def: "Qui n'admet aucun compromis.", trad: "Uncompromising" },
      { mot: "Lucidité", def: "Clarté d'esprit, conscience exacte des choses.", trad: "Lucidity" },
      { mot: "Tempérance", def: "Modération, notamment dans les plaisirs.", trad: "Temperance" },
      { mot: "Solennel", def: "Grave, sérieux, empreint de dignité.", trad: "Solemn" },
      { mot: "Pudique", def: "Réservé, discret dans l'expression.", trad: "Modest" },
      { mot: "Omniprésent", def: "Toujours présent, partout à la fois.", trad: "Omnipresent" },
      { mot: "Éphémère", def: "De courte durée, passager.", trad: "Ephemeral" },
      { mot: "Abnégation", def: "Sacrifice de soi-même, renoncement.", trad: "Self-denial" },
      { mot: "Équivoque", def: "Ambigu, qui peut être compris de plusieurs façons.", trad: "Equivocal" },
      { mot: "Envergure", def: "Ampleur, dimension importante.", trad: "Scope" },
      { mot: "Pondéré", def: "Calme, mesuré dans ses jugements.", trad: "Level-headed" },
      { mot: "Pragmatisme", def: "Attitude tournée vers l'efficacité concrète.", trad: "Pragmatism" },
      { mot: "Déférence", def: "Respect exprimé avec soumission.", trad: "Deference" },
      { mot: "Sagace", def: "Qui fait preuve de pénétration d'esprit.", trad: "Sagacious" },
      { mot: "Indulgent", def: "Qui pardonne facilement.", trad: "Indulgent" },
      { mot: "Discret", def: "Réservé, qui agit sans se faire remarquer.", trad: "Discreet" },
      { mot: "Assidu", def: "Qui est régulier dans ce qu'il fait.", trad: "Assiduous" },
      { mot: "Inéluctable", def: "Inévitable, qu'on ne peut éviter.", trad: "Unavoidable" },
      { mot: "Érudit", def: "Qui possède un savoir approfondi.", trad: "Erudite" },
      { mot: "Éloquent", def: "Qui s'exprime avec aisance et persuasion.", trad: "Eloquent" },
      { mot: "Parcimonie", def: "Économie extrême, modération excessive.", trad: "Parsimony" },
      { mot: "Clément", def: "Qui pardonne facilement, doux.", trad: "Clement" },
      { mot: "Intrinsèque", def: "Propre à une chose, essentiel.", trad: "Intrinsic" },
      { mot: "Velléité", def: "Volonté faible, intention non suivie d'effet.", trad: "Velleity" },
      { mot: "Incisif", def: "Qui attaque ou tranche vivement.", trad: "Incisive" },
      { mot: "Altier", def: "Fier, hautain.", trad: "Haughty" },
      { mot: "Hédoniste", def: "Qui recherche le plaisir comme but de la vie.", trad: "Hedonist" },
      { mot: "Persévérant", def: "Qui continue malgré les obstacles.", trad: "Persevering" },
      { mot: "Inaltérable", def: "Qui ne peut être altéré, reste intact.", trad: "Unalterable" },
      { mot: "Serein", def: "Calme, paisible, tranquille.", trad: "Serene" },
      { mot: "Magnanime", def: "Généreux, indulgent envers les faibles.", trad: "Magnanimous" },
      { mot: "Subversif", def: "Qui cherche à renverser l'ordre établi.", trad: "Subversive" },
      { mot: "Ineffable", def: "Qu'on ne peut exprimer avec des mots.", trad: "Ineffable" },
      { mot: "Verbeux", def: "Qui parle trop ou utilise trop de mots.", trad: "Verbose" },
      { mot: "Immuable", def: "Qui ne change pas.", trad: "Immutable" },
      { mot: "Taciturne", def: "Silencieux, peu bavard.", trad: "Taciturn" },
      { mot: "Obsolète", def: "Désuet, dépassé.", trad: "Obsolete" },
      { mot: "Austère", def: "Sévère, strict.", trad: "Austere" },
      { mot: "Volubile", def: "Qui parle beaucoup et facilement.", trad: "Voluble" },
      { mot: "Dissonant", def: "Manque d'harmonie.", trad: "Dissonant" },
      { mot: "Fastidieux", def: "Ennuyeux, lassant.", trad: "Tedious" },
      { mot: "Disparate", def: "Hétérogène, sans unité.", trad: "Disparate" },
      { mot: "Fulgurant", def: "Très rapide, soudain et intense.", trad: "Blazing" },
      { mot: "Périlleux", def: "Dangereux, risqué.", trad: "Perilous" },
      { mot: "Réticent", def: "Hésitant, peu enclin à agir.", trad: "Reticent" },
      { mot: "Désuet", def: "Dépassé, plus en usage.", trad: "Outdated" },
      { mot: "Inepte", def: "Sans capacité, absurde.", trad: "Inept" },
      { mot: "Insolite", def: "Étrange, inhabituel.", trad: "Unusual" },
      { mot: "Concupiscent", def: "Porté vers les plaisirs charnels.", trad: "Concupiscent" },
      { mot: "Acrimonieux", def: "Agressif, amer dans les propos.", trad: "Acrimonious" },
      { mot: "Véhément", def: "Emporté, passionné.", trad: "Vehement" },
      { mot: "Rédhibitoire", def: "Qui constitue un obstacle absolu.", trad: "Deal-breaker" },
      { mot: "Impavide", def: "Sans peur, calme face au danger.", trad: "Fearless" },
      { mot: "Fallacieux", def: "Trompeur, mensonger.", trad: "Fallacious" },
      { mot: "Paradoxal", def: "Contraire à l'opinion commune, surprenant.", trad: "Paradoxical" },
      { mot: "Ostentatoire", def: "Qui cherche à attirer l'attention.", trad: "Ostentatious" },
      { mot: "Ambivalent", def: "Qui présente deux aspects contradictoires.", trad: "Ambivalent" },
      { mot: "Apaisant", def: "Qui calme, tranquillise.", trad: "Soothing" },
      { mot: "Frugal", def: "Simple, sans excès.", trad: "Frugal" },
      { mot: "Prodigal", def: "Dépensier, généreux à l'excès.", trad: "Prodigal" },
      { mot: "Intègre", def: "D'une honnêteté absolue.", trad: "Upright" },
      { mot: "Ardu", def: "Difficile, pénible.", trad: "Arduous" },
      { mot: "Atavique", def: "Hérité des ancêtres.", trad: "Atavistic" },
      { mot: "Ténébreux", def: "Sombre, obscur.", trad: "Gloomy" },
      { mot: "Hâbleur", def: "Fanfaron, vantard.", trad: "Boastful" },
      { mot: "Flegmatique", def: "Calme, impassible.", trad: "Phlegmatic" },
      { mot: "Captieux", def: "Trompeur sous une apparence de vérité.", trad: "Captious" },
      { mot: "Substantiel", def: "Important, nourrissant.", trad: "Substantial" },
      { mot: "Révérencieux", def: "Très respectueux.", trad: "Reverential" },
      { mot: "Sycophante", def: "Flatteur intéressé, délateur.", trad: "Sycophant" },
      { mot: "Caustique", def: "Ironique, mordant.", trad: "Caustic" },
      { mot: "Acerbe", def: "Dur, blessant dans les critiques.", trad: "Acerbic" },
      { mot: "Énigmatique", def: "Mystérieux, difficile à comprendre.", trad: "Enigmatic" },
      { mot: "Hypocoristique", def: "Forme affectueuse d'un mot ou prénom.", trad: "Hypocoristic" },
      { mot: "Volatile", def: "Instable, changeant facilement.", trad: "Volatile" },
      { mot: "Prégnant", def: "Qui s'impose à l'esprit, significatif.", trad: "Poignant" },
      { mot: "Diligent", def: "Rapide et appliqué dans l'exécution.", trad: "Diligent" },
      { mot: "Dédaigneux", def: "Méprisant, hautain.", trad: "Disdainful" },
      { mot: "Equanime", def: "D'une humeur égale, imperturbable.", trad: "Equanimous" },
      { mot: "Oiseux", def: "Inutile, vain.", trad: "Idle" },
      { mot: "Galvaudé", def: "Trop utilisé, dévalorisé.", trad: "Overused" },
      { mot: "Disert", def: "Qui parle avec aisance.", trad: "Articulate" },
      { mot: "Morose", def: "Triste, maussade.", trad: "Morose" },
  { mot: "Entrelacer", def: "Croiser ensemble des éléments de manière harmonieuse.", trad: "To intertwine" },
  { mot: "Tâche", def: "Travail ou activité à accomplir.", trad: "Task" },
  { mot: "Serein", def: "Paisible, calme, sans trouble.", trad: "Serene" },
  { mot: "Éclat", def: "Brillance ou intensité lumineuse ou sonore.", trad: "Sparkle / Burst" },
  { mot: "Gêne", def: "Sensation de malaise ou inconfort.", trad: "Discomfort" },
  { mot: "Furtif", def: "Qui passe inaperçu, discret et rapide.", trad: "Stealthy" },
  { mot: "Miroiter", def: "Briller avec des reflets changeants.", trad: "To shimmer" },
  { mot: "Gratifiant", def: "Qui procure une satisfaction personnelle.", trad: "Rewarding" },
  { mot: "Élan", def: "Mouvement rapide ou impulsion soudaine.", trad: "Momentum / Surge" },
  { mot: "Tendre", def: "Doux, affectueux ou fragile.", trad: "Tender" },
  { mot: "Allure", def: "Vitesse ou manière de se déplacer.", trad: "Pace / Appearance" },
  { mot: "Odeur", def: "Sensation perçue par le nez.", trad: "Smell" },
  { mot: "Paresse", def: "Manque d’envie d’agir, inactivité.", trad: "Laziness" },
  { mot: "Lueur", def: "Lumière faible ou diffuse.", trad: "Glimmer / Glow" },
  { mot: "Sillage", def: "Trace laissée dans l’eau ou dans l'air.", trad: "Wake / Trail" },
  { mot: "Brumeux", def: "Rempli de brume ou flou.", trad: "Foggy / Hazy" },
  { mot: "Rancune", def: "Sentiment négatif durable après une offense.", trad: "Grudge" },
  { mot: "Fardeau", def: "Charge lourde ou responsabilité pesante.", trad: "Burden" },
  { mot: "Effleurer", def: "Toucher légèrement ou à peine.", trad: "To graze / Brush" },
  { mot: "Brouhaha", def: "Bruit confus de voix ou d’activités.", trad: "Uproar / Hubbub" },
  { mot: "Léger", def: "Peu lourd, délicat ou subtil.", trad: "Light" },
  { mot: "Éveil", def: "Action de sortir du sommeil ou d’un état passif.", trad: "Awakening" },
  { mot: "Soupçon", def: "Petite quantité ou doute sur quelque chose.", trad: "Hint / Suspicion" },
  { mot: "Regard", def: "Façon de voir ou d’observer.", trad: "Look / Gaze" },
  { mot: "Chaleureux", def: "Qui exprime de la chaleur humaine.", trad: "Warm / Welcoming" },
  { mot: "Rugueux", def: "Qui n’est pas lisse, au toucher.", trad: "Rough" },
  { mot: "Bavard", def: "Qui parle beaucoup.", trad: "Talkative" },
  { mot: "Doux", def: "Agréable au toucher ou au cœur.", trad: "Soft / Sweet" },
  { mot: "Fente", def: "Ouverture fine et étroite.", trad: "Crack / Slit" },
  { mot: "Fourmillement", def: "Sensation de picotement.", trad: "Tingling" },
  { mot: "Clarté", def: "Qualité de ce qui est clair, compréhensible ou lumineux.", trad: "Clarity" },
  { mot: "Insolite", def: "Étrange, surprenant, hors du commun.", trad: "Unusual" },
  { mot: "Empreinte", def: "Marque laissée par pression ou symbole.", trad: "Imprint / Mark" },
  { mot: "Gonfler", def: "Augmenter de volume ou d’intensité.", trad: "To swell" },
  { mot: "Chuchoter", def: "Parler à voix très basse.", trad: "To whisper" },
  { mot: "Troublant", def: "Qui dérange ou émeut.", trad: "Disturbing / Moving" },
  { mot: "Apprivoiser", def: "Rendre moins sauvage ou plus familier.", trad: "To tame" },
  { mot: "Coupure", def: "Interruption ou blessure fine.", trad: "Cut / Break" },
  { mot: "Crispé", def: "Tendu, contracté sous l’effet du stress.", trad: "Tense" },
  { mot: "Dérapage", def: "Glissement incontrôlé ou écart de conduite.", trad: "Skid / Drift" },
  { mot: "Fuyant", def: "Qui évite le contact ou s’échappe.", trad: "Evasive" },
  { mot: "Rayon", def: "Trait lumineux ou section d’un magasin.", trad: "Ray / Aisle" },
  { mot: "Velouté", def: "Doux comme du velours.", trad: "Velvety" },
  { mot: "Sursaut", def: "Mouvement brusque dû à la surprise.", trad: "Startle / Jolt" },
  { mot: "Éraflure", def: "Blessure légère à la surface de la peau.", trad: "Scratch" },
  { mot: "Grésillement", def: "Petit bruit sec, rapide et répété.", trad: "Crackling / Sizzle" },
  { mot: "Assourdi", def: "Rendu moins fort, plus discret (son).", trad: "Muffled" },
  { mot: "Voilé", def: "Légèrement couvert, comme par un voile.", trad: "Veiled" },
  { mot: "Délicatesse", def: "Finesse, attention ou légèreté dans le geste.", trad: "Delicacy / Gentleness" }
];

    const container = document.getElementById('container');
    const bookmarkWidget = document.getElementById('bookmark-widget');
    const bookmarkedListContainer = document.getElementById('bookmarked-list-container');
    const bookmarkedList = document.getElementById('bookmarked-list');

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    const updateBookmarksList = () => {
        bookmarkedList.innerHTML = '';
        bookmarks.forEach(bookmark => {
            const li = document.createElement('li');
            li.textContent = bookmark;
            li.addEventListener('click', () => {
                const cardToScroll = document.querySelector(`.card[data-word="${bookmark}"]`);
                if (cardToScroll) {
                    cardToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            bookmarkedList.appendChild(li);
        });
    };

    mots.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.word = entry.mot;

        const bookmarkIcon = document.createElement('div');
        bookmarkIcon.className = 'bookmark-icon';
        bookmarkIcon.textContent = '★';
        if (bookmarks.includes(entry.mot)) {
            bookmarkIcon.classList.add('bookmarked');
        }

        const word = document.createElement('div');
        word.className = 'word';
        word.textContent = entry.mot;

        const translation = document.createElement('div');
        translation.className = 'translation';
        translation.textContent = `(${entry.trad})`;

        const definition = document.createElement('div');
        definition.className = 'definition';
        definition.textContent = entry.def;

        card.appendChild(bookmarkIcon);
        card.appendChild(word);
        card.appendChild(translation);
        card.appendChild(definition);
        container.appendChild(card);
    });

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('bookmark-icon')) {
            e.stopPropagation();
            const bookmarkIcon = e.target;
            const card = bookmarkIcon.parentElement;
            const word = card.dataset.word;

            if (!word) return;

            if (bookmarks.includes(word)) {
                bookmarks = bookmarks.filter(b => b !== word);
                bookmarkIcon.classList.remove('bookmarked');
            } else {
                bookmarks.push(word);
                bookmarkIcon.classList.add('bookmarked');
            }
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            updateBookmarksList();
        }
    });

    bookmarkWidget.addEventListener('click', () => {
        bookmarkedListContainer.classList.toggle('visible');
    });

    updateBookmarksList();
}); 
