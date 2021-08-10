import { ReactComponent as Water } from '../img/water_bar.svg';
import { ReactComponent as Calories } from '../img/calorie_bar.svg';
import { ReactComponent as Burnt } from '../img/burnt_bar.svg';
import { ReactComponent as WaterDrops } from '../img/water_drops.svg';
import { ReactComponent as Broccoli } from '../img/broccoli.svg';
import { ReactComponent as Flame } from '../img/flame.svg';

const PercentageBars = () => {
  return (
    <div className="graph">
      <div>
        <div className="graph-header">
          <WaterDrops />
          Water
          <div className="percentage blue">
            50%
          </div>
        </div>
        <Water />
      </div>

      <div>
        <div className="graph-header">
          <Broccoli />
          Calories
          <div className="percentage green">
            60%
          </div>
        </div>
        <Calories />
      </div>

      <div>
        <div className="graph-header">
          <Flame />
          Burnt calories
          <div className="percentage red">
            60%
          </div>
        </div>
        <Burnt />
      </div>
    </div>
  )
}

export default PercentageBars
