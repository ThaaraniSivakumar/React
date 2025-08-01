import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ContactForm = () => {
    const schema=yup.object().shape({
        name:yup.string().required("Enter name"),
        email:yup.string().required("Enter Email").email("Invalid format"),
        phoneNumber:yup.string().required("Enter Phone Number").max(10,"Max should be 10 numbers"),
        Message:yup.string().required("Enter any message")
    })
    const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const onSubmit=(data)=>{
        console.log(data)
        alert("Contact Form Sumitted")
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} ></input><br></br>
      {errors.name && <p>{errors.name.message}</p>}
      <input type="email" {...register("email")}></input><br></br>
            {errors.email && <p>{errors.email.message}</p>}
      <input {...register("phoneNumber")}></input><br></br>
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      <input type="text" {...register("Message")}></input><br></br>
            {errors.Message && <p>{errors.Message.message}</p>}
     <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default ContactForm;
