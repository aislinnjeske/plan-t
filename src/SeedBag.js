import React from 'react'
import Plant from './Plant.js'
import {DragDropContext,Droppable} from 'react-beautiful-dnd'

function SeedBag(props) {
    const { provided, innerRef, children } = props;

    return (
        <div
            {...provided.droppableProps}
            ref={innerRef}
        >
            {children}
        </div>
        // <div>
        //     {
        //         props.seeds.map((p, index) => 
        //             <Droppable droppableId="seedBag" className='seedBag'>
        //                 {(provided) => (
        //                     <div key={p.i}>
        //                         <Plant 
        //                         provided={provided}
        //                         id={p.i}
        //                         picture={p.picture} 
        //                         index={index} 
        //                         {...provided.droppableProps} 
        //                         ref={innerRef}/>
        //                         {/* {provided.placeholder} */}
        //                     </div>


        //                 )}
        //             </Droppable>
        //         )
        //     }
        // </div>
    );
  }

export default SeedBag;

// class List extends React.Component {
//     render() {
//       const { provided, innerRef, children } = this.props;
//       return (
//         <div {...provided.droppableProps} ref={innerRef}>
//           {children}
//         </div>
//       );
//     }
//   }