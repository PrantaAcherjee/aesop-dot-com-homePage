import './App.css';
import One from './Components/HomePage/Footer/One';
import Two from './Components/HomePage/Footer/Two';
import Header from './Components/HomePage/Navbar/Header';
import Navbar from './Components/HomePage/Navbar/Navbar';

function App() {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        {/* foter */}
        <One></One>
        <Two></Two>
    </div>
  );
}

export default App;
