import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { JokesPage } from "./pages/JokesPage";
import FavoriteJokesPage from "./pages/FavoriteJokesPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryJokesPage from "./pages/CategoryJokesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<JokesPage />} />
            <Route path="/FavoriteJokes" element={<FavoriteJokesPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/CategoryJokes/:category"
              element={<CategoryJokesPage />}
            />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
