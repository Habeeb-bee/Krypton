import left from "./img/left.svg";
import locker from "./img/locker.svg";
import yuan from "./img/yuan.svg";
import eth from "./img/eth.svg";



const Future = () => {
    return (
        <div className="G8681 w-full h-auto px-[4vw] flex flex-col gap-[4em] mb-[7em] ">
       
       <div className="Frame38 flex flex-col items-start gap-[30px]">
       <div className="future text-4xl bg-hero-pattern  text-transparent bg-clip-text font-bold laptop:text-4xl">Be Part of the Open Economy of the Future.</div>

       <div className="G8657 flex flex-row text-white justify-start items-center gap-[10px]">
        <div className="text text-white">
        Powerful features
        </div>
        <img className=" " src={left} alt="" />
       </div>
       </div>



     <div class=" G8680 w-full px-5 grid grid-cols-4 grid-rows-4 gap-4">
 
  <div class="G8666 bg-[#141414] py-5 px-5 col-span-4 row-span-2  flex flex-col gap-[2em] items-start justify-start relative">
    <div className="div text-base	text-[#A5A5A5] text-start  ">INTERCHAIN ACCOUNTS</div>
    <div className="absolute w-1/2 h-1/4 top-1/4 -z-5  bg-[#fcf5ad40] blur-3xl opacity-60 rounded-full"></div>
    <img src={locker} alt="" />
    <div className="text text-4xl bg-hero-pattern  text-transparent bg-clip-text font-bold laptop:text-4xl">One secure account for all your digital assets.</div>

    <div className="soon text-[#A5A5A5] text-base">COMING SOON</div>
  </div>

 
  <div class="G8667 col-span-4   bg-[#141414] py-5 px-5 flex relative items-center justify-between">
   <div className="texts w-1/2 flex flex-col gap-[2em]">
    <div className="xchange  text-sm  text-[#A5A5A5]">
    DECENTRALIZED EXCHANGE
    </div>
    <div className="text text-[26px] bg-hero-pattern  text-transparent bg-clip-text font-bold laptop:text-4xl">Swap tokens & collectibles.</div>

     <div className=" soon  text-[#A5A5A5] text-sm">COMING SOON</div>
   
   </div>
   
   <div className="coin relative w-1/2 top-[10%] ">
   <div className="absolute w-2/3 h-1/2 top-[3em] right-[1em] bg-[#fcf5ad40] blur-xl opacity-90 rounded-full"></div>
   <img className="absolute -top-1/4" src={eth} alt="" />
   <img className="relative " src={yuan} alt="" />
   
   </div> 
  </div>

  
  <div class="G8668 col-start-1 col-span-2 row-span-2 bg-[#141414] py-5 px-5 flex flex-col gap-[2em]  items-start justify-center">
  <div className=" soon  text-[#A5A5A5] text-sm">LIQUIDITY POOL</div>

  <div className="text text-[26px] bg-hero-pattern  text-transparent bg-clip-text font-bold laptop:text-4xl">Provide liquidity, earn rewards.</div>

  <div className=" soon  text-[#A5A5A5] text-sm">COMING SOON</div>

  </div>

  

  
  <div class="G8669 col-start-3 col-span-2 row-span-2  bg-[#141414] py-5 px-5 flex flex-col gap-[4.5em] items-start justify-center">
  <div className=" soon  text-[#A5A5A5] text-sm">WRAPPED ETH</div>

<div className="text text-[26px] bg-hero-pattern  text-transparent bg-clip-text font-bold laptop:text-4xl">Eth Included</div>

<div className=" soon  text-[#A5A5A5] text-sm">COMING SOON</div>
  </div>
</div>

     </div>


       
    )
}

export default Future