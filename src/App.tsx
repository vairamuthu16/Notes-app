import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";

export default function App() {
  return (
    <Routes>
      <Route
        element={<Layout />}
      >
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/archive"
          element={<Archive />}
        />

        <Route
          path="/trash"
          element={<Trash />}
        />
      </Route>
    </Routes>
  );
}