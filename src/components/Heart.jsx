import Torus from './img/Thorus.svg';
import Torus2 from './img/Thorus_02.svg';
import eth from './img/eth.svg';
import shield from './img/shield.svg';
import chart from './img/chart.svg';
import star from './img/star.svg';
import left from './img/left.svg';


const cardsData = [
    {
      id: 1,
      title: "Marketplace",
      description: "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.",
      image: eth,
    },
    {
      id: 2,
      title: "Security provider",
      description: " With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards.",
      image: shield,
    },
    {
      id: 3,
      title: "Router",
      description: " A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin.",
      image: chart,
    },
    {
      id: 4,
      title: "Custodian",
      description: "Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.",
      image: star,
    },
  ];
  


const Heart = () => {
    return(
        <div className="G8687 flex flex-col gap-[4em] h-auto w-full px-[4vw] relative mb-[7em] animate-fade-in" >
            <div className="frame31 flex flex-col items-center gap-[1em]">
                <div className="enter text-sm text-white text-center opacity-60">
                ENTER THE KRYPTON HUB  
                </div>
                <div className="theheart bg-hero-pattern text-center  text-transparent bg-clip-text text-[45px] font-medium">
                The Heart of the Interchain.  
                </div>
                <div className="serving text-white text-center">
                Serving as the economic center of krypton, the krypton Hub is a blockchain that provides vital services to the Interchain 
                </div>

                <div className="torus absolute -top-[4.5em] -z-10   ">
            <img className='absolute w-[30em] blur-[7px] opacity-70' src={Torus2} alt="" />
                <img className=' w-[30em] blur-[17px] opacity-70 ' src={Torus} alt="" />
                
            </div>
            </div>

            <div className="G8685 grid grid-cols-1 gap-[4em] p-6 tablet:grid-cols-2 ">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center text-white relative"
        >
          <img
            className="w-24 h-24 mb-4  object-cover"
            src={card.image}
            alt= ""
          />
          <div className=" absolute top-[3em] bg-[#fcf5ad40] blur-[10px] w-[3.5em] h-10" >

          </div>
                     

          <div className="text-lg font-semibold text-center">{card.title}</div>
          <div className="text-sm text-center ">{card.description}</div>
        </div>
      ))}
   
    </div>

    <div className="F20 flex flex-row justify-center items-center gap-[10px] py-[20px] px-[10px]  bg-community-btn w-[10em] h-auto pointer">
    <div className="text">Krypton Hub</div> 
            <img className=" " src={left} alt="" />
          </div>
          

        </div>

        
    )
}

export default Heart