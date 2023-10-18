import customer from '../customers.png'
function Customers(){
    return (
        <div className="customers">
            <header>Customers</header>
            <dl>Customers that buy products</dl>
            <img src={customer} alt="" />
        </div>
    )
};

export default Customers;