

function FifthPage() {
  return (
    <div className="flex justify-center">

    
    <div className="w-[70%] min-h-screen border rounded-md bg-slate-800  mt-10 flex">
      <div className="w-[50%] text-white mt-10 ml-10 flex flex-col gap-5">
        <h1 className="text-5xl font-bold"> Make Money, </h1>
        <h1 className="text-5xl font-bold" >Risk-Free</h1>
        <p className="text-xl">You pay for fulfillment only when you  <br /> make a sale</p>

        <div className="card-price-tag md:w-[70%] sm:w-full h-auto rounded-lg border bg-slate-900 p-10 font-bold  flex flex-col gap-5">
            <h1>You sell a t-shirt

$ 30</h1>
            <h1>You pay for its production

$ 12</h1>

      <hr /> 

        <h2 className="text-xl font-bold text-green-500 ">Your profit
        $ 18</h2>
        </div>

            <button className="px-3 py-2 w-28 bg-green-500 rounded-md">Start selling</button>
             <div className="mb-8">100% Free to use · 900+ Products · Largest print <br /> network</div>
      </div>
      
      <div className="md:block img-section md:w-[70%]  md:h-[200px]   md:mt-10 ">
            <img className=" rounded-md h-[150x]" src="/image2.jpg" alt="" />
        </div>


    </div>

       



    </div>
  )
}

export default FifthPage
