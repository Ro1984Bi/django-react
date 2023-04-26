import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { JobFormPage } from "./pages/JobFormPage";
import { JobsPage } from "./pages/JobsPage";
import { Nav } from "./components/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs-create" element={<JobFormPage />} />
          <Route path="/jobs/:id" element={<JobFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
