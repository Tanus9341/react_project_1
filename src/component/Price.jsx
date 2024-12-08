import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Price = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
            pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((Option,index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                   <p className="text-4xl mb-8">
                        {Option.title}
                        {Option.title ==="pro"&&<span className="bg-gradient-to-r from-orange-500 to bg-orange-800 
                        text-transparent bg-clip-text text-xl mb-4 ml-2" >
                            (most popular)
                            </span>
                            }
                   </p>
                   <p className="mb-8">
                    <span className="text-5xl mr-2 mt-6">{Option.price}</span>
                    <span className="text-neutral-400 tracking-tight">/month</span>
                   </p>
                   <ul>
                    {Option.features.map((feature,index)=>(
                        <li key={index} className="mt-8 flex items-center">
                            <CheckCircle2 />
                            <span className="ml-2">{feature}</span>
                        </li>
                    ))}
                   </ul>
                   <a href="#" className="inline-flex justify-center items-center 
                  text-center w-full h-12 p-5 mt-20 tracking-tight text-xl
                    hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                        Subscribe
                    </a>
                </div>


                </div>

            ))}
        </div>
 
    </div>
  )
}

export default Price
