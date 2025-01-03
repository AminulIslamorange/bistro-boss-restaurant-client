import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { price, image, recipe, name,_id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location=useLocation();
    const axiosSecure =useAxiosSecure();
    const [,refetch]=useCart();

    const handleAddToCart = () => {
        if(user && user.email){
            // send item to the database
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,
                price,

            }
            axiosSecure.post('/carts',cartItem)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.insertedId
                    ){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Your ${name} added Successfully`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                        //   refetch the cart for update the cart item

                        refetch();

                    }
                })
                
            

        }
        else{
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
              });



        }
       
    

}
    
return (
    <div className="card bg-base-100 w-96 shadow-xl relative">
        <figure>
            <img
                src={image}
                alt="Shoes" />
        </figure>
        <p className="absolute right-3 top-2 text-white bg-black p-1">$:{price}</p>
        <div className="card-body text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
                <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-outline border-0 border-b-4 my-4 text-[#BB8506] bg-slate-100">Add To Cart</button>
            </div>
        </div>
    </div>
);
};

export default FoodCard;