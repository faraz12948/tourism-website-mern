import React from 'react';
import { useForm } from 'react-hook-form';



const AddService = () => {


    
  

    
   


                const { register,reset, handleSubmit, formState: { errors } } = useForm();
                
                const onSubmit = data => {
                    // console.log(data)
                    
                    fetch('https://ghostly-castle-72423.herokuapp.com/services',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json',
                
                        },
                        body:JSON.stringify(data)
                        
                
                    })
                    .then(res=>res.json())
                    .then(result=>{
                        console.log(result)
                        alert("service added")
                        reset()
                    })
                };
            





    return (
        <div className='container ' style={{marginTop:'110px'}}>
          <div className='form-parent mt-5 p-5 rounded-3'>


          <form className="form" onSubmit={handleSubmit(onSubmit)}>

        
       
<input required placeholder="Service Name" defaultValue="" {...register("name")} />
<input required placeholder="Description" defaultValue="" {...register("description")} />
<input required placeholder="Image URL" defaultValue="" {...register("img")} />

<input type="submit" value="add" style={{backgroundColor:'goldenrod', color:'white', border:'1px solid grey',fontWeight:'bold'}}  />
</form>






          </div>
            
    
        
        
    </div>
    );
};

export default AddService;