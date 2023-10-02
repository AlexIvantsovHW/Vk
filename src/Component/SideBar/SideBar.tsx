import React, { useEffect, useState }  from 'react';
import { SidebarElement } from './SidebarElement';
import { LampOffImg, LampOnImg, LangImg, LoginImg, LogoutImg, MainImg, MessageImg, UsersImg } from '../Img';
import { ProfileImg } from './../Img';



const ContainerType:string='col-2 col-sm-2 col-md-2 vh-100 bg-dark text-info';
const Size:number=20;
const Sidebar=()=>{
    const [login,setLogin]=useState(true)
    const [day,setDay]=useState(true)      
    const handleLogin=()=>{setLogin(!login)}
    const handleDay=()=>{setDay(!day)}
    
   if(login){
    return(
        <div className={ContainerType}>
            <div className='mt-5 mb-4'>Logo</div>
            {SidebarElement(LangImg,Size,'Registration','/registration',null)}
            {SidebarElement(LangImg,Size,'Language','/',null)}
            {(day?
            SidebarElement(LampOffImg,Size,'Dark','/',handleDay)
            :SidebarElement(LampOnImg,Size,'Light','/',handleDay)
            )}
            {(login?
                SidebarElement(LoginImg,Size,'Login','/login',handleLogin)
                :SidebarElement(LogoutImg,Size,'Logout','/Logout',handleLogin)
            )}
        </div>
    )
   }
    return(
        <div className={ContainerType}>
            <div className='mt-5 mb-4'>Logo</div>
            {SidebarElement(ProfileImg,Size,'Profile','/profile',null)}
            {SidebarElement(MainImg,Size,'Main','/',null)}
            {SidebarElement(MessageImg,Size,'Message','/message',null)}
            {SidebarElement(UsersImg,Size,'Users','/users',null)}
            {SidebarElement(LangImg,Size,'Language','/',null)}
            {(day?
                SidebarElement(LampOffImg,Size,'Dark','/',handleDay)
                :SidebarElement(LampOnImg,Size,'Light','/',handleDay)
            )}
            {(login?
                SidebarElement(LoginImg,Size,'Login','/login',handleLogin)
                :SidebarElement(LogoutImg,Size,'Logout','/Logout',handleLogin)
            )}
        </div>
    )
}
export default Sidebar;