import React, { useEffect, useState } from 'react'
import axios from "axios";
import { SideBar } from '../components/SideBar'
import { Processing } from '../components/Processing'
import { Error } from '../components/Error';
import {MainTitle} from "../components/MainTitle"
const baseURL = "https://general.abednego.workers.dev/popular-domains";

export const Domains = () => {
  let [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
  const handleRequest = async () => {
    await axios.get(`${baseURL}`).then((response) => {
      setData(PREV=> PREV=response.data);
    }).catch(error => {
      setError(error.message)
    });

  }
    handleRequest();
  }, [data]);
  return (
    <div className='flex flex-col justify-center w-full p-0 m-0 overflow-hidden sm:flex-row ' style={{ "textAlign": "-webkit-center" }}>
      <div className=' h-fit sm:h-screen w-full sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[25%]'>
        <SideBar />
      </div>
      <div className=' w-full sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[75%] bg-[#FAFAFA]'>
       <MainTitle title={"A List of Popular Domains"} />
        <div className='w-full  -z-10 flex flex-col items-center mt-2 sm:mt-[90px]' style={{ "textAlign": "-webkit-center" }}>
          {data == null ?
            <div className="sm:mt-[60px] lg:mt-[20px] h-screen ">
              <Processing />
              {error != null ? <div className='mt-[10px]'>
                <Error error={error} />
              </div> : ""}
            </div> :
            <div className='h-full w-full sm:pb-[15px] overflow-scroll lg:overflow-hidden sm:mt-3 '>
              <div className='drop-shadow-lg w-[90%] sm:w-[80%] h-fit rounded-tr-[25%] rounded-tl-[25%] bg-[#D0650D] items-center' style={{ "textAlign": "-webkit-center" }}>
                <h1 className=' text-white text-[25px] font-extrabold pt-1 drop-shadow-md '>Ranking Entries</h1>
              </div>
              <div className=' pb-3 border-l-[10px] border-l-[#D0650D] border-r-[10px] border-r-[#D0650D] border-t-[10px] border-t-[#D0650D] border-b-[50px] border-b-[#D0650D] -mt-1 drop-shadow-md h-fit bg-white w-[100%] sm:w-[90%] rounded-tr-[50px] rounded-tl-[50px] rounded-br-[50px] rounded-bl-[50px] '>
                <div className=' flex text-[#022038] font-bold text-[20px] break-words '>
                  <h1 className='flex-1 '>Rank</h1>
                  <h1 className=' flex-1 border-l-[2px] border-r-[2px] border-[#022038] '>Domain</h1>
                  <h2 className='flex-1 '>Category</h2>
                </div>
                <div className='h-[2px] bg-[#022038]'></div>
                {data.rankingEntries.map(data => {
                  return <>
                    <div className='flex text-[#022038] font-bold text-[15px] break-words'>
                      <div className='group items-center justify-center flex flex-1 mt-[8px]'>
                        {data.rankChange===1?
                          <div className='-ml-[20%] invisible group-hover:visible h-fit  w-fit bg-[#FAFAFA]'>
                          <div className='h-2 bg-green-600 '></div>
                          <h1>Positively Changed</h1>
                        </div>:""  
                      }
                      {data.rankChange===-1?<div className='-ml-[20%] invisible group-hover:visible h-fit  w-fit bg-[#FAFAFA]'>
                          <div className='h-2 bg-red-600 '></div>
                          <h1>Negatively Changed</h1>
                        </div>:""}
                       {data.rankChange===1?
                        <div className=' h-3 w-3 rounded-[50%] bg-green-600 '></div>:""}
                        {data.rankChange===-1?
                        <div className=' h-3 w-3 rounded-[50%] bg-red-600 '></div>:""}
                        <h1>{data.rank + 1}</h1>
                      </div>
                      <h1 className='flex-1 border-l-[2px] border-r-[2px] border-[#022038]'>{data.domain}</h1>
                      <h1 className='flex-1 mb-[10px]'>{data.category}</h1>
                    </div>
                    <div className='h-[1px] w-[80%] bg-[#022038]'></div>
                  </>
                })}
              </div>
            </div>}
        </div>
      </div>
    </div>
  )
}
