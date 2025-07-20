import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import type { Products } from "./model/model";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { data: products } = useProducts();

  const [count, setCount] = useState(0);

  console.log(products);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="w-full">
        <ul>
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <div className="w-full border">
                  {product.title}
                  {product.description}
                  {product.title}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
