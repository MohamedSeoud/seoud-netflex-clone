import { useEffect, useState } from "react";
import { DataModel, MovieModel, ResponseModel } from "../helpers/interface";
import SliderComponet from "./SliderComponet";
import { Requests } from "../http/Requests";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HomeSlider({url,title,name}:{url:string,title:string,name:string}) {
    
    const fetchData = new Requests<DataModel>();
    const data:ResponseModel<DataModel> = fetchData.get(url,name)
    const [movie, setMovie] = useState([] as MovieModel[] );
  
    

    useEffect(() => {
        if(!data.isLoading){
            setMovie(data.data.data.results.slice(0,12))
        }
    
    }, [data.isLoading])




  return (
    <div className=" flex text-white w-[100%] h-fit py-16 flex-col gap-y-2 ">
        <div className=" flex w-[100%] text-3xl uppercase justify-start font-semibold items-start md:px-12">
            {title}

        </div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px

            // when window width is >= 768px
            300: {
              width: 768,
              slidesPerView: 3.4,
            },
          }}
        spaceBetween={50}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[100%]"
        >            
        { !data.isLoading &&
            movie.map((item)=>{
                return(<SwiperSlide><SliderComponet item={item}/></SwiperSlide>)
            })
            }
        </Swiper>
    </div>
  )
}

export default HomeSlider
