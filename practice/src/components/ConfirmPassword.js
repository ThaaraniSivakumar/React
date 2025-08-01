import React from 'react'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

const ConfirmPassword = () => {
    const schema=yup.object().shape({
      name:yup.string().required("Name Required"),
      email:yup.string().required("Enter email").email("Invalid email"),
      password:yup.string().required("Enter password").max(6,"Enter 6 char"),
      ConfirmPassword:yup.string().required("Enter password").oneOf([yup.ref("password")],"Password must have 6 char")
    })
    
    const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)});
    console.log("Rendered")
    const onSubmit=(data)=>{
        console.log(data)
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text'{...register("name")}></input><br/>
        {errors.name && <p>{errors.name.message}</p>}
        <input type='email'{...register("email")}></input><br/>
        {errors.email && <p>{errors.email.message}</p>}
        <input {...register("password")}></input><br/>
        {errors.password && <p>{errors.password.message}</p>}
        <input {...register("ConfirmPassword")}></input><br/>
        {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default ConfirmPassword
