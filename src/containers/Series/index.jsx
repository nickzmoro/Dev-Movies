import { useState } from "react";
import { useEffect } from "react";
import { getSeriePopular } from "../../services/getData";
import LoadingPage from "../../components/LoadingPage";
import PopularPage from "../../components/PopularPage";

export function Serie() {
  const [seriePopular, setSeriePopular] = useState();

  useEffect(() => {
    setTimeout(() => {
      Promise.all([getSeriePopular()])
        .then(([seriePopular]) => [setSeriePopular(seriePopular)])
        .catch((error) => console.error(error));
    }, 250);
  }, []);

  console.log(seriePopular);

  return (
    <>
      {seriePopular ? (
        <PopularPage
          titlePage={"Série mais popular"}
          bgSrc={seriePopular.backdrop_path}
          popularity={seriePopular.popularity}
          name={seriePopular.name}
          overview={seriePopular.overview}
          age={seriePopular.adult}
          releaseDate={seriePopular.first_air_date}
          imgPoster={seriePopular.poster_path}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
