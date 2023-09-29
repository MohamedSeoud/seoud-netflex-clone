import { Urls } from '../helpers/HttpUrls'
import { MovieModel } from '../helpers/interface'

function HeroSlider({item}:{item:MovieModel}) {
  return (
    <div className=' w-[100%] h-[550px] flex justify-center items-center'>
        <div className=' absolute  h-[550px] w-full bg-gradient-to-r from-black'/>
        <img className='w-[100%] h-[100%] object-cover' src={Urls.imageURL+item.backdrop_path} alt={item.title}/>

        <div className=' absolute z-10  lg:px-20 sm:px-8  px-4  gap-y-5 w-[100%] flex flex-col gap-3'>

                <div className=' text-3xl font-semibold text-white'>
                    {item.title}


                </div>
                
                <div className=' flex fle-row   gap-8  w-[100%] justify-start items-start'>

                    <button className=' uppercase  text-white border-2 py-3 px-5 hover:text-black hover:bg-white
                    border-white'> play  </button>

                    <button className=' uppercase  text-white border-2 py-3 px-5 hover:text-black hover:bg-white
                    border-white'> watch later</button>

                </div>

                <div className=' uppercase text-sm font-normal text-gray-300'>
                    released : {item.release_date}
                </div>

                <div className='  text-sm font-medium w-[70%] lg:w-[60%] text-white'>
                    {item.overview}
                </div>
            <div>

            </div>

        </div>

    </div>
  )
}

export default HeroSlider
