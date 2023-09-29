import { Urls } from "../helpers/HttpUrls"
import { MovieModel } from "../helpers/interface"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


function SliderComponet({item}:{item:MovieModel}) {

const liked = false





  return (
    
    <div className=" justify-center w-[230px] h-[230px] items-center flex ">
     
      <img className=" w-[100%] h-[100%]" src={Urls.imageURL+item.backdrop_path} alt={item.title}/>
      <div className=" absolute opacity-0 hover:opacity-100  w-[230px] h-[230px] duration-300
       hover:bg-black/80  cursor-pointer">
        <div className=" w-[100%] h-[100%] flex flex-col  items-center ">
            <span className={`w-[100%] p-6 h-fit flex ${liked?"text-red-600":"text-white"} justify-start items-start`}>
                { !liked ?<AiOutlineHeart size='2.5rem'/>
                  : <AiFillHeart size='2.5rem' />
                }

            </span>
            <span className="w-[100%] p-2 h-fit flex justify-center items-start">
                {item.title}
            </span>
            <span className="w-[100%] uppercase p-2 h-fit flex justify-center items-start">
                rate : {item.vote_average}
            </span>


        </div>
       </div>
    </div>
  )
}

export default SliderComponet
