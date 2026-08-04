import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Warzone Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Call of Duty: Warzone indetectables para Call of Duty: Warzone en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Ricochet anti-cheat. Entrega digital instantánea.', h1: 'Warzone Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Call of Duty: Warzone en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Ricochet anti-cheat tras cada parche.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galería Warzone Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Warzone Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y Resurgence.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Warzone Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Call of Duty: Warzone indétectables pour Call of Duty: Warzone sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Ricochet anti-cheat. Livraison numérique instantanée.', h1: 'Warzone Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Call of Duty: Warzone sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Ricochet anti-cheat après chaque patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Warzone Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Warzone Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et Resurgence.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone Cheats für Call of Duty: Warzone auf PC. ESP Wallhack, Radar Hack und Aimbot mit Ricochet anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Call of Duty: Warzone: ESP Wallhack, Radar und Aimbot mit Ricochet anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Warzone Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und Resurgence zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Warzone Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Call of Duty: Warzone indetectáveis para Call of Duty: Warzone no PC. ESP wallhack, radar hack e Aimbot com manutenção Ricochet anti-cheat. Entrega digital instantánea.', h1: 'Warzone Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Call of Duty: Warzone no Windows PC: ESP wallhack, radar e Aimbot com manutenção Ricochet anti-cheat após cada patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeria Warzone Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Warzone Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e Resurgence.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Warzone Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Call of Duty: Warzone indetectable per Call of Duty: Warzone su PC. ESP wallhack, radar hack e Aimbot con manutenzione Ricochet anti-cheat. Consegna digitale istantanea.', h1: 'Warzone Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Call of Duty: Warzone su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Ricochet anti-cheat dopo ogni patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galleria Warzone Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Warzone Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e Resurgence.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone cheats voor Call of Duty: Warzone op PC. ESP wallhack, radar hack en Aimbot met Ricochet anti-cheat-onderhoud. Directe digitale levering.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Call of Duty: Warzone: ESP wallhack, radar en Aimbot met Ricochet anti-cheat-onderhoud na elke patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Warzone Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en Resurgence.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Warzone Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Call of Duty: Warzone dla Call of Duty: Warzone na PC. ESP wallhack, radar hack i Aimbot z konserwacją Ricochet anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Warzone Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Call of Duty: Warzone na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Ricochet anti-cheat po każdym patchu.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeria Warzone Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Warzone Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i Resurgence.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Warzone Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Call of Duty: Warzone для Call of Duty: Warzone на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Ricochet anti-cheat. Мгновенная цифровая доставка.', h1: 'Warzone Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Call of Duty: Warzone на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Ricochet anti-cheat после патчей.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Галерея Warzone Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Warzone Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и Resurgence.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Warzone Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Call of Duty: Warzone için undetected hileler. ESP wallhack, radar hack ve Aimbot — Ricochet anti-cheat bakımı. Anında dijital teslimat.', h1: 'Warzone Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Call of Duty: Warzone Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Ricochet anti-cheat bakımı dahil.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Warzone Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve Resurgence\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Warzone Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Call of Duty: Warzone undetected لـ Call of Duty: Warzone على PC. ESP wallhack ورadar hack وAimbot مع صيانة Ricochet anti-cheat. تسليم رقمي فوري.', h1: 'Warzone Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Call of Duty: Warzone على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'معرض Warzone Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Warzone Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وResurgence.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Warzone Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Call of Duty: Warzone向けundetectedチート。ESP wallhack、radar hack、Aimbot、Ricochet anti-cheatメンテナンス。即時デジタル配信。', h1: 'Warzone Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Call of Duty: Warzone Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Ricochet anti-cheatメンテナンス付き。', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Warzone Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にWarzone Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとResurgenceで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Warzone Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Call of Duty: Warzone undetected 치트. ESP wallhack, radar hack, Aimbot, Ricochet anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Warzone Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Call of Duty: Warzone Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Ricochet anti-cheat 유지보수 포함.', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Warzone Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Warzone Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 Resurgence에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Warzone Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Call of Duty: Warzone undetected作弊。ESP wallhack、radar hack、Aimbot、Ricochet anti-cheat维护。即时数字交付。', h1: 'Warzone Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Call of Duty: Warzone Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Ricochet anti-cheat维护。', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Warzone Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Warzone Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和Resurgence中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Warzone Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Call of Duty: Warzone undetected cheats. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. Instant digital delivery.', h1: 'Warzone Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Call of Duty: Warzone Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Ricochet maintenance सहित.', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Warzone Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Warzone Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और Resurgence में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Call of Duty: Warzone undetected untuk Call of Duty: Warzone di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Ricochet anti-cheat. Pengiriman digital instan.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Call of Duty: Warzone di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeri Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Warzone Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan Resurgence.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Warzone Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Call of Duty: Warzone undetected สำหรับ Call of Duty: Warzone บน PC. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. จัดส่งดิจิทัลทันที.', h1: 'Warzone Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Call of Duty: Warzone บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Ricochet maintenance', imageAlt: 'Warzone ESP player tags hack', gallery: 'แกลเลอรี Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Warzone Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Resurgence', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Call of Duty: Warzone undetected cho Call of Duty: Warzone trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Ricochet anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Call of Duty: Warzone trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Thư viện Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Warzone Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và Resurgence.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Warzone Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Call of Duty: Warzone для Call of Duty: Warzone на PC. ESP wallhack, radar hack, Aimbot, обслуговування Ricochet anti-cheat. Мгновенная цифровая доставка.', h1: 'Warzone Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Call of Duty: Warzone на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Галерея Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Warzone Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і Resurgence.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Warzone Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Warzone cheaty pro Call of Duty: Warzone na PC. ESP wallhack, radar hack, Aimbot, údržba Ricochet anti-cheat. Okamžité digitální doručení.', h1: 'Warzone Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Call of Duty: Warzone na Windows PC: ESP wallhack, radar, Aimbot s údržbou Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Warzone Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a Resurgence.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Warzone Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Call of Duty: Warzone undetected pentru Call of Duty: Warzone pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Ricochet anti-cheat. Livrare digitală instantă.', h1: 'Warzone Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Call of Duty: Warzone pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Warzone Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și Resurgence.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone cheats för Call of Duty: Warzone på PC. ESP wallhack, radar hack, Aimbot, Ricochet anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Call of Duty: Warzone på Windows PC: ESP wallhack, radar, Aimbot med Ricochet anti-cheat-underhåll.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Warzone Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och Resurgence.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'warzone-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'warzone-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'EAC Maintenance Log', focus: 'Ricochet patch status and rebuild notes', altKeyword: 'updates Ricochet maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and EAC questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'EAC Safe Status', focus: 'undetected maintenance after Ricochet anti-cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	'ricochet': { suffix: 'Patch Maintenance', focus: 'how Ricochet updates are handled for Call of Duty: Warzone hacks', altKeyword: 'Ricochet bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Warzone cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Call of Duty: Warzone hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Warzone cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Call of Duty: Warzone', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Warzone Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Warzone Hacks ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Call of Duty: Warzone. ${p.delivery}. Ricochet maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `Warzone ${meta.altKeyword}`,
		galleryTitle: `Warzone Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for BR and Resurgence.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'warzone-esp': { en: 'Call of Duty: Warzone ESP', es: 'Call of Duty: Warzone ESP', fr: 'Call of Duty: Warzone ESP', de: 'Call of Duty: Warzone ESP', pt: 'Call of Duty: Warzone ESP', it: 'Call of Duty: Warzone ESP', nl: 'Call of Duty: Warzone ESP', pl: 'Call of Duty: Warzone ESP', ru: 'Call of Duty: Warzone ESP', tr: 'Call of Duty: Warzone ESP', ar: 'Call of Duty: Warzone ESP', ja: 'Call of Duty: Warzone ESP', ko: 'Call of Duty: Warzone ESP', zh: 'Call of Duty: Warzone ESP', hi: 'Call of Duty: Warzone ESP', id: 'Call of Duty: Warzone ESP', th: 'Call of Duty: Warzone ESP', vi: 'Call of Duty: Warzone ESP', uk: 'Call of Duty: Warzone ESP', cs: 'Call of Duty: Warzone ESP', ro: 'Call of Duty: Warzone ESP', sv: 'Call of Duty: Warzone ESP' },
	'warzone-aimbot': { en: 'Call of Duty: Warzone Aimbot', es: 'Call of Duty: Warzone Aimbot', fr: 'Call of Duty: Warzone Aimbot', de: 'Call of Duty: Warzone Aimbot', pt: 'Call of Duty: Warzone Aimbot', it: 'Call of Duty: Warzone Aimbot', nl: 'Call of Duty: Warzone Aimbot', pl: 'Call of Duty: Warzone Aimbot', ru: 'Call of Duty: Warzone Aimbot', tr: 'Call of Duty: Warzone Aimbot', ar: 'Call of Duty: Warzone Aimbot', ja: 'Call of Duty: Warzone Aimbot', ko: 'Call of Duty: Warzone Aimbot', zh: 'Call of Duty: Warzone Aimbot', hi: 'Call of Duty: Warzone Aimbot', id: 'Call of Duty: Warzone Aimbot', th: 'Call of Duty: Warzone Aimbot', vi: 'Call of Duty: Warzone Aimbot', uk: 'Call of Duty: Warzone Aimbot', cs: 'Call of Duty: Warzone Aimbot', ro: 'Call of Duty: Warzone Aimbot', sv: 'Call of Duty: Warzone Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Call of Duty: Warzone Wallhack', es: 'Call of Duty: Warzone Wallhack', fr: 'Call of Duty: Warzone Wallhack', de: 'Call of Duty: Warzone Wallhack', pt: 'Call of Duty: Warzone Wallhack', it: 'Call of Duty: Warzone Wallhack', nl: 'Call of Duty: Warzone Wallhack', pl: 'Call of Duty: Warzone Wallhack', ru: 'Call of Duty: Warzone Wallhack', tr: 'Call of Duty: Warzone Wallhack', ar: 'Call of Duty: Warzone Wallhack', ja: 'Call of Duty: Warzone Wallhack', ko: 'Call of Duty: Warzone Wallhack', zh: 'Call of Duty: Warzone Wallhack', hi: 'Call of Duty: Warzone Wallhack', id: 'Call of Duty: Warzone Wallhack', th: 'Call of Duty: Warzone Wallhack', vi: 'Call of Duty: Warzone Wallhack', uk: 'Call of Duty: Warzone Wallhack', cs: 'Call of Duty: Warzone Wallhack', ro: 'Call of Duty: Warzone Wallhack', sv: 'Call of Duty: Warzone Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'ricochet': { en: 'Ricochet Bypass', es: 'Bypass Ricochet anti-cheat', fr: 'Bypass Ricochet anti-cheat', de: 'Ricochet Bypass', pt: 'Bypass Ricochet anti-cheat', it: 'Bypass Ricochet anti-cheat', nl: 'Ricochet Bypass', pl: 'Bypass Ricochet anti-cheat', ru: 'Bypass Ricochet anti-cheat', tr: 'Ricochet bypass', ar: 'Bypass Ricochet anti-cheat', ja: 'Ricochet Bypass', ko: 'Ricochet Bypass', zh: 'Ricochet Bypass', hi: 'Ricochet Bypass', id: 'Bypass Ricochet anti-cheat', th: 'Ricochet Bypass', vi: 'Bypass Ricochet anti-cheat', uk: 'Bypass Ricochet anti-cheat', cs: 'Ricochet Bypass', ro: 'Bypass Ricochet anti-cheat', sv: 'Ricochet Bypass' },
	'cheats-2026': { en: 'Warzone Cheats 2026', es: 'Warzone Cheats 2026', fr: 'Warzone Cheats 2026', de: 'Warzone Cheats 2026', pt: 'Warzone Cheats 2026', it: 'Warzone Cheats 2026', nl: 'Warzone Cheats 2026', pl: 'Warzone Cheats 2026', ru: 'Warzone Cheats 2026', tr: 'Warzone Cheats 2026', ar: 'Warzone Cheats 2026', ja: 'Warzone Cheats 2026', ko: 'Warzone Cheats 2026', zh: 'Warzone Cheats 2026', hi: 'Warzone Cheats 2026', id: 'Warzone Cheats 2026', th: 'Warzone Cheats 2026', vi: 'Warzone Cheats 2026', uk: 'Warzone Cheats 2026', cs: 'Warzone Cheats 2026', ro: 'Warzone Cheats 2026', sv: 'Warzone Cheats 2026' },
	hacks: { en: 'Warzone Hacks', es: 'Warzone Hacks', fr: 'Warzone Hacks', de: 'Warzone Hacks', pt: 'Warzone Hacks', it: 'Warzone Hacks', nl: 'Warzone Hacks', pl: 'Warzone Hacks', ru: 'Warzone Hacks', tr: 'Warzone Hacks', ar: 'Warzone Hacks', ja: 'Warzone Hacks', ko: 'Warzone Hacks', zh: 'Warzone Hacks', hi: 'Warzone Hacks', id: 'Warzone Hacks', th: 'Warzone Hacks', vi: 'Warzone Hacks', uk: 'Warzone Hacks', cs: 'Warzone Hacks', ro: 'Warzone Hacks', sv: 'Warzone Hacks' },
	'cheat-download': { en: 'Call of Duty: Warzone Cheat Download', es: 'Descarga Warzone Cheats', fr: 'Téléchargement Warzone Cheats', de: 'Call of Duty: Warzone Cheat Download', pt: 'Download Warzone Cheats', it: 'Download Warzone Cheats', nl: 'Call of Duty: Warzone Cheat Download', pl: 'Pobieranie Warzone Cheats', ru: 'Скачать Warzone Cheats', tr: 'Call of Duty: Warzone Hile İndir', ar: 'Call of Duty: Warzone Cheat Download', ja: 'Call of Duty: Warzone Cheat Download', ko: 'Call of Duty: Warzone Cheat Download', zh: 'Call of Duty: Warzone Cheat Download', hi: 'Call of Duty: Warzone Cheat Download', id: 'Call of Duty: Warzone Cheat Download', th: 'Call of Duty: Warzone Cheat Download', vi: 'Call of Duty: Warzone Cheat Download', uk: 'Завантаження Warzone Cheats', cs: 'Call of Duty: Warzone Cheat Download', ro: 'Descărcare Warzone Cheats', sv: 'Call of Duty: Warzone Cheat Download' },
	'mod-menu': { en: 'Call of Duty: Warzone Mod Menu', es: 'Call of Duty: Warzone Mod Menu', fr: 'Call of Duty: Warzone Mod Menu', de: 'Call of Duty: Warzone Mod Menu', pt: 'Call of Duty: Warzone Mod Menu', it: 'Call of Duty: Warzone Mod Menu', nl: 'Call of Duty: Warzone Mod Menu', pl: 'Call of Duty: Warzone Mod Menu', ru: 'Call of Duty: Warzone Mod Menu', tr: 'Call of Duty: Warzone Mod Menu', ar: 'Call of Duty: Warzone Mod Menu', ja: 'Call of Duty: Warzone Mod Menu', ko: 'Call of Duty: Warzone Mod Menu', zh: 'Call of Duty: Warzone Mod Menu', hi: 'Call of Duty: Warzone Mod Menu', id: 'Call of Duty: Warzone Mod Menu', th: 'Call of Duty: Warzone Mod Menu', vi: 'Call of Duty: Warzone Mod Menu', uk: 'Call of Duty: Warzone Mod Menu', cs: 'Call of Duty: Warzone Mod Menu', ro: 'Call of Duty: Warzone Mod Menu', sv: 'Call of Duty: Warzone Mod Menu' },
	'soft-aim': { en: 'Call of Duty: Warzone Soft Aim', es: 'Call of Duty: Warzone Soft Aim', fr: 'Call of Duty: Warzone Soft Aim', de: 'Call of Duty: Warzone Soft Aim', pt: 'Call of Duty: Warzone Soft Aim', it: 'Call of Duty: Warzone Soft Aim', nl: 'Call of Duty: Warzone Soft Aim', pl: 'Call of Duty: Warzone Soft Aim', ru: 'Call of Duty: Warzone Soft Aim', tr: 'Call of Duty: Warzone Soft Aim', ar: 'Call of Duty: Warzone Soft Aim', ja: 'Call of Duty: Warzone Soft Aim', ko: 'Call of Duty: Warzone Soft Aim', zh: 'Call of Duty: Warzone Soft Aim', hi: 'Call of Duty: Warzone Soft Aim', id: 'Call of Duty: Warzone Soft Aim', th: 'Call of Duty: Warzone Soft Aim', vi: 'Call of Duty: Warzone Soft Aim', uk: 'Call of Duty: Warzone Soft Aim', cs: 'Call of Duty: Warzone Soft Aim', ro: 'Call of Duty: Warzone Soft Aim', sv: 'Call of Duty: Warzone Soft Aim' },
	'best-cheats': { en: 'Best Warzone Cheats', es: 'Mejores Warzone Cheats', fr: 'Meilleures Warzone Cheats', de: 'Beste Warzone Cheats', pt: 'Melhores Warzone Cheats', it: 'Migliori Warzone Cheats', nl: 'Beste Warzone Cheats', pl: 'Najlepsze Warzone Cheats', ru: 'Лучшие Warzone Cheats', tr: 'En İyi Call of Duty: Warzone Hileleri', ar: 'Best Warzone Cheats', ja: 'Best Warzone Cheats', ko: 'Best Warzone Cheats', zh: 'Best Warzone Cheats', hi: 'Best Warzone Cheats', id: 'Best Warzone Cheats', th: 'Best Warzone Cheats', vi: 'Best Warzone Cheats', uk: 'Найкращі Warzone Cheats', cs: 'Nejlepší Warzone Cheats', ro: 'Cele mai bune Warzone Cheats', sv: 'Bästa Warzone Cheats' },
	'aimbot-hack': { en: 'Call of Duty: Warzone Aimbot Hack', es: 'Call of Duty: Warzone Aimbot Hack', fr: 'Call of Duty: Warzone Aimbot Hack', de: 'Call of Duty: Warzone Aimbot Hack', pt: 'Call of Duty: Warzone Aimbot Hack', it: 'Call of Duty: Warzone Aimbot Hack', nl: 'Call of Duty: Warzone Aimbot Hack', pl: 'Call of Duty: Warzone Aimbot Hack', ru: 'Call of Duty: Warzone Aimbot Hack', tr: 'Call of Duty: Warzone Aimbot Hack', ar: 'Call of Duty: Warzone Aimbot Hack', ja: 'Call of Duty: Warzone Aimbot Hack', ko: 'Call of Duty: Warzone Aimbot Hack', zh: 'Call of Duty: Warzone Aimbot Hack', hi: 'Call of Duty: Warzone Aimbot Hack', id: 'Call of Duty: Warzone Aimbot Hack', th: 'Call of Duty: Warzone Aimbot Hack', vi: 'Call of Duty: Warzone Aimbot Hack', uk: 'Call of Duty: Warzone Aimbot Hack', cs: 'Call of Duty: Warzone Aimbot Hack', ro: 'Call of Duty: Warzone Aimbot Hack', sv: 'Call of Duty: Warzone Aimbot Hack' },
	'esp-hack': { en: 'Call of Duty: Warzone ESP Hack', es: 'Call of Duty: Warzone ESP Hack', fr: 'Call of Duty: Warzone ESP Hack', de: 'Call of Duty: Warzone ESP Hack', pt: 'Call of Duty: Warzone ESP Hack', it: 'Call of Duty: Warzone ESP Hack', nl: 'Call of Duty: Warzone ESP Hack', pl: 'Call of Duty: Warzone ESP Hack', ru: 'Call of Duty: Warzone ESP Hack', tr: 'Call of Duty: Warzone ESP Hack', ar: 'Call of Duty: Warzone ESP Hack', ja: 'Call of Duty: Warzone ESP Hack', ko: 'Call of Duty: Warzone ESP Hack', zh: 'Call of Duty: Warzone ESP Hack', hi: 'Call of Duty: Warzone ESP Hack', id: 'Call of Duty: Warzone ESP Hack', th: 'Call of Duty: Warzone ESP Hack', vi: 'Call of Duty: Warzone ESP Hack', uk: 'Call of Duty: Warzone ESP Hack', cs: 'Call of Duty: Warzone ESP Hack', ro: 'Call of Duty: Warzone ESP Hack', sv: 'Call of Duty: Warzone ESP Hack' },
	'unlock-all': { en: 'Call of Duty: Warzone Unlock All', es: 'Call of Duty: Warzone Unlock All', fr: 'Call of Duty: Warzone Unlock All', de: 'Call of Duty: Warzone Unlock All', pt: 'Call of Duty: Warzone Unlock All', it: 'Call of Duty: Warzone Unlock All', nl: 'Call of Duty: Warzone Unlock All', pl: 'Call of Duty: Warzone Unlock All', ru: 'Call of Duty: Warzone Unlock All', tr: 'Call of Duty: Warzone Unlock All', ar: 'Call of Duty: Warzone Unlock All', ja: 'Call of Duty: Warzone Unlock All', ko: 'Call of Duty: Warzone Unlock All', zh: 'Call of Duty: Warzone Unlock All', hi: 'Call of Duty: Warzone Unlock All', id: 'Call of Duty: Warzone Unlock All', th: 'Call of Duty: Warzone Unlock All', vi: 'Call of Duty: Warzone Unlock All', uk: 'Call of Duty: Warzone Unlock All', cs: 'Call of Duty: Warzone Unlock All', ro: 'Call of Duty: Warzone Unlock All', sv: 'Call of Duty: Warzone Unlock All' },
};

const CTA2_HREF = {
	'warzone-esp': '/warzone-wallhack/',
	'warzone-aimbot': '/warzone-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/undetected-warzone-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/ricochet-bypass/',
	wallhack: '/warzone-esp/',
	radar: '/warzone-esp/',
	'ricochet': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/undetected-warzone-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/warzone-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/warzone-aimbot/',
	'esp-hack': '/warzone-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Warzone Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Warzone Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for warzonehacks.net and Call of Duty: Warzone licenses.`),
		imageAlt: `Warzone hacks ${kind} policy`,
		galleryTitle: `Warzone Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on warzonehacks.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@warzonehacks.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
