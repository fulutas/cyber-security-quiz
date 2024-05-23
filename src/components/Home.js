import React from 'react';
import UserForm from './UserForm';

const Home = () => {

	return (
		<main>
			<section>
				<p className='text-white text-xl font-semibold'>
					"CyberGame” adlı bu oyun uygulaması, sosyal mühendislik ve fidye yazılımları gibi önemli siber tehditlere karşı işe alım sürecine tabi tutulacak personellerin oryantasyon sürecini maksimum verimle tamamlamasına imkan veren ve kurumsal düzeydeki güvenlik risklerine karşı kurum farkındalık seviyesini artırmayı amaçlayarak siber tehditlere karşı çalışanların bilgi ve becerilerini geliştirmek için özel olarak tasarlanmıştır.
				</p>
			</section>
			<UserForm />
		</main>
	);
}

export default Home;
