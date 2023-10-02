import React from "react";


const textTheme: string = "mt-1 bg-secondary w-75 rounded-pill";
const Login = () => {
  return (
    <div className="col d-flex justify-content-center align-items-center bg-dark border border-danger text-white">
      <div className="row d-flex flex-column  bg-dark bg-gradient w-100 h-75  g-0">
        <div className="border border-danger" style={{ height: "30%" }}>
          <div className="row h-100 w-100 g-0" >
            <div
              className="col-4 border border-danger h-100 g-0 d-flex justify-content-center align-items-center">
              <div
                className="d-flex align-items-end justify-content-center border border-secondary rounded-circle bg-secondary"
                style={{ height: "100px", width: "100px" }}
              >
                +
              </div>
            </div>
            <div className="col border border-danger h-100 g-0">
              <div className={textTheme}>Name:</div>
              <div className={textTheme}>Status:</div>
              <div className={textTheme}>Job:</div>
              <div className={textTheme}>Study:</div>
              <div className="fst-italic">Update profile</div>
            </div>
          </div>
        </div>
        <div className="border border-danger" style={{ height: "70%" }}>
          Body
        </div>
      </div>
    </div>
  );
};

export default Login;
