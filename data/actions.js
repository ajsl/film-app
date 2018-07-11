export const getFilms = ({id, name, year, showtimes, tmdbRating }) => {
	return {
		type: 'getFlims',
		films: films
	};	
};