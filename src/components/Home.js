import React from 'react';
import UserForm from './UserForm';

const Home = () => {

	return (
		<main>
			<section>
				<p className='text-white text-xl font-semibold'>
					Siber Güvenlik Anketi, kullanıcıların siber güvenlik bilincini artırmayı ve onları potansiyel siber tehditlere karşı daha hazırlıklı hale getirmeyi amaçlar.
					Eğitici ve eğlenceli bir şekilde bilgi kazanmayı sağlayan bu uygulama, güvenli bir dijital dünyaya katkıda bulunmayı hedefler.
				</p>
			</section>
			<UserForm />
		</main>
	);
}

export default Home;
