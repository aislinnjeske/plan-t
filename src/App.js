import './App.css';
import Plot from './Plot.js'
import broccoliPic from './public/broccoli.png'
import tomatoPic from './public/tomato.png'
import blueberryPic from './public/blueberries.png'
import cauliflowerPic from './public/cauliflower.png'
import eggplantPic from './public/eggplant.png'

function App() {

  let availablePlants = [
    {
      "i":"cauliflower",
      "x":0,
      "y":0,
      "w":1,
      "h":1,
      "picture":cauliflowerPic
    },
    {
      "i":"cherry tomato",
      "x":5,
      "y":5,
      "w":1,
      "h":1,
      "picture":tomatoPic
    },
    {
        "i":"blueberry",
        "x":0,
        "y":5,
        "w":1,
        "h":1,
        "picture":blueberryPic
      },
      {
        "i":"eggplant",
        "x":0,
        "y":4,
        "w":1,
        "h":1,
        "picture":eggplantPic
      }
  ]

  
  return (
    <div>
      <Plot plants={availablePlants}/>
    </div>
  );



}

export default App;
