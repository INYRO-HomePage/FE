import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import AboutPage from "../pages/about/AboutPage";
import FaqPage from "../pages/faq/Faqpage";
import ActivitiesPage from "../pages/activities/Activitiespage";
import Layout from "../components/layout/Layout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/faq" element={<FaqPage />}></Route>
          <Route
            path="/activities"
            element={<ActivitiesPage />}
          ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
