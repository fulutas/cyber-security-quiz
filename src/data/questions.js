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
	}
];