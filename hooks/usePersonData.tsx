import { useState, useEffect } from "react";
import { fetchPersonData,fetchPersonMoviesData } from "./../Api/moviesApi";
import { MovieType, PersonMovieListType, PersonType } from "@/components/Types";

const usePersonDetails = (id?: number) => { 
  const [personDetailsByID, setPersonDetailsByID] = useState<PersonType>();
  const [personMoviesByID, setPersonMoviesByID] = useState<PersonMovieListType>()

  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        if (id) {
          const personDetailsByIDData = await fetchPersonData(id);
          setPersonDetailsByID(personDetailsByIDData);

          const personMoviesByIDData = await fetchPersonMoviesData(id);
          setPersonMoviesByID(personMoviesByIDData);

        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [id]);

  return { personDetailsByID, personMoviesByID,loading };
};

export default usePersonDetails;
