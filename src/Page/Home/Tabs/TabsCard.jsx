import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useEffect, useState } from 'react';
import TabItems from './TabItems';

const TabsCard = ({ tabs }) => {
  const [wd, setWd] = useState([]);
  const [dt, setDt] = useState([]);
  const [gd, setGd] = useState([]);
  const [allData, setAlldata] = useState([]);
  console.log(allData);

  useEffect(() => {
    fetch('https://luxe-market-pro-server-side.vercel.app/allJobs')

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlldata(data);
        setWd(data.filter((item) => item.category === 'Web Development'));
        setDt(data.filter((item) => item.category === 'Digital Marketing'));
        setGd(data.filter((item) => item.category === 'Graphics Design'));
        
      });
  }, []);

  return (
    <div className="lg:mx-20 mx-2 my-10 mb-10" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Tabs className="border-2 border-fuchsia-300 rounded-xl bg-fuchsia-200">
        <TabList>
          <div className="grid lg:flex md:flex grid-cols-1">
            {
            tabs.map((t) => 
              <Tab
                key={t._id}
                className="py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              > 
                {t.name}
              </Tab>
            )
          }
          </div>
        </TabList>

        <TabPanel >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:ml-28 ml-2 mt-10">
                {
        wd.map(item => <TabItems item={item} key={item._id}></TabItems>)
       }
          </div>
       
        </TabPanel>
        <TabPanel >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:ml-28 ml-2 mt-10">
                {
        dt.map(item => <TabItems item={item} key={item._id}></TabItems>)
       }

          </div>
                </TabPanel>
        <TabPanel >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:ml-28 ml-2 mt-10">
                {
        gd.map(item => <TabItems   ems item={item} key={item._id}></TabItems>)
       }

          </div>
                </TabPanel>
   
      </Tabs>

    </div>
  );
};


export default TabsCard;
