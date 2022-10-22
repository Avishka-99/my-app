import './CSS/dashboard.css';
import './App.css';
import Menuitems from "./Components/Menuitems"

function App() {
  const arr = ["Settings","Add"]
  return (
    
    <div className="App">
      <div className='sideBar'>
        <div className='userIcon'>
        </div>{arr.map((item)=>(<Menuitems name={item}/>))}
      </div>
      <div className='content'></div>
    </div>
  );
}

export default App;
