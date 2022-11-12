import "./index.css"
import Biryani from "./asset/biryani.jpg"
import Daleem from "./asset/daleem.jpg"
import Kabab from "./asset/kabab.jpg"
import Samosa from "./asset/samosa.jpg"


const Food= ()=>{
    return(
        <div>
             <div>
                <h1 className="foodheading">
                    Food In Pakistan
                </h1>

                <div className="foodimg">
                    <p className="foodname">
                        <img src={Biryani} alt="" /> <br />
                         <span>Biryani</span>
                    </p>

                    <p className="foodname">
                        <img src={Daleem} alt="" /> <br />
                       <span> Daleem</span>
                    </p>

                    <p className="foodname">
                        <img src={Kabab} alt="" />
                        <br />
                     <span>  kabab</span>
                    </p>
                    <p className="foodname">
                        <img src={Samosa} alt="" /> <br />
                       <span>Samosa</span>
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Food;