const key = '937e037edf8e6fa7852302f2345d9669';
// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzdlMDM3ZWRmOGU2ZmE3ODUyMzAyZjIzNDVkOTY2OSIsInN1YiI6IjY0YmE3NjlmMDZmOTg0MDEzOGJjYTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-2zY5sZuLTwDPX_U_naZA7JvZveNJI0HMeL85kbL1w'
export const Urls={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=horror`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=4`,
    imageURL:'https://image.tmdb.org/t/p/original',

}