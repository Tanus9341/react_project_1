

const Login = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e0eb3160-b0e9-48b1-ad91-6ce0f3523de4");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        event.target.reset();
      }
      else
      console.log("error",res);

    };
  
    return (
    <div className="bg-neutral-400 rounded-xl w-1/2 justify-center  mx-auto py-10 text-center items-center">
    <h2 className="text-xl mb-5 sm:text-2xl lg:text-3xl  text-neutral-900 text-center mt-6 tracking-wider">Login Page </h2>
        <form className="flex flex-col justify-center text-center items-center" onSubmit={onSubmit}>
          <input className="bg-white text-neutral-950 border border-spacing-5 border-orange-700 w-1/2 text-left p-3 rounded-xl py-2 m-2"  type="text" name="name" placeholder="Enter your name" required/>
          <input className="bg-white text-neutral-950 border border-spacing-5 border-orange-700 
           text-left w-1/2 p-3 rounded-xl py-2 m-2" type="email" name="email" placeholder="enter your email" required/>
          <textarea  className ="bg-white text-neutral-950 border border-spacing-5 border-orange-700 w-1/2 text-left p-3 rounded-xl py-2 m-2" name="message" placeholder="enter message" required></textarea>
          <button  className ="btn bg-gradient-to-r from-orange-400 to-red-800 border mt-3 rounded-xl py-2 px-3" type="submit">Submit Form</button>
        </form>
        </div>
    );
  } 
  

  
export default Login