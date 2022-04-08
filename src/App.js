import './App.css';
import Plot from './Plot.js'
import Plant from './Plant.js'
import SeedBag from './SeedBag.js'
import broccoliPic from './public/broccoli.png'
import tomatoPic from './public/tomato.png'
import blueberryPic from './public/blueberries.png'
import cauliflowerPic from './public/cauliflower.png'
import eggplantPic from './public/eggplant.png'
import jalapenoPic from './public/jalapeno.png'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {
  let data = {
    plot: [
      {
        "i":"broccoli",
        "id":"b",
        "x":0,
        "y":0,
        "w":1,
        "h":1,
        "picture":broccoliPic
      },
      {
        "i":"jalapeno",
        "id":"j",
        "x":1,
        "y":1,
        "w":1,
        "h":1,
        "picture":jalapenoPic
      }
    ],
    seedBag: [
      {
        "i":"cauliflower",
        "id":"c",
        "x":0,
        "y":0,
        "w":1,
        "h":1,
        "picture":cauliflowerPic
      },
      {
        "i":"cherry tomato",
        "id":"ct",
        "x":5,
        "y":5,
        "w":2,
        "h":2,
        "picture":tomatoPic
      },
      {
          "i":"blueberry",
          "id":"bl",
          "x":0,
          "y":5,
          "w":1,
          "h":1,
          "picture":blueberryPic
        },
        {
          "i":"eggplant",
          "id":"e",
          "x":0,
          "y":4,
          "w":1,
          "h":1,
          "picture":eggplantPic
        }
    ]
  }

  const onDragEnd = (result) => {
    console.log(result);
    if(result.source.droppableId === result.destination.droppableId){
      data[result.destination.droppableId] = reorder(
        data[result.destination.droppableId],
        result.source.index,
        result.destination.index
      );
    } else {
      moveToList(data[result.source.droppableId], data[result.destination.droppableId], result.source.index, result.destination.index);
    }
  }

  const moveToList = (source, destination, startIndex, endIndex) => {
    const [removed] = source.splice(startIndex, 1);
    destination.splice(endIndex, 0, removed);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  return (
    <div className="list">
      <DragDropContext onDragEnd={onDragEnd}>
        {/* <Plot plants={availablePlants}/> */}
        <Droppable droppableId="plot" className="list">
          {(provided) => (
            <SeedBag provided={provided} innerRef={provided.innerRef}>
              {
                data["plot"].map((plant,index) =>
                  <Draggable key={plant.id} draggableId={plant.i} index={index}>
                    {(provided) => (
                      <Plant  provided={provided} innerRef={provided.innerRef} picture={plant.picture}></Plant>
                    )}
                  </Draggable>
                )
              }
              {provided.placeholder}
            </SeedBag>
          )}
        </Droppable>
        <Droppable droppableId="seedBag" className="list">
          {(provided) => (
            <SeedBag provided={provided} innerRef={provided.innerRef}>
              {
                data["seedBag"].map((plant,index) =>
                  <Draggable key={plant.id} draggableId={plant.i} index={index}>
                    {(provided) => (
                      <Plant provided={provided} innerRef={provided.innerRef} picture={plant.picture}></Plant>
                    )}
                  </Draggable>
                )
              }
              {provided.placeholder}
            </SeedBag>
          )}
        </Droppable>
        {/* <SeedBag seeds={availablePlants}/> */}
      </DragDropContext>
    </div>
  );
}

export default App;