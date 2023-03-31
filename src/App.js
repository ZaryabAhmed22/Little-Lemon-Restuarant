import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <History />
      <Footer />
    </>
  );
}

export default App;
