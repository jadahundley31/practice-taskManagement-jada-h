import { BrowserRouter, Routes, Route } from "react-router";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
