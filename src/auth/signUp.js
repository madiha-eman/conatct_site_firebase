import React, { useState } from 'react'
import Navbar from '../navbar'
import firebase from 'firebase/app'
import 'firebase/auth'
// import  {auth}  from '../Firebase'

const SignUp = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')



    const SignUpData = async (e) => {
        e.preventDefault();
 console.log(password,email)
//  firebaseDb.auth().createUserWithEmailAndPassword(email, password).then(() => {
//     db.collection('SignedUpUsersData').doc(cred.user.uid)
//     set({
//         Name: name,
//         Email: email,
//         Password: password
//     }).then(() => {
//         setName('');
//         setEmail('');
//         setPassword('');
//         setError('');
//         props.history.push('/login');
//     }).catch(err => setError(err.message));
// }).catch(err => setError(err.message));
// }
    //  Firebase
    try{
        const result =  await firebase.auth().createUserWithEmailAndPassword(email,password)
        alert(`welcome ${result.user.email}`)

    }catch(err){
         alert(err.message)
    }
    //  .then(()=>{
    //  }).catch(()=>{
    //    alert("Error Occured or user not created")
    //  })
    }
    return (
        <>
            <div className='container justify-content-center'>
                <form onSubmit={SignUpData}>
                    {/* <label>
                        Name:
                    </label>
                    <input type='text'
                     placeholder='enter your Name' 
                     value={name}
                    onChange={(e)=>setName(e.target.value)}
                    /><br /><br /> */}
                    <label>
                        Email:
                    </label>
                    <input type='text'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                     placeholder='enter your Email'
                     
                     
                     /><br /><br />
                    <label>
                        Password:
                    </label>
                    <input type='password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     placeholder='enter your Password'
                     
                     /><br /><br />
                      <button type='submit'> Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp
