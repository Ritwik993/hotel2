import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { doc, updateDoc ,deleteDoc} from "firebase/firestore";
import './GetData.css'

const GetData = () => {
  const [users,setUsers]=useState();
  const[updateNumberOfGuests,setUpdateNumberOfGuests]=useState(0);

  const handleGetUser = async () => {
    const querySnapshot = await getDocs(collection(db, "customers"));  
    setUsers(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };




  const updateUser = async (id, updateNumberOfGuests) => {
    const userDoc = doc(db, "customers", id);
    const newField = { numberOfGuests:updateNumberOfGuests };
    await updateDoc(userDoc, newField);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "customers", id);
    await deleteDoc(userDoc);
  };


  return (
    <div className="getData">
      <h1>User Management</h1>
      <br />
      <button onClick={handleGetUser}>Get User</button>
      {/* <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button> */}

      {users && (
        <div>
          {users.map((user) => {
            return (
              <div key={user.id} className="user">
                <h1>Name: {user.name}</h1>
                <h1>Email: {user.email}</h1>
                <h1>checkInDate: {user.checkInDate}</h1>
                <h1>checkOutDate: {user.checkOutDate}</h1>
                <h1>numberOfGuests:{user.numberOfGuests}</h1>
                <div className="flex">
                  <input
                    className="user-input"
                    type="number"
                    onChange={(e) => setUpdateNumberOfGuests(e.target.value)}
                  />
                  <button
                    className="user-button"
                    onClick={() => updateUser(user.id, Number(updateNumberOfGuests))}
                  >
                    Update Guest Number
                  </button>
                </div>

                <button className="user-delete" onClick={() => deleteUser(user.id)}>
                  Delete User
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GetData;
