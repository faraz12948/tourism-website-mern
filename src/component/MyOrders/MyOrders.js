import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Showorders from '../Showorders/Showorders';

const MyOrders = () => {


    const [myOrders,setMyOrders] = useState([])
    
    const { user } = useAuth();
    // const [showBtn,setShowBtn] = useState(false)
    const showBtn = false;

    



   
    useEffect(()=>{
        fetch('https://ghostly-castle-72423.herokuapp.com/orders/manageall')
        .then(res=>res.json())
        .then(data=>setMyOrders(data))

    },[])

    const check = myOrders.filter(myOrder=>myOrder.email==user.email)





    const handleDelete = (_id) =>{
        const proceed = window.confirm("Are you sure You want to delete ? ");
        if (proceed) {
  
          const url = `https://ghostly-castle-72423.herokuapp.com/order/delete/${_id}`
          fetch(url,{
              method : 'DELETE',
              
    
          })
          .then(res=>res.json())
          .then(data=>{
              
            if (data.deletedCount > 0) {
              alert("Deleted SuccessFully");
              const remainingUsers = myOrders.filter((user) => user._id !== _id);
              setMyOrders(remainingUsers);
            }
                  
              
          })
  
  
  
  
        }
  
       
        
          
      }



    
    
    








    return (
        <div className='container' style={{marginTop:'110px'}}>
            
                {
                    check?.map(order=><Showorders key={order._id} order={order} handleDelete={handleDelete} showBtn={showBtn}></Showorders>)
                }
            
            
        </div>
    );
};

export default MyOrders;