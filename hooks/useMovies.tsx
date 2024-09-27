// useMovies.js
import { useState, useEffect } from 'react';
import { fetchTrending, fetchTopRated, fetchUpcoming, fetchMovieDetailsbyID } from './../Api/moviesApi';

const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [trendingData, setTrendingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trending = await fetchTrending();
        const topRated = await fetchTopRated();
        const upcoming = await fetchUpcoming();

        setTrendingData(trending);
        setTopRatedData(topRated);
        setUpcomingData(upcoming);
      
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, trendingData, topRatedData, upcomingData };
};

export default useMovies;
