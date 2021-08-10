import { ReactComponent as Home } from '../img/home.svg';
import { ReactComponent as Today } from '../img/today_icon.svg';
import { ReactComponent as Avatar } from '../img/avatar_icon.svg';
import { ReactComponent as Friends } from '../img/friends_icon.svg';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav-items">
        <div className="home">
          <Home style={{ width: "35px" }} />
        </div>
        <Today style={{ width: "25px" }} />
        <Avatar style={{ width: "25px" }} />
        <Friends style={{ width: "30px" }} />
      </div>
    </div>
  )
}

export default Navbar;
