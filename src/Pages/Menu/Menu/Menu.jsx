import { Helmet } from "react-helmet-async";
import menuBg from '../../../assets/menu/banner3.jpg'
import Cover from "../../Shared/Cover/Cover";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";




const Menu = () => {
    const [menu]=useMenu();
   
    const soup=menu.filter(item=>item.category === "soup")
    const pizza=menu.filter(item=>item.category === "pizza")
    const dessert=menu.filter(item=>item.category === "dessert")
    
    const salad=menu.filter(item=>item.category === "salad")
    const offered=menu.filter(item=>item.category === "offered")
    return (
        <div>
        <Helmet>
    <title>Nourish | Menu</title>
   
  </Helmet>
  <Cover img={menuBg} title='OUR MENU' details={'Would you like to try a dish?'}></Cover>
  <SectionTitle subHeading='---Dont miss---' heading='TODAYS OFFER'></SectionTitle>
  {/* offerd category */}
  <MenuCategory items={offered}></MenuCategory>
  {/* dessert */}
  <MenuCategory items={dessert} title='dessert' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={dessertImg}></MenuCategory>

  {/* pizza */}
  <MenuCategory items={pizza} title='pizza' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={pizzaImg}></MenuCategory>

  {/* slaad */}
  <MenuCategory items={salad} title='salad' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={saladImg}></MenuCategory>


        {/* soup */}
        <MenuCategory items={soup} title='soup' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={soupImg}></MenuCategory>
    </div>
    );
};

export default Menu;