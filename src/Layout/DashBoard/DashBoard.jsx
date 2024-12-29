import { FaCalendarAlt, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { IoHomeOutline, IoMenu } from "react-icons/io5";
import { MdContactPhone, MdPayment, MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { SiFacebookgaming } from "react-icons/si";

const DashBoard = () => {
    const [cart]=useCart();
    const isAdmin=true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                {/* dashboard sidebar */}
                <ul className="menu">
                {isAdmin?<>
                    <li>
                        
                        <NavLink to='/dashboard/userHome'>  <IoHomeOutline /> Admin Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils>  Add Items ({cart.length})</NavLink>
                    </li>
                   
                    <li>
                        
                        <NavLink to='/dashboard/manageItem'>  <FaList></FaList> manage items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/payment'> <SiFacebookgaming></SiFacebookgaming>  Manage bookings</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/users'> <FaUsers></FaUsers> all users</NavLink>
                    </li>
                    </>
                :<>
                <li>
                        
                        <NavLink to='/dashboard/userHome'>  <IoHomeOutline /> User Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>  My Cart ({cart.length})</NavLink>
                    </li>
                   
                    <li>
                        
                        <NavLink to='/dashboard/reservation'>  <FaCalendarAlt />  reservation</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/payment'> <MdPayment />  payment history</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/review'><MdRateReview />  add review</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/booking'><TbBrandBooking />  my booking</NavLink>
                    </li>
                </>
                }
                    {/* shared navLink */}
                    <div className="divider"></div>
                    <li>
                        
                        <NavLink to='/'>  <IoHomeOutline />Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/order/salad'>  <IoMenu />Menu</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/menu'>  <FaShoppingBag />Shop</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/'>  <MdContactPhone />Contact</NavLink>
                    </li>

                </ul>

            </div>
         {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;