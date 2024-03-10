

const AboutUs = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className="mt-16">
           <h1 className="text-center lg:text-2xl text-[#4ca1af]">About Us</h1>
            <div className="hero min-h-[700px]">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-screen lg:max-w-2xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">We provide jobs to people successfully</h1>
      
      <p className="py-6">We take pride in our ability to consistently provide successful all job opportunities to individuals. Our dedicated team works diligently to match candidates with the right positions, resulting in fulfilling and prosperous careers for countless people. Our track record of accomplishment in this regard underscores our commitment to making a positive impact on individuals lives by facilitating their professional success.</p>
      <button className="btn bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white">See More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;