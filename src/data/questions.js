export const questions = [
  {
    questionId: 1,
    scenario: "Bir çalışan, 'Acil: Şifrenizi değiştirmelisiniz, lütfen aşağıdaki bağlantıya tıklayın' talep eden bir e-posta mesajı göreceksiniz.",
    question: "Bu tür e-postalara karşı ilk yapılması gereken davranış aşağıdakilerden hangisidir?",
    options: [
      {
        label: "A",
        answer: "Hiçbir zaman doğrulanmayan veya güvenilmeyen kaynaklardan gelen bağlantılara tıklamamak",
        isCorrect: true,
        points: 10
      },
      {
        label: "B",
        answer: "Güncelleme için şifre gerekiyorsa doğrudan şirketin güvenli web sistemini ziyaret etmek",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "IT departmanıyla iletişim sağlayarak şüpheli e-postaların incelenmesi sağlamak",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "E-postada belirtilen telefon numarasını arayarak e-posta doğruluğunu teyit etmek",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "URL'nin gerçekte şirketin resmi web sitesiyle ulaşılabilir olduğundan emin olmak için e-postadaki bağlantısına tıklamak",
        isCorrect: false,
        points: 0
      },
    ],
  },
  {
    questionId: 2,
    scenario: "Bir çalışan gelen özel mesajda 'Bir ödül kazandınız! Kişisel bilgilerinizi hemen açın ve ödülünüzü alın!' böyle bir istekle karşılaşır.",
    question: "Sosyal medyadaki bu mesajlara nasıl yanıt verirsiniz?",
    options: [
      {
        label: "A",
        answer: "Tanımadığım kişilerden gelen mesajları reddeder veya IT'ye bildiririm",
        isCorrect: false,
        points: 0
      },
      {
        label: "B",
        answer: "Kişisel bilgilerimi asla sosyal medya üzerinden paylaşmam",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "Çevrimiçi olan ödüllere şüpheyle yaklaşır bu hediyelerin gerçekliğini araştırırım",
        isCorrect: true,
        points: 10
      },
      {
        label: "D",
        answer: "Şüpheli mesajları şirket politikalarına uygun olarak BT departmanına bildiririm",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "Sosyal medya platformlarının güvenlik ayarlarında mahremiyetin korunmasına yönelik düzenlemeler yaparım",
        isCorrect: false,
        points: 0
      },
    ],
  },
  {
    questionId: 3,
    scenario: "Bir çalışana gelen telefon aramasında 'Bankanızda bir sorun var, lütfen hesap bilgilerinizi kontrol edin' diye bir taleple karşılaşır.",
    question: "Bu şüpheli telefon görüşmeleriyle nasıl başa çıkmalısınız?",
    options: [
      {
        label: "A",
        answer: "Telefonla yapılan bu taleplere yanıt olarak asla kişisel veya mali bilgilerimi açıklamam",
        isCorrect: true,
        points: 10
      },
      {
        label: "B",
        answer: "Bankamın resmi müşteri hizmetleriyle telefonla durumun incelenmesini sağlarım",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "Tanımadığım numaralardan gelen çağrılara cevap vermeyerek otomatik reddederim",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "Şüpheli telefon görüşmelerini bilgi işlem dairesine bildirerek şirketin güvenlik politikalarını uygun davranırım",
        isCorrect: false,
        points: 0
      },
    ],
  },
  {
    questionId: 4,
    scenario: "Ofiste çalışırken, ziyarete gelen yabancı bir kişi 'Bilgisayarınızdan bir konuya bakmak için kısa bir süreliğine alabilir miyim?' diye sordu böyle bir istek karşısında nasıl davranılmalı.",
    question: "Ofiste güvenlik açısından dikkat edilmesi gereken hususlar nelerdir?",
    options: [
      {
        label: "A",
        answer: "Kişisel veya iş bilgisayarlarınızı asla yabancılarla paylaşmayın.",
        isCorrect: true,
        points: 10
      },
      {
        label: "B",
        answer: "Ofis cihazlarında izinsiz girişlere erişimin engellenmesi.",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "Tanımadığınız misafirlerin ofisindeki bilgi işlem departmanına raporlanarak binaya erişimin engellenmesi.",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "Bilgisayardan ayrılıp masanıza ara verdiğinizde bağlantıyı kapatın veya şifreleyerek kalkın.",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "Ofiste güvenlik politikalarını düzenli olarak gözden geçirmek ve çalışanlara farkındalık eğitimleri düzenlemek.",
        isCorrect: false,
        points: 0
      },
    ],
  },
  {
    questionId: 5,
    scenario: "İşyerindeki bir kutlama sırasında bir çalışan, Wi-Fi'nize bağlanarak internette gezinebileceğinizi söyledi. programın bir açıklamasını okuyacaksınız:",
    question: "Büyük etkinlikler sırasında Wi-Fi'nizin miktarını sağlamak için ne gibi önlemler alınıyor?",
    options: [
      {
        label: "A",
        answer: "Kişisel bilgileriniz, Wi-Fi ağına bağlıyken, büyük etkinliklerde, güvenlik perspektifini önlemeden asla paylaşmayın.",
        isCorrect: false,
        points: 0
      },
      {
        label: "B",
        answer: "Büyük etkinliklerde Wi-Fi ağına bağlanmadan önce BT sistemi tarafından onaylı yetkili ağların seçilmesi.",
        isCorrect: true,
        points: 10
      },
      {
        label: "C",
        answer: "Kamuya açık alanlarda Wi-Fi kullanırken SSL şifreleme gibi güvenlik protokollerini destekleyen ağların seçilmesi önemlidir.",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "Halka açık yerlerde Wi-Fi kullanırken, otomatik düğme seçenekleri devre dışı bırakma ağa manuel olarak bağlanmalısınız.",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "Büyük etkinliklerde Wi-Fi ağına bağlanırken güvenlik duvarları ve anti-virüs yazılımı gibi korumanın her zaman aktif olması.",
        isCorrect: false,
        points: 0
      },
    ],
  },
  {
    questionId: 6,
    scenario: "Yeni çalışanların fidye yazılımının sonuçlarını değerlendirme kapasitesini test edin.",
    question: "Fidye yazılımının bir teknoloji şirketinin itibarı üzerindeki olası etkileri nelerdir?",
    options: [
      {
        label: "A",
        answer: "Müşteriye karşı itibar kaybı.",
        isCorrect: false,
        points: 0
      },
      {
        label: "B",
        answer: "Rekabet avantajı kaybolur.",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "Hisse senedinin değeri düşer.",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "İşe alım sürecindeki olumsuzluklar.",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "Bu seçeneklerin tümü doğrudur.",
        isCorrect: true,
        points: 10
      },
    ],
  },
  {
    questionId: 7,
    scenario: "Yeni çalışanın kodkilit hakkında bilgisi test edilir.",
    question: "KodKilit fidye yazılımıyla baş etmenin en etkili yöntemi nedir?",
    options: [
      {
        label: "A",
        answer: "Verilerin yayınlanması ve verilere yeniden erişim sağlanması için ödeme talep etmek.",
        isCorrect: false,
        points: 0
      },
      {
        label: "B",
        answer: "Güvenlik profesyonellerinin yardımıyla hesapları hacklemeye çalışmak.",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "Fidye taleplerini reddetmek ve veri kaybını kabul etmek.",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "Fidyeyi ödemeden önce yedeklenen verileri almaya çalışmak.",
        isCorrect: true,
        points: 10
      },
    ],
  },
  {
    questionId: 8,
    scenario: "Yeni çalışanların fidye yazılımının potansiyel etkisini düşünüp düşünmediğini kontrol edin.",
    question: "Fidye yazılımları nedeniyle mali zarara uğrayan teknoloji şirketlerinin olası etkileri nelerdir?",
    options: [
      {
        label: "A",
        answer: "Kurtarma maliyeti.",
        isCorrect: false,
        points: 0
      },
      {
        label: "B",
        answer: "Veri kurtarma hizmetlerinin maliyeti.",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "Ticari geliri korumak için fidyenin nakit karşılığını ödeyin.",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "Müşteri Katılımı.",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "Hepsi doğru",
        isCorrect: true,
        points: 10
      },
    ],
  },
  {
    questionId: 9,
    scenario: "Personele fidye yazılımın etkilerinden nasıl az etkileneceği test edilmektedir.",
    question: "Fidye yazılımının etkileri nasıl azaltılabilir?",
    options: [
      {
        label: "A",
        answer: "Güvenlik yazılımının düzenli olarak güncellenmesi ve felaket politikasının sıkı bir şekilde uygulanması.",
        isCorrect: false,
        points: 0
      },
      {
        label: "B",
        answer: "Yazılıma eklenen şüpheli e-postaları açmayın ve bilinmeyen kaynaklardan hiçbir şey indirmeyin.",
        isCorrect: false,
        points: 0
      },
      {
        label: "C",
        answer: "Çalışanların sürekli güvenlik eğitimi.",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "Trafik düzenlerinin sürekli incelenmesi ve anormalliklerin tanınması.",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "Bu seçeneklerin tümü geçerlidir.",
        isCorrect: true,
        points: 10
      },
    ],
  },
  {
    questionId: 10,
    scenario: "Yeni çalışanların fidye yazılımının nasıl yayıldığına dair bilgisi olup olmadığını kontrol edin.",
    question: "Bu genellikle nasıl yayılır?",
    options: [
      {
        label: "A",
        answer: "Bir USB cihazından.",
        isCorrect: false,
        points: 0
      },
      {
        label: "B",
        answer: "E-posta konuşmalarından.",
        isCorrect: true,
        points: 10
      },
      {
        label: "C",
        answer: "Facebook, Twitter ve Instagram gibi sosyal medya hesaplarından.",
        isCorrect: false,
        points: 0
      },
      {
        label: "D",
        answer: "Ofisin fotokopi makinesinden.",
        isCorrect: false,
        points: 0
      },
      {
        label: "E",
        answer: "Emin değilim.",
        isCorrect: false,
        points: 0
      },
    ],
  },
];
