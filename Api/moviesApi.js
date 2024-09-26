const apiKey = '8297f2ff73d06739e113e71cc8414aa1';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjk3ZjJmZjczZDA2NzM5ZTExM2U3MWNjODQxNGFhMSIsIm5iZiI6MTcyNzM2OTk0OC4xNTUxODksInN1YiI6IjYyYTg3MGNiZWIxNGZhMDlkZTA5NmIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bXjOqcqRml2R__2xaJ0d86NIJtIvMLpNGCV_gGCRCg4'
    }
  };
const base = 'https://api.themoviedb.org/3/';
const popular = `${base}movie/popular?language=en-US&page=1`;
const topRated = `${base}movie/top_rated?language=en-US&page=1`;
const upcoming = `${base}movie/upcoming?language=en-US&page=1`;

const image500 =path => path ? `https://image.tmdb.org/t/p/w500/${path}`: null;
const image342 =path =>path ? `https://image.tmdb.org/t/p/w342/${path}`: null;
const image185 =path =>path ? `https://image.tmdb.org/t/p/w185/${path}`: null;


const apiCall = async (url) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
  };
 
const fetchTrending = async ()=>{
   return await apiCall(popular)
}
const fetchTopRated = async ()=>{
    return await apiCall(topRated)
}
  
const fetchUpcoming = async()=>{
    return await apiCall(upcoming)
}
export {fetchTrending, fetchTopRated, fetchUpcoming, image500, image342, image185}
  