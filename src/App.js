import './App.css';
import Plot from './Plot.js'
import Plant from './Plant.js'
import broccoliPic from './public/broccoli.png'
import tomatoPic from './public/tomato.png'

function App() {

  let plants = [
    {
      "name":"broccoli",
      "space":"12",
      "color":"green",
      "picture":broccoliPic
    },
    {
      "name":"cherry tomato",
      "space":"8",
      "color":"red",
      "picture":tomatoPic
    }
  ]
  
  return (
    <div>
      <Plot plants={plants}/>
    </div>
  );

}

export default App;
