import { useState } from "react";
import "./App.css";
import ExerciseHeader from "./components/ExerciseHeader/ExerciseHeader";

function App() {
  return (
    <div className="app-container">
      <ExerciseHeader
        title="Exercise No. X"
        description="This is a simple exercise"
      />
      <div className="exercise-container"></div>
    </div>
  );
}

export default App;
