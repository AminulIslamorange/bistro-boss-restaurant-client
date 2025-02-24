import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Popularmenu from "../Popularmenu/Popularmenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro Boss | Home</title>
        
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Popularmenu></Popularmenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;