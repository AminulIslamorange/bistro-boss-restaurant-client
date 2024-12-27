import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';

const Login = () => {
    
    const [disabled,setDisabled]=useState(true);
     const {signInUser}=useContext(AuthContext);
     const navigate=useNavigate();
     const location=useLocation();
     const  from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const hanldleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        signInUser(email,password)
        .then( result=>{
            const user=result.user
            console.log(user);
            Swal.fire({
                title: "Login Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
                
              });
              navigate(from, { replace: true });

        })
        .catch(error=>console.error(error))
    }
    const validateUserCaptcha = (e) =>{
        const user_captcha_value=e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
        }
   
        else {
           setDisabled(true)
        }
    

    }
    return (
      <>
      <Helmet><title>Bistro Boss | Login</title></Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2">
                    <form onSubmit={hanldleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={validateUserCaptcha} placeholder="Type The Captcha" name="captcha" className="input input-bordered" required />
                            
                           
                        </div>
                        <div className="form-control mt-6">
                            
                           <input disabled={disabled} className="btn btn-outline border-0 border-b-4 my-4 "  style={{ backgroundColor: 'rgba(209, 160, 84, 0.70)' }} type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center pb-12'><small>New here?   <Link to='/signUp'> Create a New Account</Link></small></p>
                </div>
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                
            </div>
        </div></>
    );
};

export default Login;