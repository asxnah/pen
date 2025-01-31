import PenForm from '../componets/penForm.js';
import React, { useState } from 'react';

function Creator() {
	function generateId(length = 9) {
		return (
			Date.now().toString(36) +
			Math.random()
				.toString(36)
				.slice(2, 2 + length)
		);
	}

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [status] = useState('В процессе');

	const add = (name, email, number, status) => {
		fetch('http://localhost:3000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: generateId(),
				name: name,
				email: email,
				number: number,
				status: status,
			}),
		})
			.then((response) => response.json())
			.then(() => alert('Ваш заказ передан на обработку'))
			.catch(() => alert('Что-то пошло не так'));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		add(name, email, number, status);
	};

	return (
		<>
			<main className="container min-height-90vh p-4">
				<div className="row">
					<div className="col-12 col-md-6 creator">
						<PenForm text={name}/>
					</div>
					<form className="col-12 col-md-6">
						<div className="mb-3">
							<label className="form-label">Ваше имя</label>
							<input
								type="text"
								className="form-control"
								onChange={(e) => setName(e.target.value)}
								value={name}
								maxLength={20}
							/>
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
					<form className="modal-content" onSubmit={handleSubmit}>
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Ваш заказ, {name}
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
								<input
									type="text"
									className="form-control"
									id="fname"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required="true"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="number" className="form-label">
									Номер телефона *
								</label>
								<input
									type="tel"
									className="form-control"
									id="number"
									value={number}
									onChange={(e) => setNumber(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Электронная почта *
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
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
							<button type="submit" className="btn btn-dark">
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
