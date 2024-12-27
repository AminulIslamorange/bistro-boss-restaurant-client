
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const axiosPublic=useAxiosPublic();
    const {googleSignIn}=useAuth();
    const navigate=useNavigate();
    const handleGooglesignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })

    }
    return (
        <div className="px-8">
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGooglesignIn} className="btn">
                <FaGoogle className="mr-4"></FaGoogle>
                Google
            </button></div>

        </div>
    );
};

export default SocialLogin;