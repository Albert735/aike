// import React from 'react'
import cart from "../../assets/icons/icons8-cart-100.png";
import like from "../../assets/icons/icons8-like-100.png";
import account from "../../assets/icons/icons8-person-100.png";

function ActionIcons() {
  return (
    <div className="ActionIcons">
      <ul className="flex justify-center items-center gap-7">
        <li>
          <img src={cart} alt="" className="h-7 w-7" />
        </li>
        <li>
          <img src={like} alt="" className="h-7 w-7" />
        </li>
        <li>
          <img src={account} alt="" className="h-7 w-7" />
        </li>
      </ul>
    </div>
  );
}

export default ActionIcons;
