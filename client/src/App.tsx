import Header from "./components/Header";
import Panel from "./components/Panel";
import Layout from "./components/Layout";
import SplitPanel from "./components/SplitPanel";
import Hero from "./pages/Hero";
import heroVideo from "../src/assets/video/main-hero-video.mp4";
import AboutMe from "./pages/AboutMe";
import { useProducts } from "./hooks/useProducts";
import { useState } from "react";

export const App = () => {
  const { data: products } = useProducts();

  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Header />
        <SplitPanel className="rounded-50 md:px-10">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="rounded-100 w-full shadow-2xl md:w-11/12"
          >
            <source src="video/main-hero-video.mp4" type="video/mp4" />
          </video>
          <Hero />
        </SplitPanel>
        <Panel>
          <AboutMe />
        </Panel>
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
      </Layout>
    </>
  );
};

export default App;
