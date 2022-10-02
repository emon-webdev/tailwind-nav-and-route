import './App.css';
import AssignmentChat from './components/AssignmentChat';
import NavBar from './components/NavBar';
import PhoneBar from './components/PhoneBar';
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      <NavBar />
      <Pricing />
      <AssignmentChat/>
      <PhoneBar/>
    </div>
  );
}

export default App;
