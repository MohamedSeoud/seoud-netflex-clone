import  { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import * as Yup from 'yup'
import { UserModel } from '../helpers/interface';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { UserAuth } from '../context/AuthContext';


function Signup() {
    const[showPassword,setShowPassword] = useState(false);
    const[signIn,setSignIn] = useState(false);
    const{Login,Register} = UserAuth();
    

    
    const intialState:UserModel ={
        email:"",
        password:""
    } 

    const validationSchema = Yup.object({
        email:Yup.string().required('Required').email('Email not valid'),
        password:Yup.string().required('Required')
    })
    const onSubmit = (values:UserModel)=>{
        if(signIn){
            Login(values.email,values.password)
        }

        else{
            Register(values.email,values.password)
        }
    }

  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <img className='w-[100%] h-[100%] object-cover'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/fba8c447-11d0-4735-9179-cb3f760df42b/EG-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
       <div className=' bg-black/50 top-0 left-0  absolute h-screen w-full'/>

       <div className=' fixed w-full px-4 my-24 z-50  '>
    <Formik onSubmit={onSubmit} initialValues={intialState} validationSchema={validationSchema}
    validateOnChange={false} validateOnBlur={false}>
       <Form className=' h-[550px] max-w-[450px] my-7 flex flex-col justify-start py-10 items-center
        sm:w-[450px] w-[100%] bg-black/75 mx-auto gap-8 '>
            <div className=' text-center text-white text-4xl py-6 font-medium uppercase'>
            { !signIn? "Sign up": "Sign in"}

            </div>

            <div className=' w-[100%] h-fit   px-4 flex flex-col  gap-2 justify-center items-start'>
                <Field  name='email' type='email'
                 className=' h-[60px] rounded-2xl w-[100%] text-3xl px-4 font-semibold' placeholder='Email Address'/>
                  <div className=' text-red-600 text-3xl w-[100%] items-center justify-center text-center uppercase'>
                  <ErrorMessage  name='email'/>
                </div> 
            </div>

            <div className=' w-[100%] h-fit  text-black  flex items-end px-4 flex-col  gap-2 justify-center'>

                <div className=' flex flex-col items-end w-[100%]'>
                    <Field name='password' className=' h-[60px] rounded-2xl w-[100%] text-3xl px-4 font-semibold'placeholder='Password'
                    type={`${!showPassword?"password":"text"}`}/>
                 <span className=' relative bottom-[50px] right-3 cursor-pointer z-10' onClick={()=>setShowPassword(!showPassword)}>
                { !showPassword ?<AiFillEye size='2.5rem'/> :<AiFillEyeInvisible size='2.5rem'/>}
                </span>
                 </div>

                 <div className=' text-red-600 text-3xl w-[100%] relative bottom-8 items-center justify-center text-center uppercase'>
                    <ErrorMessage  name='password'/>
                </div> 

            </div>

                 <div className=' text-white  text-2xl relative bottom-[50px]  
                 w-[100%] items-center justify-center text-center uppercase'>
                { !signIn? " Have an account?": "Don't have an account?"}

                    <span className='text-red-600 hover:border-b-2 border-red-700 cursor-pointer'
                     onClick={()=>setSignIn(!signIn)}> { !signIn? "Sign in": "Sign up"}</span>
                </div> 

            <div className=' w-[100%] h-fit relative bottom-[50px]   px-4 flex flex-col  gap-2 justify-center items-start'>
                <button className=' h-[60px] uppercase border-red-600 border-2 hover:bg-transparent bg-red-600
                 text-white rounded-2xl w-[100%] text-3xl px-4 font-semibold'>
                    { !signIn? "Sign up": "Sign in"}
                </button>

            </div>



       </Form>
    </Formik>

       </div>

    </div>
  )
}

export default Signup
