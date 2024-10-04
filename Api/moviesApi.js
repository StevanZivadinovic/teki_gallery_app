const apiKey = "8297f2ff73d06739e113e71cc8414aa1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
    
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjk3ZjJmZjczZDA2NzM5ZTExM2U3MWNjODQxNGFhMSIsIm5iZiI6MTcyNzQ2MTM5OC40NDYxOCwic3ViIjoiNjJhODcwY2JlYjE0ZmEwOWRlMDk2YjMwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TYZY7sbOTSrD3vDPEKJzeJ8CCnR0h6hP9ixRyz7d1pc",
  },
};
const base = "https://api.themoviedb.org/3/";
const popular = `${base}movie/popular?language=en-US&page=1`;
const topRated = `${base}movie/top_rated?language=en-US&page=1`;
const upcoming = `${base}movie/upcoming?language=en-US&page=1`;

const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
const image342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
const image185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

const movieDetailsEndpoint = (id) => {
return  `${base}movie/${id}?api_key=${apiKey}`;
};
const movieCreditsEndpoint = (id) => {
  return  `${base}movie/${id}/credits?api_key=${apiKey}&language=en-US`;
};
const similarMoviesEndpoint = (id) => {
  return `${base}movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;
};

const getPersonDataEndpoint = (personId)=>{
  return `${base}person/${personId}`;
}

const apiCall = async (url) => {
  console.log("Fetching URL:", url);
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if(data.results){
      return data.results;
    }else{
      return data;
    }
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchTrending = async () => {
  return await apiCall(popular);
};
const fetchTopRated = async () => {
  return await apiCall(topRated);
};

const fetchUpcoming = async () => {
  return await apiCall(upcoming);
};

const fetchMovieDetailsbyID = async (id) => {
  return  await apiCall(movieDetailsEndpoint(id));
};
const fetchMovieCreditsbyID = async (id) => {
  return  await apiCall(movieCreditsEndpoint(id));
};
const fetchSimilarMoview = async (id) => {
  return  await apiCall(similarMoviesEndpoint(id));
};

const fetchPersonData = async (id)=>{
  return await apiCall(getPersonDataEndpoint(id));
}
export {
  fetchTrending,
  fetchTopRated,
  fetchUpcoming,
  image500,
  image342,
  image185,
  movieDetailsEndpoint,
  movieCreditsEndpoint,
  similarMoviesEndpoint,
  fetchMovieDetailsbyID,
  fetchMovieCreditsbyID,
  fetchSimilarMoview,
  fetchPersonData
};
