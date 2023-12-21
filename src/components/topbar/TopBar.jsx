import "./TopBar.css";
import { Search, Person, Notifications, Chat } from "@material-ui/icons";
function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topBarLeft">
        <span className="logo">Lama social</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="search for friends ,posts ,video"
            name=""
            id=""
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbaricons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src={"/assets/person/1.jpeg"} alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default TopBar;
