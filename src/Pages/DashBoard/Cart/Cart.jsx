
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart,refetch]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0);
    const axiosSecure=useAxiosSecure();
    const handleAddToDelete =id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });

            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch();
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

                }
            })
            }
          });

    }
    return (
        <div>
            <div className="mt-12 mb-32 text-center"><p className="text-orange-400">---My Cart---</p>
            <p className="text-6xl">WANNA ADD MORE?</p>
            </div>
           <div className="flex justify-between mx-10"> 
            <h3 className="text-3xl">Total orders:{cart.length}</h3>
            <h3 className="text-3xl">Total Price:{totalPrice}</h3>
            <button className="btn btn-warning">Pay</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
      <th>#</th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
        
        
      </tr>
    </thead>
    <tbody>
      
      {
        cart.map((item,index)=><tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>{item.name}
             </td>
             <td>$ : {item.price}</td>
            <th>
              <button onClick={()=>handleAddToDelete(item._id)} className="btn btn-warning"><RiDeleteBin6Line className="text-red-700"/> </button>
            </th>
          </tr>)
      }
     
      
      
      
    </tbody>
   
    
  </table>
</div>
            
        </div>
    );
};

export default Cart;