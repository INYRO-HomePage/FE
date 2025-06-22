import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import AboutPage from "../pages/about/AboutPage";
import FaqPage from "../pages/faq/Faqpage";
import ActivitiesPage from "../pages/activities/Activitiespage";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
