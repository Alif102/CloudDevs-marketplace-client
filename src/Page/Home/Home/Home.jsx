
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";

import { Helmet } from "react-helmet-async";
import Categories from "../../Categories/Categories";
import Rooms from "../../Rooms/Rooms";
import Testimonials from "../Testimonial";


const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Cloud Devs Pro | Home</title>
            </Helmet>
            <Banner></Banner>

            <Categories/>
            <Rooms/>
            <AboutUs></AboutUs> 
          <Testimonials/>
            
           
            
        </div>
    );
};

export default Home;