
import { useEffect, useState } from "react";
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import TabsCard from "../Tabs/TabsCard";

import UserComments from "../UserComments/UserComments";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [tabs, setTabs] = useState([])
    console.log(tabs);
    useEffect(() => {
        fetch('https://luxe-market-pro-server-side.vercel.app/tabsCategory')
        .then(res => res.json())
        .then(data => setTabs(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Luxe Market Pro | Home</title>
            </Helmet>
            <Banner></Banner>
            <TabsCard tabs={tabs}></TabsCard>
            <UserComments></UserComments>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;