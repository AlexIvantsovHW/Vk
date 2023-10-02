import { NavLink } from "react-router-dom";

export const SidebarElement = (
  func: any,
  Size: number,
  text: string | number,
  link:string,
  click:any,
) => {
const textType:string="col d-none d-md-flex justify-content-start align-items-center g-0"  
const imgType:string="col col-md-3 border border-danger d-flex justify-content-center g-0";
  return (
    <div className="row mt-1 w-100 border border-danger mx-auto">
      <div className="col border border-danger">
         <NavLink to={link} className='text-decoration-none' onClick={click}> 
          <div className="row">
            <div className={imgType}>{func(Size)}</div>
            <div className={textType}>{text}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
