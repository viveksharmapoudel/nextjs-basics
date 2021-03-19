import React from 'react';
 import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
 
 // Shape of form values
 interface FormValues {
   email: string;
   password: string;
 }
 
 
    // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
    const InnerForm = (props: FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting } = props;
    return (
        <Form>
        <Field type="email" name="email" />
        {touched.email && errors.email && <div>{errors.email}</div>}
    
        <Field type="password" name="password" />
        {touched.password && errors.password && <div>{errors.password}</div>}
    
        <button type="submit" disabled={isSubmitting}>
            Submit
        </button>
        </Form>
    );
    };


  // Wrap our form with the withFormik HoC
  const MyForm = withFormik<MyFormProps, FormValues>({
    
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        email: props.initialEmail || '',
        password: '',
      };
    },
  
    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
      let errors: FormikErrors<FormValues> = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!isValidEmail(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
  
    handleSubmit: values => {
      // do submitting things
    },
  })(InnerForm);
 
 // Use <MyForm /> wherevs
 const Basic = () => (
   <div>
     <h1>Contact US:</h1>
    <MyForm/>
   </div>
 );
 
 export default Basic;



// // import { withFormik, FormikProps, 
// //         FormikErrors, Form, Field } from 'formik';

// import {Formik, Field, Form } from 'formik';
// import { resolve } from 'node:path';

// // interface FormValues {
// //     name: string;
// //     email: string;
// //     comment: string;
// // }

// export default function  contact (){
//     // const { touched, errors, isSubmitting }= props;

//     return (
//         <div>
//             <h2> Contact US</h2>

//         <Formik
//             initialValues={{ name:"", email:"", comment:""}}
//             onSubmit= {
//                 async values =>{
//                     await new Promise (resolve=> setTimeout(resolve,500));
//                     alert(JSON.stringify(values,null,2));
//                 }
//             }
//         >
//             <Form>

//                 <label for="name">Name</label>
//                 <Field name="name" type="text"/><br/>

//                 <label for="email">Email</label>
//                 <Field name="email" type="email"/><br/>

//                 <label for="comment">Comment</label>
//                 <Field name="comment" type="text"/><br/>
               
//                 <button type="submit"> Submit</button>
//             </Form>
//         </Formik>
//         </div>

//     )
// }






//         // <Form>

//         //     <h2>Contact Us</h2>
//         // <Field type="text" name="name"/>
//         // {touched.name && errors.name && <div>{errors.name}</div>}

//         // <Field type="email" name="email"/>
//         // {touched.email && errors.email && <div>{errors.email}</div>}

//         // <Field type="text" name="comment"/>
//         // {touched.comment && errors.comment && <div>{errors.comment}</div>}
        
//         // <button type="submit" disabled={isSubmitting}>
//         //     Submit
//         // </button>
        
//         // </Form>
