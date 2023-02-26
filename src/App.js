import './App.css';
import DarkMode from './components/DarkMode/DarkMode';
import AllTasks from './pages/AllTasks';

function App() {
  return (
    <div className="App">
     <h1>State Lifting</h1>
    <AllTasks></AllTasks>
   <DarkMode></DarkMode>
    </div>
  );
}

export default App;
