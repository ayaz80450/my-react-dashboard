import Cards from "./Screen/Cards";
import Overview from "./Screen/Overview";
import Customers from "./Screen/Customers";
function Screen(){
    let style = {display: "grid", alignItems: "start", gridTemplateColumns: "5fr 2fr"}
    return (
        <div className="screen">
          <div className="top">
            <div className="greet">Hello Shahrukh!&#128075;</div>
            <form action="">
                <input type="text" className="search" placeholder="search" />
            </form>
          </div>
          <Cards></Cards>
          <div style = {style}>
            <Overview></Overview>
            <Customers></Customers>
          </div>
        </div>
    )
}

export default Screen;