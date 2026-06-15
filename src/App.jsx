import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AllProjects = lazy(() => import("./components/Projects/AllProjects"));
const Resume = lazy(() => import("./components/Resume/Resume"));

const Home = () => (
  <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>
);

import "./skeleton.css";

const Loader = () => (
  <div className="skeleton-container">
    <div className="skeleton-block skeleton-header"></div>
    <div className="skeleton-block skeleton-title"></div>
    <div className="skeleton-grid">
      <div className="skeleton-block skeleton-card"></div>
      <div className="skeleton-block skeleton-card"></div>
      <div className="skeleton-block skeleton-card"></div>
      <div className="skeleton-block skeleton-card"></div>
      <div className="skeleton-block skeleton-card"></div>
      <div className="skeleton-block skeleton-card"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
