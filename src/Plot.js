import Plant from './Plant.js'


function Plot(props) {
    return (
        <div>
            {
                props.plants.map(p => 
                    <Plant name={p.name} space={p.space} picture={p.picture}/>
                )
            }

        </div> 
    );
  }

export default Plot;