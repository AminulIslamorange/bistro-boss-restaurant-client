import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, } from 'react-simple-captcha';

const Login = () => {
    const captchaRef=useRef(null);
    const [disabled,setDisabled]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const hanldleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
    }
    const validateUserCaptcha = () =>{
        const user_captcha_value=captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
        }
   
        else {
           setDisabled(true)
        }
    

    }
    return (
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
                            <input type="text" ref={captchaRef} placeholder="Type The Captcha" name="captcha" className="input input-bordered" required />
                            <button onClick={validateUserCaptcha} className='btn btn-outline btn-xs mt-2'> VALIDATE</button>
                           
                        </div>
                        <div className="form-control mt-6">
                            
                           <input disabled={disabled} className="btn btn-outline border-0 border-b-4 my-4 "  style={{ backgroundColor: 'rgba(209, 160, 84, 0.70)' }} type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Login;