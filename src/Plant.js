import React from 'react'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import {Draggable} from 'react-beautiful-dnd'

function Plant(props) {
    const { provided, innerRef } = props;

    return (
        <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}
        >
            <img src={props.picture}></img>
        </div>

        // <Draggable draggableId={props.id} index={props.index}>
        //     {(provided) => (
        //         <img 
        //         src={props.picture} 
        //         alt={props.i} 
        //         {...provided.draggableProps} 
        //         {...provided.dragHandleProps}
        //         ref={innerRef}>
        //         </img>
        //     )}
        // </Draggable>
    );
  }

export default Plant;

// class Person extends React.Component {
//     render() {
//       const { provided, innerRef } = this.props;
//       return (
//         <div
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={innerRef}
//         >
//           'I am a person, I think..'
//         </div>
//       );
//     }
//   }