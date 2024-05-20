import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';


export default function App() {
  const { watch, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      selectedOptions: []
    }
  });

  const onSubmit = data => console.log({...data});

  const options = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "laravel", label: "Laravel" },
    { value: "graphql", label: "GraphQL" },
    { value: "nestjs", label: "NestJS" }
  ];

  console.log(errors)

  return (
    <div className="app">
      <div className="form-container">
        <h1>Register</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Firstname">
            First Name
            <input id="Firstname" className="text-input" type="text" {...register("Firstname", { required: true })} />
          </label>
          <label htmlFor="Lastname">
            Last Name
            <input id="Lastname" className="text-input" type="text" {...register("Lastname", { required: true })} />
          </label>
          <label htmlFor="Email">
            Email
            <input id="Email" className="text-input" type="text" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
          </label>
          <label htmlFor="Username">
            Username
            <input id="Username" className="text-input" type="text" {...register("Username", { required: true })} />
          </label>
          <label htmlFor="Password">
            Password
            <input id="Password" className="text-input" type="password" {...register("Password", { required: true })} />
          </label>
          <div className="topics">
            <p>Topics of Interest</p>
            {options.map(({ value, label }) => (
              <label key={value}>
                <input
                  type="checkbox"
                  value={value}
                  {...register("selectedOptions")}
                />
                {label}
              </label>
            ))}
          </div>
          <input type="submit" className='submit-button'/>
        </form>
      </div>
    </div>
  );
}
