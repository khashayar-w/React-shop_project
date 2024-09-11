import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

import "../create_account.css"

const CreateAccount = () => {


    //*schema 
    const schema = yup.object().shape({
      first_name: yup
        .string()
        .required()
        .matches(/^[A-Za-z]+$/, "name must contain only letters"),
      last_name: yup.string().matches(/^[A-Za-z]+$/,).required(),
      email: yup.string().email().required(),
      age: yup.number().min(15).max(90).required(),
      password: yup
        .string()
        .matches(
          /^[A-za-z0-9]{4,7}$/,
          "your password must between(4-7)characters numbers allowed. and without any (signs and space)"
        ),
      config_password: yup
        .string()
        .oneOf([yup.ref("password")])
        .required(),
    });
    //*useForm hook
    const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    
    return (
      <div className="body">
        <div className="create-container">
          <form
            className="create-form"
            onSubmit={handleSubmit((data) => console.log(errors))}
          >
            <h1>Create Your Account</h1>
            <span style={{fontSize:"24px"}}>
              One <span style={{ color: "#54a0ff" ,fontSize:'20px',fontWeight:"bold"}}>Account</span> is all you
              need
            </span>
            <div className="form-name">
              <input
                type="text"
                name=""
                id=""
                placeholder="First-name..."
                {...register("first_name")}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Last-name..."
                {...register("last_name")}
              />
              {errors.first_name && <p>Error:{errors.first_name?.message}</p>}
            </div>
            <div className="email">
              <input
                type="text"
                name="email"
                id=""
                placeholder="Email..."
                {...register("email")}
              />
              {errors.email && <p>Error:{errors.email?.message}</p>}
            </div>
            <div className="age">
              <input
                type="number"
                name="age"
                id=""
                placeholder="Age..."
                {...register("age")}
              />
              {errors.age && <p>Error:{errors.age?.message}</p>}
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password..."
                {...register("password")}
              />
              {errors.password && <p>Error:{errors.password?.message}</p>}
              <input
                type="password"
                placeholder="Config-password..."
                {...register("config_password")}
              />
              {errors.config_password && (
                <p>Error:{errors.config_password?.message}</p>
              )}
            </div>
            <div className="button">
              <input type="submit" value={"Create🎉"} />
            </div>
          </form>
        </div>
      </div>
    );
}
 
export default CreateAccount;
