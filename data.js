const records = [
  {
    "theme": "Construction neuve",
    "title": "RE2020",
    "ref": "CCH, art. R. 172-1 à R. 172-9",
    "url": "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000053382800",
    "body": "Exigences de performance énergétique et environnementale. Identifier l’usage réglementaire et la date de dépôt de la demande avant de sélectionner la version applicable."
  },
  {
    "theme": "Construction neuve",
    "title": "RE2020 — méthode de calcul",
    "ref": "Arrêté du 4 août 2021",
    "url": "https://www.legifrance.gouv.fr/loda/id/LEGISCTA000043938668",
    "body": "Exigences et méthode de calcul en France métropolitaine."
  },
  {
    "theme": "Construction neuve",
    "title": "Habitation neuve en outre-mer",
    "ref": "Arrêté du 17 avril 2009",
    "url": "https://www.legifrance.gouv.fr/loda/id/LEGITEXT000020532735",
    "body": "Caractéristiques thermiques minimales des bâtiments d’habitation neufs en Guadeloupe, Martinique, Guyane et à La Réunion, selon le champ de l’arrêté."
  },
  {
    "theme": "Rénovation",
    "title": "Bâtiments existants — champ et exclusions",
    "ref": "CCH, art. R. 173-1 à R. 173-3",
    "url": "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000043819411/",
    "body": "Le champ exclut notamment les bâtiments indépendants de moins de 50 m² de surface de plancher et les constructions provisoires prévues pour deux ans ou moins."
  },
  {
    "theme": "Rénovation",
    "title": "Performance des éléments remplacés ou installés",
    "ref": "Arrêté du 3 mai 2007",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000822199/",
    "body": "Prescriptions thermiques relatives aux bâtiments existants. Voir le CCH, art. R. 173-3 pour l’articulation avec le régime de rénovation globale."
  },
  {
    "theme": "Rénovation",
    "title": "Rénovation thermique globale",
    "ref": "Arrêté du 13 juin 2008",
    "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000019308241",
    "body": "Le titre de l’arrêté vise les bâtiments existants de plus de 1 000 m² faisant l’objet de travaux importants. Lire les critères cumulatifs à l’article R. 173-2."
  },
  {
    "theme": "Rénovation",
    "title": "Isolation lors de travaux importants",
    "ref": "CCH, art. R. 173-4 et suivants",
    "url": "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000043819367",
    "body": "Consulter les dispositions sur le ravalement, la réfection de toiture, l’aménagement de locaux en vue de les rendre habitables et les exceptions prévues."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "DPE — cadre légal",
    "ref": "CCH, art. L. 126-26 à L. 126-33",
    "url": "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000006158998/2026-08-01/",
    "body": "Le DPE renseigne sur la consommation d’énergie et les émissions de gaz à effet de serre et comporte des recommandations."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "DPE des logements en métropole",
    "ref": "Arrêté du 31 mars 2021",
    "url": "https://www.legifrance.gouv.fr/jorf/id/JORFSCTA000043353339",
    "body": "Contenu du diagnostic pour les bâtiments ou parties de bâtiments à usage d’habitation en France métropolitaine."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "DPE — conversion de l’électricité",
    "ref": "Arrêté du 13 août 2025",
    "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052134589",
    "body": "Modification du facteur de conversion de l’électricité finale en énergie primaire pour le DPE."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "DPE collectif",
    "ref": "CCH, art. L. 126-31",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047299309",
    "body": "Permis déposé avant le 1er janvier 2013. Renouvellement ou mise à jour tous les dix ans, excepté si un DPE réalisé après le 1er juillet 2021 établit une classe A, B ou C."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "Audit énergétique préalable à la vente",
    "ref": "CCH, art. L. 126-28-1",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043967365",
    "body": "Le champ vise les bâtiments ou parties de bâtiment d’habitation à logement unique, ou à plusieurs logements hors statut de la copropriété, selon la classe et le calendrier légal."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "Audit de vente — modalités",
    "ref": "Décret n° 2022-780 du 4 mai 2022",
    "url": "https://www.legifrance.gouv.fr/eli/decret/2022/5/4/LOGL2134220D/jo/texte",
    "body": "Modalités de l’audit et dispositions relatives aux actes de vente visés."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "Audit de vente — contenu en métropole",
    "ref": "Arrêté du 4 mai 2022",
    "url": "https://www.legifrance.gouv.fr/eli/arrete/2022/5/4/LOGL2115138A/jo/texte",
    "body": "Contenu de l’audit énergétique réglementaire en France métropolitaine."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "Décence énergétique des logements loués",
    "ref": "Loi n° 89-462 du 6 juillet 1989, art. 6",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043977105",
    "body": "Métropole : classes A à F depuis 2025, A à E en 2028, A à D en 2034. Guadeloupe, Martinique, Guyane, La Réunion et Mayotte : A à F en 2028, A à E en 2031."
  },
  {
    "theme": "Diagnostics et logement",
    "title": "Projet de plan pluriannuel de travaux",
    "ref": "CCH, art. L. 731-2",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043977380",
    "body": "Article à consulter pour les immeubles soumis au statut de la copropriété, l’ancienneté, le contenu du projet et les cas de dispense."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "Décret tertiaire — objectifs",
    "ref": "CCH, art. L. 174-1",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043977483",
    "body": "Objectifs relatifs de réduction de 40 %, 50 % et 60 % en 2030, 2040 et 2050, ou objectif en valeur absolue. Modulations prévues pour certains motifs techniques, patrimoniaux, économiques ou liés à l’activité."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "Décret tertiaire — assujettissement",
    "ref": "CCH, art. R. 174-22",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043819501",
    "body": "Seuil de 1 000 m² de surface de plancher. Examiner le cumul en bâtiment mixte, sur une même unité foncière ou sur un même site, ainsi que les exclusions du III."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "Décret tertiaire — mise en œuvre",
    "ref": "Arrêté du 10 avril 2020",
    "url": "https://www.legifrance.gouv.fr/eli/arrete/2020/4/10/LOGL2005904A/jo/texte",
    "body": "Modalités de réduction des consommations d’énergie finale dans les bâtiments à usage tertiaire. Consulter les arrêtés modificatifs et les annexes de la catégorie."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "Déclaration des consommations tertiaires",
    "ref": "CCH, art. R. 174-27",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044133897",
    "body": "Plateforme numérique et transmission annuelle des données de l’année précédente au plus tard le 30 septembre."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "BACS — automatisation et contrôle",
    "ref": "CCH, art. R. 175-2",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053216492",
    "body": "L’article distingue les seuils supérieurs à 290 kW et à 70 kW. Pour les bâtiments du II, 4°, le texte vise le renouvellement du système et au plus tard le 1er janvier 2030. Il prévoit une dispense justifiée par étude dans les conditions du texte."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "Individualisation des frais de chauffage",
    "ref": "CCH, art. R. 174-2",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043819451",
    "body": "Consulter le champ applicable aux immeubles collectifs et les exceptions prévues à l’article."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "Entretien des chaudières",
    "ref": "Code de l’environnement, art. R. 224-41-4 à R. 224-41-9",
    "url": "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000020725503/",
    "body": "Entretien annuel des chaudières de puissance nominale comprise entre 4 et 400 kW, dans le champ de la section."
  },
  {
    "theme": "Tertiaire et exploitation",
    "title": "Audit ou management énergétique des entreprises",
    "ref": "Code de l’énergie, art. L. 233-1 à L. 233-5",
    "url": "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000027718472",
    "body": "Pour les entreprises concernées, audit tous les quatre ans à partir de 2,75 GWh de consommation finale annuelle moyenne en l’absence de système de management de l’énergie. Lire les règles propres au système de management et les dates d’application."
  },
  {
    "theme": "Renouvelables et environnement",
    "title": "Toitures — neuf, extensions et rénovations lourdes",
    "ref": "CCH, art. L. 171-4",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054142288",
    "body": "Le texte vise certains usages et projets de plus de 500 m² d’emprise au sol. Le IV prévoit des exonérations par décision motivée, et permet dans certains cas de les subordonner à un revêtement réflectif."
  },
  {
    "theme": "Renouvelables et environnement",
    "title": "Toitures de bâtiments existants",
    "ref": "CCH, art. L. 171-5",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047298141",
    "body": "Dispositions relatives à certaines toitures existantes. Vérifier le calendrier et les textes d’application attachés à l’article."
  },
  {
    "theme": "Renouvelables et environnement",
    "title": "Stationnements extérieurs — ombrières",
    "ref": "Loi n° 2023-175 du 10 mars 2023, art. 40",
    "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051560699",
    "body": "Consulter les critères de superficie, les alternatives prévues au I, les exceptions et les échéances dans la version applicable."
  },
  {
    "theme": "Renouvelables et environnement",
    "title": "Stationnements — perméabilité et ombrage",
    "ref": "Code de l’urbanisme, art. L. 111-19-1",
    "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051560694",
    "body": "Régime d’aménagement des parcs extérieurs visés par l’article."
  },
  {
    "theme": "Renouvelables et environnement",
    "title": "Recharge des véhicules électriques",
    "ref": "CCH, art. L. 113-11",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041563725",
    "body": "Lire cet article et les suivants pour les cas de prééquipement et d’équipement des parcs de stationnement."
  },
  {
    "theme": "Renouvelables et environnement",
    "title": "Raccordement à un réseau de chaleur ou de froid classé",
    "ref": "Code de l’énergie, art. L. 712-3",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000023987407",
    "body": "Consulter l’obligation de raccordement dans les zones de développement prioritaire et les possibilités de dérogation."
  },
  {
    "theme": "Renouvelables et environnement",
    "title": "Diagnostic produits, équipements, matériaux et déchets",
    "ref": "CCH, art. L. 126-34",
    "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000043977455",
    "body": "Diagnostic prévu lors de démolitions ou rénovations significatives dans le champ défini par le code."
  },
  {
    "theme": "Financement",
    "title": "Certificats d’économies d’énergie",
    "ref": "Code de l’énergie, art. L. 221-1",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031065470/",
    "body": "Cadre des obligations d’économies d’énergie pour les personnes visées par l’article."
  },
  {
    "theme": "Financement",
    "title": "Prime de transition énergétique",
    "ref": "Décret n° 2020-26 du 14 janvier 2020",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000041400291",
    "body": "Cadre de la prime de transition énergétique et conditions à lire dans la version applicable."
  },
  {
    "theme": "Financement",
    "title": "Éco-prêt à taux zéro",
    "ref": "Code général des impôts, art. 244 quater U",
    "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000023380703",
    "body": "Cadre fiscal des avances remboursables sans intérêt pour les travaux visés."
  },
  {
    "theme": "Lois et Europe",
    "title": "Transition énergétique pour la croissance verte",
    "ref": "Loi n° 2015-992 du 17 août 2015",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031044385",
    "body": "Loi structurante. Vérifier les dispositions codifiées et leur version applicable."
  },
  {
    "theme": "Lois et Europe",
    "title": "ELAN — réduction des consommations tertiaires",
    "ref": "Loi n° 2018-1021 du 23 novembre 2018, art. 175",
    "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037642495",
    "body": "Article d’origine à relier au régime aujourd’hui codifié à l’article L. 174-1 du CCH."
  },
  {
    "theme": "Lois et Europe",
    "title": "Énergie et climat",
    "ref": "Loi n° 2019-1147 du 8 novembre 2019",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000039355955",
    "body": "Texte relatif à l’énergie et au climat."
  },
  {
    "theme": "Lois et Europe",
    "title": "Climat et résilience",
    "ref": "Loi n° 2021-1104 du 22 août 2021",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000043956924",
    "body": "Voir notamment les articles 153 à 160 pour les diagnostics, l’audit et la location, et l’article 176 pour le tertiaire."
  },
  {
    "theme": "Lois et Europe",
    "title": "Économie circulaire",
    "ref": "Loi n° 2020-105 du 10 février 2020",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000041553759/",
    "body": "Loi relative à la lutte contre le gaspillage et à l’économie circulaire."
  },
  {
    "theme": "Lois et Europe",
    "title": "Accélération des énergies renouvelables",
    "ref": "Loi n° 2023-175 du 10 mars 2023",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000047294244",
    "body": "Voir notamment les dispositions relatives aux toitures et aux parcs de stationnement."
  },
  {
    "theme": "Lois et Europe",
    "title": "Adaptation au droit de l’Union européenne",
    "ref": "Loi n° 2025-391 du 30 avril 2025",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFARTI000051539160/",
    "body": "Loi d’adaptation comprenant des dispositions énergétiques et environnementales."
  },
  {
    "theme": "Lois et Europe",
    "title": "Simplification de la vie économique",
    "ref": "Loi n° 2026-403 du 26 mai 2026",
    "url": "https://www.legifrance.gouv.fr/WAspad/UnTexteDeJorf?numjo=ECOM2409377L",
    "body": "Voir notamment les articles 5 et 47 pour les modifications apportées au DPE collectif et aux dispositions sur les toitures."
  },
  {
    "theme": "Lois et Europe",
    "title": "Performance énergétique des bâtiments",
    "ref": "Directive (UE) 2024/1275",
    "url": "https://eur-lex.europa.eu/eli/dir/2024/1275",
    "body": "Refonte européenne. Voir notamment les articles 7 à 16 et les mesures nationales de transposition liées dans EUR-Lex."
  },
  {
    "theme": "Lois et Europe",
    "title": "Efficacité énergétique",
    "ref": "Directive (UE) 2023/1791",
    "url": "https://eur-lex.europa.eu/eli/dir/2023/1791/oj?locale=fr",
    "body": "Voir notamment les articles 5, 6 et 11 sur le secteur public, ses bâtiments et la gestion ou l’audit énergétique."
  },
  {
    "theme": "Lois et Europe",
    "title": "Énergies renouvelables",
    "ref": "Directive (UE) 2023/2413",
    "url": "https://eur-lex.europa.eu/eli/dir/2023/2413/oj/fra",
    "body": "Directive modifiant notamment la directive (UE) 2018/2001. Consulter les dispositions relatives à l’intégration des énergies renouvelables dans les bâtiments."
  }
];
const gaps = ["Outre-mer : inventorier Mayotte, les autres collectivités, les textes locaux et les règles applicables à la location et aux diagnostics.","Construction et rénovation : vérifier les versions RE2020 et RT historiques, les usages et calendriers, les petites constructions, les extensions, les dérogations, les seuils et les arrêtés complémentaires.","Exploitation : compléter les modulations et les sanctions du tertiaire, les textes BACS associés, l’inspection des équipements CVC, les températures de chauffage et de refroidissement, l’éclairage et les fluides frigorigènes.","Logement : recenser les textes de gel des loyers, les dates d’application de l’audit, le DPE tertiaire et l’ensemble des cas de copropriété et de décence.","Écologie du bâtiment : compléter eau, sols, réemploi, déchets, biodiversité, carbone, risques et règles locales d’urbanisme ayant un lien direct avec le bâtiment.","Europe et aides : suivre la transposition article par article, les règlements directement applicables et l’ensemble des arrêtés des aides et certificats."];
