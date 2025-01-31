import PenPreview from '../componets/exampleOfPen.js';

function Creator() {
	return (
		<>
			<main className="container min-height-90vh p-4">
				<div className="row">
					<div className="col-12 col-md-6">
						<PenPreview />
					</div>
					<form className="col-12 col-md-6">
						<div className="mb-3">
							<label className="form-label">Ваше имя</label>
							<input type="email" className="form-control" />
							<div id="emailHelp" className="form-text">
								Это обязательное поле для оформления заказа.
							</div>
						</div>
						<button
							type="button"
							className="btn btn-dark w-100"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
						>
							Оформить заказ
						</button>
					</form>
				</div>
			</main>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<form className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Ваш заказ, Имя
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label htmlFor="fname" className="form-label">
									Имя *
								</label>
								<input type="text" className="form-control" id="fname" />
							</div>
							<div className="mb-3">
								<label htmlFor="number" className="form-label">
									Номер телефона *
								</label>
								<input type="tel" className="form-control" id="number" />
							</div>
							<div className="mb-3">
								<label htmlFor="number" className="form-label">
									Электронная почта *
								</label>
								<input type="email" className="form-control" id="email" />
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-light"
								data-bs-dismiss="modal"
							>
								Отменить
							</button>
							<button type="button" className="btn btn-dark">
								Заказать
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Creator;
