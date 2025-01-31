function Admin() {
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
					<tr>
						<td>00</td>
						<td>Софья</td>
						<td>sofia@example.com</td>
						<td>8-123-456-78-90</td>
						<td>
							<select class="form-select">
								<option value="В процессе" selected>
									В процессе
								</option>
								<option value="Готов">Готов</option>
								<option value="Доставлен">Доставлен</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Дарья</td>
						<td>darya@example.com</td>
						<td>8-098-765-43-21</td>
						<td>
							<select class="form-select">
								<option value="В процессе" selected>
									В процессе
								</option>
								<option value="Готов">Готов</option>
								<option value="Доставлен">Доставлен</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Admin;
