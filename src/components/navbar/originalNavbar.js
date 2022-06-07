import React from "react";
import avatar from "../../assets/images/group.png";
import home from "../../assets/images/home.png";
import profile from "../../assets/images/user.png";
import settings from "../../assets/images/settings.png";
import logout from "../../assets/images/power.png";
import dashboard from "../../assets/images/dashboard.png";
import { useMediaQuery } from "react-responsive";
import add from "../../assets/images/add.png";

function OriginalNavbar() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <div className="mx-auto lg:w-1/2 lg:inset-x-0 sm:inset-x-24 grid space-x-2 grid-cols-7 my-4 fixed">
      <a href="/newpost">
        <div className="h-20 w-20">
          <img
            className="h-16 w-16 hover:-mx-2 hover:h-20 hover:w-20"
            src={add}
          />
        </div>
      </a>
      <a href="/dashboard">
        <div className="h-20 w-20">
          <img
            className="h-16 w-16 hover:-mx-2 hover:h-20 hover:w-20"
            src={dashboard}
          />
        </div>
      </a>
      <a href="/allplayers">
        <div className="h-20 w-20">
          <img
            className="h-16 w-16 hover:-mx-2 hover:h-20 hover:w-20"
            src={avatar}
          />
        </div>
      </a>
      <a href="/">
        <div className="h-20 w-20">
          <img
            className="h-16 w-16 hover:-mx-2 hover:h-20 hover:w-20"
            src={home}
          />
        </div>
      </a>
      <a href="/profile">
        <div className="h-20 w-20">
          <img
            className="h-16 w-16 hover:-mx-2 hover:h-20 hover:w-20"
            src={profile}
          />
        </div>
      </a>
      <a href="/settings">
        <div className="h-20 w-20">
          <img
            className="h-16 w-16 hover:-mx-2 hover:h-20 hover:w-20"
            src={settings}
          />
        </div>
      </a>
      <a href="/logout">
        <div className="h-20 w-20">
          <img
            className="h-16 w-16 hover:-mx-2 hover:h-20 hover:w-20"
            src={logout}
          />
        </div>
      </a>
    </div>
  );
}

export default OriginalNavbar;
