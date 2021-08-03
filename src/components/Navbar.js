import { ReactComponent as Home } from '../img/home.svg';
import { ReactComponent as Today } from '../img/today_icon.svg';
import { ReactComponent as Avatar } from '../img/avatar_icon.svg';
import { ReactComponent as Friends } from '../img/friends_icon.svg';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav-items">
        <div className="home">
          <Home />
        </div>
        <Today />
        <Avatar />
        <Friends />
      </div>
    </div>
  )
}

export default Navbar;
