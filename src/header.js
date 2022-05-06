import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

const [imgNavHead,chgImgNavHead] = useState("amogusNoBG.png")

function changeAmogus(){
    chgImgNavHead("amogusDead.png")
}
function amogusAlive(){
    chgImgNavHead("amogusNoBG.png")
}
  return (
    <div className="headerDiv">
      <header className="header-container card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
          <Link to="/" class="nav-link navName" onMouseEnter={changeAmogus} onMouseLeave={amogusAlive}><img src={imgNavHead}></img>
              Lim Zheng Qian</Link>
          </li>
          <li class="nav-item">
          <Link to="/project" className="nav-link">Projects</Link>
          </li>
          <li class="nav-item">
          <Link to="/posts" className="nav-link">Posts</Link>
          </li>
          <a className="nav-link" href="LimZhengQian_Internship.pdf" target="_blank">Resume</a>
        </ul>
      </header>
    </div>
  );
}
