import logo from './logo.svg';
import './App.css';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails
        name="React JS Essentials"
        trainer="John "
        duration="6 weeks"
        status="ongoing"
      />
      <CohortDetails
        name="Java Spring Boot"
        trainer="Smith"
        duration="8 weeks"
        status="completed"
      />
    </div>
  );
}

export default App;
