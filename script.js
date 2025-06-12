document.addEventListener('DOMContentLoaded', () => {
    const bookmarkIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16v19.943l-8-5.714l-8 5.714zm2 2v14.057l6-4.286l6 4.286V5z"/></svg>`;
    const bookmarkedIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16v19.943l-8-5.714l-8 5.714z"/></svg>`;

    const mots = [
      { mot: "Perspicace", def: "Qui comprend vite et bien, doté d'une intelligence pénétrante.", trad: "Perceptive", phrase: "Son analyse perspicace a révélé la faille dans le système." },
      { mot: "Impératif", def: "Qui s'impose avec force, autoritaire ou nécessaire.", trad: "Imperative", phrase: "Il est impératif que nous respections les délais." },
      { mot: "Dévoué", def: "Qui se consacre entièrement aux autres.", trad: "Devoted", phrase: "C'est un employé dévoué qui ne compte jamais ses heures." },
      { mot: "Convivialité", def: "Capacité à créer une ambiance agréable, chaleureuse.", trad: "Conviviality", phrase: "La convivialité de cette auberge est réputée dans toute la région." },
      { mot: "Sagacité", def: "Finesse d'esprit, clairvoyance.", trad: "Sagacity", phrase: "Il a fait preuve d'une grande sagacité en résolvant cette énigme complexe." },
      { mot: "Altruiste", def: "Qui se soucie d'autrui de manière désintéressée.", trad: "Altruistic", phrase: "Son geste altruiste a permis de sauver de nombreuses vies." },
      { mot: "Austérité", def: "Caractère sévère, rigide ou dépouillé.", trad: "Austerity", phrase: "Le gouvernement a imposé une période d'austérité économique." },
      { mot: "Éloquence", def: "Art de bien parler, de convaincre par la parole.", trad: "Eloquence", phrase: "L'avocat a plaidé avec une éloquence qui a captivé le jury." },
      { mot: "Subtilité", def: "Finesse, délicatesse dans l'analyse ou l'expression.", trad: "Subtlety", phrase: "Il a exprimé son désaccord avec beaucoup de subtilité." },
      { mot: "Probité", def: "Honnêteté rigoureuse.", trad: "Probity", phrase: "La probité de ce juge est reconnue par tous ses pairs." },
      { mot: "Résilience", def: "Capacité à surmonter les chocs, à rebondir.", trad: "Resilience", phrase: "Elle a montré une résilience admirable face à l'adversité." },
      { mot: "Laconique", def: "Qui s'exprime en peu de mots.", trad: "Laconic", phrase: "Sa réponse laconique ne laissait place à aucune question." },
      { mot: "Concis", def: "Bref et précis dans l'expression.", trad: "Concise", phrase: "Son discours était concis mais puissant." },
      { mot: "Pertinent", def: "Qui convient parfaitement au sujet.", trad: "Relevant", phrase: "Votre commentaire est très pertinent pour notre discussion." },
      { mot: "Exalté", def: "Transporté par une émotion intense.", trad: "Exalted", phrase: "Le poète exalté déclama ses vers avec passion." },
      { mot: "Méticuleux", def: "Très attentif aux moindres détails.", trad: "Meticulous", phrase: "L'horloger est extrêmement méticuleux dans son travail." },
      { mot: "Prosaïque", def: "Manque d'originalité ou d'élévation.", trad: "Prosaic", phrase: "Il trouve la vie de bureau terriblement prosaïque." },
      { mot: "Intransigeant", def: "Qui n'admet aucun compromis.", trad: "Uncompromising", phrase: "Il est intransigeant sur les principes de sécurité." },
      { mot: "Lucidité", def: "Clarté d'esprit, conscience exacte des choses.", trad: "Lucidity", phrase: "Même dans la crise, il a gardé toute sa lucidité." },
      { mot: "Tempérance", def: "Modération, notamment dans les plaisirs.", trad: "Temperance", phrase: "La tempérance est une vertu qui prône la modération en tout." },
      { mot: "Solennel", def: "Grave, sérieux, empreint de dignité.", trad: "Solemn", phrase: "Le serment fut prêté lors d'une cérémonie solennelle." },
      { mot: "Pudique", def: "Réservé, discret dans l'expression.", trad: "Modest", phrase: "D'une nature pudique, elle parlait peu de ses sentiments." },
      { mot: "Omniprésent", def: "Toujours présent, partout à la fois.", trad: "Omnipresent", phrase: "La technologie est devenue omniprésente dans notre quotidien." },
      { mot: "Éphémère", def: "De courte durée, passager.", trad: "Ephemeral", phrase: "La beauté des fleurs de cerisier est éphémère." },
      { mot: "Abnégation", def: "Sacrifice de soi-même, renoncement.", trad: "Self-denial", phrase: "Les pompiers font preuve d'une grande abnégation." },
      { mot: "Équivoque", def: "Ambigu, qui peut être compris de plusieurs façons.", trad: "Equivocal", phrase: "Sa réponse équivoque a semé le doute dans l'assemblée." },
      { mot: "Envergure", def: "Ampleur, dimension importante.", trad: "Scope", phrase: "C'est un projet d'une envergure internationale." },
      { mot: "Pondéré", def: "Calme, mesuré dans ses jugements.", trad: "Level-headed", phrase: "Son avis pondéré était toujours très écouté." },
      { mot: "Pragmatisme", def: "Attitude tournée vers l'efficacité concrète.", trad: "Pragmatism", phrase: "Face à la situation, il a choisi de faire preuve de pragmatisme." },
      { mot: "Déférence", def: "Respect exprimé avec soumission.", trad: "Deference", phrase: "Il traitait les anciens avec une grande déférence." },
      { mot: "Sagace", def: "Qui fait preuve de pénétration d'esprit.", trad: "Sagacious", phrase: "Le détective sagace a résolu l'affaire en un temps record." },
      { mot: "Indulgent", def: "Qui pardonne facilement.", trad: "Indulgent", phrase: "Les parents se montraient très indulgents envers leurs enfants." },
      { mot: "Discret", def: "Réservé, qui agit sans se faire remarquer.", trad: "Discreet", phrase: "Il est entré dans la pièce d'un pas discret." },
      { mot: "Assidu", def: "Qui est régulier dans ce qu'il fait.", trad: "Assiduous", phrase: "C'est un étudiant assidu qui ne manque jamais un cours." },
      { mot: "Inéluctable", def: "Inévitable, qu'on ne peut éviter.", trad: "Unavoidable", phrase: "La montée des eaux semblait inéluctable." },
      { mot: "Érudit", def: "Qui possède un savoir approfondi.", trad: "Erudite", phrase: "Le professeur était un érudit spécialiste de l'histoire ancienne." },
      { mot: "Éloquent", def: "Qui s'exprime avec aisance et persuasion.", trad: "Eloquent", phrase: "Son discours éloquent a convaincu les plus sceptiques." },
      { mot: "Parcimonie", def: "Économie extrême, modération excessive.", trad: "Parsimony", phrase: "Il distribue ses compliments avec parcimonie." },
      { mot: "Clément", def: "Qui pardonne facilement, doux.", trad: "Clement", phrase: "Le roi fut clément envers les rebelles vaincus." },
      { mot: "Intrinsèque", def: "Propre à une chose, essentiel.", trad: "Intrinsic", phrase: "La valeur de cette œuvre est intrinsèque à son histoire." },
      { mot: "Velléité", def: "Volonté faible, intention non suivie d'effet.", trad: "Velleity", phrase: "Il a eu une velléité de partir, mais il est resté." },
      { mot: "Incisif", def: "Qui attaque ou tranche vivement.", trad: "Incisive", phrase: "Sa critique était juste mais incisive." },
      { mot: "Altier", def: "Fier, hautain.", trad: "Haughty", phrase: "Son regard altier intimidait ses interlocuteurs." },
      { mot: "Hédoniste", def: "Qui recherche le plaisir comme but de la vie.", trad: "Hedonist", phrase: "En tant qu'hédoniste, il profite de chaque instant." },
      { mot: "Persévérant", def: "Qui continue malgré les obstacles.", trad: "Persevering", phrase: "Grâce à son caractère persévérant, il a atteint son but." },
      { mot: "Inaltérable", def: "Qui ne peut être altéré, reste intact.", trad: "Unalterable", phrase: "Leur amitié semblait inaltérable au fil des ans." },
      { mot: "Magnanime", def: "Généreux, indulgent envers les faibles.", trad: "Magnanimous", phrase: "Le vainqueur fut magnanime et épargna ses ennemis." },
      { mot: "Subversif", def: "Qui cherche à renverser l'ordre établi.", trad: "Subversive", phrase: "Ses écrits étaient considérés comme subversifs par le régime." },
      { mot: "Ineffable", def: "Qu'on ne peut exprimer avec des mots.", trad: "Ineffable", phrase: "La beauté du paysage était d'une joie ineffable." },
      { mot: "Verbeux", def: "Qui parle trop ou utilise trop de mots.", trad: "Verbose", phrase: "Son explication était si verbeuse que personne ne comprenait." },
      { mot: "Immuable", def: "Qui ne change pas.", trad: "Immutable", phrase: "Les lois de la physique sont considérées comme immuables." },
      { mot: "Taciturne", def: "Silencieux, peu bavard.", trad: "Taciturn", phrase: "D'un naturel taciturne, il observait plus qu'il ne parlait." },
      { mot: "Obsolète", def: "Désuet, dépassé.", trad: "Obsolete", phrase: "Ce lecteur de disquettes est complètement obsolète." },
      { mot: "Austère", def: "Sévère, strict.", trad: "Austere", phrase: "Il menait une vie austère, loin de tout luxe." },
      { mot: "Volubile", def: "Qui parle beaucoup et facilement.", trad: "Voluble", phrase: "Ma voisine est une personne très volubile." },
      { mot: "Dissonant", def: "Manque d'harmonie.", trad: "Dissonant", phrase: "L'accord était dissonant et a surpris l'auditoire." },
      { mot: "Fastidieux", def: "Ennuyeux, lassant.", trad: "Tedious", phrase: "Remplir ces formulaires est un travail fastidieux." },
      { mot: "Disparate", def: "Hétérogène, sans unité.", trad: "Disparate", phrase: "La collection d'objets était disparate mais fascinante." },
      { mot: "Fulgurant", def: "Très rapide, soudain et intense.", trad: "Blazing", phrase: "Sa carrière a connu un succès fulgurant." },
      { mot: "Périlleux", def: "Dangereux, risqué.", trad: "Perilous", phrase: "L'ascension de cette montagne est un voyage périlleux." },
      { mot: "Réticent", def: "Hésitant, peu enclin à agir.", trad: "Reticent", phrase: "Il était réticent à l'idée de partager son secret." },
      { mot: "Désuet", def: "Dépassé, plus en usage.", trad: "Outdated", phrase: "Cette expression est maintenant considérée comme désuète." },
      { mot: "Inepte", def: "Sans capacité, absurde.", trad: "Inept", phrase: "Sa tentative de réparation était totalement inepte." },
      { mot: "Concupiscent", def: "Porté vers les plaisirs charnels.", trad: "Concupiscent", phrase: "Son regard concupiscent la mettait mal à l'aise." },
      { mot: "Acrimonieux", def: "Agressif, amer dans les propos.", trad: "Acrimonious", phrase: "Le débat est devenu acrimonieux après quelques minutes." },
      { mot: "Véhément", def: "Emporté, passionné.", trad: "Vehement", phrase: "Il a prononcé un plaidoyer véhément en faveur de la justice." },
      { mot: "Rédhibitoire", def: "Qui constitue un obstacle absolu.", trad: "Deal-breaker", phrase: "Son manque de ponctualité était un défaut rédhibitoire pour le poste." },
      { mot: "Impavide", def: "Sans peur, calme face au danger.", trad: "Fearless", phrase: "Le soldat restait impavide face à l'ennemi." },
      { mot: "Fallacieux", def: "Trompeur, mensonger.", trad: "Fallacious", phrase: "L'argument du politicien était fallacieux." },
      { mot: "Paradoxal", def: "Contraire à l'opinion commune, surprenant.", trad: "Paradoxical", phrase: "Il est paradoxal de vouloir la paix en préparant la guerre." },
      { mot: "Ostentatoire", def: "Qui cherche à attirer l'attention.", trad: "Ostentatious", phrase: "Sa richesse ostentatoire agaçait son entourage." },
      { mot: "Ambivalent", def: "Qui présente deux aspects contradictoires.", trad: "Ambivalent", phrase: "Ses sentiments à son égard étaient ambivalents." },
      { mot: "Apaisant", def: "Qui calme, tranquillise.", trad: "Soothing", phrase: "Le son de la pluie est très apaisant." },
      { mot: "Frugal", def: "Simple, sans excès.", trad: "Frugal", phrase: "Il menait un mode de vie frugal et simple." },
      { mot: "Prodigal", def: "Dépensier, généreux à l'excès.", trad: "Prodigal", phrase: "L'enfant prodigue est revenu après avoir tout dépensé." },
      { mot: "Intègre", def: "D'une honnêteté absolue.", trad: "Upright", phrase: "C'est un fonctionnaire intègre et respecté." },
      { mot: "Ardu", def: "Difficile, pénible.", trad: "Arduous", phrase: "L'apprentissage de cette langue est une tâche ardue." },
      { mot: "Atavique", def: "Hérité des ancêtres.", trad: "Atavistic", phrase: "Il ressentait une peur atavique de l'obscurité." },
      { mot: "Ténébreux", def: "Sombre, obscur.", trad: "Gloomy", phrase: "Un personnage ténébreux se tenait dans l'ombre." },
      { mot: "Hâbleur", def: "Fanfaron, vantard.", trad: "Boastful", phrase: "Ce n'est qu'un hâbleur, ne croyez pas ses histoires." },
      { mot: "Flegmatique", def: "Calme, impassible.", trad: "Phlegmatic", phrase: "Son tempérament flegmatique lui permet de gérer le stress." },
      { mot: "Captieux", def: "Trompeur sous une apparence de vérité.", trad: "Captious", phrase: "Son raisonnement captieux a trompé l'auditoire." },
      { mot: "Substantiel", def: "Important, nourrissant.", trad: "Substantial", phrase: "Il a fait un repas substantiel avant de partir." },
      { mot: "Révérencieux", def: "Très respectueux.", trad: "Reverential", phrase: "Il s'inclina d'un air révérencieux devant le roi." },
      { mot: "Sycophante", def: "Flatteur intéressé, délateur.", trad: "Sycophant", phrase: "Le sycophante ne cessait de complimenter le directeur." },
      { mot: "Caustique", def: "Ironique, mordant.", trad: "Caustic", phrase: "Son humour caustique n'était pas apprécié de tous." },
      { mot: "Acerbe", def: "Dur, blessant dans les critiques.", trad: "Acerbic", phrase: "La critique du film était particulièrement acerbe." },
      { mot: "Énigmatique", def: "Mystérieux, difficile à comprendre.", trad: "Enigmatic", phrase: "Son sourire énigmatique cachait de lourds secrets." },
      { mot: "Hypocoristique", def: "Forme affectueuse d'un mot ou prénom.", trad: "Hypocoristic", phrase: "Il utilisait un hypocoristique pour appeler sa grand-mère." },
      { mot: "Volatile", def: "Instable, changeant facilement.", trad: "Volatile", phrase: "Le marché boursier est devenu très volatile." },
      { mot: "Prégnant", def: "Qui s'impose à l'esprit, significatif.", trad: "Poignant", phrase: "Le silence qui a suivi était particulièrement prégnant." },
      { mot: "Diligent", def: "Rapide et appliqué dans l'exécution.", trad: "Diligent", phrase: "Un employé diligent termine toujours son travail à temps." },
      { mot: "Dédaigneux", def: "Méprisant, hautain.", trad: "Disdainful", phrase: "Elle lui lança un regard dédaigneux." },
      { mot: "Equanime", def: "D'une humeur égale, imperturbable.", trad: "Equanimous", phrase: "Il a reçu la nouvelle avec un calme équanime." },
      { mot: "Oiseux", def: "Inutile, vain.", trad: "Idle", phrase: "Il est oiseux de débattre sur ce point, la décision est prise." },
      { mot: "Galvaudé", def: "Trop utilisé, dévalorisé.", trad: "Overused", phrase: "Le mot 'génie' est souvent galvaudé de nos jours." },
      { mot: "Disert", def: "Qui parle avec aisance.", trad: "Articulate", phrase: "C'est un orateur disert qui captive son public." },
      { mot: "Morose", def: "Triste, maussade.", trad: "Morose", phrase: "L'ambiance au bureau était morose après l'annonce des licenciements." },
      { mot: "Entrelacer", def: "Croiser ensemble des éléments de manière harmonieuse.", trad: "To intertwine", phrase: "Les lierres s'entrelacent sur le vieux mur de pierre." },
      { mot: "Tâche", def: "Travail ou activité à accomplir.", trad: "Task", phrase: "Laver la vaisselle est une tâche quotidienne." },
      { mot: "Serein", def: "Paisible, calme, sans trouble.", trad: "Serene", phrase: "Malgré la tempête, le capitaine restait serein." },
      { mot: "Éclat", def: "Brillance ou intensité lumineuse ou sonore.", trad: "Sparkle / Burst", phrase: "L'éclat des diamants l'a aveuglée un instant." },
      { mot: "Gêne", def: "Sensation de malaise ou inconfort.", trad: "Discomfort", phrase: "Une certaine gêne s'est installée après sa remarque." },
      { mot: "Furtif", def: "Qui passe inaperçu, discret et rapide.", trad: "Stealthy", phrase: "Le chat fit un mouvement furtif vers sa proie." },
      { mot: "Miroiter", def: "Briller avec des reflets changeants.", trad: "To shimmer", phrase: "La surface du lac miroitait sous le soleil." },
      { mot: "Gratifiant", def: "Qui procure une satisfaction personnelle.", trad: "Rewarding", phrase: "Aider les autres est un travail très gratifiant." },
      { mot: "Élan", def: "Mouvement rapide ou impulsion soudaine.", trad: "Momentum / Surge", phrase: "Il a pris son élan et a sauté par-dessus l'obstacle." },
      { mot: "Tendre", def: "Doux, affectueux ou fragile.", trad: "Tender", phrase: "Elle lui adressa un tendre sourire." },
      { mot: "Allure", def: "Vitesse ou manière de se déplacer.", trad: "Pace / Appearance", phrase: "Le cheval accéléra son allure pour rattraper les autres." },
      { mot: "Odeur", def: "Sensation perçue par le nez.", trad: "Smell", phrase: "L'odeur du pain frais emplissait la boulangerie." },
      { mot: "Paresse", def: "Manque d'envie d'agir, inactivité.", trad: "Laziness", phrase: "La paresse est souvent considérée comme un défaut." },
      { mot: "Lueur", def: "Lumière faible ou diffuse.", trad: "Glimmer / Glow", phrase: "Une faible lueur filtrait sous la porte." },
      { mot: "Sillage", def: "Trace laissée dans l'eau ou dans l'air.", trad: "Wake / Trail", phrase: "Le bateau laissait un long sillage derrière lui." },
      { mot: "Brumeux", def: "Rempli de brume ou flou.", trad: "Foggy / Hazy", phrase: "Le temps était brumeux ce matin-là." },
      { mot: "Rancune", def: "Sentiment négatif durable après une offense.", trad: "Grudge", phrase: "Il gardait une vieille rancune contre son voisin." },
      { mot: "Fardeau", def: "Charge lourde ou responsabilité pesante.", trad: "Burden", phrase: "Ce secret est devenu un lourd fardeau pour lui." },
      { mot: "Effleurer", def: "Toucher légèrement ou à peine.", trad: "To graze / Brush", phrase: "Ses doigts ont à peine effleuré la surface de l'eau." },
      { mot: "Brouhaha", def: "Bruit confus de voix ou d'activités.", trad: "Uproar / Hubbub", phrase: "Le brouhaha de la foule couvrait la musique." },
      { mot: "Léger", def: "Peu lourd, délicat ou subtil.", trad: "Light", phrase: "Elle portait une robe légère en coton." },
      { mot: "Éveil", def: "Action de sortir du sommeil ou d'un état passif.", trad: "Awakening", phrase: "L'éveil de la nature au printemps est un spectacle magnifique." },
      { mot: "Soupçon", def: "Petite quantité ou doute sur quelque chose.", trad: "Hint / Suspicion", phrase: "Ajoutez juste un soupçon de sel à la recette." },
      { mot: "Regard", def: "Façon de voir ou d'observer.", trad: "Look / Gaze", phrase: "Son regard intense la fit rougir." },
      { mot: "Chaleureux", def: "Qui exprime de la chaleur humaine.", trad: "Warm / Welcoming", phrase: "Il nous a offert un accueil chaleureux." },
      { mot: "Rugueux", def: "Qui n'est pas lisse, au toucher.", trad: "Rough", phrase: "L'écorce de l'arbre était rugueuse sous ses doigts." },
      { mot: "Bavard", def: "Qui parle beaucoup.", trad: "Talkative", phrase: "Mon ami est si bavard qu'il ne me laisse jamais parler." },
      { mot: "Doux", def: "Agréable au toucher ou au cœur.", trad: "Soft / Sweet", phrase: "Le pelage du chaton est incroyablement doux." },
      { mot: "Fente", def: "Ouverture fine et étroite.", trad: "Crack / Slit", phrase: "Il regarda à travers la fente de la porte." },
      { mot: "Fourmillement", def: "Sensation de picotement.", trad: "Tingling", phrase: "Il sentit un fourmillement dans sa jambe endormie." },
      { mot: "Clarté", def: "Qualité de ce qui est clair, compréhensible ou lumineux.", trad: "Clarity", phrase: "La clarté de ses explications a aidé tout le monde à comprendre." },
      { mot: "Insolite", def: "Étrange, surprenant, hors du commun.", trad: "Unusual", phrase: "Nous avons découvert un restaurant insolite au coin de la rue." },
      { mot: "Empreinte", def: "Marque laissée par pression ou symbole.", trad: "Imprint / Mark", phrase: "L'enquêteur a trouvé une empreinte de pas dans la boue." },
      { mot: "Gonfler", def: "Augmenter de volume ou d'intensité.", trad: "To swell", phrase: "Le ballon a commencé à gonfler rapidement." },
      { mot: "Chuchoter", def: "Parler à voix très basse.", trad: "To whisper", phrase: "Elle se pencha pour lui chuchoter un secret." },
      { mot: "Troublant", def: "Qui dérange ou émeut.", trad: "Disturbing / Moving", phrase: "Le film contenait des scènes particulièrement troublantes." },
      { mot: "Apprivoiser", def: "Rendre moins sauvage ou plus familier.", trad: "To tame", phrase: "Le Petit Prince voulait apprivoiser le renard." },
      { mot: "Coupure", def: "Interruption ou blessure fine.", trad: "Cut / Break", phrase: "Une coupure de courant a plongé la ville dans le noir." },
      { mot: "Crispé", def: "Tendu, contracté sous l'effet du stress.", trad: "Tense", phrase: "Son visage était crispé par l'anxiété." },
      { mot: "Dérapage", def: "Glissement incontrôlé ou écart de conduite.", trad: "Skid / Drift", phrase: "Le dérapage de la voiture a été évité de justesse." },
      { mot: "Fuyant", def: "Qui évite le contact ou s'échappe.", trad: "Evasive", phrase: "Son regard fuyant trahissait son mensonge." },
      { mot: "Rayon", def: "Trait lumineux ou section d'un magasin.", trad: "Ray / Aisle", phrase: "Un rayon de soleil perçait à travers les nuages." },
      { mot: "Velouté", def: "Doux comme du velours.", trad: "Velvety", phrase: "La soupe avait une texture riche et veloutée." },
      { mot: "Sursaut", def: "Mouvement brusque dû à la surprise.", trad: "Startle / Jolt", phrase: "Le bruit soudain lui a fait faire un sursaut." },
      { mot: "Éraflure", def: "Blessure légère à la surface de la peau.", trad: "Scratch", phrase: "Il s'est fait une petite éraflure en tombant." },
      { mot: "Grésillement", def: "Petit bruit sec, rapide et répété.", trad: "Crackling / Sizzle", phrase: "Le grésillement du feu dans la cheminée était réconfortant." },
      { mot: "Assourdi", def: "Rendu moins fort, plus discret (son).", trad: "Muffled", phrase: "Le bruit des pas était assourdi par la moquette." },
      { mot: "Voilé", def: "Légèrement couvert, comme par un voile.", trad: "Veiled", phrase: "Le ciel était voilé par de fins nuages." },
      { mot: "Délicatesse", def: "Finesse, attention ou légèreté dans le geste.", trad: "Delicacy / Gentleness", phrase: "Elle a manipulé l'objet fragile avec une grande délicatesse." }
    ];

    const container = document.getElementById('container');
    const bookmarkWidget = document.getElementById('bookmark-widget');
    const bookmarkedListContainer = document.getElementById('bookmarked-list-container');
    const bookmarkedList = document.getElementById('bookmarked-list');
    const randomWordWidget = document.getElementById('random-word-widget');
    const examplePhraseBar = document.getElementById('example-phrase-bar');
    const wordData = new Map(mots.map(m => [m.mot, m]));

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
        if (bookmarks.includes(entry.mot)) {
            bookmarkIcon.classList.add('bookmarked');
            bookmarkIcon.innerHTML = bookmarkedIconSVG;
        } else {
            bookmarkIcon.innerHTML = bookmarkIconSVG;
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
        const bookmarkIcon = e.target.closest('.bookmark-icon');
        if (bookmarkIcon) {
            e.stopPropagation();
            const card = bookmarkIcon.parentElement;
            const word = card.dataset.word;

            if (!word) return;

            if (bookmarks.includes(word)) {
                bookmarks = bookmarks.filter(b => b !== word);
                bookmarkIcon.classList.remove('bookmarked');
                bookmarkIcon.innerHTML = bookmarkIconSVG;
            } else {
                bookmarks.push(word);
                bookmarkIcon.classList.add('bookmarked');
                bookmarkIcon.innerHTML = bookmarkedIconSVG;
            }
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            updateBookmarksList();
        }
    });

    // --- Infinite Scroll Loop & Example Phrase Observer ---
    if (mots.length > 0) {
        const firstCard = container.querySelector('.card:first-child');
        const lastCard = container.querySelector('.card:last-child');

        if (firstCard && lastCard) {
            // Clone the last card and prepend it for upward looping.
            const clonedLastCard = lastCard.cloneNode(true);
            container.prepend(clonedLastCard);

            // Clone the first card and append it for downward looping.
            const clonedFirstCard = firstCard.cloneNode(true);
            container.appendChild(clonedFirstCard);

            // Start the view at the real first card, not the cloned one at the top.
            // This is done without animation so it's invisible to the user.
            container.scrollTo({ top: container.clientHeight, behavior: 'auto' });

            // Listen for scroll events to handle the loop.
            container.addEventListener('scroll', () => {
                const cardHeight = container.clientHeight;
                const totalOriginalCards = mots.length;
                const bottomLoopThreshold = (totalOriginalCards + 1) * cardHeight;
                const topLoopThreshold = 0;

                // When scrolled past the last real card (to the appended clone)
                if (container.scrollTop >= bottomLoopThreshold) {
                    container.style.scrollSnapType = 'none';
                    // Jump to the real first card
                    container.scrollTo({ top: cardHeight, behavior: 'auto' });
                    setTimeout(() => {
                        container.style.scrollSnapType = 'y mandatory';
                    }, 20);
                }
                // When scrolled past the first real card (to the prepended clone)
                else if (container.scrollTop <= topLoopThreshold) {
                    container.style.scrollSnapType = 'none';
                    // Jump to the real last card
                    container.scrollTo({ top: totalOriginalCards * cardHeight, behavior: 'auto' });
                    setTimeout(() => {
                        container.style.scrollSnapType = 'y mandatory';
                    }, 20);
                }
            }, { passive: true });
        }

        if ('IntersectionObserver' in window) {
            const observerOptions = {
                root: container,
                rootMargin: '0px',
                threshold: 0.6 // Fire when 60% of a card is visible
            };
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const word = entry.target.dataset.word;
                        const data = wordData.get(word);
                        if (data && data.phrase) {
                            examplePhraseBar.textContent = data.phrase;
                            examplePhraseBar.classList.add('visible');
                        } else {
                            examplePhraseBar.classList.remove('visible');
                        }
                    }
                });
            }, observerOptions);
        
            // Observe all the *real* cards, not the clones
            const realCards = Array.from(container.children).slice(1, -1);
            realCards.forEach(card => observer.observe(card));
        }
    }

    randomWordWidget.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * mots.length);
        const cardHeight = container.clientHeight;
        const scrollToPosition = (randomIndex + 1) * cardHeight;

        container.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });

    bookmarkWidget.addEventListener('click', () => {
        bookmarkedListContainer.classList.toggle('visible');
    });

    updateBookmarksList();
}); 