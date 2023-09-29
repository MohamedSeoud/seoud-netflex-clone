import axios from "axios"
import IRequests from "./IRequests";
import { useQuery } from "react-query";
import { ResponseModel } from "../helpers/interface";



export class Requests<R> implements IRequests<R>{

    get(url: string, name: string):ResponseModel<R>{

        const fetchData=async()=>{
        const config = {
            method:'get',
            maxBodyLength:Infinity,
            url:url,
            headers:{}
        }
        return await axios.request(config).then(res=>{
            return res
        }).catch(err=>{
            console.log(err)
        })
    }
    const GetAllData=()=>{
        return useQuery([name],fetchData)
    }
    return GetAllData() as ResponseModel<R>
}}

    
