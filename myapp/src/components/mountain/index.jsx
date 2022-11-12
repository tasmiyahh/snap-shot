import "./index.css"
import K2 from "./asset/k22.jpg"
import Nangaparbat from "./asset/nangaparbat.jpg"
import Rakaposhi from "./asset/rakaposhi.jpg"
import Takhtesuleman from "./asset/takhtesuleman.jpg"


const Mountain = ()=>{
    return(
        <div>
               <div>
                <h1 className="mountainheading">
                    Beautiful Beaches In Pakistan
                </h1>

                <div className="mountainimg">
                    <p className="mountainname">
                        <img src={K2} alt="" /> <br />
                         <span>k2</span>
                    </p>

                    <p className="mountainname">
                        <img src={Nangaparbat} alt="" /> <br />
                       <span> Nanga Parbat</span>
                    </p>

                    <p className="mountainname">
                        <img src={Rakaposhi} alt="" />
                        <br />
                     <span>   Rakaposhi</span>
                    </p>
                    <p className="mountainname">
                        <img src={Takhtesuleman} alt="" /> <br />
                       <span>Takht-e-suleman</span>
                    </p>


                </div>
            </div>
 
        </div>
    )
}

export default Mountain;