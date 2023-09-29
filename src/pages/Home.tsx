import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import { Urls } from "../helpers/HttpUrls";
import { DataModel, MovieModel, ResponseModel } from "../helpers/interface";
import { Requests } from "../http/Requests";
import HomeSlider from "../components/HomeSlider";

function Home() {

  const fetchData = new Requests<DataModel>();
  const data:ResponseModel<DataModel> = fetchData.get(Urls.requestPopular,'fechpopular')
  const [movie, setMovie] = useState({} as MovieModel )

  useEffect(() => {
    if(!data.isLoading){
      setMovie(data.data.data.results[Math.floor(Math.random()*data.data.data.results.length)])
    }
  }, [data.isLoading])

  return (
    <>
      { !data.isLoading &&
    <>
        <div className="w-[100%] h-[100%] flex flex-col">
          <HeroSlider item={movie} />
        </div>
        <div className=" flex flex-col w-[100% h-[100%] ">
          <HomeSlider title="Most Popular" url={Urls.requestPopular} name="fechpopular"/>

          <HomeSlider title="top rated" url={Urls.requestTopRated} name="getalltoprated"/>


          <HomeSlider title="trending" url={Urls.requestTrending} name="getalltrnding"/>


          <HomeSlider title="upcoming" url={Urls.requestUpcoming} name="getallupcoming"/>

          <HomeSlider title="Horror" url={Urls.requestHorror} name="getallhorror"/>




      </div>
    </>
      }
    </>

  )
}

export default Home
