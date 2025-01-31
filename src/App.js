import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useLocation,
} from 'react-router-dom';
import './App.css';
import Creator from './pages/Creator.js';
import Main from './pages/Main.js';
import Admin from './pages/sadjasoidhaskdhwiudgwidasgfsaguwqgqwiyggugdasdsagdh/Admin.js';

function App() {
	const NavEl = () => {
		const location = useLocation();
		if (
			location.pathname !==
			'/sadjasoidhaskdhwiudgwidasgfsaguwqgqwiyggugdasdsagdh'
		) {
			return (
				<div className="d-flex">
					<Link to="/creator" className="btn btn-dark" type="submit">
						Заказать
					</Link>
				</div>
			);
		}
		return null;
	};

	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							P E N
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarScroll"
							aria-controls="navbarScroll"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarScroll">
							<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/">
										Главная
									</Link>
								</li>
							</ul>
							<NavEl />
						</div>
					</div>
				</nav>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/creator" element={<Creator />} />
					<Route
						path="/sadjasoidhaskdhwiudgwidasgfsaguwqgqwiyggugdasdsagdh"
						element={<Admin />}
					/>
				</Routes>
			</div>

			<div className="bg-body-tertiary p-4">
				<Link
					className="d-inline-block w-100 text-center link-secondary"
					to="/"
				>
					P E N
				</Link>
			</div>
		</Router>
	);
}

export default App;
