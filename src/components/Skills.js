import React from 'react'
import '../App.css';

const Skills = () => {
  return (
    
    <div className='skill'>

      <section>

      <h2>Skills</h2>
      
      <div className='container mt-4'>

     <div className='row'>

      <div className='col-lg 6'>
        

     <h4 class="course">HTML</h4>   
     <div class="progress">
        
     
    <div class="progress-bar" role="progressbar" aria-valuenow="50"  style={{width: "90%"}} aria-valuemin="0" 
    aria-valuemax="100"></div>

   <span>90%</span> 
   
     
    
    </div>  

    <br/>

    <h4 class="course">CSS</h4> 
    <div class="progress">

     <div class="progress-bar" role="progressbar" aria-valuenow="50"  style={{width: "75%"}} aria-valuemin="0" 
    aria-valuemax="100"></div>

<span>75%</span> 

       </div>  

    

   </div>

       
 <div className='col-md 6'>

 
       


      </div>


     </div>


      </div>



      </section>


         
      
      </div>

     
  )
}

export default Skills