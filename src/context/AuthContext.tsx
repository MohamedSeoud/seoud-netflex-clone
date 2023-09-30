import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

interface UserModel{
   email:string,
   password:string,
}

interface UserAppModel extends UserModel{
  Register:(email:string,password:string)=>void
  Login:(email:string,password:string)=>void
  Logout:()=>void
}
const initialState:UserModel ={
  email:"",
  password:"",
}
const AuthContext = createContext<UserAppModel>({} as UserAppModel);

export function AuthContextProvider({children}:{children:React.ReactNode}) {

  const[user,setUser]= useState<UserModel>(initialState);
  const{password,email} = user
  const navigate = useNavigate()

  const Register =async (email:string,password:string)=>{
    try{
    await createUserWithEmailAndPassword(auth,email,password)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully Registered',
        showConfirmButton: false,
        timer: 3500
      })
      setUser({email:email??"",password:password})
      navigate('/')

    }
    catch(c){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Something went wrong please put proper data`,
        showConfirmButton: false,
        timer: 3500
      })
    }
  }
  const Login =async (email:string,password:string)=>{

  try{
    await signInWithEmailAndPassword(auth,email,password)
   
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully Registered',
        showConfirmButton: false,
        timer: 3500
      })
      setUser({email:email??"",password:password})

      navigate('/')
    }
  
   catch(c){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Something went wrong please put proper data`,
        showConfirmButton: false,
        timer: 3500
      })
    }
  }

  const Logout =async()=>{
    try{
    await signOut(auth)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully Logout',
        showConfirmButton: false,
        timer: 3500
      })
      setUser({} as UserModel)
      navigate('/sign-up')

    }
      catch(c){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Something went wrong please put proper data`,
        showConfirmButton: false,
        timer: 3500
      })
    }
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser({email:currentUser?.email ?? "", password:currentUser?.uid ?? "" })
    })
    return()=>{
      unSubscribe()
    }

  },[])

  return (
    <AuthContext.Provider value={{password,email,Register,Logout,Login}} >
        {children}
    </AuthContext.Provider>
  )
}

export function UserAuth(){
    return useContext(AuthContext)

}
