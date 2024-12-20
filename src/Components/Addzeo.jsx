import React from 'react'
import { Formik,Form,Field } from 'formik'
import { useAddzeoMutation } from '../services/schoolApi'
function Addzeo() {
  var [addzeofn]=useAddzeoMutation()
  var initialValues={
       zeoname:"",
        mobiles:"",
        branches:""
   }
   var onSubmit=(values)=>{
       console.log(values)
       addzeofn(values).then((res)=>{
        console.log(res)
       })
   }
  return (
    <div>
      <h1>add zeo</h1>
     <div>
                     <Formik initialValues={initialValues} onSubmit={onSubmit}>
                           <center className='mt-5'>
                     <div  style={{height:"600px",width:"300px",backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
                     <center>
                     <Form >
                       <Field className="w-75 mt-5" name="zeoname">  
                       </Field>
                       <br/><h2 className='text-warning w-50'>officer name</h2>
                       <Field className="w-75" name="mobiles"> 
                       </Field>
                       <br/><h2 className='text-warning w-50'>mobile number</h2>
                       <br/>
                       <Field className="w-75" name="branches"> 
                       </Field>
                       <br/><h2 className='text-warning w-50'>Branches</h2>
                       <br/>
                       <button className='bg-primary'>onsubmit</button>
                     </Form>
                     </center>
                     </div>
                     </center>
                     </Formik>
                   </div>
    </div>
  )
}

export default Addzeo
