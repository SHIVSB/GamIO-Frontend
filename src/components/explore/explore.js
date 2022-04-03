import React from "react";
import {Link} from "react-router-dom";

function Explore() {
    return (
        <div className={""}>
            <div className={"text-center text-2xl font-semibold py-4 border-b-2 border-black"}>
                <Link to={"/"}>
                    <button className={"font-light bg-slate-600 py-2 px-4 rounded-lg text-white mx-4 text-xl"}>Back to
                        Homepage
                    </button>
                </Link>
                <span className={"py-1 px-4 border-2 border-slate-600 rounded-lg"}>
                    What
                is GamIO ?
                </span>
            </div>
            <div className={"text-center py-8"}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting,
                remaining essentially unchanged.
            </div>
        </div>
    );
}

export default Explore;