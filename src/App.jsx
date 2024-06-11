import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ViewEvent from "./pages/ViewEvent.jsx";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import EditEvent from "./pages/EditEvent.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path="/view-event/:id" element={<ViewEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
