import React from "react";
import home from "../../assets/images/home.png"
import avatar from "../../assets/images/avatar.png"
import category from "../../assets/images/category.png";
import profile from "../../assets/images/profile.png";
import setting from "../../assets/images/setting.png";
import logout from "../../assets/images/logout.png"

function OriginalNavbar(){
    return (
        <div style={{marginLeft : "0%"}} className="grid grid-rows-6 md:my-44 fixed my:0">
            <a href=""><img className="h-16 w-16" src={home}/></a>
            <a href=""><img className="h-16 w-16" src={avatar}/></a>
            <a href=""><img className="h-16 w-16" src={category}/></a>
            <a href=""><img className="h-16 w-16" src={profile}/></a>
            <a href=""><img className="h-16 w-16" src={setting}/></a>
            <a href=""><img className="h-16 w-16" src={logout}/></a>
        </div>
    )
}

export default OriginalNavbar;