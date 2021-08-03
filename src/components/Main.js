import { ReactComponent as Workouts } from '../img/workout.svg';
import { ReactComponent as Recipes } from '../img/breakfast.svg';
import { ReactComponent as Water } from '../img/water-bottle.svg';
import chart from '../img/chart2.png';

const Main = () => {
  return (
    <div className="main">
      <div className="chart">
        <img src={chart} alt="" />
      </div>
      <div className="cards">
        <div className="card"> </div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  )
}

export default Main
