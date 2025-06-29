import { useSelector } from "react-redux";
import Header from "./Header";
import useFetchAllMovies from "../Hooks/useFetchAllMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  const suggestedMovies = useSelector((store) => store.movies.suggestedMovies);

  useFetchAllMovies();

  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
