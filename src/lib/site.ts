export const BRAND = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "Medya360",
  tagline: "Performans Odaklı Dijital Pazarlama & E-Ticaret Ajansı",
  phone1: "0 850 305 00 00",
  phone2: "0 850 305 00 01",
  email: "info@medya360.com",
  address: "Örnek Mah. Örnek Bulvarı No:1, İstanbul",
  hours: "08:30 – 18:00, Pazartesi – Cuma",
  workingHoursNote: "Mesai saatlerinde doğrudan arayın:",
};

export type NavChild = { label: string; href: string; desc?: string; divider?: boolean };
export type NavItem = { label: string; href: string; alignRight?: boolean; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Reklam",
    href: "/hizmetler#reklam",
    children: [
      { label: "Google Ads Reklam Yönetimi", href: "/hizmetler/google-ads-reklam-yonetimi" },
      { label: "Meta Business Reklam Yönetimi", href: "/hizmetler/meta-reklam-yonetimi" },
      { label: "LinkedIn Reklam Yönetimi", href: "/hizmetler/linkedin-reklam-yonetimi" },
      { label: "TikTok Reklam Yönetimi", href: "/hizmetler/tiktok-reklam-yonetimi" },
      { label: "X Business Reklam Yönetimi", href: "/hizmetler/x-reklam-yonetimi" },
      { label: "Dijital Reklam Raporlama", href: "/hizmetler/dijital-reklam-raporlama" },
      { label: "Dijital Reklam Audit", href: "/hizmetler/dijital-reklam-audit" },
    ],
  },
  {
    label: "SEO",
    href: "/hizmetler#seo",
    children: [
      { label: "SEO Hizmeti", href: "/hizmetler/seo-hizmeti" },
      { label: "Teknik SEO Hizmeti", href: "/hizmetler/teknik-seo-hizmeti" },
      { label: "İçerik Üretimi Hizmeti", href: "/hizmetler/icerik-uretimi-hizmeti" },
      { label: "GEO Hizmeti", href: "/hizmetler/geo-hizmeti" },
      { label: "SEO Audit Hizmeti", href: "/hizmetler/seo-audit-hizmeti" },
      { label: "SEO Raporlama", href: "/hizmetler/seo-raporlama" },
    ],
  },
  {
    label: "Sosyal Medya",
    href: "/hizmetler#sosyal-medya",
    children: [
      { label: "Sosyal Medya Yönetimi Paketleri", href: "/hizmetler/sosyal-medya-yonetimi" },
      { label: "Sosyal Medya Raporlama", href: "/hizmetler/sosyal-medya-raporlama" },
      { label: "UGC Pazarlama Paketleri", href: "/hizmetler/ugc-pazarlama" },
      { label: "Influencer & UGC Raporlama", href: "/hizmetler/influencer-raporlama" },
    ],
  },
  {
    label: "Web & E-Ticaret",
    href: "/hizmetler#web",
    children: [
      { label: "E-Ticaret Sitesi Kurulum", href: "/hizmetler/e-ticaret-sitesi-kurulum" },
      { label: "Kurumsal Web Tasarım", href: "/hizmetler/kurumsal-web-tasarim" },
      { label: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
    ],
  },
  {
    label: "Danışmanlık",
    href: "/hizmetler#danismanlik",
    children: [
      { label: "Marka Danışmanlığı", href: "/hizmetler/marka-danismanligi" },
      { label: "Trendyol Danışmanlığı", href: "/hizmetler/trendyol-danismanligi" },
      { label: "Proje Planlama", href: "/hizmetler/proje-planlama" },
    ],
  },
  {
    label: "Kurumsal",
    href: "/hakkimizda",
    alignRight: true,
    children: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İş Ortaklarımız", href: "/is-ortaklarimiz" },
      { label: "Kariyer", href: "/kariyer" },
      { label: "Bize Ulaşın", href: "/bize-ulasin" },
      { label: "Başarı Hikayeleri", href: "/basari-hikayeleri", divider: true },
      { label: "Projelerimiz", href: "/projelerimiz" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export type TickerBrand = { name: string; icon?: string };

export const TICKER_BRANDS: TickerBrand[] = [
  { name: "Google Partner", icon: "/brands/google.svg" },
  { name: "Meta Business Partner", icon: "/brands/meta.svg" },
  { name: "Marka Danışmanlığı" },
  { name: "ikas Partner" },
  { name: "TikTok Marketing", icon: "/brands/tiktok.svg" },
  { name: "LinkedIn Ads", icon: "/brands/linkedin.svg" },
  { name: "E-Ticaret Danışmanlığı" },
  { name: "Instagram", icon: "/brands/instagram.svg" },
  { name: "Facebook", icon: "/brands/facebook.svg" },
  { name: "YouTube", icon: "/brands/youtube.svg" },
];

export const METRICS = [
  { value: "150+", label: "Tamamlanan Proje", accent: "indigo" },
  { value: "%500+", label: "Satış Artışı (Referans Vaka)", accent: "emerald" },
  { value: "20+", label: "Uzman Ekip Üyesi", accent: "cyan" },
  { value: "4.9/5", label: "Müşteri Memnuniyeti", accent: "emerald" },
] as const;

export const PROCESS = [
  {
    no: "1",
    title: "Analiz",
    desc: "Markanızın mevcut durumunu, rakipleri ve hedef kitlenizi derinlemesine analiz ediyoruz.",
  },
  {
    no: "2",
    title: "Strateji",
    desc: "Veriye dayalı, sonuç odaklı bir yol haritası ve kanal karması oluşturuyoruz.",
  },
  {
    no: "3",
    title: "Uygulama",
    desc: "Reklam, SEO, içerik ve yazılım adımlarını titizlikle hayata geçiriyoruz.",
  },
  {
    no: "4",
    title: "Raporlama",
    desc: "Performansı düzenli ölçüyor, şeffaf raporlarla birlikte optimize ediyoruz.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ömer Berat Noyan",
    role: "Kurucu Ortak, Askı Dünyası",
    text: "Medya360 ile çalışmak işimizi yepyeni bir seviyeye taşıdı. Doğru dijital stratejilerle hedef kitlemize ulaştık ve satışlarımız hızla arttı.",
  },
  {
    name: "Mustafa Selim Paşahan",
    role: "Kurucu, Paşahan",
    text: "Hedef kitlemizi analiz edip her aşamada bizi bilgilendirdiler, sonuçları kısa sürede görmeye başladık. Dijital pazarlamada doğru adresteyiz.",
  },
  {
    name: "Demiralp Demir",
    role: "E-ticaret Uzmanı, Nobel İlaç",
    text: "İş birliğimiz markamızı çok daha geniş bir kitleye ulaştırdı ve satışlarda gözle görülür artış sağladı. Kesinlikle öneririm.",
  },
];

export const STORIES = [
  { brand: "Hayfene", result: "%500'ün Üzerinde Satış Artışı", tags: ["Dijital Reklam", "SEO"], desc: "SEO ve reklam stratejileriyle %400'ün üzerinde organik tıklama artışı ve 12 ayda %500'ün üstünde satış artışı." },
  { brand: "Paşahan", result: "%1000'in Üzerinde Satış Artışı", tags: ["Reklam", "SEO", "Sosyal Medya"], desc: "Sınırlı dijital görünürlükten çok kanallı büyümeye: arama, sosyal ve reklamın tam entegrasyonu." },
  { brand: "Glimo", result: "%356 Organik Trafik Artışı", tags: ["SEO"], desc: "Nobel İlaç alt markası için kapsamlı SEO stratejisiyle organik görünürlükte sıçrama." },
  { brand: "Nesli Doğal", result: "%342 Tıklama, %980 Gösterim Artışı", tags: ["Reklam", "SEO"], desc: "3 ayda doğal ürün markasında organik performansta etkileyici büyüme." },
  { brand: "Frances Coffee", result: "%1250 Organik Tıklama Artışı", tags: ["Reklam", "SEO"], desc: "Kahve markasında anahtar kelime görünürlüğünde %686 artış." },
  { brand: "Oto Bakım Paketi", result: "3 Ayda %727 Satış Artışı", tags: ["Reklam", "SEO", "Sosyal Medya"], desc: "SEO + Google Ads + Meta yönetimiyle %650 sipariş artışı." },
  { brand: "Base of Influencer", result: "Organikte 10 Kata Yakın Büyüme", tags: ["Reklam", "SEO"], desc: "Sıfıra yakın görünürlükten %533 tıklama ve %1047 gösterim artışına." },
];

export const PROJECTS = [
  { name: "Base Of Influencer", desc: "Markaları ve influencer'ları bir araya getiren kampanya yönetim uygulaması. %70 daha hızlı süreç, şeffaf raporlama." },
  { name: "Creapanel", desc: "Kodsuz web sitesi oluşturma ve yönetim platformu. SEO ve pazarlama tek panelde." },
  { name: "CreaReport", desc: "Google Ads, Meta Ads ve SEO metriklerini tek ekranda toplayan raporlama platformu." },
  { name: "CreaAnalyse", desc: "E-ticaret siteleri için ücretsiz hız, SEO ve UX analiz aracı." },
  { name: "CreaSupport", desc: "Müşteri teknik destek taleplerini yöneten destek platformu." },
  { name: "Creads", desc: "Yapay zeka destekli reklam analiz ve strateji motoru." },
];

export const HOME_FAQ = [
  {
    q: "Ajansınız hangi hizmetleri sunuyor?",
    a: "Google Ads ve Meta reklam yönetimi, SEO ve GEO, sosyal medya yönetimi, influencer/UGC, e-ticaret sitesi kurulumu, kurumsal web tasarımı, UI/UX ve marka-pazaryeri-proje danışmanlığı hizmetleri sunuyoruz.",
  },
  {
    q: "Reklam yönetimine minimum bütçe ne olmalı?",
    a: "Sektöre göre değişir; sağlıklı test ve ölçüm için aylık en az 30.000-50.000 TL medya bütçesi öneriyoruz. Bütçe planlamasını ön görüşmede birlikte netleştiriyoruz.",
  },
  {
    q: "SEO sonuçları ne kadar sürede alınır?",
    a: "İlk sinyaller genellikle 2-4 haftada görülür; anlamlı organik ivme 3-6 ayda oturur. Rekabetçi kelimelerde 6-12 aylık bir plan öneriyoruz.",
  },
  {
    q: "Danışmanlık hizmeti nasıl çalışıyor?",
    a: "Marka, Trendyol ve proje planlama danışmanlığında mevcut durumu analiz edip strateji ve süreç kuruyor, ekibinize devredilebilir bir sistem bırakıyoruz.",
  },
  {
    q: "Reklam, SEO ve sosyal medyayı birlikte alabilir miyim?",
    a: "Evet. Kanalları tek strateji ve tek raporlama altında yönettiğimizde bütçe daha verimli kullanılır ve sonuçlar daha hızlı görülür.",
  },
  {
    q: "Teklif süreci nasıl ilerliyor?",
    a: "Formu doldurduğunuzda ekibimiz 1 iş günü içinde sizi arıyor; ön analiz sonrası size özel yol haritası ve şeffaf fiyat teklifi sunuyoruz.",
  },
];

export const SERVICE_OPTIONS = [
  "Google Ads Reklam Yönetimi",
  "Meta Reklam Yönetimi",
  "LinkedIn Reklam Yönetimi",
  "SEO Hizmeti",
  "Teknik SEO",
  "GEO Hizmeti",
  "Sosyal Medya Yönetimi",
  "Influencer / UGC",
  "E-Ticaret Kurulum",
  "Kurumsal Web Tasarım",
  "UI/UX Tasarım",
  "Marka Danışmanlığı",
  "Trendyol Danışmanlığı",
  "Proje Planlama",
  "Diğer",
];
