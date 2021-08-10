import { ReactComponent as Workouts } from '../img/workout.svg';
import { ReactComponent as Recipes } from '../img/breakfast.svg';
import { ReactComponent as Water } from '../img/water-bottle.svg';
import chart from '../img/chart2.png';
import '../styles/main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="chart">
        <img src={chart} alt="" />
      </div>

      <div className="cards">
        <div className="card">
          <Workouts className="card-image" />
          Workouts
        </div>
        <div className="card">
          <Recipes className="card-image" />
          Food Recipes
        </div>
        <div className="card">
          <Water className="card-image" />
          Water
        </div>
      </div>
    </div>
  )
}

export default Main
