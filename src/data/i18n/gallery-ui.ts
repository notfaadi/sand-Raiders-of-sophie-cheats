import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone gallery',
		subtitle:
			'Call of Duty: Warzone visuals from loadout builds, squad fights, and battle royale combat — paired with cheat tools that help players stay aware on the map.',
		lead:
			'Sand Raiders Cheats is built for Call of Duty: Warzone\'s BR loop: read the map, track enemy squads, grab loot, and survive the gulag before the final circle closes in.',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Spot enemy players and squad outlines across Verdansk and Resurgence so you can choose fights and rotation routes with better intel.' },
			{ title: 'Loot & Chest Markers', copy: 'Highlight loadout drops, chests, and high-tier loot without flooding the screen mid-match.' },
			{ title: 'Call of Duty: Warzone Aimbot Controls', copy: 'Tune smoothness, target priority, and hotkeys for AR, SMG, and sniper fights before you commit to a license.' },
		],
		updatesLabel: 'Sand Raiders cheat updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galería Call of Duty: Warzone',
		subtitle: 'Visuales de Call of Duty: Warzone con loadouts, peleas de escuadrón y combate battle royale — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Sand Raiders Cheats está pensado para el loop BR de Call of Duty: Warzone: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al gulag.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Verdansk y Resurgence para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Call of Duty: Warzone', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galerie Call of Duty: Warzone',
		subtitle: 'Visuels Call of Duty: Warzone — loadouts, combats d\'escouade et battle royale — avec ESP, radar et Aimbot.',
		lead: 'Sand Raiders Cheats suit la boucle BR de Call of Duty: Warzone : lire la carte, suivre les escouades, loot et survivre au gulag.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Verdansk et Resurgence pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Call of Duty: Warzone', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone Galerie',
		subtitle: 'Call of Duty: Warzone-Bilder zu Loadouts, Squad-Kämpfen und Battle Royale — mit ESP, Radar und Aimbot.',
		lead: 'Sand Raiders Cheats passt zur BR-Schleife von Call of Duty: Warzone: Karte lesen, Gegner-Trupps tracken, looten und Reboot van überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Verdansk und Resurgence für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Call of Duty: Warzone Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Sand Raiders Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galeria Call of Duty: Warzone',
		subtitle: 'Visuais de Call of Duty: Warzone com loadouts, combates de esquadrão e battle royale — com ESP, radar e Aimbot.',
		lead: 'Sand Raiders Cheats segue o loop BR do Call of Duty: Warzone: ler o mapa, rastrear esquadrões, lootar e sobreviver ao gulag.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Verdansk e Resurgence para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Call of Duty: Warzone', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galleria Call of Duty: Warzone',
		subtitle: 'Immagini Call of Duty: Warzone — loadout, scontri di squadra e battle royale — con ESP, radar e Aimbot.',
		lead: 'Sand Raiders Cheats è pensato per il loop BR di Call of Duty: Warzone: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al gulag.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Verdansk e Resurgence per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Call of Duty: Warzone', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone galerij',
		subtitle: 'Call of Duty: Warzone-beelden van loadouts, squadgevechten en battle royale — met ESP, radar en Aimbot.',
		lead: 'Sand Raiders Cheats volgt de BR-loop van Call of Duty: Warzone: kaart lezen, vijandelijke squads volgen, looten en de gulag overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Verdansk en Resurgence voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Call of Duty: Warzone Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Sand Raiders Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galeria Call of Duty: Warzone',
		subtitle: 'Grafiki Call of Duty: Warzone — loadouty, walki drużynowe i battle royale — z ESP, radar i Aimbot.',
		lead: 'Sand Raiders Cheats pasuje do pętli BR Call of Duty: Warzone: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj gulag.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Verdansk i Resurgence dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Call of Duty: Warzone', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Галерея Call of Duty: Warzone',
		subtitle: 'Визуалы Call of Duty: Warzone — лоадауты, бои отрядов и battle royale — с ESP, радаром и Aimbot.',
		lead: 'Sand Raiders Cheats создан для BR-цикла Call of Duty: Warzone: читать карту, отслеживать вражеские отряды, лут и выживать в gulag.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Verdansk и Resurgence для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Call of Duty: Warzone', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone galerisi',
		subtitle: 'Loadout, takım savaşları ve battle royale görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Sand Raiders Cheats, Call of Duty: Warzone BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve gulag\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Verdansk ve Resurgence\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Call of Duty: Warzone Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Sand Raiders Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'معرض Call of Duty: Warzone',
		subtitle: 'صور Call of Duty: Warzone — loadouts ومعارك الفرق وbattle royale — مع ESP ورادار وAimbot.',
		lead: 'Sand Raiders Cheats مبني لحلقة BR في Call of Duty: Warzone: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في gulag.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Verdansk وResurgence لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Call of Duty: Warzone', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのCall of Duty: Warzoneビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Sand Raiders CheatsはCall of Duty: WarzoneのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてgulagを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'VerdanskとResurgenceで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Call of Duty: Warzoneエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Sand Raiders Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Call of Duty: Warzone 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Sand Raiders Cheats는 Call of Duty: Warzone BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, gulag 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Verdansk와 Resurgence에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Call of Duty: Warzone 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Sand Raiders Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone 图库',
		subtitle: 'Call of Duty: Warzone 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Sand Raiders Cheats 为 Call of Duty: Warzone BR 循环设计：读图、追踪敌方小队、搜刮并在 gulag 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Verdansk 和 Resurgence 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Call of Duty: Warzone 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Sand Raiders Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone गैलरी',
		subtitle: 'Loadout, squad fights और battle royale visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Sand Raiders Cheats Call of Duty: Warzone BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और gulag survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Verdansk और Resurgence पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Call of Duty: Warzone Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Sand Raiders Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galeri Call of Duty: Warzone',
		subtitle: 'Visual Call of Duty: Warzone — loadout, pertempuran squad, dan battle royale — dengan ESP, radar, dan Aimbot.',
		lead: 'Sand Raiders Cheats untuk loop BR Call of Duty: Warzone: baca peta, lacak squad musuh, loot, dan selamat di gulag.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Verdansk dan Resurgence untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Call of Duty: Warzone', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'แกลเลอรี Call of Duty: Warzone',
		subtitle: 'ภาพ Call of Duty: Warzone — loadout การต่อสู้ทีม และ battle royale — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Sand Raiders Cheats สำหรับลูป BR ของ Call of Duty: Warzone: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด gulag',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Verdansk และ Resurgence เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Call of Duty: Warzone', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Thư viện Call of Duty: Warzone',
		subtitle: 'Hình ảnh Call of Duty: Warzone — loadout, chiến đấu squad và battle royale — với ESP, radar và Aimbot.',
		lead: 'Sand Raiders Cheats cho vòng BR Call of Duty: Warzone: đọc bản đồ, theo dõi squad địch, loot và sống sót gulag.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Verdansk và Resurgence để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Call of Duty: Warzone', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Галерея Call of Duty: Warzone',
		subtitle: 'Візуали Call of Duty: Warzone — loadout, бої загонів і battle royale — з ESP, радаром і Aimbot.',
		lead: 'Sand Raiders Cheats для BR-циклу Call of Duty: Warzone: читати карту, відстежувати ворожі загони, лут і виживати в gulag.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Verdansk і Resurgence для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Call of Duty: Warzone', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galerie Call of Duty: Warzone',
		subtitle: 'Call of Duty: Warzone vizuály — loadouty, squad souboje a battle royale — s ESP, radarem a Aimbot.',
		lead: 'Sand Raiders Cheats pro BR smyčku Call of Duty: Warzone: číst mapu, sledovat nepřátelské squady, loot a přežít gulag.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Verdansk a Resurgence pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Call of Duty: Warzone', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Galerie Call of Duty: Warzone',
		subtitle: 'Vizualuri Call of Duty: Warzone — loadout, lupte de squad și battle royale — cu ESP, radar și Aimbot.',
		lead: 'Sand Raiders Cheats pentru bucla BR Call of Duty: Warzone: citește harta, urmărește squad-uri inamice, loot și supraviețuiește gulag.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Verdansk și Resurgence pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Call of Duty: Warzone', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Sand Raiders Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Sand Raiders Cheats',
		title: 'Call of Duty: Warzone galleri',
		subtitle: 'Call of Duty: Warzone-bilder — loadouts, squadstrider och battle royale — med ESP, radar och Aimbot.',
		lead: 'Sand Raiders Cheats för Call of Duty: Warzone:s BR-loop: läs kartan, spåra fiendesquads, loota och överlev gulag.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Verdansk och Resurgence för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Call of Duty: Warzone Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Sand Raiders Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
