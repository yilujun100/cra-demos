import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Routes from './routes';
import './App.css';
function App() {
	return (
		<div className="app">
			<Router>
				<aside className="aside-menu">
					<ul>
						{Routes.map(route => (
							<li>
								<Link to={route.path}>{route.title}</Link>
							</li>
						))}
					</ul>
				</aside>
				<section className="content">
					<Switch>
						{Routes.map(route => (
							<Route path={route.path} component={route.component} />
						))}
					</Switch>
				</section>
			</Router>
		</div>
	);
}

export default App;
