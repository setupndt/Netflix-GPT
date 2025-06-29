

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSuggestedMovies } from "../utils/MovieSlice";
import { MovieTitle } from "../utils/MovieTitle";

const useFetchAllMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const movieData = await Promise.all(
          MovieTitle.map(async (title) => {
            const res = await fetch(
              `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=11b62613`
            )
            return await res.json();
          })
        );
        dispatch(setSuggestedMovies(movieData));
      } catch (err) {
        console.error("Error fetching movie data:", err);
      }
    };

    fetchAll();
  }, [dispatch]);
};

export default useFetchAllMovies;
