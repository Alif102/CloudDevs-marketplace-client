import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const HelpCenter = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qje8gmn', 'YOUR_TEMPLATE_ID', form.current, 'IgaUKfqmOcLbDsWnD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className="flex justify-center">
             <div className="mt-10 lg:ml-0 md:ml-0 ml-10">
              <h1 className="text-[#2c3e50]enter text-5xl font-bold lg:mr-32 lg:ml-10">Help Center</h1>
              <form  ref={form} onSubmit={sendEmail} className="bg-violet-100 lg:w-[1000px] md:mx-60 w-[400px] rounded-xl py-10 my-10" >
              <div className="flex justify-center mt-10   ">
              <div className="grid lg:grid-cols-2  grid-cols-1 gap-x-32 gap-y-10 py-10">
                <div className="">
                    <h3 className="text-xl font-bold mb-3">Your Name</h3>
                <input name="user_name" type="text" placeholder="Your Name" className="input input-bordered input-primary w-[400px] " />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">Your Email</h3>
                <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered input-primary w-[400px]" />
                </div>
            
              
                
              </div>
              
              
              </div>
              <div className="px-10">
                    <h3 className="text-xl font-bold mb-3">Your Message</h3>
                    <textarea name="message" className="textarea input-bordered input-primary w-full" placeholder="Your Message"></textarea>
                </div>
              <div className="flex justify-center mb-20">

       <input className="btn  bg-gradient-to-r from-amber-500 to-lime-500 text-white font-bold  mt-10" type="submit" value="Submit" />
 </div>
              </form>
              
        </div>
        </div>
    );
};

export default HelpCenter;