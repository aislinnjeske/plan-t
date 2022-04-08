import Plant from './Plant.js'
import GridLayout from "react-grid-layout";
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'


function Plot(props) {
    return (
        <div>
            <GridLayout
            className="layout"
            isResizable={false}
            autoSize={false}
            allowOverlap={false}
            margin={[0,0]}
            layout={props.plants}
            cols={6}
            rowHeight={50}
            width={300}
            >
                {
                    props.plants.map(p => 
                        <div key={p.i} className={'plotItem'}>
                            <Plant picture={p.picture}/>
                        </div>
                    )
                }
            </GridLayout>

        </div> 
    );
  }

export default Plot;