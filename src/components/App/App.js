import {BrowserRouter, Routes, Route} from "react-router-dom"
import SearchPage from "../SearchPage";
import SearchResult from "../SearchResult";
import './App.css';



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage/>}>
          <Route index element={<p>Enter Search</p>}/>
          <Route
            path="/search/:queryText"
            element={<SearchResult/>}
          />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
