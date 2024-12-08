import { CheckCircle2 } from "lucide-react";
import coding from "../assets/code.jpg";
import { checklistItems } from "../constants";
const WorkFlow = () => {
  return (
    <div className="mt-15">
        <h1 className="text-3xl mb-20 sm:text-5xl lg:text-6xl  text-center mt-6 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800
        text-transparent bg-clip-text">
           {" "} coding Workflow
           </span>
            </h1> 
            <div className="flex mt-5 flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                <img src={coding} alt="code"/>
                </div>
                <div className="p-2 w-full lg:w-1/2">
                {checklistItems.map((item ,index)=>(
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center item-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">
                            {item.title}
                       </h5>
                       <p className="text-md text-neutral-500">
                         {item.description}
                       </p>
                        </div>
                        </div>

                ))}
                </div>
                </div> 
    </div>
  )
}

export default WorkFlow
