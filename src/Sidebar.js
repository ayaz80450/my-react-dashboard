
function Sidebar(){
    let menu = ["Dashboard", "Product", "Customers", "Income", "Promote", "Help"];
    return (
        <div className="sidebar">
            <div className="header">
            <header>Dashboard</header>
            </div>

            <ul className="menu">
                {menu.map(option => 
                    (
                        <div className="option">
                            <li>{option}</li>
                        </div>
                    )
                 )}
            </ul>
        </div>
    )
}

export default Sidebar;