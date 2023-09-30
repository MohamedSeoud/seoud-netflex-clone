export interface ResponseModel<T>{
data: { data:T, status: number }
isError: boolean
isFetched: boolean
isFetchedAfterMount: boolean
isFetching: boolean
isLoading: boolean
isLoadingError: boolean
isPlaceholderData: boolean
isPreviousData: boolean
isRefetchError: boolean
isRefetching: boolean
isStale: boolean
isSuccess: boolean
}

export interface DataModel{
page:number
results:MovieModel[]
total_pages:number
total_results:number
}


export  interface MovieModel{
adult:boolean
backdrop_path:string
genre_ids:number[]
id:number
original_language:string
original_title:string
overview:string
popularity:number
poster_path:string
release_date:string
title:string
video:boolean
vote_average:number
vote_count:number
}

export  interface UserModel{
    email:string,
    password:string

}

