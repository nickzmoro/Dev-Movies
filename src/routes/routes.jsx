import { Route, Routes } from "react-router-dom";

import { Home } from "../containers/Home";
import { Movie } from "../containers/Movies";
import { Serie } from "../containers/Series";
import { Detail } from "../containers/Detail/index";

import { DefaultLayout } from "../layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movie />} />
        <Route path="/series" element={<Serie />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}
