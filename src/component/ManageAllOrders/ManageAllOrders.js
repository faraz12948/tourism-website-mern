import React, { useEffect, useState } from 'react';
import useOrder from '../../hooks/useOrder';
import Showorders from '../Showorders/Showorders';


const ManageAllOrders = () => {
   
    // console.log("all order",cart)

    const [allOrders,setAllOrders] = useOrder();
    const [isStatus,setIsStatus]= useState(true);
    // const [showBtn,setShowBtn] = useState(true)
    const showBtn = true;

    // console.log(allOrders)
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
              const remainingUsers = allOrders.filter((user) => user._id !== _id);
              setAllOrders(remainingUsers);
            }
                  
              
          })
  
  
  
  
        }
  
       
        
          
      }






      // handleStatus here



      const handleStatus = (_id) =>{
      
        // setStatus(true);
        const url = `https://ghostly-castle-72423.herokuapp.com/status/${_id}`
        fetch(url,{
            method : 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({isStatus})
  
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                
                alert("sure want to approve?")
                const remainingUsers = allOrders.filter((user) => user._id !== _id);
                const upDatedUser = allOrders.find((order) => order._id === _id)
                upDatedUser.status=true
                setAllOrders([...remainingUsers,upDatedUser]);
               
            }
        })
  
       
       
  
  
  
  
  
  
  
  
      }









    return (
        <div className='container' style={{marginTop:'110px'}}>
            {


                    allOrders?.map(orders=><Showorders key={orders._id} order={orders} handleStatus={handleStatus} handleDelete={handleDelete} showBtn={showBtn} ></Showorders>)
                   





            }
        </div>
    );
};

export default ManageAllOrders;