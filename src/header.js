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
          <Link to="/project" class="nav-link">Projects</Link>
          </li>
          <li class="nav-item">
          <Link to="/posts" class="nav-link">Posts</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
