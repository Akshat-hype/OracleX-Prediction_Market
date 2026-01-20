import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Markets from "../pages/Markets";
import MarketView from "../pages/MarketView";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import CreateMarket from "../pages/CreateMarket";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/markets" element={<Markets />} />
    <Route path="/markets/:id" element={<MarketView />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/create" element={<CreateMarket />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
