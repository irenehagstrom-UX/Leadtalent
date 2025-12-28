import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

const ProfessionalServices = lazy(() => import("./components/pages/ProfessionalServices"));
const IndividualServices = lazy(() => import("./components/pages/IndividualServices"));
const About = lazy(() => import("./components/pages/About"));
const Contact = lazy(() => import("./components/pages/Contact"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional-services" element={<ProfessionalServices />} />
          <Route path="/individual-services" element={<IndividualServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
