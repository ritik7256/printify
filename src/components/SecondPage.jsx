

function SecondPage() {
  return (
    <div className="md:mt-32 ">
    <div className='w-full h-full flex  sm:flex  sm:gap-1   '>
      <div className='w-1/3 md:ml-24 flex flex-col gap-7'>
        <img className=" sm:w-full md:w-1/3" src="/higher-profits.svg" alt="" />
        <h1 className="text-3xl font-semibold">Higher Profits</h1>
        <p className="text-gray-700">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
      </div>
      <div className='w-1/3  ml-24  flex flex-col gap-7'>
        <img className=" sm:w-full md:w-1/3" src="/robust-scaling.svg" alt="" />
        <h1 className="text-3xl font-semibold">Robust Scaling</h1>
        <p className="text-gray-700">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
      </div>
      <div className='w-1/3 ml-24 flex flex-col gap-7'>
        <img className=" sm:w-full md:w-1/3" src="/best-selection.svg" alt="" />
        <h1 className="text-3xl font-semibold">Best Selection</h1>
        <p className="text-gray-700">With 900+ products and top quality brands, you can choose the best products for your business.</p>
      </div>
    </div>
    </div>
  )
}

export default SecondPage
