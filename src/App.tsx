import "./App.css";
import ExerciseHeader from "./components/ExerciseHeader/ExerciseHeader";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="app-container">
      <ExerciseHeader
        title="Exercise No. 1: Counter (ver. 1.0)"
        description="Create a simple counter that can be incremented and decremented by clicking buttons."
      />
      <div className="exercise-container">
        <Counter />
      </div>
    </div>
  );
}

export default App;
