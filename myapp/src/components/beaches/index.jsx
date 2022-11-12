import "./index.css"
import Beach1 from "./asset/karachibeach.jpg"
import Beach2 from "./asset/gawadar.jpg"
import Beach3 from "./asset/somiani.jpg"
import Beach4 from "./asset/mubarak.jpg"

const Beaches = () => {
    return (
        <div>
            <div>
                <h1 className="beachheading">
                    Beautiful Beaches In Pakistan
                </h1>

                <div className="beachimg">
                    <p className="beachname">
                        <img src={Beach1} alt="" /> <br />
                         <span>Karachi</span>
                    </p>

                    <p className="beachname">
                        <img src={Beach2} alt="" /> <br />
                       <span> Gwadar</span>
                    </p>

                    <p className="beachname">
                        <img src={Beach3} alt="" />
                        <br />
                     <span>   Somiani</span>
                    </p>
                    <p className="beachname">
                        <img src={Beach4} alt="" /> <br />
                       <span>Mubarak</span>
                    </p>


                </div>
            </div>

        </div>
    )
}

export default Beaches;