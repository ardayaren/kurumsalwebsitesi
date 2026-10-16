export type PostSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  focusKeywords: string[];
  readTime: string;
  intro: string[];
  sections: PostSection[];
  faqs?: { q: string; a: string }[];
};

export const POSTS: Post[] = [
  {
    focusKeywords: ["seo nedir", "seo nasıl yapılır", "arama motoru optimizasyonu", "organik trafik artırma"],
    slug: "seo-nedir-nasil-yapilir",
    title: "SEO Nedir? 2026'da Arama Motoru Optimizasyonu Nasıl Yapılır?",
    excerpt: "SEO nedir sorusunun detaylı yanıtı: teknik SEO, içerik ve otorite çalışmalarıyla Google'da üst sıralara çıkmanın adım adım rehberi.",
    date: "2026-06-02",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "SEO analizi yapan uzmanın ekranındaki organik trafik ve anahtar kelime sıralama grafikleri",
    readTime: "8 dk",
    intro: [
      "SEO (Search Engine Optimization), web sitenizin Google ve diğer arama motorlarında görünürlüğünü artırmak için yapılan tüm çalışmaların bütünüdür. Doğru uygulandığında organik trafik, marka bilinirliği ve satışlar için kalıcı bir büyüme kanalı oluşturur.",
    ],
    sections: [
      {
        heading: "SEO Neden Önemlidir?",
        paragraphs: [
          "Kullanıcılar ürün ve hizmet araştırırken büyük çoğunlukla Google'ı kullanır ve ilk sayfadaki sonuçlara tıklar. İlk sayfada görünmeyen bir site, potansiyel müşterisini rakiplerine kaptırır.",
          "Reklamdan farklı olarak organik trafik ücretsizdir; tıklama başı maliyet ödemezsiniz. Bu da SEO'yu uzun vadede en yüksek ROI'ye sahip pazarlama yatırımlarından biri yapar.",
        ],
      },
      {
        heading: "SEO Nasıl Yapılır?",
        paragraphs: [
          "Başarılı bir SEO çalışması üç ana başlıkta toplanır: teknik SEO, içerik/on-page SEO ve off-page SEO (otorite). Üçünü birlikte yürütmeden kalıcı sonuç almak zordur.",
        ],
        bullets: [
          "Teknik SEO: Site hızı, mobil uyum, tarama ve indeksleme, yapılandırılmış veri (schema), URL mimarisi",
          "İçerik SEO: Anahtar kelime araştırması, başlık ve meta açıklama optimizasyonu, iç linkleme, kaliteli içerik üretimi",
          "Otorite: Kaliteli backlink kazanımı, marka görünürlüğü ve dijital PR",
        ],
      },
      {
        heading: "SEO Sonuçları Ne Zaman Görülür?",
        paragraphs: [
          "SEO kısa vadeli bir taktik değil, sürdürülebilir bir stratejidir. Anlamlı ivmelenme genellikle 3-6 ay içinde başlar; rekabetçi kelimelerde 6-12 aylık planlar gerekebilir.",
          "Reklamları kestiğinizde trafik durur; ancak SEO'da oturmuş bir sıralama, çalışmaya devam ettiği sürece günlük trafik üretmeye devam eder.",
        ],
      },
    ],
    faqs: [
      { q: "SEO ne kadar sürer?", a: "Ortalama 3-6 ayda ilk ivme görülür; kalıcı sonuçlar için 6-12 aylık stratejik plan gerekir." },
      { q: "SEO ücretleri ne kadar?", a: "Ajans ve kapsama göre değişir; teknik, içerik ve otorite çalışmalarının dahil olduğu aylık paketler en yaygın modeldir." },
      { q: "SEO kendi başıma yapılır mı?", a: "Temel adımlar öğrenilerek uygulanabilir; ancak rekabetçi sektörlerde uzmanlık ve araçlar fark yaratır." },
    ],
  },
  {
    focusKeywords: ["google ads nedir", "google reklamları", "google ads nasıl çalışır", "arama ağı reklamları"],
    slug: "google-ads-nedir-nasil-calisir",
    title: "Google Ads Nedir? Google Reklamları Nasıl Çalışır?",
    excerpt: "Google Ads reklam sistemi, maliyeti, arama ve görüntülü reklam ağları ve dönüşüm odaklı kampanya kurmanın püf noktaları.",
    date: "2026-05-26",
    category: "Reklam",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Google Ads reklam panelinde kampanya performansı ve tıklama maliyeti raporlarını inceleyen dijital pazarlama uzmanı",
    readTime: "7 dk",
    intro: [
      "Google Ads, Google'ın arama sonuçları, YouTube ve milyonlarca partner sitesinde reklam yayınlamanızı sağlayan çevrimiçi reklam platformudur. Doğru yapılandırıldığında, bir tıklamanın satışa dönüştüğü ölçülebilir bir pazarlama kanalıdır.",
    ],
    sections: [
      {
        heading: "Google Ads Nasıl Çalışır?",
        paragraphs: [
          "Google Ads bir açık artırma (auction) sistemiyle çalışır. Bir kullanıcı arama yaptığında, Google reklamverenlerin tekliflerini, reklam kalitesini ve tıklama olasılığını değerlendirerek en uygun reklamları gösterir.",
          "Önemli olan yalnızca bütçe değil; reklam kalitesi (Quality Score) da maliyeti doğrudan etkiler. İlgili anahtar kelimeler, net reklam metinleri ve iyi bir açılış sayfası daha düşük tıklama maliyeti sağlar.",
        ],
      },
      {
        heading: "Google Ads Reklam Türleri",
        bullets: [
          "Arama Reklamları: Kullanıcı niyetini yakalayan, dönüşümü en yüksek reklam türü",
          "Alışveriş Reklamları (Shopping): Ürün ve fiyat gösteren, e-ticaret için ideal",
          "Görüntülü Reklamlar: Milyonlarca sitede marka bilinirliği",
          "YouTube Reklamları: Video ile geniş kitleye erişim",
          "PMax (Performance Max): Otomasyonla tüm kanallarda performans",
        ],
      },
      {
        heading: "Google Ads Maliyeti Ne Kadar?",
        paragraphs: [
          "Sektöre ve anahtar kelime rekabetine göre değişmekle birlikte, anlamlı veri toplamak için aylık en az 30.000-50.000 TL medya bütçesi önerilir.",
          "Bütçeden çok yapı daha önemlidir: doğru dönüşüm takibi, negatif anahtar kelime listesi ve düzenli optimizasyon, harcanan her liranın verimini artırır.",
        ],
      },
    ],
    faqs: [
      { q: "Google Ads ne kadar sürede sonuç verir?", a: "İlk sinyaller 2-4 haftada görülür; stabil performans genellikle 2-3 ayda oturur." },
      { q: "Google Ads her işletmeye uygun mu?", a: "Arama niyeti yüksek olan ürün/hizmetlerde en etkilidir; marka bilinirliği için YouTube ve görüntülü reklamlar kullanılabilir." },
    ],
  },
  {
    focusKeywords: ["e-ticaret sitesi nasıl kurulur", "online mağaza açma", "e-ticaret kurulum", "ikas"],
    slug: "e-ticaret-sitesi-nasil-kurulur",
    title: "E-Ticaret Sitesi Nasıl Kurulur? 2026 Adım Adım Rehber",
    excerpt: "Online mağaza kurulumu: platform seçimi, ürün yönetimi, ödeme ve kargo entegrasyonu, SEO ve satışa hazır hale gelme süreci.",
    date: "2026-05-18",
    category: "E-Ticaret",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Kredi kartıyla online mağazadan güvenli e-ticaret alışverişi yapan müşteri elinde telefon",
    readTime: "10 dk",
    intro: [
      "E-ticaret sitesi kurmak artık eskisinden çok daha kolay; ancak 'satış yapan' bir mağaza açmak planlı bir süreç gerektirir. Bu rehberde platform seçiminden yayına kadar tüm adımları bulabilirsiniz.",
    ],
    sections: [
      {
        heading: "Hangi E-Ticaret Platformunu Seçmeliyim?",
        paragraphs: [
          "Türkiye pazarında en çok tercih edilen hazır altyapılar Shopify, ikas ve Ticimax gibi çözümlerdir. Global hedefiniz varsa Shopify, yerel odak ve desteğe önem veriyorsanız ikas iyi bir seçimdir.",
        ],
        bullets: [
          "Shopify: Global altyapı, uygulama mağazası, çoklu dil/para birimi",
          "ikas: Türkiye odaklı, yerel ödeme ve kargo entegrasyonları",
          "Hazır platform yerine yazılım: Tam özelleştirme isteyen büyük markalar için",
        ],
      },
      {
        heading: "Kurulum Sürecinin Adımları",
        paragraphs: [
          "Doğru bir kurulum, satışların temelidir. İhmal edilen teknik detaylar ilerleyen dönemde hem müşteri kaybı hem SEO kaybı yaratır.",
        ],
        bullets: [
          "Alan adı, hosting ve kurumsal e-posta kurulumu",
          "Tema seçimi ve marka kimliğine uygun özelleştirme",
          "Kategori ve ürün mimarisi (SEO uyumlu URL yapısı)",
          "Ödeme sağlayıcıları (iyzico, PayTR, Stripe vb.) ve kargo entegrasyonu",
          "Google Analytics 4, Search Console ve Meta Pixel kurulumu",
          "Test siparişi ile uçtan uca kontrol ve yayına alma",
        ],
      },
      {
        heading: "Satışa Hazır Mağaza için SEO",
        paragraphs: [
          "Mağazanız açıldığı ilk günden itibaren arama motorlarında bulunabilir olmalı. Ürün başlıkları, meta açıklamalar ve görsel alt metinleri anahtar kelime odaklı yazılmalı; site hızı ve mobil deneyim önceliklendirilmelidir.",
        ],
      },
    ],
    faqs: [
      { q: "E-ticaret sitesi kurulumu ne kadar sürer?", a: "Hazır tema ile 2-4 hafta, özel tasarımda 4-8 hafta sürebilir." },
      { q: "E-ticaret sitesi kurulum maliyeti ne kadar?", a: "Platform aboneliği, tema, entegrasyon ve ajans hizmetine göre değişir; ön analiz sonrası net teklif verilir." },
    ],
  },
  {
    focusKeywords: ["sosyal medya yönetimi", "sosyal medya nedir", "instagram yönetimi", "içerik takvimi"],
    slug: "sosyal-medya-yonetimi-nedir",
    title: "Sosyal Medya Yönetimi Nedir? Markanız İçin Neden Gerekli?",
    excerpt: "Sosyal medya yönetimi kapsamı: strateji, içerik takvimi, topluluk yönetimi ve ölçümleme. Markanızı büyüten doğru yaklaşım.",
    date: "2026-05-10",
    category: "Sosyal Medya",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Instagram TikTok ve sosyal medya uygulamaları açık akıllı telefon ekranı yakından görünüm",
    readTime: "6 dk",
    intro: [
      "Sosyal medya yönetimi; strateji geliştirme, içerik üretimi, yayınlama, toplulukla iletişim ve sonuçların ölçümlenmesini kapsayan disiplinli bir süreçtir. Rastgele paylaşım yapmak değil, hedef kitleye planlı bir şekilde ulaşmaktır.",
    ],
    sections: [
      {
        heading: "Sosyal Medya Yönetimi Neleri Kapsar?",
        bullets: [
          "Hedef kitle ve rakip analizi, kanal seçimi",
          "Aylık içerik takvimi ve görsel/video üretimi",
          "Yorum, mesaj ve topluluk yönetimi",
          "Platform reklamlarıyla organik içeriğin desteklenmesi",
          "Erişim, etkileşim ve dönüşüm raporlaması",
        ],
      },
      {
        heading: "Hangi Platformlarda Yer Almalıyım?",
        paragraphs: [
          "Instagram görsel odaklı markalar, TikTok genç kitle, LinkedIn B2B, YouTube bilgilendirici içerik için güçlüdür. Her marka her platformda olmak zorunda değildir; doğru seçim hedef kitlenizin nerede olduğuna bağlıdır.",
        ],
      },
      {
        heading: "Sosyal Medya Satış Getirir mi?",
        paragraphs: [
          "Sosyal medya hem marka bilinirliği hem de doğrudan satış için çalışır. Instagram Shopping, TikTok Shop ve Meta reklamlarıyla kullanıcılar keşiften satın almaya kısa bir yolda ilerletilebilir.",
          "Başarı, tutarlı içerik + reklam + doğru ölçümleme kombinasyonundan gelir. Bu üçlüyü tek elden yönetmek ajanslarla çalışmanın en büyük avantajıdır.",
        ],
      },
    ],
    faqs: [
      { q: "Sosyal medya yönetimi aylık ne kadar?", a: "Kapsam ve içerik adedine göre değişir; temel paketten içerik + reklam yönetimine kadar seçenekler mevcuttur." },
      { q: "İçeriklerimi kendim mi üretmeliyim?", a: "İçerik üretimi zaman alır; profesyonel ekip marka dili ve tutarlılık konusunda ciddi avantaj sağlar." },
    ],
  },
  {
    focusKeywords: ["backlink nedir", "backlink nasıl alınır", "dofollow nofollow", "link inşası"],
    slug: "backlink-nedir-nasil-alinir",
    title: "Backlink Nedir? Kaliteli Backlink Nasıl Alınır?",
    excerpt: "Backlink tanımı, SEO'daki önemi, dofollow/nofollow farkı ve güvenli backlink kazanma yöntemleri.",
    date: "2026-04-14",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Web siteleri arasında backlink bağlantı ağını gösteren dijital SEO illüstrasyonu",
    readTime: "7 dk",
    intro: [
      "Backlink, başka bir web sitesinin sizin sitenize verdiği linktir. Google, backlinkleri siteniz hakkında 'güven oyu' olarak değerlendirir; kaliteli ve ilgili sitelerden gelen linkler sıralamada ciddi etki yaratır.",
    ],
    sections: [
      {
        heading: "Backlink SEO'da Neden Önemli?",
        paragraphs: [
          "Google'ın erken dönem algoritmalarından bu yana backlinkler, sitelerin otoritesini ölçmenin ana göstergesi olmuştur. Rakiplerinizin sahip olduğu ama sizin sahip olmadığınız otorite, sıralamada geride kalmanıza neden olur.",
        ],
      },
      {
        heading: "Dofollow ve Nofollow Farkı",
        paragraphs: [
          "Dofollow linkler arama motoruna 'bu siteye güveniyorum' mesajı iletir ve otorite aktarır. Nofollow linkler (yorumlar, sosyal medya, ücretli yerleşimler) otorite aktarmaz ancak trafik ve çeşitlilik açısından hâlâ değerlidir.",
        ],
      },
      {
        heading: "Kaliteli Backlink Nasıl Alınır?",
        bullets: [
          "Değerli, özgün içerik üretmek (veri, rehber, infografik)",
          "Haberleşme ve dijital PR ile haber sitelerinde yer almak",
          "Konuk yazarlık (guest post) yapmak",
          "Kaynak listeleri ve 'best of' sayfalarında yer almak",
          "Broken link yöntemiyle ölü linkleri kendi içeriğinizle değiştirmek",
        ],
      },
    ],
    faqs: [
      { q: "Backlink satın alınır mı?", a: "Toplu ve düşük kaliteli backlink satışı Google cezalarına yol açabilir; doğal kazanım önerilir." },
      { q: "Kaç backlink yeterli?", a: "Nicelikten çok nitelik önemlidir; otoriter ve ilgili sitelerden birkaç kaliteli link, yüzlerce düşük kaliteli linkten değerlidir." },
    ],
  },
  {
    focusKeywords: ["instagram reklamları", "instagram reklam verme", "meta ads", "reels reklamları"],
    slug: "instagram-reklamlari-nasil-verilir",
    title: "Instagram Reklamları Nasıl Verilir? Meta Ads Rehberi",
    excerpt: "Instagram reklam kurulumu, hedef kitle seçimi, kreatif formatlar ve ROAS odaklı Meta reklam yönetimi.",
    date: "2026-04-06",
    category: "Reklam",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Instagram Meta reklam yöneticisinde hedef kitleli kampanya kuran akıllı telefon ekranı",
    readTime: "8 dk",
    intro: [
      "Instagram reklamları, Meta Ads Manager üzerinden yönetilir. Görsel ağırlıklı bu platformda kreatif kalitesi ve doğru hedefleme, reklamın başarısını belirleyen iki ana faktördür.",
    ],
    sections: [
      {
        heading: "Instagram Reklam Kurulumu Nasıl Yapılır?",
        bullets: [
          "İşletme hesabı açın ve Facebook/Meta Business Manager'a bağlayın",
          "Meta Pixel ve (mümkünse) Conversions API kurun",
          "Reklam amacını belirleyin: Trafik, Etkileşim veya Satış",
          "Hedef kitleyi ve bütçeyi tanımlayın",
          "Kreatifleri (Reels, Feed, Hikaye) oluşturun ve yayınlayın",
        ],
      },
      {
        heading: "Hangi Kreatif Formatlar Daha Çok Çalışır?",
        paragraphs: [
          "Reels formatı, Instagram'ın önceliklendirdiği ve en geniş erişimi sağlayan format olduğu için ürün tanıtımı ve UGC içeriklerde ilk tercih olmalıdır.",
          "Yüksek çözünürlüklü, marka diline uygun ve ilk 2 saniyede dikkat çeken videolar, dönüşüm oranlarını belirgin şekilde artırır.",
        ],
      },
      {
        heading: "Meta Reklamlarında ROAS Nasıl Artırılır?",
        paragraphs: [
          "ROAS artışı kreatif testi ve hedefleme optimizasyonuyla başlar. Farklı görsel/video varyantlarını küçük bütçelerle test edin, kazanan kombinasyonu ölçekleyin.",
          "Retargeting (yeniden hedefleme) hunisi kurmak; siteyi ziyaret edip satın almayan kullanıcılara ürün gösterimi, en yüksek dönüşümlü kampanyalardan biridir.",
        ],
      },
    ],
    faqs: [
      { q: "Instagram reklamı için minimum bütçe?", a: "Günlük 100 TL'den başlanabilir; anlamlı veri ve ölçekleme için aylık 30K-50K TL medya bütçesi önerilir." },
      { q: "Instagram mı Facebook mu daha etkili?", a: "Görsel ürünler için Instagram, geniş yaş aralığına sahip ürünler için Facebook güçlüdür; ikisi birlikte kullanılır." },
    ],
  },
  {
    focusKeywords: ["google ads maliyeti", "google ads fiyatları", "tıklama başı maliyet", "reklam bütçesi"],
    slug: "google-ads-maliyeti-ne-kadar",
    title: "Google Ads Maliyeti Ne Kadar? 2026 Fiyatlandırma Rehberi",
    excerpt: "Google Ads bütçe planlaması: tıklama maliyetleri, sektör ortalamaları, ajans yönetim ücreti ve verimli bütçe dağılımı.",
    date: "2026-03-28",
    category: "Reklam",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Google Ads reklam bütçesi ve tıklama başı maliyet hesaplayan hesap makinesi ve raporlar",
    readTime: "6 dk",
    intro: [
      "Google Ads maliyeti iki bileşenden oluşur: arama ağında ödediğiniz tıklama bedeli ve ajans yönetim ücreti. Her ikisi de sektöre, rekabete ve yönetim kalitesine göre değişir.",
    ],
    sections: [
      {
        heading: "Tıklama Başına Maliyet (CPC) Ne Kadar?",
        paragraphs: [
          "Rekabetçi sektörlerde (sigorta, finans, emlak) tek tıklama 100 TL'yi aşabilirken, orta rekabetli sektörlerde 10-40 TL aralığı yaygındır. Anahtar kelime rekabeti fiyatı belirleyen ana etkendir.",
        ],
      },
      {
        heading: "Aylık Bütçe Nasıl Belirlenmeli?",
        bullets: [
          "Başlangıç: Aylık 30K-50K TL ile veri toplama ve test",
          "Orta ölçek: 50K-100K TL ile ölçekleme ve optimizasyon",
          "Kurumsal: 100K+ TL ile agresif büyüme ve geniş anahtar kelime kapsamı",
        ],
      },
      {
        heading: "Ajans Yönetim Ücreti Ne Kadar?",
        paragraphs: [
          "Ajanslar genellikle medya bütçesinin %10-20'si oranında veya sabit aylık ücretle çalışır. 'Yönetim ücretsiz' diyen ajanıslara dikkat edin; ücret genellikle başka kalemlere yedirilir.",
          "Asıl kriter ücret değil şeffaflıktır: harcanan bütçeyi, raporları ve yapılan optimizasyonu açıkça gösteren ajans, uzun vadede en ekonomik seçimdir.",
        ],
      },
    ],
    faqs: [
      { q: "Google Ads ücretsiz yönetilir mi?", a: "Kendiniz yönetebilirsiniz; ancak yanlış yapılandırma bütçeyi hızla tüketebilir. Uzman yönetimi genellikle yatırımın geri dönüşünü iyileştirir." },
      { q: "En düşük günlük bütçe ne kadar?", a: "Google minimum günlük bütçe 50 TL civarıdır; ancak çok düşük bütçe anlamlı veri toplanmasını geciktirir." },
    ],
  },
  {
    focusKeywords: ["anahtar kelime araştırması", "keyword research", "arama niyeti", "uzun kuyruk kelimeler"],
    slug: "anahtar-kelime-arastirmasi-nasil-yapilir",
    title: "Anahtar Kelime Araştırması Nasıl Yapılır? SEO'nun Temeli",
    excerpt: "Doğru anahtar kelime seçimi, arama niyeti analizi, araçlar ve uzun kuyruk kelimelerle rekabette öne geçme yöntemleri.",
    date: "2026-03-18",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Anahtar kelime araştırması için arama hacmi ve rekabet verilerini inceleyen masaüstü bilgisayar",
    readTime: "7 dk",
    intro: [
      "Anahtar kelime araştırması, SEO'nun en kritik adımıdır. Yanlış kelimelere içerik üretmek, boşa emek demektir. Doğru araştırma ise az çabayla çok trafik kazandırır.",
    ],
    sections: [
      {
        heading: "Arama Niyeti (Search Intent) Neden Önemli?",
        paragraphs: [
          "Bir kelimenin ardındaki niyeti anlamadan içerik üretmek isabetsizdir. Bilgilenme ('nedir'), karşılaştırma ('mi'), satın alma ('satın al') niyetleri farklı içerik türleri gerektirir.",
        ],
      },
      {
        heading: "Anahtar Kelime Araştırması Adımları",
        bullets: [
          "Hedef müşterinizin kullandığı dili ve soruları belirleyin",
          "Google Autocomplete ve 'İnsanlar şunu da soruyor' bölümünü inceleyin",
          "Google Keyword Planner, Ahrefs veya benzeri araçlarla aylık hacim ve zorluk ölçün",
          "Uzun kuyruk (long-tail) kelimelerle düşük rekabeti hedefleyin",
          "Rakiplerin hangi kelimelerde sıralandığını analiz edin",
        ],
      },
      {
        heading: "Uzun Kuyruk Kelimelerin Avantajı",
        paragraphs: [
          "'Ayakkabı' yerine 'kadın koşu ayakkabısı 38 numara' gibi uzun kuyruk kelimeler daha az rekabetli ve çok daha dönüşümcüdür. Kullanıcı zaten ne istediğini bilmektedir.",
        ],
      },
    ],
    faqs: [
      { q: "Anahtar kelime araştırması ücretsiz mi?", a: "Google Keyword Planner ve Search Console ücretsizdir; kapsamlı analiz için ücretli araçlar da kullanılabilir." },
      { q: "Kaç anahtar kelime hedeflemeliyim?", a: "Sayıdan çok odak önemlidir; içerik başına 1 birincil ve 2-3 ikincil kelime idealdir." },
    ],
  },
  {
    focusKeywords: ["geo nedir", "yapay zeka seo", "üretken motor optimizasyonu", "ai overview görünürlük"],
    slug: "geo-nedir-ai-seo-optimizasyonu",
    title: "GEO Nedir? AI (Üretken Motor) Optimizasyonu ile Görünürlük",
    excerpt: "GEO (Generative Engine Optimization) nedir, ChatGPT ve AI Overviews cevaplarında markanız nasıl öne çıkar?",
    date: "2026-03-08",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Yapay zeka destekli üretken arama motoru optimizasyonu GEO konseptini temsil eden robot görseli",
    readTime: "6 dk",
    intro: [
      "Kullanıcılar artık sorularını yalnızca Google'a değil, ChatGPT ve Gemini gibi yapay zeka asistanlarına da soruyor. GEO, markanızın bu AI cevaplarında kaynak olarak gösterilmesi için yapılan optimizasyondur.",
    ],
    sections: [
      {
        heading: "GEO (Generative Engine Optimization) Nedir?",
        paragraphs: [
          "GEO, içeriklerinizi yapay zeka modellerinin güvenilir kaynak olarak alıntılamasını sağlayacak şekilde yapılandırma sanatıdır. Geleneksel SEO'dan farklı olarak, cevap veren yapılar ve veri odaklı içerik öne çıkar.",
        ],
      },
      {
        heading: "AI Cevaplarında Görünürlük Nasıl Artırılır?",
        bullets: [
          "Sorulara doğrudan ve net yanıt veren içerik yapıları kurun",
          "SSS şemaları ve yapılandırılmış veri kullanın",
          "İstatistik ve somut verilerle içeriği alıntılanabilir yapın",
          "Markanızı sektördeki otoriter kaynaklarla ilişkilendirin",
          "AI görünürlüğünü düzenli olarak ölçümleyin",
        ],
      },
      {
        heading: "GEO, SEO'nun Yerini Alır mı?",
        paragraphs: [
          "Hayır, tamamlar. Klasik arama trafiği hâlâ en büyük organik kanaldır; ancak AI asistanların kullanımı arttıkça, iki stratejiyi birlikte yürütmek rekabet avantajı sağlar.",
        ],
      },
    ],
    faqs: [
      { q: "GEO çalışması ne kadar sürer?", a: "AI sistemlerinin içeriği kaynak olarak değerlendirmesi birkaç ay sürebilir; düzenli yayınla kalıcı görünürlük hedeflenir." },
      { q: "GEO hizmeti ücretli mi?", a: "Evet; marka otoritesi ve içerik yapılandırma odaklı özel bir çalışma olarak fiyatlandırılır." },
    ],
  },
  {
    focusKeywords: ["landing page nedir", "açılış sayfası tasarımı", "dönüşüm oranı", "cta optimizasyonu"],
    slug: "landing-page-nedir-donusum-odakli-tasarim",
    title: "Landing Page Nedir? Dönüşüm Odaklı Landing Page Nasıl Olur?",
    excerpt: "Landing page tanımı, reklamdan tıklayan kullanıcıyı müşteriye çeviren sayfa kuralları ve dönüşüm artırma ipuçları.",
    date: "2026-02-26",
    category: "Web",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Dönüşüm odaklı landing page web tasarım projesi üzerinde çalışan tasarımcı ekranı",
    readTime: "6 dk",
    intro: [
      "Landing page, bir reklamın tıklanmasıyla kullanıcının ulaştığı, tek bir hedefe odaklanan web sayfasıdır. Amaç; kullanıcıyı dikkat dağıtmadan tek bir aksiyona (form, satın alma, indirme) yönlendirmektir.",
    ],
    sections: [
      {
        heading: "İyi Bir Landing Page Nasıl Olmalı?",
        bullets: [
          "Tek ve net bir başlık (value proposition)",
          "İlgi çekici görsel veya video",
          "Kısa ve net teklif açıklaması",
          "Güven unsurları: yorumlar, logolar, sertifikalar",
          "Belirgin ve tek bir CTA (çağrı butonu)",
          "Hızlı yükleme ve mobil uyum",
        ],
      },
      {
        heading: "Reklam ve Landing Page Uyumu",
        paragraphs: [
          "Reklamda söz verdiğiniz mesaj, landing page'de birebir karşılanmalıdır. Tutarsızlık, kullanıcının sayfayı terk etmesine ve reklam bütçesinin boşa harcanmasına yol açar.",
        ],
      },
      {
        heading: "Dönüşüm Oranı Nasıl Artırılır?",
        paragraphs: [
          "A/B testi, landing page optimizasyonunun temelidir. Başlık, CTA metni, görsel ve form uzunluğu gibi değişkenler test edilerek kazanan varyant belirlenir.",
        ],
      },
    ],
    faqs: [
      { q: "Landing page ile ana site sayfası farkı ne?", a: "Landing page tek hedefe odaklıdır; ana site navigasyon sunar. Reklam kampanyaları için landing page idealdir." },
      { q: "Landing page'i kim tasarlar?", a: "UI/UX tasarım ve dönüşüm uzmanlığı gerektirir; ajanslar uçtan uca tasarım + geliştirme sunar." },
    ],
  },
  {
    focusKeywords: ["trendyolda satış artırma", "trendyol mağaza yönetimi", "trendyol ads", "pazaryeri seo"],
    slug: "trendyolda-satis-nasil-artirilir",
    title: "Trendyol'da Satış Nasıl Artırılır? Mağaza Yönetimi Rehberi",
    excerpt: "Trendyol mağaza optimizasyonu: ürün kartı SEO, kampanya yönetimi, Trendyol Ads ve müşteri puanlarını yükseltme.",
    date: "2026-02-18",
    category: "E-Ticaret",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Trendyol benzeri pazaryerinde online satış yapan modern perakende mağaza vitrini",
    readTime: "7 dk",
    intro: [
      "Trendyol, Türkiye'nin en büyük pazaryeri platformlarından biridir. Milyonlarca alıcıya ulaşmak mümkün; ancak kalabalık rekabette öne çıkmak disiplinli bir mağaza yönetimi gerektirir.",
    ],
    sections: [
      {
        heading: "Ürün Kartı SEO ile Öne Çıkın",
        paragraphs: [
          "Trendyol içi aramada ürün başlığı ve anahtar kelimeler belirleyicidir. Ürün adında ürün adı + marka + temel özellik + model bilgisini doğru sıralamayla kullanmak görünürlüğü artırır.",
        ],
        bullets: [
          "Başlıkta doğru anahtar kelime sıralaması",
          "Yüksek çözünürlüklü ve tutarlı görseller",
          "Detaylı ürün açıklaması ve teknik özellikler",
          "Doğru kategori ve varyasyon yapısı",
        ],
      },
      {
        heading: "Kampanya ve Fiyat Stratejisi",
        paragraphs: [
          "Trendyol'un kampanya dönemleri (sezon indirimleri, özel günler) satışta kırılma noktalarıdır. Kampanya takvimine önceden hazırlanmak, stok ve fiyat planlamasıyla birlikte yapılmalıdır.",
        ],
      },
      {
        heading: "Trendyol Ads ile Görünürlük",
        paragraphs: [
          "Trendyol Ads, mağazanızın arama sonuçlarında üst sıralarda görünmesini sağlar. Doğru ürün ve anahtar kelime seçimiyle reklam bütçesi verimli kullanılır.",
          "Müşteri yorumları ve yüksek puan, hem sıralamayı hem dönüşümü etkiler. Sipariş sonrası takip ve hızlı kargolama puanınızı korur.",
        ],
      },
    ],
    faqs: [
      { q: "Trendyol'da satış için komisyon ne kadar?", a: "Kategoriye göre değişen komisyon oranları uygulanır; güncel oranlar Trendyol panelinde görülebilir." },
      { q: "Trendyol mağaza yönetimini ajansa devretmek mantıklı mı?", a: "Ürün, kampanya ve reklam yönetimi zaman ister; ajans devri süreci hızlandırır ve satışı ölçekler." },
    ],
  },
  {
    focusKeywords: ["dijital pazarlama nedir", "360 derece pazarlama", "dijital pazarlama kanalları", "performans pazarlama"],
    slug: "dijital-pazarlama-nedir-2026",
    title: "Dijital Pazarlama Nedir? 2026'da Başarılı Stratejiler",
    excerpt: "Dijital pazarlama kanalları, bütçe planlaması ve 360 derece stratejiyle markanızı büyütme rehberi.",
    date: "2026-02-10",
    category: "Pazarlama",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Dijital pazarlama reklam metrikleri ve performans raporları gösteren analitik kontrol paneli",
    readTime: "7 dk",
    intro: [
      "Dijital pazarlama; markanızın çevrimiçi kanallardan hedef kitlesine ulaşmasını, onları etkilemesini ve müşteriye dönüştürmesini sağlayan tüm faaliyetleri kapsar. Reklam, SEO, sosyal medya, e-posta ve içerik bu çatının altındadır.",
    ],
    sections: [
      {
        heading: "360 Derece Dijital Pazarlama Nedir?",
        paragraphs: [
          "360 derece yaklaşım, tüm kanalların tek strateji altında ve tutarlı bir marka mesajıyla kullanılmasıdır. SEO, reklam ve sosyal medya birbirini besler; ölçümleme tek panelden yapılır.",
        ],
      },
      {
        heading: "Dijital Pazarlama Kanalları",
        bullets: [
          "Google Ads ve Meta Reklamları (hızlı sonuç)",
          "SEO ve GEO (kalıcı organik büyüme)",
          "Sosyal medya ve influencer/UGC (marka ve güven)",
          "E-posta pazarlama (mevcut müşteri kazanımı)",
          "E-ticaret ve pazaryeri yönetimi (satış kanalları)",
        ],
      },
      {
        heading: "Bütçe Nasıl Dağıtılmalı?",
        paragraphs: [
          "Bütçe dağılımı sektöre ve hedefe göre değişir. Dönüşüm odaklı markalarda reklam ağırlıklı, marka bilinirliği isteyenlerde içerik + sosyal medya ağırlıklı bir karışım önerilir.",
          "Önemli olan her liranın ölçülebilir olmasıdır. Kanallar arası attribution kurulmadan yapılan harcama, nereye yatırım yapılacağına dair net karar verdirmez.",
        ],
      },
    ],
    faqs: [
      { q: "Dijital pazarlama maliyeti ne kadar?", a: "Bütçe hedef ve kanala göre değişir; ajanslar genellikle medya bütçesi + yönetim ücreti modeliyle çalışır." },
      { q: "Küçük işletmeler dijital pazarlama yapabilir mi?", a: "Evet; düşük bütçeyle başlanıp kazanılan veriyle ölçeklendirilebilir. Uzman yönlendirmesi maliyeti en verimli kullanır." },
    ],
  },
  {
    focusKeywords: ["influencer pazarlama", "influencer nedir", "ugc içerik", "mikro influencer"],
    slug: "influencer-pazarlama-nedir",
    title: "Influencer Pazarlama Nedir? Doğru Influencer Nasıl Seçilir?",
    excerpt: "Influencer pazarlama stratejileri, mikro ve makro influencer farkı, UGC içerik üretimi ve kampanya ROI ölçümü.",
    date: "2026-01-30",
    category: "Sosyal Medya",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Influencer pazarlama iş birliği için birlikte UGC içerik üreten yaratıcı ekip",
    readTime: "6 dk",
    intro: [
      "Influencer pazarlama, takipçi kitlesine sahip kişiler aracılığıyla markanızı hedef kitleye tanıtma stratejisidir. Doğru seçim ve ölçümleme yapıldığında güçlü bir güven kaynağı oluşturur.",
    ],
    sections: [
      {
        heading: "Mikro mu Makro mu Influencer?",
        paragraphs: [
          "Mikro influencerlar (10K-100K takipçi) daha yüksek etkileşim ve niş güven sağlar; makro influencerlar geniş erişim sunar ancak maliyet ve etkileşim dengesi farklıdır.",
          "Sahte takipçi ve bot oranı, seçim öncesi mutlaka denetlenmelidir. Etkileşim oranı, takipçi sayısından daha değerli bir göstergedir.",
        ],
      },
      {
        heading: "UGC Nedir ve Neden Değerlidir?",
        paragraphs: [
          "UGC (User Generated Content), gerçek kullanıcıların ürettiği içeriktir. Reklamda kullanıldığında 'satış konuşması' gibi algılanmaz; doğal ve güvenilir olduğu için dönüşüm oranlarını yükseltir.",
        ],
      },
      {
        heading: "Kampanya ROI'si Nasıl Ölçülür?",
        paragraphs: [
          "Kupon kodu, UTM linki ve son tık modeliyle influencer bazlı satış etkisi ölçülebilir. Erişim ve etkileşim tek başına yeterli değildir; gerçek satış etkisi izlenmelidir.",
        ],
      },
    ],
    faqs: [
      { q: "Influencer ücretleri ne kadar?", a: "Takipçi, niş ve içerik türüne göre büyük farklılık gösterir; mikro influencerlarla düşük bütçeyle başlanabilir." },
      { q: "Influencer seçimini ajansa bırakmak mantıklı mı?", a: "Evet; ajanslar sahte takipçi denetimi, sözleşme ve ölçümleme sürecini profesyonelce yönetir." },
    ],
  },
  {
    focusKeywords: ["dönüşüm optimizasyonu", "cro nedir", "a/b testi", "satış hunisi"],
    slug: "donusum-optimizasyonu-cro-nedir",
    title: "Dönüşüm Optimizasyonu (CRO) Nedir? Satışları Artırma Rehberi",
    excerpt: "CRO tanımı, dönüşüm hunisi analizi, A/B testleri ve trafiği müşteriye çeviren optimizasyon teknikleri.",
    date: "2026-01-20",
    category: "Web",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Dönüşüm oranı optimizasyonu CRO için satış hunisi analizi yapan detaylı iş planı",
    readTime: "6 dk",
    intro: [
      "Dönüşüm optimizasyonu (CRO), web sitenize gelen trafiğin satın alma veya form doldurma gibi hedef aksiyonlara dönüşme oranını artırma sürecidir. Daha fazla trafik çekmek yerine, gelen trafiği daha verimli kullanmayı hedefler.",
    ],
    sections: [
      {
        heading: "CRO Neden Önemli?",
        paragraphs: [
          "Reklam maliyetleri arttıkça, dönüşüm oranındaki küçük bir iyileşme bile yatırım getirisini ciddi şekilde etkiler. %1'den %2'ye çıkan dönüşüm, satışları ikiye katlar.",
        ],
      },
      {
        heading: "CRO Süreci Nasıl İşler?",
        bullets: [
          "Veri toplama: Analytics, ısı haritası ve oturum kayıtları",
          "Huni analizi: Kullanıcının bıraktığı noktaları tespit etme",
          "Hipotez oluşturma: Sorunu çözecek değişiklik önerisi",
          "A/B testi: Varyantları karşılaştırma",
          "Ölçekleme: Kazanan varyantı uygulama ve genişletme",
        ],
      },
      {
        heading: "En Etkili CRO Teknikleri",
        paragraphs: [
          "Form kısaltma, net CTA, sosyal kanıt, fiyat şeffaflığı ve hız optimizasyonu en sık etki yaratan alanlardır. Her sektörde kazanan kombinasyon testlerle bulunur.",
        ],
      },
    ],
    faqs: [
      { q: "CRO ne kadar sürer?", a: "İlk analiz ve hızlı kazanımlar 1-2 ayda, sürekli test kültürüyle kalıcı iyileşme sürdürülebilir." },
      { q: "CRO sadece e-ticaret için mi?", a: "Hayır; form dolduran, randevu alan veya talep oluşturan tüm siteler için geçerlidir." },
    ],
  },
  {
    focusKeywords: ["meta pixel kurulumu", "conversions api", "dönüşüm takibi", "meta reklam ölçümleme"],
    slug: "instagram-ve-meta-pixel-kurulumu",
    title: "Meta Pixel ve Dönüşüm Takibi Nasıl Kurulur?",
    excerpt: "Meta Pixel kurulumu, Conversions API, dönüşüm olayları ve reklam verilerini doğru ölçme rehberi.",
    date: "2026-01-12",
    category: "Reklam",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=70&w=1200&auto=format&fit=crop",
    imageAlt: "Meta Pixel dönüşüm takibi ve reklam veri ölçümleme paneli kurulum ekranı",
    readTime: "5 dk",
    intro: [
      "Meta Pixel, sitenizdeki ziyaretçi davranışlarını izleyen ve bu verileri Meta reklamlarına aktaran bir izleme kodudur. Doğru kurulum olmadan reklam bütçenizin verimini ölçmek imkânsızdır.",
    ],
    sections: [
      {
        heading: "Meta Pixel Nasıl Kurulur?",
        bullets: [
          "Meta Events Manager'dan Pixel oluşturun",
          "Kod parçasını sitenizin <head> bölümüne ekleyin",
          "Satın alma, sepete ekleme gibi dönüşüm olaylarını tanımlayın",
          "Conversions API ile tarayıcı engelleyicilerine karşı veriyi destekleyin",
          "Test etkinliği ile kurulumu doğrulayın",
        ],
      },
      {
        heading: "Conversions API (CAPI) Neden Gerekli?",
        paragraphs: [
          "Tarayıcıların çerez engelleme oranları arttıkça Pixel tek başına yetersiz kalır. CAPI, veriyi sunucu tarafından doğrudan Meta'ya ileterek kayıp veriyi tamamlar ve reklam optimizasyonunu iyileştirir.",
        ],
      },
      {
        heading: "Doğru Dönüşüm Verisi Nasıl Sağlanır?",
        paragraphs: [
          "Dönüşüm olayları doğru tanımlanmazsa Meta, hangi kullanıcıların satın aldığını öğrenemez ve optimizasyon şansa bırakılır. Standart olay adlandırması ve doğru parametreler kritik önemdedir.",
        ],
      },
    ],
    faqs: [
      { q: "Pixel kurulumu ne kadar sürer?", a: "Tek sayfalık sitelerde saatler, kapsamlı e-ticaret sitelerinde birkaç gün sürebilir." },
      { q: "Pixel kurmadan reklam verebilir miyim?", a: "Verebilirsiniz; ancak dönüşüm takibi olmadan reklamları optimize etmek ve ölçmek mümkün olmaz." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}