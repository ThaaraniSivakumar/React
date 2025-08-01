import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const AddressForm = () => {
  
  const schema=yup.object().shape({
    name:yup.string().required("Enter name"),
    email:yup.string().required("Enter email").email("Invalid email"),
    country:yup.string().required("select any place"),
    pincode:yup.string().required("Enter pincode").max(6,"Enter 6 numbers").min(6,"Enter 6 numbers")
  })
 
  const {register,handleSubmit,formState:{errors},reset}=useForm({resolver:yupResolver(schema)});
  console.log("Rendered")
  const onSubmit=(data)=>{
    console.log(data);
    reset();
  }

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")}></input><br></br>
      {errors.name && <p>{errors.name.message}</p>}
      <input type="email" {...register("email")}></input><br></br>
            {errors.email && <p>{errors.email.message}</p>}
      <select {...register("country")}>
        <option value="">---Choose place---</option>
        <option value="chennai">Chennai</option>
        <option value="cbe" >Cbe</option>
        <option value="Trichy">Trichy</option>
      </select><br></br>
            {errors.country && <p>{errors.country.message}</p>}
      <input {...register("pincode")}></input><br></br>
            {errors.pincode && <p>{errors.pincode.message}</p>}
            <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default AddressForm
