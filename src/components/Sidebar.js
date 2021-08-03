import avatar from '../img/Piotrus.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="Piotruś" className="circle" />
    </div>
  )
}

export default Sidebar
