import './App.css';
import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [product, setProduct] = useState("Tomato");
  return (
    <div className="container mx-auto">
    <header className="App-header">
        <p>
          Farming route !
        </p>
      </header>
      <SearchBar setValue={setProduct} />
    </div>
  );
}

export default App;
