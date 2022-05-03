import { useEffect, useState } from "react";

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
            <a class="nav-link navName" href="#" onMouseEnter={changeAmogus} onMouseLeave={amogusAlive}>
                <img src={imgNavHead}></img>
              Lim Zheng Qian
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Posts</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
