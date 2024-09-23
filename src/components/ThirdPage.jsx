import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function ThirdPage() {
  const slides = [
    {
      img: "/custom-products.webp",
      title: "Create",
      subtitle: "Custom products",
      description: "Easily add your design to a wide range of products using our free tool.",
    },
    {
      img: "/your-products.webp",
      title: "Sell",
      subtitle: "on your terms",
      description: "You choose the products, sale price, and where to sell.",
    },
    {
      img: "/fullfillment.webp",
      title: "WE HANDLE",
      subtitle: "fulfillment",
      description: "We automatically handle all printing and delivery logistics.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* MD and larger screens */}
      <div className="hidden md:block">
        <div className="bg-zinc-200 w-full min-h-screen md:flex md:flex-row sm:flex sm:flex-col ml-4">
          <div className="md:w-[40%] sm:w-full">
            <img className="w-full mt-20 rounded-lg h-[90%]" src="/space.jpg" alt="Space" />
          </div>
          <div className="md:w-[60%] sm:w-full">
            <div className="bg-white rounded-lg w-[90%] h-[75%] md:mt-52 flex flex-col gap-7">
              <div className="md:ml-32 sm:ml-8 md:px-20 mt-28 text-3xl font-bold">
                Easily add your design to a wide range of products
              </div>
              <div className="md:ml-32 md:px-20 text-xl font-medium text-gray-600">
                With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
              </div>
              <div className="md:ml-32 px-20 text-xl text-green-700 flex gap-3">
                <a href="#">All products</a>
                <FaArrowRightLong className="mt-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-200 h-screen w-full flex gap-5 justify-around items-center">
          {slides.map((slide, index) => (
            <div key={index} className="w-1/3 ml-7">
              <img className="w-1/3" src={slide.img} alt={slide.title} />
              <h1 className="mt-8 text-3xl font-bold text-green-500">{slide.title}</h1>
              <h1 className="font-semibold text-2xl text-black">{slide.subtitle}</h1>
              <p className="mt-4">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* small screens  */}
      <div className="block md:hidden">
        <div className="bg-zinc-200 w-full min-h-screen p-4">
          <div className="text-center">
            <img className="w-1/3 mx-auto" src={slides[currentSlide].img} alt={slides[currentSlide].title} />
            <h1 className="mt-8 text-3xl font-bold text-green-500">{slides[currentSlide].title}</h1>
            <h2 className="font-semibold text-2xl text-black">{slides[currentSlide].subtitle}</h2>
            <p className="mt-4">{slides[currentSlide].description}</p>
          </div>

         
          <div className="flex justify-center gap-3 mt-4">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-green-500" : "bg-gray-300"}`}
                onClick={() => setCurrentSlide(idx)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
