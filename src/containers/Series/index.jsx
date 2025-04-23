import { useState } from "react";
import { useEffect } from "react";
import { getSeriePopular } from "../../services/getData";
import { getImages } from "../../utils/getImages";

export function Serie() {
  const [seriePopular, setSeriePopular] = useState();

  useEffect(() => {
    Promise.all([getSeriePopular()])
      .then(([seriePopular]) => [setSeriePopular(seriePopular)])
      .catch((error) => console.error(error));
  }, []);

  console.log(seriePopular);

  return (
    <div>
      <h2>Série mais popular</h2>
      <p>com + de {seriePopular.popularity.toFixed(3)} fãs</p>
      <h4>{seriePopular.name}</h4>
      <img src={getImages("/qujVFLAlBnPU9mZElV4NZgL8iXT.jpg")} alt="" />
    </div>
  );
}
