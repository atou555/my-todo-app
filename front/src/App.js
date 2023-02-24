import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./components/Navbar";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <Header />
          <Navbar />
          <div className="content">
            <Route path="/" exact component={WelcomePage} />
            <Route path="/tasks" component={TaskList} />
            <Route path="/add-task" component={AddTaskForm} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
