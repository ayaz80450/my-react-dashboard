import earning from '../earning.png';
import orders from '../orders.png';
import balance from '../balance.png';
import totalSales from '../totalsales.png';
function Carddata({data, img}){
    return (
        <div className="card">
            <img src={img} className="image" alt='Card-Logo'/>
            <div className="data">
                <div className="name">{data.name}</div>
                <div className="cost">{data.cost}</div>
                <div className="growth">{data.growth}&#37; this {data.growthPeriod}</div>
            </div>
        </div>
    )
}
function Cards(){
    let cardsData = [
        { name: "Earning", cost: "$198k", growth: 37.8, growthPeriod: "month" },
        { name: "Orders", cost: "$2.4k", growth: -2, growthPeriod: "month"},
        { name: "Balance", cost: "$2.4k", growth: -2, growthPeriod: "month"},
        { name: "Total Sales", cost: "$89k", growth: 11, growthPeriod: "week"}
    ]
    let images = [earning, orders, balance, totalSales]
    return (
        <div className="cards">
            {cardsData.map((cardData, index)  => 
                <Carddata data={cardData} img={images[index]}></Carddata>
            )}
        </div>
    )
}

export default Cards;
