import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("Rendered")
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email"  placeholder="Enter your email"
          {...register("email", { required: "Enter Email" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
<br></br>
        <input   placeholder="Enter your Password"
          {...register("password", { required: "Enter min 6 character" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
<br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
