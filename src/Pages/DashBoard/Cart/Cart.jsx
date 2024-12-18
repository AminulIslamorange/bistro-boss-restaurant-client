import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    return (
        <div>
            <div className="my-12 text-center"><p className="text-orange-400">---My Cart---</p>
            <p className="text-6xl">WANNA ADD MORE?</p>
            </div>
           <div className="flex justify-between mx-10"> 
            <h3 className="text-3xl">Total orders:{cart.length}</h3>
            <h3 className="text-3xl">Total Price:{totalPrice}</h3>
            <button className="btn btn-warning">Pay</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
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
        cart.map(item=><tr key={item._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
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
                <div>
                  <div className="font-bold">{item.name}</div>
                 
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
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