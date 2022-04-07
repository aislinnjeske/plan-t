import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'

function Plant(props) {
    return (
        <img src={props.picture} alt="plant"></img>
    );
  }

export default Plant;