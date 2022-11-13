import meme_img from "../images/meme-image.jpeg";

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="heading">
          <img className="hdr-img" src={meme_img} />
          <h3 className="name">Meme Generator</h3>
        </div>
        <h3 className="name">React Course - Project 3</h3>
      </nav>
    </div>
  );
};

export default Header;
