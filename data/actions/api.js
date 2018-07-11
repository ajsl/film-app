import axios from '../../axios';
import { setFilms } from './state';

export const getFilms = () => dispatch => {
	axios.get('/films').then(({ data }) => {
		console.log(data);
		const films = data;
		dispatch(setFilms(films))
	});
};