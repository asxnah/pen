import { Link } from 'react-router-dom';

function Main() {
	return (
		<main className="mt-1 mt-md-4">
			<section className="p-2 py-md-3 px-md-5">
				<p className="fs-1">
					Ваше имя — ваша история, запечатленная в каждой ручке.
				</p>
				<p className="fst-italic">тут компонент-превью</p>
				<p>
					PEN специализируется на создании уникальных именных ручек с
					индивидуальной гравировкой. Мы помогаем запечатлеть вашу историю в
					каждой ручке, делая каждое изделие особенным и неповторимым.
				</p>
			</section>
			<section className="p-2 py-md-3 px-md-5 bg-dark text-white">
				<h2 className="mb-3">Ваш заказ: шаг за шагом</h2>
				<div className="row">
					<div className="col-12 col-md-4">
						<div className="card mb-4 bg-dark text-white border border-dark-subtle">
							<div className="card-body">
								<small>— 1</small>
								<h5 className="card-title mt-2">Создайте свою историю</h5>
								<p className="card-text">
									Введите ваше имя и посмотрите, как оно будет выглядеть на
									ручке в предварительном просмотре.
								</p>
								<Link to="/creator">
									<button type="button" className="btn btn-light">
										Попробовать
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="card mb-4 bg-dark text-white border border-dark-subtle">
							<div className="card-body">
								<small>— 2</small>
								<h5 className="card-title mt-2">Оформите заказ с легкостью</h5>
								<p className="card-text">
									Нажмите "Заказать" и заполните необходимые данные для быстрой
									и удобной покупки. Вам на почту придет письмо со статусом
									заказа.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="card mb-4 bg-dark text-white border border-dark-subtle">
							<div className="card-body">
								<small>— 3</small>
								<h5 className="card-title mt-2">Ожидайте волшебства</h5>
								<p className="card-text">
									Дождитесь доставки вашей уникальной именной ручки и
									наслаждайтесь её красотой!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-3 px-5 p-md-5 d-flex align-items-center flex-column">
				<p className="fs-3 text-center">
					Аксессуар, который подчеркивает вашу индивидуальность
				</p>
				<Link to="/creator">
					<button type="button" className="btn btn-dark btn-lg">
						Заказать
					</button>
				</Link>
			</section>
		</main>
	);
}

export default Main;
