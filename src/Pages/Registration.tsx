import { Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { Field, ErrorMessage,Form } from "formik";
import moment from"moment";

const textTheme: string = "mt-1 bg-secondary w-75 rounded-pill";
const date = moment().format('YYYY-MM-DD HH:mm:ss');

function TextError(props:any) {return <div className="error">{props.children}</div>;}
function passwordValidation(password:string){
    if(!password) 
        {return 'Required'}
    else if(typeof(password)!='string')
        {return 'password must be string!'}
 }
function nameValidation(name:string){
  if(!name){return 'Required'}
  else if(name.length>25)
    {return 'Name length is more than 25 symbols'}
  else if(name[0]!=name[0].toUpperCase())
    {return 'Name should be started with capital letter'}
}
function emailValidation(email:string){
    if(!email){return 'Required'}
}
export function inputForm(name:string,label:string,validate:any) {
  return (
    <div className="col col-lg-5 col-md-8 col-sm-10  mb-3 mt-2  text-center mx-auto">
      <label><h6>{label}</h6></label>
      <Field
      className="form-control  w-100 placeholder-glow text form-control-md" 
      component='input'
        name={name}
        validate={validate}
        placeholder={label}
        type={"input"}
      />
      <ErrorMessage name={name} component={TextError} className="Error" />
    </div>
  );}
type initialValuesType={name:string,email:string,password:string}
const initialValues:initialValuesType = { name:"", email: "", password: "" };
const Registration = () => {
    async  function onSubmit (values:any) {
        let name:string=values.name,
            password:string=values.password,
            email:string=values.email;

        let fData = new FormData();
        fData.append("name", name);
        fData.append("password", password);
        fData.append("email", email);
        console.log(name)
        console.log(email)
        console.log(password)
        {/* <NavLink to={'/'} /> */}
      };
  return (
    <div className="col d-flex justify-content-center align-items-center bg-dark border border-danger text-white">
      <div className="row d-flex flex-column  bg-dark bg-gradient w-100 h-75 g-0">
       <h4>REGISTRATION</h4>
       <div>
       <Formik
            initialValues={initialValues}
            onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
            }}
        >
        {({ isSubmitting }) => (
            <Form className="">
            {inputForm('name','name',nameValidation)}
            {inputForm('password','password',passwordValidation)}
            {inputForm('email','email',emailValidation)}
          <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
          <button type="submit" disabled={isSubmitting} className={`btn btn-dark border-0 mx-auto fw-bold`}>a {'signin'}</button>
          </div>
          <div className="row text-center text-white">
          <p className=" text-decoration-none">{'textReg'}<NavLink className='text-white fw-bold text-decoration-none ' to='/'> {'registration'}</NavLink> </p>
          </div>
        </Form>
      )}
    </Formik>
       </div>
      </div>
    </div>
  );
};

export default Registration;
