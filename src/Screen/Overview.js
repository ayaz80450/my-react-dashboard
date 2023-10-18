function Bar({month}){
    return (
        <div className="month">
            <div className="bar"></div>
            <div className="name">{month}</div>
        </div>
    )
}
function Overview(){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return (
        <div className="overview">
            <div className="header">
                <header>Overview</header>
                <p>Monthly Earning</p>
            </div>
            <div className="timeframe">Quarterly</div>
            <div className="earning">
                {months.map(month => (
                    <Bar month={month}/>
                ))}
            </div>
        </div>
    )
}

export default Overview;