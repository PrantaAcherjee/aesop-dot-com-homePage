import './App.css';
import Description from './Components/HomePage/Description/Description';
import One from './Components/HomePage/Footer/One';
import Two from './Components/HomePage/Footer/Two';
import Header from './Components/HomePage/Navbar/Header';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Products from './Components/HomePage/Products/Products';
import Carosel from './Components/HomePage/Carosel/Carosel';

function App() {
  return (
    <div>
      {/* nav bar  */}
        <Header></Header>
        <Navbar></Navbar>
        {/* body part  */}
        <Products></Products>
        <Description></Description>
        <Carosel></Carosel>
        {/* foter */}
        <One></One>
        <Two></Two>
        
    </div>
  );
}

export default App;
