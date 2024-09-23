import { TiTickOutline } from "react-icons/ti";
import { FaRegPlayCircle } from "react-icons/fa";


function FirstPage() {
    return (
        <div>

        
      <div className=" md:flex w-full h-full  ">
       
        <div className=" sm:w-1/2 h-screen flex flex-col justify-center mt-36">
        
        <div className=" text-6xl mt-[1/2] ml-10 font-bold">Create and sell custom products</div>

        <div className="mt-10 ml-10 text-lg font-semibold p-2 flex flex-col gap-2">
        <div className="flex  "> 
            < TiTickOutline className="text-2xl text-green-300" />
            <h1>100% Free to use</h1>
        </div>

        <div className="flex"> 
            < TiTickOutline className="text-2xl text-green-300" />
        <h1>900+ High-Quality Products</h1>
        </div>
        
        <div className="flex"> 
            < TiTickOutline className="text-2xl text-green-300" />
        <h1>Largest global print network</h1>
        </div>

           <div className="mt-7 text-white flex gap-3">
            <button className="px-7 py-2 bg-green-500 rounded-md">Start for free</button>
            <button className="px-7 py-2 border border-3-black  rounded-sm flex items-center gap-2 text-black"><FaRegPlayCircle /> How it works</button>
           </div>
             <div className="text-green-600">
             Trusted by over 8M sellers around the world
             </div>
        </div>

        </div>

       
        

        <div className="md:w-1/2 h-screen">
        <div className="w-[300px] md:mt-36 ml-20 border border-1-gray-300 px-5 py-5 rounded-lg">
        <img src="img_5.png" alt="" />
        </div>
        </div>
      </div>
{/* 
        <SecondPage/>
        <ThirdPage/> */}

      </div>
    );
  }
  
  export default FirstPage;
  