import { ResponseModel } from "../helpers/interface";


export default interface IRequests<R>{

    get:(
        url:string,
        name:string
    )=>ResponseModel<R>

}