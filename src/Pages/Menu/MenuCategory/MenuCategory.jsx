import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/Menuitem/Menuitem";


const MenuCategory = ({items,title,coverImg,details}) => {
    return (
        <div >
            { title && <Cover img={coverImg} title={title} details={details}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 mt-16">
            {items.map(item=><MenuItem 
            key={item._id} 
            item={item}>

            </MenuItem>)}
            </div>
            <div className="text-center">
            <Link to={`/order/${title}`}>  
                <button className="btn btn-outline border-0 border-b-4 mb-4 ">View Full  Menu</button>
                </Link>

            </div>
            
        </div>
    );
};

export default MenuCategory;