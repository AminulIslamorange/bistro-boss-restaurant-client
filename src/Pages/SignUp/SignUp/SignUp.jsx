import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const {
        register,handleSubmit,formState: { errors },} = useForm()
        const onSubmit = (data) =>{

            createUser(data.email,data.password)
            .then(result=>{
                const logedUser=result.user;
                console.log(logedUser);
            })
            .catch(error=>console.error(error))
        } 

        


    
    return (
      <>
      <Helmet><title>Bistro Boss | SignUP</title></Helmet>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2">
                <form  onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" {...register("name",{ required: true })} placeholder="name" className="input input-bordered" required />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" required />
                        {errors.email  && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="password" name="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                        
                        </label>
                        
                       
                    </div>
                    <div className="form-control mt-6">
                        
                       <input  className="btn btn-outline border-0 border-b-4 my-4 "  style={{ backgroundColor: 'rgba(209, 160, 84, 0.70)' }} type="submit" value="SignUp" />
                    </div>
                </form>
                <p className='text-center pb-12'><small>Already have an Account?   <Link to='/login'>please Login</Link></small></p>
            </div>
            <div className="text-center lg:text-left md:w-1/2">
                <h1 className="text-5xl font-bold">Sign Up!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            
        </div>
    </div>
      </>
    );
};

export default SignUp;