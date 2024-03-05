import { Link } from "react-router-dom";

const Route404 = () => {
    return (
        <div>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--upMfnEaM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="" />
            <div className="flex justify-center">
            <Link
            className="w-full mt-4 py-3 px-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Back To Home
          </Link>
            </div>
        </div>
    );
};

export default Route404;