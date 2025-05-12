// useMovies.js
import { useState, useEffect } from 'react';
import { fetchTrending, fetchTopRated, fetchUpcoming } from './../Api/moviesApi';

const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [trandingData, setTrandingData] = useState([])
  const [topRatedData, setTopRatedData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tranding = await fetchTrending()
        const topRated = await fetchTopRated();
        const upcoming = await fetchUpcoming();
        setTrandingData(tranding)
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

  return { loading, topRatedData, upcomingData,trandingData };
};

export default useMovies;
