import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Douglas Mogoba</span>
        <span className="headerTitleLg">Life in Tech Industry</span>
      </div>
      <img
        className="headerImg"
        src="https://www.douglasmogoba.com/assets/man.jpg"
        alt=""
      />
    </div>
  );
}
