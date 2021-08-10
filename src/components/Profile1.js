import '../styles/profiles.css';
import { ReactComponent as Arrow } from '../img/arrow.svg';
import { ReactComponent as Arrow2 } from '../img/arrow2.svg';
import PercentageBars from './PercentageBars';

export const Profile1 = () => {
  return (
    <div className="profile1">
      <div className="side"></div>

      <div className="container">
        <div className="header">
          Name Lastname
          <div className="circle"></div>
          <Arrow className="arrow" />
        </div>
        <div className="description">
          <header>Update Your Profile</header>
          <div className="text">
            You can add or calculate your calorie
            goals, water intake and sth else
          </div>
          <Arrow2 />
        </div>
        <PercentageBars />
      </div>
    </div>
  )
}
