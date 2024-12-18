import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdPayment, MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-[#D1A054]">
                {/* dashboard sidebar */}
                <ul className="menu">
                <li>
                        
                        <NavLink to='/dashboard/userHome'>  <IoHomeOutline /> User Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>  My Cart</NavLink>
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

                </ul>

            </div>
         {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;