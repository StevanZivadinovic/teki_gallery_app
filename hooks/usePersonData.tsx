import { useState, useEffect } from "react";
import { fetchPersonData } from "./../Api/moviesApi";
import { PersonType } from "@/components/Types";

const usePersonDetails = (id?: number) => { 
  const [personDetailsByID, setPersonDetailsByID] = useState<PersonType>(); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        if (id) {
          const personDetailsByIDData = await fetchPersonData(id);
          setPersonDetailsByID(personDetailsByIDData);

        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [id]);

  return { personDetailsByID, loading };
};

export default usePersonDetails;
