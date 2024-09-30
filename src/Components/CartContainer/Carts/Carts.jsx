
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import './Carts.css'


const Carts = ({handleButton}) => {
    const [carts, setCarts] = useState([])
   useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []) 
    return (
        <div className="flex justify-between items-center w-[50%] mx-auto">
            <div className="flex-1 carts grid lg:grid-cols-2 grid-cols-1">
                {
                    carts.map((item, idx) => <Cart key={idx}
                        handleButton={handleButton}
                        item={item}></Cart>)
                }
            </div>
            {/* left cart */}



        </div>

    );
};

export default Carts;