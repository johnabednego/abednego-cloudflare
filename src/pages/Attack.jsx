import React, { useEffect, useState } from 'react'
import axios from "axios";
import { SideBar } from '../components/SideBar'
import { Processing } from '../components/Processing'
import { Error } from '../components/Error';
import { MainTitle } from "../components/MainTitle"
import { ColumnChart } from '../components/ColumnChart';
import ApexCharts from 'apexcharts'
import { Charts } from '../components/Charts';
const baseURL = "https://general.abednego.workers.dev/attack-layer3";

export const Attack = () => {
  let [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
  const handleRequest = async () => {
    await axios.get(`${baseURL}`).then((response) => {
      setData(PREV=> PREV=response.data);
    }).catch(error => {
      setError(error.message)
    });

    let configureData = []
    let percentage=[];
    let categories =[];

    if(data!=null){
      let category=data["data"]["total"].timestamps;
       
        let index =0;
        let count =0;
        while(index<category.length){
          let title = "2022-07-25";
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-07-25"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart1"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-07-26"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-07-26"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart2"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-07-27"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-07-27"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart3"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-07-28"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-07-28"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart4"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-07-29"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-07-29"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart5"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-07-30"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-07-30"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart6"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-07-31"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-07-31"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart7"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-01"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-01"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart8"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-02"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-02"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart9"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-03"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-03"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart10"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-04"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-04"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart11"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-05"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-05"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart12"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-06"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-06"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart13"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-07"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-07"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart14"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-08"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-08"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart15"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-09"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-09"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart16"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-10"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-10"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart17"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-11"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-11"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart18"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-12"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-12"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart19"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-13"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-13"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart20"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-14"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-14"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart21"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-15"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-15"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart22"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-16"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-16"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart23"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-17"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-17"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart24"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-18"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-18"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart25"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-19"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-19"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart26"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-20"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-20"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart27"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-21"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-21"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart28"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-22"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-22"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart29"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
        while(index<category.length){
          let title = "2022-08-23"
          let current= category[index].toString().substring(0, 10)
          if(current==="2022-08-23"){
          categories.push(data["data"]["total"].timestamps[index].toString().substring(11, 16))
         percentage.push(data["data"]["total"].values[index])
          }
          else{
            let string = "chart30"
            configureData[count] ={title,string,percentage,  categories};
            count++;
            percentage=[];
            categories=[]
            break;
          }
          index++;
        }
      for(let i=0; i<configureData.length; i++){
        let options = ColumnChart (configureData[i].title ,configureData[i].percentage, configureData[i].categories); 
        let chart = new ApexCharts(document.getElementById(`${configureData[i].string}`),options  );
            chart.render()
      }
  
    }

  }
    handleRequest();
  }, [data]);
  return (
    <div className='flex flex-col justify-center w-full p-0 m-0 overflow-hidden sm:flex-row ' style={{ "textAlign": "-webkit-center" }}>
      <div className=' h-fit sm:h-screen w-full sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[25%]'>
        <SideBar />
      </div>
      <div className=' w-full sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[75%] bg-[#FAFAFA]'>
        <MainTitle title={"A BarChat showing Layer 3 DDoS Attack"} />
        <div className='w-full  -z-10 flex flex-col items-center mt-2 sm:mt-[90px]' style={{ "textAlign": "-webkit-center" }}>
          {data == null ?
            <div className="sm:mt-[60px] lg:mt-[20px] h-screen ">
              <Processing />
              {error != null ? <div className='mt-[10px]'>
                <Error error={error} />
              </div> : ""}
            </div> :
           <Charts/>
          }
        </div>
      </div>
    </div>
  )
}
