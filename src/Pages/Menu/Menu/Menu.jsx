import { Helmet } from "react-helmet-async";
import menuBg from '../../../assets/menu/banner3.jpg'
import Cover from "../../Shared/Cover/Cover";
import Popularmenu from "../../Home/Popularmenu/Popularmenu";


const Menu = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro | menu</title>
        
      </Helmet>
      <Cover img={menuBg} title='OUR MENU' details='Would you like to try a dish?'></Cover>
      <Popularmenu></Popularmenu>
            
        </div>
    );
};

export default Menu;