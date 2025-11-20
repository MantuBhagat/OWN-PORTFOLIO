import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hireme from "./pages/Hireme";
import ProjectForm from "./components/ProjectForm";
import ProjectView from "./pages/ProjectView";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <div className="">
      <Navbar className="sticky top-0" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hireme" element={<Hireme />} />
        <Route path="/add-project" element={<ProjectForm />} />
        <Route path="/projects/:Id" element={<ProjectView />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
