import React from 'react'
import { Link } from 'react-router-dom'
import { Formik,Field,Form } from 'formik'
import { useAddbranchesMutation } from '../services/schoolApi'
function Addbranch() {
  var [addfn]=useAddbranchesMutation();
  var  initialValues=

  {   branchname:"",
     principalname:"",
     principalphonenumber:"",
     image:""
 }
  var onSubmit= (values)=>{
    console.log(values);
    addfn(values).then((res=>{
      console.log(res)
    }))
}
  return (
    <div>
      <div>
         <div>
      <h1>add</h1>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>

                 <center className='mt-5'>
                <div  style={{height:"600px",width:"300px",backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
                <center>
                <Form >
                  <Field className="w-75 mt-5" name="branchname">  
                  </Field>
                  <br/><h2 className='text-warning w-100'>Branch Name</h2>
                  <Field className="w-75" name="principalname"> 
                  </Field>
                  <br/><h2 className='text-warning w-100'>Principle Nmae</h2>
                  <br/>
                  <Field className="w-" name="principalphonenumber"> 
                  </Field>
                  <br/><h2 className='text-warning w-100'>Principle Phone Number</h2>
                  <br/>
                  <Field className="w-" name="image"> 
                  </Field>
                  <br/><h2 className='text-warning w-100'>Image</h2>
                  <br/>
                  <button>onsubmit</button>
                </Form>
                </center>
                </div>
                </center>
                </Formik>
              </div>
      </div>
    </div>
  )
}

export default Addbranch
