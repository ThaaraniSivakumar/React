import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ContactForm = () => {
    const schema=yup.object().shape({
        name:yup.string().required("Enter name"),
        email:yup.string().required("Enter Email").email("Invalid format"),
        phoneNumber:yup.string().required("Enter Phone Number").max(10,"Max should be 10 numbers"),
        message:yup.string().required("Enter any message")
    })
    const{register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=(data)=>{
        console.log(data)
        alert("Contact Form Sumitted")
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <inputt type="text" {...register("name")} ></inputt>
      {errors.name && <p>{errors.name.message}</p>}
      <iput type="email" {...register("email")}></iput>
            {errors.name && <p>{errors.name.message}</p>}
      <input {...register("phoneNumber")}></input>
            {errors.name && <p>{errors.name.message}</p>}
      <input type="text" {...register("message")}></input>
            {errors.name && <p>{errors.name.message}</p>}
     <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default ContactForm
