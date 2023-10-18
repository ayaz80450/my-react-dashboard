// import logo from './logo.svg';
import Sidebar from './Sidebar';
import Screen from './Screen';
import './App.css';

function App() {
  let imageSize = {
    display: "inline-block",
    background: "url(./Assignment.png)",
    width: "1354px",
    height: "650px"
  }
  return (
    <div className="Apps">
      <image style={imageSize} alt="not accessible"></image>


      <div className="App">
        <Sidebar/>
        <Screen/>
      </div>
    </div>
  );
}

export default App;