const API_KEY = '05fa5592643e02b9eff364c424dea5b8';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-in`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;