import image from '../assets/images/icon-close.png'
import { Icon } from '@iconify/react';

function Footer() {
  return (
<div className=" border-t-[1px] border-white text-white sm:px-4 px-1">
  <div className="container flex flex-col justify-between py-6 sm:flex-row">
    <div className="flex flex-col justify-center items-center gap-3  ">
      <div className="flex flex-row justify-center items-center  ">
        <p className="text-center font-body text-white md:text-left">
          <a href="/">
            <img src={image} className="w-12 lg:w-36 " alt="logo image" />
          </a>    
        </p>
      </div>
      <div className="text-white font-bold "> © Copyright 2023 Seoud.</div>
    </div>
    <div className="flex flex-col items-center justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
      <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
        <p className="font-body text-lg uppercase sm:pb-0 pb-4 text-white">{`Let's connect >` }</p>
        <div className="hidden sm:block">
          <i className="bx bx-chevron-right text-3xl text-yellow" />
        </div>
      </div>
      <div className="flex  text-white  items-center justify-center   px-2 sm:justify-start sm:pt-0">
        <a href="https://github.com/MohamedSeoud?tab=repositories" target="_blank" className=' hover:scale-110'>
        <Icon icon="octicon:mark-github-16" color="#f8fafc" width="30" height="30" />

        </a>
        <a href="https://twitter.com/SohammedK" target="_blank" className="pl-4  hover:scale-110">
        <Icon icon="fa6-brands:square-x-twitter" color="#f8fafc" width="30" height="30" />
        </a>
        <a href="https://www.linkedin.com/in/mohammed-seoud-1327a0234/" target="_blank" className="hover:scale-110 pl-4">
        <Icon icon="skill-icons:linkedin" color="#f8fafc" width="30" height="30" />
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
