const Banner = () => {
  return (
    <div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="hero min-h-[800px]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1744&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-screen lg:max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              <span className="text-fuchsia-400">If you want</span> to get job then you have come to right place
            </h1>
            <p className="py-6">
            If you are seeking employment opportunities, you have landed in the perfect spot. Our platform offers a wide range of job listings and resources to help you kickstart your career journey with confidence.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
