import { useEffect, useState } from "react";

const useOrder = ()=>{

    const [allOrders,setAllOrders] = useState([]);
    const [isStatus,setIsStatus]= useState(false);
    
    useEffect(()=>{
        fetch('https://ghostly-castle-72423.herokuapp.com/orders/manageall')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))

    },[])




    return [
        allOrders,
        setAllOrders,
        isStatus,
        setIsStatus,
        
    ]

}
export default useOrder;