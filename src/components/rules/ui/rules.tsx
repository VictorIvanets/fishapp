import { useNavigate, useParams } from 'react-router-dom'

function Rules() {
	const { login } = useParams()
	const navigate = useNavigate()
	return (
		<div className="rulespage">
			<div className="rules">
				<h2 className="tacenter">ПРАВИЛА КОРИСТУВАННЯ</h2>
				<br />
				<ul>
					<li>
						Зареєструйтеся. (Важливий лише логін та пароль, усе інше у довільній
						формі)
					</li>
					<li>Увійдіть.</li>
					<li>
						Далі Ви можете скористуватися картою, та позначити місце рибалки.
					</li>
					<li>Коли на карті з'явиться зелена мітка, натисніть на неї.</li>
					<li>У вікні, що з'явилося, заповніть дату, назву та опис рибалки.</li>
					<li>Також Ви можете оцінити її.</li>
					<li>Натисніть "Додати".</li>

					<h3>Перелік рибалок:</h3>

					<li>Праворуч будуть додаватися усі Ваші рибалки.</li>
					<li>
						Ви можете переглянути місце рибалки на карті, або видалити запис.
					</li>
					<li>
						Натиснувши на блок, Ви переходите до повної інформації, та можете
						додати фото, натиснувши на "Завантажити фото".
					</li>
					<li> Натисніть "Вибрати фото", та "Завантажити"</li>
					<h3>Усі записи:</h3>
					<li>
						Для того, щоб пидивитися усі мітки, натисніть "Показати усі місця".
					</li>
					<li>
						Натиснувши на мітку, можна перейти до детальної інформації про це
						місце.
					</li>
				</ul>
				<br />
				<h2 className="tacenter">Уся інформація у загальному користуванні!</h2>
				<h2 className="tacenter">Усі користувачі можуть бачити усі місця!</h2>
				<br />
				<button onClick={() => navigate(`/main/${login}/map`)}>НАЗАД</button>
			</div>
		</div>
	)
}

export default Rules
