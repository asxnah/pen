import React, { useEffect, useState} from 'react';

function Admin() {

	const [data, setData] = useState([]);
	const [selectedValue, setSelectedValue] = useState('');

	const base = () => {
		fetch('http://localhost:3000/orders', {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json', 
			},
		  })
			.then(response => {
			  if (!response.ok) {
				throw new Error('Network response was not ok');
			  }
			  return response.json(); 
			})
			.then(data => {
			  console.log('Data received:', data); 
			  setData(data);
			})
			.catch(error => {
			  console.error('There was a problem with the fetch operation:', error); 
			});
	};

	const changeStatus = (id, status) => {
		fetch(`http://localhost:3000/orders/${id}`, { 
		  method: 'PATCH',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			status: status,
		  }),
		})
		  .then((response) => {
			if (!response.ok) {
			  throw new Error('Network response was not ok');
			}
			return response.json();
		  })
		  .then(() => {
			const updatedData = data.map((item) =>
				item.id === id ? { ...item, status: status } : item
			  );
			  setData(updatedData); // Предположим, что setData — это функция обновления состояния
			  base(); // Дополнительные действия, если нужно
		  })
		  .catch(() => alert('Что-то пошло не так'));
	  };

	const handleSelectChange = (event) => {
		const value = event.target.value; // Новый статус
		const id = event.target.id; // ID заказа
		changeStatus(id, value);
	}

	useEffect(() => {
		base();
	  }, []);


	return (
		<div className="container min-height-90vh p-4">
			<table class="table table-bordered">
				<thead>
					<tr>
						<td>ID</td>
						<td>Имя</td>
						<td>Почта</td>
						<td>Номер</td>
						<td>Статус</td>
					</tr>
				</thead>

				<tbody>
				{data.map(item => (
					<tr>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.email}</td>
						<td>{item.number}</td>
						<td>
							<select class="form-select" id={item.id} value={item.status} onChange={handleSelectChange}>
								<option value="В процессе" >В процессе</option>
								<option value="Готов">Готов</option>
								<option value="Доставлен">Доставлен</option>
							</select>
						</td>
					</tr>
				))}
				</tbody>

			</table>
		</div>
	);
}

export default Admin;
