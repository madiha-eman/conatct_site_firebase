import React, { useState, useEffect } from "react";
// import firebaseDb from "../Config";
import firebase from "firebase/app";
import 'firebase/database'
import Navbar from "../navbar";

const Contactdetails = () => {

       
    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebase.database().ref('userDataRecords').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount

    // const addOrEdit = obj => {
    //     if (currentId == '')
    //         firebaseDb.child('userDataRecords').push(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             }
    //         )
    //     else
    //         firebaseDb.child(`userDataRecords/${currentId}`).set(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             }
    //         )
    // }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
            firebase.database().ref(`userDataRecords/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className='container'>
            <div className="row">
                <div className="col-12 col-lg-10">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone No.</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Message</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].firstName}</td>
                                        <td>{contactObjects[id].lastName}</td>
                                        <td>{contactObjects[id].phoneNumber}</td>
                                        <td>{contactObjects[id].emailID}</td>
                                        <td>{contactObjects[id].addAddress}</td>                                   
                                        <td>{contactObjects[id].message}</td>


                                        <td>
                                            {/* <a className="btn text-primary" >
                                                <i className="fas fa-pencil-alt"></i>
                                            </a> */}
                                            <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
                </div>
            </div>
        </>
    )
}

export default Contactdetails
