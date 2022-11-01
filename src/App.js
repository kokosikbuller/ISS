import axios from 'axios';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import './App.scss';
import ListItem from './components/ListItem';
import Located from './components/Located';
import Map from './components/Map';
import Time from './components/Time';

function App() {
	const [location, setLocation] = useState(null);
	const [astros, setAstros] = useState([]);
	const [date, setDate] = useState();

	const fetchLocation = async () => {
		const { data } = await axios.get('http://api.open-notify.org/iss-now.json');
		setLocation(data.iss_position);
	};

	const fetchPersonal = async () => {
		const { data } = await axios.get('http://api.open-notify.org/astros.json');
		const iss = data.people.filter((item) => item.craft === 'ISS');
		setAstros(iss);
	};

	useEffect(() => {
		fetchLocation();
		let id = setInterval(() => {
			fetchLocation();
		}, 5000);
		fetchPersonal();

		setDate(moment());
		let id2 = setInterval(() => {
			setDate(moment());
		}, 10000);

		return () => {
			clearInterval(id);
			clearInterval(id2);
		};
	}, []);

	return (
		<div className='station'>
			<header className='header'>
				<Located location={location} />
				<Time date={date} />
			</header>
			<main className='content'>
				<div className='content__map'>
					<Map coordinate={location} />
				</div>
				<div className='content__list'>
					{astros?.map((item) => (
						<ListItem key={item.name} item={item} />
					))}
					<div className='content__list-count'>
						Total amount: {astros?.length} people on ISS
					</div>
				</div>
			</main>
			<footer>
				<a
					href='https://github.com/kokosikbuller/ISS'
					rel='noreferrer'
					target='_blank'
				>
					GitHub
				</a>
			</footer>
		</div>
	);
}

export default App;
