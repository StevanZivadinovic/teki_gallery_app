import { useState, useEffect } from "react";
import { fetchMovieCreditsbyID, fetchMovieDetailsbyID, fetchSimilarMovies } from "./../Api/moviesApi";

const useMoviesDetails = (id?: number) => { 
  const [moviesDetailsByID, setMoviesDetailsByID] = useState(null); 
  const [moviesCreditsByID, setMoviesCreditsByID] = useState(null); 
  const [similarMoviesByID, setSimilarMoviesByID] = useState(null);

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        if (id) {
          const moviesDetailsByIDData = await fetchMovieDetailsbyID(id);
          setMoviesDetailsByID(moviesDetailsByIDData);

          const moviesCreditsByIDData = await fetchMovieCreditsbyID(id)
          setMoviesCreditsByID(moviesCreditsByIDData)

          const similarMoviesByIDData = await fetchSimilarMovies(id)
          setSimilarMoviesByID(similarMoviesByIDData)
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [id]);

  return { moviesDetailsByID,moviesCreditsByID, similarMoviesByID, loading };
};

export default useMoviesDetails;
