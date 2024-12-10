import About from "./pages/About";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Slidebar from "./pages/Slidebar";
import Token from "./pages/Token";

const App = () => {
  return (
    <>
      <div id="xb-loadding">
        <div className="honeycomb">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <div className="body_wrap">
        <Header />
        <Slidebar />

        <main>
          <Hero />
          <About />
          <Features />
          <Token />
          {/* <Brand /> */}
          <Contact />
        </main>

        <Footer />
      </div>
    </>

  );
}
export default App;
