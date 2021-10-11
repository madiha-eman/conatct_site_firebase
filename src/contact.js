import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailID: "",
        addAddress: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;
  
      setUserData({ ...userData, [name]: value });
    };
 
    const submitData = (event) => {
        event.preventDefault();
        const { firstName, lastName, phoneNumber, emailID, addAddress, message } = userData;
    
        if (firstName && lastName && phoneNumber && emailID && addAddress && message) {
          const res = fetch(
            "https://contact-project-ebea5-default-rtdb.firebaseio.com/userDataRecords.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber,
                emailID,
                addAddress,
                message,
              }),
            }
          );
    
          if (res) {
            setUserData({
              firstName: "",
              lastName: "",
              phoneNumber: "",
              emailID: "",
              addAddress: "",
              message: "",
            });
     
           
            toast.success("Data Stored Successfully!")
          } else {
            alert("plz fill the data")
          }
        } else {
          alert("plz fill the data");
        }
      };
//     const initialFieldValues = {
//       firstName:"",
//        lastName:"",
//         phoneNumber:"",
//         emailID:"",
//        addAddress:"",
    //    message:""
//   }    //     firstName:"",
    //     lastName:"",
    //     phoneNumber:"",
    //     emailID:"",
    

//   var [userData, setUserData] = useState(initialFieldValues)

//   useEffect(() => {
//       if (props.currentId == '')
//       setUserData({
//               ...initialFieldValues
//           })
//       else
//       setUserData({
//               ...props.contactObjects[props.currentId]
//           })
//   }, [props.contactObjects])

//   const postUserData = e => {
//       var { name, value } = e.target
//       setUserData({
//           ...userData,
//           [name]: value
//       })
//   }
//   const submitData = e => {
//       e.preventDefault();
//       props.addOrEdit(userData)
//   }
    return (
        <>
          <div className='contactus-section'>
              <div className='container'>
               <div className='row'>
                   <div className='col-12 col-lg10 mx-auto'>
                       <div className='row'>
                           <div className='contact-leftside col-12 col-lg-5'>
                               <h1 className='main-heading fw-bold'> 
                                  Contact With Our<br /> Sales Team.
                               </h1>
                               <p className='main-hero-para'>
                               "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis
                               </p>
                               <figure>
                                   <img src='./images/hero1.jpg' alt='ContactUsImg' className='img-fluid'/>
                               </figure>
                           </div>
                           {/*---------------- right side contact us from ------------------- */}
                                <div className=' contact-rightside col-12 col-lg-7'>
                                    <form method='POST'>
                                      <div className='row'>
                                          <div className='col-12 col-lg-6 contact-input-field'>
                                              <input type='text'
                                              name='firstName'
                                              id=''
                                              className='form-control'
                                              placeholder='First Name'
                                              value={userData.firstName}
                                              onChange={postUserData}
                                              />
                                          </div>
                                          <div className='col-12 col-lg-6 contact-input-field'>
                                              <input type='text'
                                              name='lastName'
                                              id=''
                                              className='form-control'
                                              placeholder='Last Name'
                                              value={userData.lastName}
                                              onChange={postUserData}
                                              />
                                          </div>
                                          <div className='col-12 col-lg-6 contact-input-field'>
                                              <input type='text'
                                              name='phoneNumber'
                                              id=''
                                              className='form-control'
                                              placeholder='Phone Number'
                                              value={userData.phoneNumber}
                                              onChange={postUserData}
                                              />
                                          </div>
                                          <div className='col-12 col-lg-6 contact-input-field'>
                                              <input type='text'
                                              name='emailID'
                                              id=''
                                              className='form-control'
                                              placeholder='Email ID'
                                              value={userData.emailID}
                                              onChange={postUserData}
                                              />
                                          </div>
                                      </div>
                                       <div className='row'>
                                           <div className='col-12 contact-input-field'>
                                               <input type='text' 
                                               name='addAddress'
                                               id=''
                                               className='form-control'
                                               placeholder='Add Address'
                                               value={userData.addAddress}
                                               onChange={postUserData}
                                                />
                                           </div>
                                       </div>
                                       <div className='row'>
                                           <div className='col-12'>
                                               <input type='text' 
                                               name='message'
                                               id=''
                                               className='form-control'
                                               placeholder='Enter Your Message'
                                               value={userData.message}
                                               onChange={postUserData}
                                                />
                                           </div>
                                       </div>
                                       <div class="form-check form-checkbox-style">
                                          <input className="form-check-input" 
                                          type="checkbox" 
                                          value="" 
                                          id="flexCheckChecked" />
                                          <label className="form-check-label" className='main-hero-para'>
                                          I agree that the thapatechnicalpay may contact me at the
                                          email address or phone number above.
                                          </label>
                                        </div>
                                         <button type='submit' onClick={submitData}  className='btn btn-style w-100'>
                                             Submit
                                         </button>
                                    </form>
                                </div>
                       </div>
                   </div>
               </div>
              </div>
          </div>  
          <ToastContainer 
              position="top-center" />
        </>
    )
}

export default ContactUs
