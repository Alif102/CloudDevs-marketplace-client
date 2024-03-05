import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
    const {signIn, signInWithProvider} = useAuth()
  const handleLogin = e => {
    e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

       

        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset()
          if(user){
            return toast.success('you logged in Successfully.',{
              position: "top-center"
            })
          }
        })
        .catch(error => {
          console.error(error)
          toast.error(error.message,{
            position: "top-center"
          })
          
        })
        // https://www.facebook.com/watch?v=6882295058483891
  }
    

   const handleSignInWithGoogle= () =>{
    signInWithProvider()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
   }
    return (
        <div>
          <Helmet>
            <title>Luxe Market Pro | Login</title>
          </Helmet>
              <div  className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg py-10">
        <h1 className="text-center text-purple-700 font-semibold text-2xl">Login</h1>
        <form onSubmit={handleLogin} className="mt-6">
        <div className="py-3">
            <h1 className="font-bold mb-2 ml-1 text-purple-700">Email</h1>
         <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
            type="email"
            name="email"
            placeholder="your email address"
            required
          />
         </div>
        <div className="py-3">
            <h1 className="font-bold mb-2 ml-1 text-purple-700">Password</h1>
         <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:border-purple-400 focus:bg-white"
            type="password"
            placeholder="your password"
            name="password"
            required
          />
         </div>
          <button
            className="w-full mt-4 py-3 px-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Login
          </button>
          <button
          onClick={handleSignInWithGoogle}
            className="w-full mt-4 py-2  px-4 flex justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
           <img className="w-7" src="https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png" alt="" />
          </button>
          <p className="mt-4 text-center">
                 You have not an account. Please <Link className="text-fuchsia-400 font-bold" to="/register">register</Link> now
          </p>
        </form>
      </div>
    </div>
    <ToastContainer/>
        </div>
    );
};

export default Login;