document.addEventListener('DOMContentLoaded', () => {
    const bookmarkIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16v19.943l-8-5.714l-8 5.714zm2 2v14.057l6-4.286l6 4.286V5z"/></svg>`;
    const bookmarkedIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16v19.943l-8-5.714l-8 5.714z"/></svg>`;

    const mots = [
      { mot: "Perspicace", type: "adjectif", def: "Qui comprend vite et bien, doté d'une intelligence pénétrante.", trad: "Perceptive", phrase: "Son analyse perspicace a révélé la faille dans le système.", syn: ["sagace", "clairvoyant"] },
      { mot: "Impératif", type: "nom (m)", def: "Qui s'impose avec force, autoritaire ou nécessaire.", trad: "Imperative", phrase: "Il est impératif que nous respections les délais.", syn: ["essentiel", "nécessaire"] },
      { mot: "Dévoué", type: "adjectif", def: "Qui se consacre entièrement aux autres.", trad: "Devoted", phrase: "C'est un employé dévoué qui ne compte jamais ses heures.", syn: ["dévot", "fidèle"] },
      { mot: "Convivialité", type: "nom (f)", def: "Capacité à créer une ambiance agréable, chaleureuse.", trad: "Conviviality", phrase: "La convivialité de cette auberge est réputée dans toute la région.", syn: ["sociabilité", "chaleur"] },
      { mot: "Sagacité", type: "nom (f)", def: "Finesse d'esprit, clairvoyance.", trad: "Sagacity", phrase: "Il a fait preuve d'une grande sagacité en résolvant cette énigme complexe.", syn: ["perspicacité", "discernement"] },
      { mot: "Altruiste", type: "adjectif", def: "Qui se soucie d'autrui de manière désintéressée.", trad: "Altruistic", phrase: "Son geste altruiste a permis de sauver de nombreuses vies.", syn: ["généreux", "désintéressé"] },
      { mot: "Austérité", type: "nom (f)", def: "Caractère sévère, rigide ou dépouillé.", trad: "Austerity", phrase: "Le gouvernement a imposé une période d'austérité économique.", syn: ["rigueur", "sévérité"] },
      { mot: "Éloquence", type: "nom (f)", def: "Art de bien parler, de convaincre par la parole.", trad: "Eloquence", phrase: "L'avocat a plaidé avec une éloquence qui a captivé le jury.", syn: ["facilité de parole", "art oratoire"] },
      { mot: "Subtilité", type: "nom (f)", def: "Finesse, délicatesse dans l'analyse ou l'expression.", trad: "Subtlety", phrase: "Il a exprimé son désaccord avec beaucoup de subtilité.", syn: ["finesse", "délicatesse"] },
      { mot: "Probité", type: "nom (f)", def: "Honnêteté rigoureuse.", trad: "Probity", phrase: "La probité de ce juge est reconnue par tous ses pairs.", syn: ["honnêteté", "intégrité"] },
      { mot: "Résilience", type: "nom (f)", def: "Capacité à surmonter les chocs, à rebondir.", trad: "Resilience", phrase: "Elle a montré une résilience admirable face à l'adversité.", syn: ["endurance", "force"] },
      { mot: "Laconique", type: "adjectif", def: "Qui s'exprime en peu de mots.", trad: "Laconic", phrase: "Sa réponse laconique ne laissait place à aucune question.", syn: ["bref", "concis"] },
      { mot: "Concis", type: "adjectif", def: "Bref et précis dans l'expression.", trad: "Concise", phrase: "Son discours était concis mais puissant.", syn: ["bref", "succinct"] },
      { mot: "Pertinent", type: "adjectif", def: "Qui convient parfaitement au sujet.", trad: "Relevant", phrase: "Votre commentaire est très pertinent pour notre discussion.", syn: ["approprié", "adéquat"] },
      { mot: "Exalté", type: "adjectif", def: "Transporté par une émotion intense.", trad: "Exalted", phrase: "Le poète exalté déclama ses vers avec passion.", syn: ["enthousiaste", "passionné"] },
      { mot: "Méticuleux", type: "adjectif", def: "Très attentif aux moindres détails.", trad: "Meticulous", phrase: "L'horloger est extrêmement méticuleux dans son travail.", syn: ["soigneux", "minutieux"] },
      { mot: "Prosaïque", type: "adjectif", def: "Manque d'originalité ou d'élévation.", trad: "Prosaic", phrase: "Il trouve la vie de bureau terriblement prosaïque.", syn: ["banal", "commun"] },
      { mot: "Intransigeant", type: "adjectif", def: "Qui n'admet aucun compromis.", trad: "Uncompromising", phrase: "Il est intransigeant sur les principes de sécurité.", syn: ["rigide", "inflexible"] },
      { mot: "Lucidité", type: "nom (f)", def: "Clarté d'esprit, conscience exacte des choses.", trad: "Lucidity", phrase: "Même dans la crise, il a gardé toute sa lucidité.", syn: ["clarté", "clairvoyance"] },
      { mot: "Tempérance", type: "nom (f)", def: "Modération, notamment dans les plaisirs.", trad: "Temperance", phrase: "La tempérance est une vertu qui prône la modération en tout.", syn: ["modération", "sobriété"] },
      { mot: "Solennel", type: "adjectif", def: "Grave, sérieux, empreint de dignité.", trad: "Solemn", phrase: "Le serment fut prêté lors d'une cérémonie solennelle.", syn: ["grave", "majestueux"] },
      { mot: "Pudique", type: "adjectif", def: "Réservé, discret dans l'expression.", trad: "Modest", phrase: "D'une nature pudique, elle parlait peu de ses sentiments.", syn: ["réservé", "discret"] },
      { mot: "Omniprésent", type: "adjectif", def: "Toujours présent, partout à la fois.", trad: "Omnipresent", phrase: "La technologie est devenue omniprésente dans notre quotidien.", syn: ["partout", "universel"] },
      { mot: "Éphémère", type: "adjectif", def: "De courte durée, passager.", trad: "Ephemeral", phrase: "La beauté des fleurs de cerisier est éphémère.", syn: ["passager", "fugace"] },
      { mot: "Abnégation", type: "nom (f)", def: "Sacrifice de soi-même, renoncement.", trad: "Self-denial", phrase: "Les pompiers font preuve d'une grande abnégation.", syn: ["sacrifice", "renoncement"] },
      { mot: "Équivoque", type: "adjectif", def: "Ambigu, qui peut être compris de plusieurs façons.", trad: "Equivocal", phrase: "Sa réponse équivoque a semé le doute dans l'assemblée.", syn: ["ambigu", "incertain"] },
      { mot: "Envergure", type: "nom (f)", def: "Ampleur, dimension importante.", trad: "Scope", phrase: "C'est un projet d'une envergure internationale.", syn: ["ampleur", "portée"] },
      { mot: "Pondéré", type: "adjectif", def: "Calme, mesuré dans ses jugements.", trad: "Level-headed", phrase: "Son avis pondéré était toujours très écouté.", syn: ["mesuré", "équilibré"] },
      { mot: "Pragmatisme", type: "nom (m)", def: "Attitude tournée vers l'efficacité concrète.", trad: "Pragmatism", phrase: "Face à la situation, il a choisi de faire preuve de pragmatisme.", syn: ["réalisme", "efficacité"] },
      { mot: "Déférence", type: "nom (f)", def: "Respect exprimé avec soumission.", trad: "Deference", phrase: "Il traitait les anciens avec une grande déférence.", syn: ["respect", "considération"] },
      { mot: "Sagace", type: "adjectif", def: "Qui fait preuve de pénétration d'esprit.", trad: "Sagacious", phrase: "Le détective sagace a résolu l'affaire en un temps record.", syn: ["perspicace", "astucieux"] },
      { mot: "Indulgent", type: "adjectif", def: "Qui pardonne facilement.", trad: "Indulgent", phrase: "Les parents se montraient très indulgents envers leurs enfants.", syn: ["tolérant", "clément"] },
      { mot: "Discret", type: "adjectif", def: "Réservé, qui agit sans se faire remarquer.", trad: "Discreet", phrase: "Il est entré dans la pièce d'un pas discret.", syn: ["réservé", "silencieux"] },
      { mot: "Assidu", type: "adjectif", def: "Qui est régulier dans ce qu'il fait.", trad: "Assiduous", phrase: "C'est un étudiant assidu qui ne manque jamais un cours.", syn: ["régulier", "constant"] },
      { mot: "Inéluctable", type: "adjectif", def: "Inévitable, qu'on ne peut éviter.", trad: "Unavoidable", phrase: "La montée des eaux semblait inéluctable.", syn: ["inévitable", "fatal"] },
      { mot: "Érudit", type: "nom (m)", def: "Qui possède un savoir approfondi.", trad: "Erudite", phrase: "Le professeur était un érudit spécialiste de l'histoire ancienne.", syn: ["savant", "cultivé"] },
      { mot: "Éloquent", type: "adjectif", def: "Qui s'exprime avec aisance et persuasion.", trad: "Eloquent", phrase: "Son discours éloquent a convaincu les plus sceptiques.", syn: ["persuasif", "disert"] },
      { mot: "Parcimonie", type: "nom (f)", def: "Économie extrême, modération excessive.", trad: "Parsimony", phrase: "Il distribue ses compliments avec parcimonie.", syn: ["économie", "avarice"] },
      { mot: "Clément", type: "adjectif", def: "Qui pardonne facilement, doux.", trad: "Clement", phrase: "Le roi fut clément envers les rebelles vaincus.", syn: ["indulgent", "miséricordieux"] },
      { mot: "Intrinsèque", type: "adjectif", def: "Propre à une chose, essentiel.", trad: "Intrinsic", phrase: "La valeur de cette œuvre est intrinsèque à son histoire.", syn: ["essentiel", "inhérent"] },
      { mot: "Velléité", type: "nom (f)", def: "Volonté faible, intention non suivie d'effet.", trad: "Velleity", phrase: "Il a eu une velléité de partir, mais il est resté.", syn: ["intention", "aspiration"] },
      { mot: "Incisif", type: "adjectif", def: "Qui attaque ou tranche vivement.", trad: "Incisive", phrase: "Sa critique était juste mais incisive.", syn: ["mordant", "tranchant"] },
      { mot: "Altier", type: "adjectif", def: "Fier, hautain.", trad: "Haughty", phrase: "Son regard altier intimidait ses interlocuteurs.", syn: ["hautain", "arrogant"] },
      { mot: "Hédoniste", type: "nom", def: "Qui recherche le plaisir comme but de la vie.", trad: "Hedonist", phrase: "En tant qu'hédoniste, il profite de chaque instant.", syn: ["épicurien", "jouisseur"] },
      { mot: "Persévérant", type: "adjectif", def: "Qui continue malgré les obstacles.", trad: "Persevering", phrase: "Grâce à son caractère persévérant, il a atteint son but.", syn: ["tenace", "obstiné"] },
      { mot: "Inaltérable", type: "adjectif", def: "Qui ne peut être altéré, reste intact.", trad: "Unalterable", phrase: "Leur amitié semblait inaltérable au fil des ans.", syn: ["immuable", "durable"] },
      { mot: "Magnanime", type: "adjectif", def: "Généreux, indulgent envers les faibles.", trad: "Magnanimous", phrase: "Le vainqueur fut magnanime et épargna ses ennemis.", syn: ["généreux", "bienveillant"] },
      { mot: "Subversif", type: "adjectif", def: "Qui cherche à renverser l'ordre établi.", trad: "Subversive", phrase: "Ses écrits étaient considérés comme subversifs par le régime.", syn: ["révolutionnaire", "destructeur"] },
      { mot: "Ineffable", type: "adjectif", def: "Qu'on ne peut exprimer avec des mots.", trad: "Ineffable", phrase: "La beauté du paysage était d'une joie ineffable.", syn: ["inexprimable", "indicible"] },
      { mot: "Verbeux", type: "adjectif", def: "Qui parle trop ou utilise trop de mots.", trad: "Verbose", phrase: "Son explication était si verbeuse que personne ne comprenait.", syn: ["bavard", "prolixe"] },
      { mot: "Immuable", type: "adjectif", def: "Qui ne change pas.", trad: "Immutable", phrase: "Les lois de la physique sont considérées comme immuables.", syn: ["inchangé", "constant"] },
      { mot: "Taciturne", type: "adjectif", def: "Silencieux, peu bavard.", trad: "Taciturn", phrase: "D'un naturel taciturne, il observait plus qu'il ne parlait.", syn: ["silencieux", "réservé"] },
      { mot: "Obsolète", type: "adjectif", def: "Désuet, dépassé.", trad: "Obsolete", phrase: "Ce lecteur de disquettes est complètement obsolète.", syn: ["dépassé", "désuet"] },
      { mot: "Austère", type: "adjectif", def: "Sévère, strict.", trad: "Austere", phrase: "Il menait une vie austère, loin de tout luxe.", syn: ["sévère", "strict"] },
      { mot: "Volubile", type: "adjectif", def: "Qui parle beaucoup et facilement.", trad: "Voluble", phrase: "Ma voisine est une personne très volubile.", syn: ["bavard", "loquace"] },
      { mot: "Dissonant", type: "adjectif", def: "Manque d'harmonie.", trad: "Dissonant", phrase: "L'accord était dissonant et a surpris l'auditoire.", syn: ["discordant", "détonnant"] },
      { mot: "Fastidieux", type: "adjectif", def: "Ennuyeux, lassant.", trad: "Tedious", phrase: "Remplir ces formulaires est un travail fastidieux.", syn: ["ennuyeux", "lassant"] },
      { mot: "Disparate", type: "adjectif", def: "Hétérogène, sans unité.", trad: "Disparate", phrase: "La collection d'objets était disparate mais fascinante.", syn: ["hétéroclite", "divers"] },
      { mot: "Fulgurant", type: "adjectif", def: "Très rapide, soudain et intense.", trad: "Blazing", phrase: "Sa carrière a connu un succès fulgurant.", syn: ["rapide", "éblouissant"] },
      { mot: "Périlleux", type: "adjectif", def: "Dangereux, risqué.", trad: "Perilous", phrase: "L'ascension de cette montagne est un voyage périlleux.", syn: ["dangereux", "risqué"] },
      { mot: "Réticent", type: "adjectif", def: "Hésitant, peu enclin à agir.", trad: "Reticent", phrase: "Il était réticent à l'idée de partager son secret.", syn: ["hésitant", "réservé"] },
      { mot: "Désuet", type: "adjectif", def: "Dépassé, plus en usage.", trad: "Outdated", phrase: "Cette expression est maintenant considérée comme désuète.", syn: ["démodé", "obsolète"] },
      { mot: "Inepte", type: "adjectif", def: "Sans capacité, absurde.", trad: "Inept", phrase: "Sa tentative de réparation était totalement inepte.", syn: ["stupide", "absurde"] },
      { mot: "Concupiscent", type: "adjectif", def: "Porté vers les plaisirs charnels.", trad: "Concupiscent", phrase: "Son regard concupiscent la mettait mal à l'aise.", syn: ["libidineux", "lascif"] },
      { mot: "Acrimonieux", type: "adjectif", def: "Agressif, amer dans les propos.", trad: "Acrimonious", phrase: "Le débat est devenu acrimonieux après quelques minutes.", syn: ["hargneux", "amer"] },
      { mot: "Véhément", type: "adjectif", def: "Emporté, passionné.", trad: "Vehement", phrase: "Il a prononcé un plaidoyer véhément en faveur de la justice.", syn: ["impétueux", "passionné"] },
      { mot: "Rédhibitoire", type: "adjectif", def: "Qui constitue un obstacle absolu.", trad: "Deal-breaker", phrase: "Son manque de ponctualité était un défaut rédhibitoire pour le poste.", syn: ["éliminatoire", "inacceptable"] },
      { mot: "Impavide", type: "adjectif", def: "Sans peur, calme face au danger.", trad: "Fearless", phrase: "Le soldat restait impavide face à l'ennemi.", syn: ["intrépide", "serein"] },
      { mot: "Fallacieux", type: "adjectif", def: "Trompeur, mensonger.", trad: "Fallacious", phrase: "L'argument du politicien était fallacieux.", syn: ["trompeur", "illusoire"] },
      { mot: "Paradoxal", type: "adjectif", def: "Contraire à l'opinion commune, surprenant.", trad: "Paradoxical", phrase: "Il est paradoxal de vouloir la paix en préparant la guerre.", syn: ["contradictoire", "illogique"] },
      { mot: "Ostentatoire", type: "adjectif", def: "Qui cherche à attirer l'attention.", trad: "Ostentatious", phrase: "Sa richesse ostentatoire agaçait son entourage.", syn: ["voyant", "tape-à-l'œil"] },
      { mot: "Ambivalent", type: "adjectif", def: "Qui présente deux aspects contradictoires.", trad: "Ambivalent", phrase: "Ses sentiments à son égard étaient ambivalents.", syn: ["partagé", "hésitant"] },
      { mot: "Apaisant", type: "adjectif", def: "Qui calme, tranquillise.", trad: "Soothing", phrase: "Le son de la pluie est très apaisant.", syn: ["calmant", "tranquillisant"] },
      { mot: "Frugal", type: "adjectif", def: "Simple, sans excès.", trad: "Frugal", phrase: "Il menait un mode de vie frugal et simple.", syn: ["sobre", "simple"] },
      { mot: "Prodigal", type: "adjectif", def: "Dépensier, généreux à l'excès.", trad: "Prodigal", phrase: "L'enfant prodigue est revenu après avoir tout dépensé.", syn: ["dépensier", "gaspilleur"] },
      { mot: "Intègre", type: "adjectif", def: "D'une honnêteté absolue.", trad: "Upright", phrase: "C'est un fonctionnaire intègre et respecté.", syn: ["honnête", "droit"] },
      { mot: "Ardu", type: "adjectif", def: "Difficile, pénible.", trad: "Arduous", phrase: "L'apprentissage de cette langue est une tâche ardue.", syn: ["difficile", "pénible"] },
      { mot: "Atavique", type: "adjectif", def: "Hérité des ancêtres.", trad: "Atavistic", phrase: "Il ressentait une peur atavique de l'obscurité.", syn: ["ancestral", "héréditaire"] },
      { mot: "Ténébreux", type: "adjectif", def: "Sombre, obscur.", trad: "Gloomy", phrase: "Un personnage ténébreux se tenait dans l'ombre.", syn: ["sombre", "mystérieux"] },
      { mot: "Hâbleur", type: "nom (m)", def: "Fanfaron, vantard.", trad: "Boastful", phrase: "Ce n'est qu'un hâbleur, ne croyez pas ses histoires.", syn: ["vantard", "fanfaron"] },
      { mot: "Flegmatique", type: "adjectif", def: "Calme, impassible.", trad: "Phlegmatic", phrase: "Son tempérament flegmatique lui permet de gérer le stress.", syn: ["calme", "impassible"] },
      { mot: "Captieux", type: "adjectif", def: "Trompeur sous une apparence de vérité.", trad: "Captious", phrase: "Son raisonnement captieux a trompé l'auditoire.", syn: ["trompeur", "spécieux"] },
      { mot: "Substantiel", type: "adjectif", def: "Important, nourrissant.", trad: "Substantial", phrase: "Il a fait un repas substantiel avant de partir.", syn: ["consistant", "nourrissant"] },
      { mot: "Révérencieux", type: "adjectif", def: "Très respectueux.", trad: "Reverential", phrase: "Il s'inclina d'un air révérencieux devant le roi.", syn: ["respectueux", "déférent"] },
      { mot: "Sycophante", type: "nom (m)", def: "Flatteur intéressé, délateur.", trad: "Sycophant", phrase: "Le sycophante ne cessait de complimenter le directeur.", syn: ["flatteur", "courtisan"] },
      { mot: "Caustique", type: "adjectif", def: "Ironique, mordant.", trad: "Caustic", phrase: "Son humour caustique n'était pas apprécié de tous.", syn: ["mordant", "acerbe"] },
      { mot: "Acerbe", type: "adjectif", def: "Dur, blessant dans les critiques.", trad: "Acerbic", phrase: "La critique du film était particulièrement acerbe.", syn: ["mordant", "caustique"] },
      { mot: "Énigmatique", type: "adjectif", def: "Mystérieux, difficile à comprendre.", trad: "Enigmatic", phrase: "Son sourire énigmatique cachait de lourds secrets.", syn: ["mystérieux", "incompréhensible"] },
      { mot: "Hypocoristique", type: "nom (m)", def: "Forme affectueuse d'un mot ou prénom.", trad: "Hypocoristic", phrase: "Il utilisait un hypocoristique pour appeler sa grand-mère.", syn: ["affectueux", "diminutif"] },
      { mot: "Volatile", type: "adjectif", def: "Instable, changeant facilement.", trad: "Volatile", phrase: "Le marché boursier est devenu très volatile.", syn: ["instable", "changeant"] },
      { mot: "Prégnant", type: "adjectif", def: "Qui s'impose à l'esprit, significatif.", trad: "Poignant", phrase: "Le silence qui a suivi était particulièrement prégnant.", syn: ["frappant", "marquant"] },
      { mot: "Diligent", type: "adjectif", def: "Rapide et appliqué dans l'exécution.", trad: "Diligent", phrase: "Un employé diligent termine toujours son travail à temps.", syn: ["zélé", "appliqué"] },
      { mot: "Dédaigneux", type: "adjectif", def: "Méprisant, hautain.", trad: "Disdainful", phrase: "Elle lui lança un regard dédaigneux.", syn: ["méprisant", "hautain"] },
      { mot: "Equanime", type: "adjectif", def: "D'une humeur égale, imperturbable.", trad: "Equanimous", phrase: "Il a reçu la nouvelle avec un calme équanime.", syn: ["imperturbable", "serein"] },
      { mot: "Oiseux", type: "adjectif", def: "Inutile, vain.", trad: "Idle", phrase: "Il est oiseux de débattre sur ce point, la décision est prise.", syn: ["inutile", "vain"] },
      { mot: "Galvaudé", type: "adjectif", def: "Trop utilisé, dévalorisé.", trad: "Overused", phrase: "Le mot 'génie' est souvent galvaudé de nos jours.", syn: ["banalisé", "déprécié"] },
      { mot: "Disert", type: "adjectif", def: "Qui parle avec aisance.", trad: "Articulate", phrase: "C'est un orateur disert qui captive son public.", syn: ["éloquent", "facile"] },
      { mot: "Morose", type: "adjectif", def: "Triste, maussade.", trad: "Morose", phrase: "L'ambiance au bureau était morose après l'annonce des licenciements.", syn: ["sombre", "maussade"] },
      { mot: "Entrelacer", type: "verbe", def: "Croiser ensemble des éléments de manière harmonieuse.", trad: "To intertwine", phrase: "Les lierres s'entrelacent sur le vieux mur de pierre.", syn: ["emmêler", "croiser"] },
      { mot: "Tâche", type: "nom (f)", def: "Travail ou activité à accomplir.", trad: "Task", phrase: "Laver la vaisselle est une tâche quotidienne.", syn: ["travail", "corvée"] },
      { mot: "Serein", type: "adjectif", def: "Paisible, calme, sans trouble.", trad: "Serene", phrase: "Malgré la tempête, le capitaine restait serein.", syn: ["calme", "paisible"] },
      { mot: "Éclat", type: "nom (m)", def: "Brillance ou intensité lumineuse ou sonore.", trad: "Sparkle / Burst", phrase: "L'éclat des diamants l'a aveuglée un instant.", syn: ["brillance", "lueur"] },
      { mot: "Gêne", type: "nom (f)", def: "Sensation de malaise ou inconfort.", trad: "Discomfort", phrase: "Une certaine gêne s'est installée après sa remarque.", syn: ["malaise", "embarras"] },
      { mot: "Furtif", type: "adjectif", def: "Qui passe inaperçu, discret et rapide.", trad: "Stealthy", phrase: "Le chat fit un mouvement furtif vers sa proie.", syn: ["discret", "rapide"] },
      { mot: "Miroiter", type: "verbe", def: "Briller avec des reflets changeants.", trad: "To shimmer", phrase: "La surface du lac miroitait sous le soleil.", syn: ["briller", "scintiller"] },
      { mot: "Gratifiant", type: "adjectif", def: "Qui procure une satisfaction personnelle.", trad: "Rewarding", phrase: "Aider les autres est un travail très gratifiant.", syn: ["satisfaisant", "récompensant"] },
      { mot: "Élan", type: "nom (m)", def: "Mouvement rapide ou impulsion soudaine.", trad: "Momentum / Surge", phrase: "Il a pris son élan et a sauté par-dessus l'obstacle.", syn: ["impulsion", "mouvement"] },
      { mot: "Tendre", type: "adjectif", def: "Doux, affectueux ou fragile.", trad: "Tender", phrase: "Elle lui adressa un tendre sourire.", syn: ["doux", "affectueux"] },
      { mot: "Allure", type: "nom (f)", def: "Vitesse ou manière de se déplacer.", trad: "Pace / Appearance", phrase: "Le cheval accéléra son allure pour rattraper les autres.", syn: ["apparence", "démarche"] },
      { mot: "Odeur", type: "nom (f)", def: "Sensation perçue par le nez.", trad: "Smell", phrase: "L'odeur du pain frais emplissait la boulangerie.", syn: ["parfum", "senteur"] },
      { mot: "Paresse", type: "nom (f)", def: "Manque d'envie d'agir, inactivité.", trad: "Laziness", phrase: "La paresse est souvent considérée comme un défaut.", syn: ["fainéantise", "indolence"] },
      { mot: "Lueur", type: "nom (f)", def: "Lumière faible ou diffuse.", trad: "Glimmer / Glow", phrase: "Une faible lueur filtrait sous la porte.", syn: ["lumière", "clarté"] },
      { mot: "Sillage", type: "nom (m)", def: "Trace laissée dans l'eau ou dans l'air.", trad: "Wake / Trail", phrase: "Le bateau laissait un long sillage derrière lui.", syn: ["trace", "traînée"] },
      { mot: "Brumeux", type: "adjectif", def: "Rempli de brume ou flou.", trad: "Foggy / Hazy", phrase: "Le temps était brumeux ce matin-là.", syn: ["vaporeux", "flou"] },
      { mot: "Rancune", type: "nom (f)", def: "Sentiment négatif durable après une offense.", trad: "Grudge", phrase: "Il gardait une vieille rancune contre son voisin.", syn: ["ressentiment", "amertume"] },
      { mot: "Fardeau", type: "nom (m)", def: "Charge lourde ou responsabilité pesante.", trad: "Burden", phrase: "Ce secret est devenu un lourd fardeau pour lui.", syn: ["poids", "charge"] },
      { mot: "Effleurer", type: "verbe", def: "Toucher légèrement ou à peine.", trad: "To graze / Brush", phrase: "Ses doigts ont à peine effleuré la surface de l'eau.", syn: ["toucher", "frôler"] },
      { mot: "Brouhaha", type: "nom (m)", def: "Bruit confus de voix ou d'activités.", trad: "Uproar / Hubbub", phrase: "Le brouhaha de la foule couvrait la musique.", syn: ["tumulte", "vacarme"] },
      { mot: "Léger", type: "adjectif", def: "Peu lourd, délicat ou subtil.", trad: "Light", phrase: "Elle portait une robe légère en coton.", syn: ["fin", "délicat"] },
      { mot: "Éveil", type: "nom (m)", def: "Action de sortir du sommeil ou d'un état passif.", trad: "Awakening", phrase: "L'éveil de la nature au printemps est un spectacle magnifique.", syn: ["réveil", "prise de conscience"] },
      { mot: "Soupçon", type: "nom (m)", def: "Petite quantité ou doute sur quelque chose.", trad: "Hint / Suspicion", phrase: "Ajoutez juste un soupçon de sel à la recette.", syn: ["doute", "suspicion"] },
      { mot: "Regard", type: "nom (m)", def: "Façon de voir ou d'observer.", trad: "Look / Gaze", phrase: "Son regard intense la fit rougir.", syn: ["vue", "expression"] },
      { mot: "Chaleureux", type: "adjectif", def: "Qui exprime de la chaleur humaine.", trad: "Warm / Welcoming", phrase: "Il nous a offert un accueil chaleureux.", syn: ["accueillant", "cordial"] },
      { mot: "Rugueux", type: "adjectif", def: "Qui n'est pas lisse, au toucher.", trad: "Rough", phrase: "L'écorce de l'arbre était rugueuse sous ses doigts.", syn: ["rêche", "raboteux"] },
      { mot: "Bavard", type: "adjectif", def: "Qui parle beaucoup.", trad: "Talkative", phrase: "Mon ami est si bavard qu'il ne me laisse jamais parler.", syn: ["loquace", "verbeux"] },
      { mot: "Doux", type: "adjectif", def: "Agréable au toucher ou au cœur.", trad: "Soft / Sweet", phrase: "Le pelage du chaton est incroyablement doux.", syn: ["suave", "agréable"] },
      { mot: "Fente", type: "nom (f)", def: "Ouverture fine et étroite.", trad: "Crack / Slit", phrase: "Il regarda à travers la fente de la porte.", syn: ["crevasse", "fissure"] },
      { mot: "Fourmillement", type: "nom (m)", def: "Sensation de picotement.", trad: "Tingling", phrase: "Il sentit un fourmillement dans sa jambe endormie.", syn: ["picotement", "grouillement"] },
      { mot: "Clarté", type: "nom (f)", def: "Qualité de ce qui est clair, compréhensible ou lumineux.", trad: "Clarity", phrase: "La clarté de ses explications a aidé tout le monde à comprendre.", syn: ["limpidité", "netteté"] },
      { mot: "Insolite", type: "adjectif", def: "Étrange, surprenant, hors du commun.", trad: "Unusual", phrase: "Nous avons découvert un restaurant insolite au coin de la rue.", syn: ["inhabituel", "étrange"] },
      { mot: "Empreinte", type: "nom (f)", def: "Marque laissée par pression ou symbole.", trad: "Imprint / Mark", phrase: "L'enquêteur a trouvé une empreinte de pas dans la boue.", syn: ["trace", "marque"] },
      { mot: "Gonfler", type: "verbe", def: "Augmenter de volume ou d'intensité.", trad: "To swell", phrase: "Le ballon a commencé à gonfler rapidement.", syn: ["enfler", "augmenter"] },
      { mot: "Chuchoter", type: "verbe", def: "Parler à voix très basse.", trad: "To whisper", phrase: "Elle se pencha pour lui chuchoter un secret.", syn: ["murmurer", "susurrer"] },
      { mot: "Troublant", type: "adjectif", def: "Qui dérange ou émeut.", trad: "Disturbing / Moving", phrase: "Le film contenait des scènes particulièrement troublantes.", syn: ["dérangeant", "émouvant"] },
      { mot: "Apprivoiser", type: "verbe", def: "Rendre moins sauvage ou plus familier.", trad: "To tame", phrase: "Le Petit Prince voulait apprivoiser le renard.", syn: ["domestiquer", "adoucir"] },
      { mot: "Coupure", type: "nom (f)", def: "Interruption ou blessure fine.", trad: "Cut / Break", phrase: "Une coupure de courant a plongé la ville dans le noir.", syn: ["entaille", "interruption"] },
      { mot: "Crispé", type: "adjectif", def: "Tendu, contracté sous l'effet du stress.", trad: "Tense", phrase: "Son visage était crispé par l'anxiété.", syn: ["tendu", "contracté"] },
      { mot: "Dérapage", type: "nom (m)", def: "Glissement incontrôlé ou écart de conduite.", trad: "Skid / Drift", phrase: "Le dérapage de la voiture a été évité de justesse.", syn: ["glissade", "écart"] },
      { mot: "Fuyant", type: "adjectif", def: "Qui évite le contact ou s'échappe.", trad: "Evasive", phrase: "Son regard fuyant trahissait son mensonge.", syn: ["évasif", "insaisissable"] },
      { mot: "Rayon", type: "nom (m)", def: "Trait lumineux ou section d'un magasin.", trad: "Ray / Aisle", phrase: "Un rayon de soleil perçait à travers les nuages.", syn: ["faisceau", "raie"] },
      { mot: "Velouté", type: "adjectif", def: "Doux comme du velours.", trad: "Velvety", phrase: "La soupe avait une texture riche et veloutée.", syn: ["doux", "onctueux"] },
      { mot: "Sursaut", type: "nom (m)", def: "Mouvement brusque dû à la surprise.", trad: "Startle / Jolt", phrase: "Le bruit soudain lui a fait faire un sursaut.", syn: ["tressaillement", "soudaineté"] },
      { mot: "Éraflure", type: "nom (f)", def: "Blessure légère à la surface de la peau.", trad: "Scratch", phrase: "Il s'est fait une petite éraflure en tombant.", syn: ["égratignure", "griffure"] },
      { mot: "Grésillement", type: "nom (m)", def: "Petit bruit sec, rapide et répété.", trad: "Crackling / Sizzle", phrase: "Le grésillement du feu dans la cheminée était réconfortant.", syn: ["crépitement", "frémissement"] },
      { mot: "Assourdi", type: "adjectif", def: "Rendu moins fort, plus discret (son).", trad: "Muffled", phrase: "Le bruit des pas était assourdi par la moquette.", syn: ["étouffé", "amorti"] },
      { mot: "Voilé", type: "adjectif", def: "Légèrement couvert, comme par un voile.", trad: "Veiled", phrase: "Le ciel était voilé par de fins nuages.", syn: ["caché", "dissimulé"] },
      { mot: "Délicatesse", type: "nom (f)", def: "Finesse, attention ou légèreté dans le geste.", trad: "Delicacy / Gentleness", phrase: "Elle a manipulé l'objet fragile avec une grande délicatesse.", syn: ["finesse", "douceur"] },
      { mot: "Essentiel", type: "adjectif", def: "Absolument nécessaire, qui constitue l'essence.", trad: "Essential", phrase: "Une bonne communication est essentielle dans une équipe.", syn: ["fondamental", "indispensable"] },
      { mot: "Évident", type: "adjectif", def: "Qui est clair et certain, qui se comprend sans effort.", trad: "Obvious", phrase: "Son mécontentement était évident pour tout le monde.", syn: ["manifeste", "clair"] },
      { mot: "Habituel", type: "adjectif", def: "Conforme à l'habitude, qui se produit souvent.", trad: "Usual / Customary", phrase: "Il a pris son café matinal, comme d'habitude.", syn: ["courant", "ordinaire"] },
      { mot: "Efficace", type: "adjectif", def: "Qui produit l'effet attendu, qui atteint son but.", trad: "Effective / Efficient", phrase: "Cette méthode de travail s'est révélée très efficace.", syn: ["performant", "productif"] },
      { mot: "Inattendu", type: "adjectif", def: "Qui arrive sans qu'on s'y attende.", trad: "Unexpected", phrase: "Sa visite inattendue nous a fait grand plaisir.", syn: ["imprévu", "soudain"] },
      { mot: "Étonnant", type: "adjectif", def: "Qui cause une grande surprise, surprenant.", trad: "Astonishing / Surprising", phrase: "Il a montré un talent étonnant pour la musique.", syn: ["surprenant", "stupéfiant"] },
      { mot: "Décevant", type: "adjectif", def: "Qui ne répond pas aux attentes, qui cause de la déception.", trad: "Disappointing", phrase: "Le résultat final du projet était un peu décevant.", syn: ["insatisfaisant", "frustrant"] },
      { mot: "Impressionnant", type: "adjectif", def: "Qui produit une forte impression, qui impose le respect ou l'admiration.", trad: "Impressive", phrase: "La vue depuis le sommet de la montagne est impressionnante.", syn: ["spectaculaire", "imposant"] },
      { mot: "Insupportable", type: "adjectif", def: "Qu'on ne peut supporter, très désagréable.", trad: "Unbearable", phrase: "La chaleur était insupportable cet après-midi.", syn: ["intolérable", "odieux"] },
      { mot: "Agréable", type: "adjectif", def: "Qui plaît, qui procure du plaisir.", trad: "Pleasant / Nice", phrase: "Nous avons passé une soirée très agréable entre amis.", syn: ["plaisant", "charmant"] },
      { mot: "Gênant", type: "adjectif", def: "Qui met mal à l'aise, qui cause de l'embarras.", trad: "Embarrassing / Awkward", phrase: "Il y a eu un silence gênant après sa question.", syn: ["embarrassant", "incommode"] },
      { mot: "Fiable", type: "adjectif", def: "À qui ou à quoi on peut faire confiance.", trad: "Reliable", phrase: "C'est une source d'information très fiable.", syn: ["sûr", "digne de confiance"] },
      { mot: "Sensible", type: "adjectif", def: "Qui est facilement ému, ou qui réagit vivement à une stimulation.", trad: "Sensitive", phrase: "C'est une personne très sensible à la critique.", syn: ["émotif", "réceptif"] },
      { mot: "Logique", type: "adjectif", def: "Conforme aux règles du raisonnement, sensé.", trad: "Logical", phrase: "Sa conclusion est la suite logique de son argumentation.", syn: ["cohérent", "rationnel"] },
      { mot: "Absurde", type: "adjectif", def: "Contraire à la raison, au bon sens.", trad: "Absurd", phrase: "Cette situation est complètement absurde, je n'y comprends rien.", syn: ["insensé", "déraisonnable"] },
      { mot: "Superficiel", type: "adjectif", def: "Qui s'arrête à la surface, qui manque de profondeur.", trad: "Superficial", phrase: "Son analyse du problème est restée très superficielle.", syn: ["léger", "frivole"] },
      { mot: "Fondamental", type: "adjectif", def: "Qui sert de base, essentiel, primordial.", trad: "Fundamental", phrase: "Le respect mutuel est un principe fondamental de notre société.", syn: ["essentiel", "primordial"] },
      { mot: "Malin", type: "adjectif", def: "Habile, rusé, qui a de l'esprit.", trad: "Clever / Cunning", phrase: "Il a trouvé une solution maligne pour contourner le problème.", syn: ["rusé", "astucieux"] },
      { mot: "Souple", type: "adjectif", def: "Qui se plie facilement, flexible, adaptable.", trad: "Flexible / Supple", phrase: "Ses horaires de travail sont assez souples.", syn: ["flexible", "agile"] },
      { mot: "Répandu", type: "adjectif", def: "Qui est commun, que l'on trouve souvent.", trad: "Widespread / Common", phrase: "C'est une erreur très répandue chez les débutants.", syn: ["commun", "courant"] },
      { mot: "Tendu", type: "adjectif", def: "Qui est dans un état de tension, crispé.", trad: "Tense", phrase: "L'atmosphère était tendue avant l'annonce des résultats.", syn: ["crispé", "nerveux"] },
      { mot: "Épuisant", type: "adjectif", def: "Qui fatigue énormément.", trad: "Exhausting", phrase: "La randonnée en montagne était épuisante mais magnifique.", syn: ["fatigant", "exténuant"] },
      { mot: "Fragile", type: "adjectif", def: "Qui se casse facilement, qui manque de solidité.", trad: "Fragile", phrase: "Cet objet en verre est très fragile, attention.", syn: ["cassant", "délicat"] },
      { mot: "Solide", type: "adjectif", def: "Qui est résistant, robuste.", trad: "Solid / Sturdy", phrase: "Ce meuble est construit en bois de chêne massif, il est très solide.", syn: ["robuste", "résistant"] },
      { mot: "Clair", type: "adjectif", def: "Facile à comprendre, lumineux.", trad: "Clear", phrase: "Ses explications étaient si claires que tout le monde a compris.", syn: ["limpide", "net"] },
      { mot: "Précis", type: "adjectif", def: "Exact, sans erreur ni ambiguïté.", trad: "Precise", phrase: "Donnez-moi des instructions précises pour que je ne me trompe pas.", syn: ["exact", "juste"] },
      { mot: "Complexe", type: "adjectif", def: "Composé de plusieurs éléments, difficile à comprendre.", trad: "Complex", phrase: "Le système fiscal de ce pays est extrêmement complexe.", syn: ["compliqué", "difficile"] },
      { mot: "Cohérent", type: "adjectif", def: "Logique, dont les parties s'accordent bien entre elles.", trad: "Coherent", phrase: "Son discours était clair et cohérent.", syn: ["logique", "conséquent"] },
      { mot: "Abordable", type: "adjectif", def: "Dont le prix n'est pas trop élevé, ou facile à approcher.", trad: "Affordable / Approachable", phrase: "Ce restaurant propose des plats de qualité à un prix abordable.", syn: ["accessible", "raisonnable"] },
      { mot: "Concret", type: "adjectif", def: "Qui se rapporte à la réalité tangible, par opposition à l'abstrait.", trad: "Concrete", phrase: "Il faut des exemples concrets pour illustrer cette théorie.", syn: ["matériel", "tangible"] },
      { mot: "Abstrait", type: "adjectif", def: "Qui est le fruit d'une abstraction, qui n'a pas de réalité matérielle.", trad: "Abstract", phrase: "L'art abstrait laisse beaucoup de place à l'interprétation.", syn: ["immatériel", "conceptuel"] },
      { mot: "Explicite", type: "adjectif", def: "Énoncé de manière claire et directe, sans laisser de doute.", trad: "Explicit", phrase: "Ses instructions étaient explicites, personne ne pouvait se tromper.", syn: ["clair", "formel"] },
      { mot: "Implicite", type: "adjectif", def: "Contenu dans une proposition sans être formellement exprimé.", trad: "Implicit", phrase: "Il y avait une menace implicite dans sa voix.", syn: ["sous-entendu", "tacite"] },
      { mot: "Nuisible", type: "adjectif", def: "Qui peut faire du mal, causer un préjudice.", trad: "Harmful", phrase: "Fumer est nuisible pour la santé.", syn: ["nocif", "délétère"] },
      { mot: "Bénéfique", type: "adjectif", def: "Qui fait du bien, qui a des effets positifs.", trad: "Beneficial", phrase: "Une activité physique régulière est bénéfique pour le corps et l'esprit.", syn: ["avantageux", "salutaire"] },
      { mot: "Crucial", type: "adjectif", def: "Décisif, qui a une importance capitale.", trad: "Crucial", phrase: "C'est un moment crucial pour l'avenir de l'entreprise.", syn: ["décisif", "capital"] },
      { mot: "Flou", type: "adjectif", def: "Manque de netteté, imprécis.", trad: "Blurry / Vague", phrase: "Mes souvenirs de cette époque sont assez flous.", syn: ["imprécis", "vague"] },
      { mot: "Patient", type: "adjectif", def: "Qui sait attendre sans s'énerver.", trad: "Patient", phrase: "Il faut être patient pour apprendre à jouer d'un instrument.", syn: ["endurant", "persévérant"] },
      { mot: "Ambitieux", type: "adjectif", def: "Qui a de l'ambition, qui désire ardemment réussir.", trad: "Ambitious", phrase: "C'est un projet très ambitieux qui demandera beaucoup de travail.", syn: ["audacieux", "entreprenant"] },
      { mot: "Courageux", type: "adjectif", def: "Qui a du courage, qui n'a pas peur du danger.", trad: "Brave / Courageous", phrase: "Les pompiers sont des personnes très courageuses.", syn: ["brave", "intrépide"] },
      { mot: "Prudent", type: "adjectif", def: "Qui fait attention pour éviter les dangers ou les erreurs.", trad: "Cautious / Prudent", phrase: "Soyez prudent en traversant la route.", syn: ["circonspect", "avisé"] },
      { mot: "Élémentaire", type: "adjectif", def: "De base, simple, fondamental.", trad: "Elementary", phrase: "C'est une règle de politesse élémentaire.", syn: ["basique", "simple"] },
      { mot: "Mutuel", type: "adjectif", def: "Réciproque, qui se fait d'un côté et de l'autre.", trad: "Mutual", phrase: "Le respect mutuel est la base de leur amitié.", syn: ["réciproque", "partagé"] },
        { "mot": "Atermoyer", "type": "verbe", "def": "Remettre à plus tard en tergiversant ou en trouvant des excuses ; différer une décision.", "trad": "To procrastinate / To stall", "phrase": "Il ne faut pas atermoyer face à une décision importante.", "syn": ["différer", "retarder", "hésiter"] }
      { mot: "fuck you bitch", type: "fuck youf", def: "fuck you.", trad: "Mutual", phrase: "Le fuck you mutuel est la base de leur amitié.", syn: ["réciproque", "partagé"] },
    ];

    const phrases = [
        { mot: "À la rigueur", type: "expression", def: "En cas de nécessité, si vraiment il le faut.", trad: "If need be", phrase: "Je peux le faire, à la rigueur, mais ce n'est pas idéal." },
        { mot: "En fin de compte", type: "expression", def: "Finalement, après réflexion ou analyse.", trad: "Ultimately", phrase: "En fin de compte, il avait raison depuis le début." },
        { mot: "Quoi qu'il en soit", type: "expression", def: "Peu importe ce qui a été dit ou fait, cela ne change pas la suite.", trad: "Regardless", phrase: "Quoi qu'il en soit, nous devons avancer." },
        { mot: "À l'instar de", type: "expression", def: "Comme, de la même manière que.", trad: "Like / Just as", phrase: "À l'instar de son frère, elle est très sportive." },
        { mot: "Dans la foulée", type: "expression", def: "Immédiatement après, dans le même mouvement.", trad: "Right afterward", phrase: "Il a terminé son discours et est parti dans la foulée." },
        { mot: "En guise de", type: "expression", def: "À la place de, comme substitut.", trad: "As a substitute for", phrase: "En guise de dessert, il a proposé un fruit." },
        { mot: "À juste titre", type: "expression", def: "Avec raison, de façon appropriée.", trad: "Rightly so", phrase: "Elle a été récompensée, à juste titre." },
        { mot: "Force est de constater", type: "expression", def: "Il faut admettre, même si ce n'est pas souhaité.", trad: "It must be said", phrase: "Force est de constater que les résultats sont décevants." },
        { mot: "Sous prétexte que", type: "expression", def: "En invoquant une raison (souvent critiquée).", trad: "Under the pretext that", phrase: "Il est parti plus tôt sous prétexte qu'il était malade." },
        { mot: "En tant que tel", type: "expression", def: "Pris dans sa nature propre, littéralement.", trad: "As such", phrase: "Ce texte, en tant que tel, n'est pas problématique." },
        { mot: "Du coup", type: "expression", def: "Par conséquent, donc (registre familier).", trad: "So / As a result", phrase: "Il a raté son train, du coup il est arrivé en retard." },
        { mot: "En somme", type: "expression", def: "Pour résumer, en conclusion.", trad: "All in all", phrase: "En somme, l'expérience fut enrichissante." },
        { mot: "Tant bien que mal", type: "expression", def: "Avec difficulté, mais en réussissant plus ou moins.", trad: "With difficulty", phrase: "Il a réparé le moteur tant bien que mal." },
        { mot: "À ce propos", type: "expression", def: "En rapport avec ce sujet.", trad: "On that note", phrase: "À ce propos, tu as lu le dernier rapport ?" },
        { mot: "De ce fait", type: "expression", def: "En conséquence, pour cette raison.", trad: "As a result", phrase: "Il a oublié de renouveler son abonnement. De ce fait, il a été pénalisé." },
        { mot: "Cela dit", type: "expression", def: "Cependant, malgré ce qui a été dit.", trad: "That said", phrase: "Il a de bons résultats. Cela dit, il peut encore progresser." },
        { mot: "À la faveur de", type: "expression", def: "Grâce à, en tirant parti de quelque chose.", trad: "Thanks to / Taking advantage of", phrase: "À la faveur du vent, le feu s'est propagé rapidement." },
        { mot: "À l'improviste", type: "expression", def: "Sans prévenir, de façon inattendue.", trad: "Unexpectedly", phrase: "Ils sont arrivés à l'improviste, sans prévenir." },
        { mot: "En contrepartie", type: "expression", def: "En échange, en retour (souvent pour équilibrer une perte).", trad: "In return", phrase: "Il a accepté une baisse de salaire, en contrepartie d'une réduction d'horaires." },
        { mot: "À tort ou à raison", type: "expression", def: "Qu'on ait raison ou non, dans tous les cas.", trad: "Rightly or wrongly", phrase: "On l'a accusé, à tort ou à raison, d'avoir triché." },
        { mot: "À l'évidence", type: "expression", def: "De manière claire, sans doute possible.", trad: "Clearly / Obviously", phrase: "À l'évidence, il n'était pas prêt pour cet examen." },
        { mot: "En parallèle", type: "expression", def: "En même temps, de manière simultanée.", trad: "At the same time / In parallel", phrase: "Il menait deux projets en parallèle." },
        { mot: "Le cas échéant", type: "expression", def: "Si la situation se présente.", trad: "If necessary", phrase: "Le cas échéant, nous adapterons le plan." },
        { mot: "En ligne de mire", type: "expression", def: "Dans l'objectif, dans la cible.", trad: "In sight / In the crosshairs", phrase: "L'entreprise a la rentabilité en ligne de mire." },
        { mot: "Dans la mesure où", type: "expression", def: "Puisque, étant donné que.", trad: "Insofar as", phrase: "Dans la mesure où tu es d'accord, on peut lancer le projet." },
        { mot: "De manière à", type: "expression", def: "Dans le but de.", trad: "So as to / In order to", phrase: "Il a tout organisé de manière à ce que tout soit prêt à temps." },
        { mot: "Pour peu que", type: "expression", def: "À condition que, si jamais.", trad: "Provided that", phrase: "Pour peu que tu fasses un effort, tu réussiras." },
        { mot: "À ce titre", type: "expression", def: "En tant que tel, pour cette raison précise.", trad: "In this capacity", phrase: "Il a agi à ce titre et non à titre personnel." },
        { mot: "À l'issue de", type: "expression", def: "À la fin de, après.", trad: "At the end of", phrase: "À l'issue de la réunion, une décision a été prise." },
        { mot: "À bien des égards", type: "expression", def: "Sous plusieurs aspects, à plusieurs niveaux.", trad: "In many respects", phrase: "Ce livre est remarquable à bien des égards." },
        { mot: "Au fur et à mesure", type: "expression", def: "Progressivement, en suivant le déroulement.", trad: "As things go along / Gradually", phrase: "Les consignes vous seront données au fur et à mesure." },
        { mot: "De but en blanc", type: "expression", def: "Directement, sans préambule ni ménagement.", trad: "Point-blank / Out of the blue", phrase: "Il lui a annoncé la nouvelle de but en blanc." },
        { mot: "Le cas échéant", type: "expression", def: "Si l'occasion se présente, si cela arrive.", trad: "If need be / If applicable", phrase: "Prenez votre parapluie, le cas échéant." },
        { mot: "Pour autant", type: "expression", def: "Néanmoins, malgré cela.", trad: "For all that / Nevertheless", phrase: "Il est fatigué, mais il ne s'arrête pas pour autant." },
        { mot: "Bon gré mal gré", type: "expression", def: "Qu'on le veuille ou non, de gré ou de force.", trad: "Willy-nilly / Like it or not", phrase: "Il a dû, bon gré mal gré, accepter la situation." },
        { mot: "Quitte à", type: "expression", def: "Même si cela implique le risque de.", trad: "Even if it means", phrase: "Je vais lui dire la vérité, quitte à le vexer." },
        { mot: "En l'état", type: "expression", def: "Dans sa condition actuelle, sans modification.", trad: "As it is", phrase: "Le projet est accepté en l'état." },
        { mot: "À bon escient", type: "expression", def: "De manière judicieuse, à propos.", trad: "Wisely / Judiciously", phrase: "Il utilise ses ressources à bon escient." },
        { mot: "Sans crier gare", type: "expression", def: "De manière soudaine, sans avertissement.", trad: "Without warning", phrase: "L'orage a éclaté sans crier gare." },
        { mot: "D'autant plus que", type: "expression", def: "Avec une raison supplémentaire, surtout que.", trad: "All the more so since", phrase: "Je suis ravi de sa visite, d'autant plus qu'il apporte de bonnes nouvelles." },
        { mot: "En tout état de cause", type: "expression", def: "De toute façon, quoi qu'il arrive.", trad: "In any event / In any case", phrase: "En tout état de cause, une décision doit être prise avant demain." },
        { mot: "Au demeurant", type: "expression", def: "D'ailleurs, du reste (pour ajouter une nuance).", trad: "For that matter / Incidentally", phrase: "C'est une personne compétente, bien qu'un peu lente au demeurant." },
        { mot: "Ni plus ni moins", type: "expression", def: "Exactement, précisément.", trad: "Neither more nor less", phrase: "C'est, ni plus ni moins, la meilleure solution possible." },
        { mot: "Tour à tour", type: "expression", def: "Alternativement, l'un après l'autre.", trad: "In turn / Alternately", phrase: "Ils prirent la parole tour à tour." },
        { mot: "Au même titre que", type: "expression", def: "De la même manière que, au même niveau que.", trad: "In the same way as", phrase: "Son travail mérite d'être reconnu au même titre que celui de ses collègues." },
        { mot: "Tirer son épingle du jeu", type: "expression", def: "Se sortir habilement d'une situation difficile.", trad: "To come out unscathed / To do well for oneself", phrase: "Malgré la crise, l'entreprise a su tirer son épingle du jeu." },
        { mot: "Mettre les pieds dans le plat", type: "expression", def: "Aborder une question délicate sans détour, avec une franchise brutale.", trad: "To put one's foot in it", phrase: "Il a mis les pieds dans le plat en parlant de son licenciement." },
        { mot: "Faire d'une pierre deux coups", type: "expression", def: "Atteindre deux objectifs avec une seule action.", trad: "To kill two birds with one stone", phrase: "En visitant ma tante, j'en profite pour faire mes courses : je fais d'une pierre deux coups." }
    ];

    const wordsContainer = document.getElementById('words-container');
    const sentencesContainer = document.getElementById('sentences-container');
    const bookmarkWidget = document.getElementById('bookmark-widget');
    const bookmarkedListContainer = document.getElementById('bookmarked-list-container');
    const bookmarkedList = document.getElementById('bookmarked-list');
    const randomWordWidget = document.getElementById('random-word-widget');
    const examplePhraseBar = document.getElementById('example-phrase-bar');
    const wordsTab = document.getElementById('words-tab');
    const sentencesTab = document.getElementById('sentences-tab');

    const wordData = new Map(mots.map(m => [m.mot, m]));
    const sentenceData = new Map(phrases.map(p => [p.mot, p]));

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    let activeTab = 'words';

    const updateBookmarksList = () => {
        bookmarkedList.innerHTML = '';
        bookmarks.forEach(bookmark => {
            const li = document.createElement('li');
            li.textContent = bookmark;
            li.addEventListener('click', () => {
                const isWord = wordData.has(bookmark);
                const targetTab = isWord ? 'words' : 'sentences';
                const tabToClick = isWord ? wordsTab : sentencesTab;

                const scroll = () => {
                    const cardToScroll = document.querySelector(`.card[data-word="${bookmark}"]`);
                    if (cardToScroll) {
                        cardToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        bookmarkedListContainer.classList.remove('visible');
                    }
                };

                if (activeTab !== targetTab) {
                    tabToClick.click();
                    setTimeout(scroll, 100);
                } else {
                    scroll();
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

        if (entry.type) {
            const wordType = document.createElement('div');
            wordType.className = 'word-type';
            wordType.textContent = entry.type;
            card.appendChild(wordType);
        }

        card.appendChild(definition);

        if (entry.syn && entry.syn.length > 0) {
            const synonyms = document.createElement('div');
            synonyms.className = 'synonyms';
            synonyms.innerHTML = `<span>Syn:</span> ${entry.syn.join(', ')}`;
            card.appendChild(synonyms);
        }

        wordsContainer.appendChild(card);
    });

    phrases.forEach(entry => {
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

        if (entry.type) {
            const wordType = document.createElement('div');
            wordType.className = 'word-type';
            wordType.textContent = entry.type;
            card.appendChild(wordType);
        }
        
        card.appendChild(definition);
        sentencesContainer.appendChild(card);
    });

    const createBookmarkClickHandler = (container) => {
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
    };

    createBookmarkClickHandler(wordsContainer);
    createBookmarkClickHandler(sentencesContainer);

    const setupInfiniteScroll = (container, data) => {
        if (data.length === 0) return;

        const firstCard = container.querySelector('.card:first-child');
        const lastCard = container.querySelector('.card:last-child');

        if (firstCard && lastCard) {
            const clonedLastCard = lastCard.cloneNode(true);
            container.prepend(clonedLastCard);

            const clonedFirstCard = firstCard.cloneNode(true);
            container.appendChild(clonedFirstCard);

            container.scrollTo({ top: container.clientHeight, behavior: 'auto' });

            container.addEventListener('scroll', () => {
                const cardHeight = container.clientHeight;
                const totalOriginalCards = data.length;
                const bottomLoopThreshold = (totalOriginalCards + 1) * cardHeight;
                const topLoopThreshold = 0;

                if (container.scrollTop >= bottomLoopThreshold) {
                    container.style.scrollSnapType = 'none';
                    container.scrollTo({ top: cardHeight, behavior: 'auto' });
                    setTimeout(() => {
                        container.style.scrollSnapType = 'y mandatory';
                    }, 20);
                }
                else if (container.scrollTop <= topLoopThreshold) {
                    container.style.scrollSnapType = 'none';
                    container.scrollTo({ top: totalOriginalCards * cardHeight, behavior: 'auto' });
                    setTimeout(() => {
                        container.style.scrollSnapType = 'y mandatory';
                    }, 20);
                }
            }, { passive: true });
        }
    };

    const setupIntersectionObserver = (container, dataMap) => {
        if (!('IntersectionObserver' in window)) return;
        
        const observerOptions = {
            root: container,
            rootMargin: '0px',
            threshold: 0.6
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const key = entry.target.dataset.word;
                    const data = dataMap.get(key);
                    
                    if (data && data.phrase) {
                        examplePhraseBar.textContent = data.phrase;
                        examplePhraseBar.classList.add('visible');
                    } else {
                        examplePhraseBar.classList.remove('visible');
                    }
                }
            });
        }, observerOptions);
    
        const realCards = Array.from(container.children).slice(1, -1);
        realCards.forEach(card => observer.observe(card));
    };

    // --- Setup for Words ---
    setupInfiniteScroll(wordsContainer, mots);
    setupIntersectionObserver(wordsContainer, wordData);

    // --- Setup for Sentences ---
    setupInfiniteScroll(sentencesContainer, phrases);
    setupIntersectionObserver(sentencesContainer, sentenceData);

    randomWordWidget.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * mots.length);
        const cardHeight = wordsContainer.clientHeight;
        const scrollToPosition = (randomIndex + 1) * cardHeight;

        wordsContainer.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });

    bookmarkWidget.addEventListener('click', () => {
        bookmarkedListContainer.classList.toggle('visible');
    });

    wordsTab.addEventListener('click', () => {
        if (activeTab === 'words') return;
        activeTab = 'words';

        wordsTab.classList.add('active');
        sentencesTab.classList.remove('active');

        wordsContainer.style.display = 'block';
        sentencesContainer.style.display = 'none';

        bookmarkWidget.style.display = 'block';
        randomWordWidget.style.display = 'block';
        bookmarkedListContainer.classList.remove('visible');
        examplePhraseBar.classList.remove('visible');
    });

    sentencesTab.addEventListener('click', () => {
        if (activeTab === 'sentences') return;
        activeTab = 'sentences';

        sentencesTab.classList.add('active');
        wordsTab.classList.remove('active');

        sentencesContainer.style.display = 'block';
        wordsContainer.style.display = 'none';

        bookmarkWidget.style.display = 'block';
        randomWordWidget.style.display = 'none';
        bookmarkedListContainer.classList.remove('visible');
        examplePhraseBar.classList.remove('visible');
    });

    updateBookmarksList();
}); 
