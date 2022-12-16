import React from "react";
import White_Globe_Icon from "../images/White_Globe_Icon.png"

function Header(){
    return(
        <header className='header'>
            <div className="earth-holder">
                <img className="earth" src={White_Globe_Icon} alt='Earth Icon' />
            </div>
            <h3 className="title">My travel journal</h3>
        </header>
    );
}

export default Header;