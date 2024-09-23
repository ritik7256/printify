import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
    const [showHowItWorks, setShowHowItWorks] = useState(false);
    const [showServices,setShowServices]=useState(false)
    const[showUsecases,setShowUsecases]=useState(false)
    const[showNeedHelp,setShowNeedhelp]=useState(false)
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <>
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
          <div className=" nav w-full h-16 px-5 mb-5  ">
            <div className="flex items-center justify-around py-4">
              {/* Single image with logo and text enlarged */}
              <div className="w-48 flex"> {/* Adjust width here */}
              <button
                className="text-3xl"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>


                <img src="/logo.webp" alt="Logo" className="h-16" /> {/* Adjust height here */}
              </div>

                <div className="hidden md:flex gap-5  ">
                    <a href="#" className="hover:text-green-400 transition duration-300">Catalog</a>

                        {/* dropdown of how it works */}
                    <div
            className="relative "
            onMouseEnter={() => setShowHowItWorks(true)}
            onMouseLeave={() => setShowHowItWorks(false)}
          >
            <a href="#" className="flex hover:text-green-400 transition duration-300">
              How It Works
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showHowItWorks ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showHowItWorks && (
              <div className="absolute min-w-auto left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 text-black ">
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">How Printify Works</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Print On Demand 2</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Printify Quality Promise</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">What To Sell</a>
              </div>
            )}
          </div>

                    <button className="hover:text-green-400 transition duration-300">Pricing</button>
                    <button className="hover:text-green-400 transition duration-300">Blog</button>

                {/* dropdown of Services */}
                    <div
            className="relative "
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <a href="#" className={`text-lg transition duration-500 ${showServices ? 'text-green-500' : 'text-black'} flex`}>
              Services
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showServices ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showServices && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Printify Studio</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Printify Express 
                    Delivery
                </a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Transfer Products</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">order in Bulk</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Experts Program</a>
              </div>
            )}
          </div>   
                  {/* dropdown of use-cases */}

                     <div
            className="relative "
            onMouseEnter={() => setShowUsecases(true)}
            onMouseLeave={() => setShowUsecases(false)}
          >
            <a href="#" className={`text-lg transition duration-500 ${showUsecases ? 'text-green-500' : 'text-black'} flex`}>
              Use-cases
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showUsecases ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showUsecases && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Merch For Fans
                </a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Merch for eCommerce</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Merch for enterprises</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Grow Your Store</a>
              </div>
            )}
          </div>

             {/* dropdown of need help */}

             <div
            className="relative "
            onMouseEnter={() => setShowNeedhelp(true)}
            onMouseLeave={() => setShowNeedhelp(false)}
          >
            <a href="#" className={`text-lg transition duration-500 ${showNeedHelp ? 'text-green-500' : 'text-black'} flex`}>
              Need help?
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showNeedHelp ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showNeedHelp && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Help Center</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Contacts</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">My Requests</a>
              </div>
            )}
          </div>
                    
                </div>

                {isMobileMenuOpen&&(
                    
                    <div className="md:hidden bg-white shadow-lg   ">
                    <a href="#" className="hover:text-green-400 transition duration-300">Catalog</a>

                        {/* dropdown of how it works */}
                    <div
            className="relative "
            onMouseEnter={() => setShowHowItWorks(true)}
            onMouseLeave={() => setShowHowItWorks(false)}
          >
            <a href="#" className="flex hover:text-green-400 transition duration-300">
              How It Works
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showHowItWorks ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showHowItWorks && (
              <div className="absolute min-w-auto left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 text-black ">
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">How Printify Works</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Print On Demand 2</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Printify Quality Promise</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">What To Sell</a>
              </div>
            )}
          </div>

                    <button className="hover:text-green-400 transition duration-300">Pricing</button>
                    <button className="hover:text-green-400 transition duration-300">Blog</button>

                {/* dropdown of Services */}
                    <div
            className="relative "
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <a href="#" className={`text-lg transition duration-500 ${showServices ? 'text-green-500' : 'text-black'} flex`}>
              Services
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showServices ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showServices && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Printify Studio</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Printify Express 
                    Delivery
                </a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Transfer Products</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">order in Bulk</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Experts Program</a>
              </div>
            )}
          </div>   
                  {/* dropdown of use-cases */}

                     <div
            className="relative "
            onMouseEnter={() => setShowUsecases(true)}
            onMouseLeave={() => setShowUsecases(false)}
          >
            <a href="#" className={`text-lg transition duration-500 ${showUsecases ? 'text-green-500' : 'text-black'} flex`}>
              Use-cases
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showUsecases ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showUsecases && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Merch For Fans
                </a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Merch for eCommerce</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Merch for enterprises</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Grow Your Store</a>
              </div>
            )}
          </div>

             {/* dropdown of need help */}

             <div
            className="relative "
            onMouseEnter={() => setShowNeedhelp(true)}
            onMouseLeave={() => setShowNeedhelp(false)}
          >
            <a href="#" className={`text-lg transition duration-500 ${showNeedHelp ? 'text-green-500' : 'text-black'} flex`}>
              Need help?
              <IoMdArrowDropdown className={`ml-2 transform transition duration-500 ${showNeedHelp ? 'rotate-180' : ''} mt-2`}/>
            </a>
            {showNeedHelp && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Help Center</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">Contacts</a>
                <a href="#" className="block px-4 py-2 hover:text-green-400 transition duration-300">My Requests</a>
              </div>
            )}
          </div>
                    
                </div>
                
                )}
                <div className="flex gap-5">
                    <a href="#" className=" border border-2-black px-5 py-1 rounded-sm hover:text-green-500 transition duration-500}">Login</a>
                    <a href="#" className=" bg-green-600 px-5 py-1 rounded-sm">Sign up</a>
                </div>

            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  