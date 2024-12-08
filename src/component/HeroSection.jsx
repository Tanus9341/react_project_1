import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";


const HeroSection = () => {
  return (
    
    <div className="flex  flex-col item-center  mt-6 lg:mt-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl  text-center tracking-wide">
           Virtual build tools 
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
           {" "}
           for developer
           </span>
        </h1>
        <p className="mt-10 text-lg text-center mx-auto text-neutral-500 max-w-4xl">

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aut 
            expedita minus alias similique, ipsam illo dolor ut ex voluptas! Molestias 
            quam pariatur voluptatum quae am assumenda hic?
        </p>
        <div className="flex  justify-center my-10">
            <a
            href="#" className="py-3 px-4 rounded-md mx-3 bg-gradient-to-r from-orange-400 to-orange-800">
                Start for free
            </a>
            <a
            href="#"className="py-2 px-3 mx-3 rounded-md border">
                documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video 
            autoPlay 
            loop 
            muted
             className="rounded-lg w-1/2 border shadow-orange-400 mx-2 my-4">
               <source src={video1} type="video/mp4"/>
               your browser not support the vedio.

            </video>
            <video
             autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border shadow-orange-400 mx-2 my-4">
               <source src={video2} type="video/mp4"/>
               your browser not support the vedio.
            </video>
            
        </div>
    </div>
    
  );
}

export default HeroSection
