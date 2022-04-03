import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="flex h-screen">

            <div className={"m-auto text-3xl font-semibold text-center"}>
                Welcome to <span className={"font-extrabold text-5xl"}>GamIO</span>
                <br/>
                {/*<Link to={"/explore"}>*/}
                {/*    <button className={"bg-slate-900 my-4 py-2 px-4 rounded-md text-white"}><span className={""}>Explore GamIO</span>*/}
                {/*    </button>*/}
                {/*</Link>*/}
                <div className={"text-center animate-pulse text-blue-900 text-xl font-light py-12"}>
                    Home of the gamers.....
                </div>
                <div className={"text-center text-xl"}>
                    <Link to={"/login"}>
                        <button className={"bg-slate-900 py-2 px-4 rounded-md text-white mx-4"}>Login</button>
                    </Link>

                </div>
            </div>

        </div>
    );
}

export default Home;