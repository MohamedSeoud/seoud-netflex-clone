import { Urls } from "../helpers/HttpUrls"
import { MovieModel } from "../helpers/interface"


function SliderComponet({item}:{item:MovieModel}) {





  return (
    
    <div className=" justify-center w-[230px] h-[230px] items-center flex ">
     
      <img className=" w-[100%] h-[100%]" src={Urls.imageURL+item.backdrop_path} alt={item.title}/>
    </div>
  )
}

export default SliderComponet
