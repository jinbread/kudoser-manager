import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList'
import produce from 'immer'
import moment from 'moment'
import { Plus, RotateCcw } from 'react-feather'

import firebase from './firebase'

// firebase.firestore().collection('kudoser').add({
//     id: 1,
//     name: "박형준",
//     incoming: "09",
//     number: "1기",
//     major_1: "경영학과",
//     updated_at: "2019-09-30 21:00:00"
// })

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('kudoser')
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setData(newData)
      })
  }, [])


  const addItem = () => {
    const name = document.querySelector('#nameinput').value.trim();
    const number = document.querySelector('#numberinput').value.trim();
    const incoming = document.querySelector('#incominginput').value.trim();
    const major_1 = document.querySelector('#major1input').value.trim();
    const updated_at = moment().format();
    
    if (name && number && incoming && major_1) {
      const nextState = produce(data, draftState => {
        draftState.push({ name, number, incoming, major_1, updated_at });
        firebase
          .firestore()
          .collection('kudoser')
          .add({ 
            name, 
            number, 
            incoming, 
            major_1, 
            updated_at  
          })
      });
      document.querySelector('#nameinput').value = '';
      document.querySelector('#numberinput').value = '';
      document.querySelector('#incominginput').value = '';
      document.querySelector('#major1input').value = '';
      
      setData(nextState);
    }
  }

  const removeItem = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="App">
      <table className="user-list">
        <tbody>
          <UserList user={data} removeItem={removeItem}/>
            <tr className="user-list-input-container">
              <td className="user-list-input"><input style={{width: "60px"}} id="numberinput" type="text"/></td>  
              <td className="user-list-input"><input style={{width: "100px"}} id="nameinput" type="text"/></td>  
              <td className="user-list-input"><input style={{width: "60px"}} id="incominginput" type="text"/></td>
              <td className="user-list-input"><input style={{width: "200px"}} id="major1input" type="text"/></td>
              <td className="user-list-input"></td>
              <td className="user-list-btn">
                <div className="button" onClick={() => addItem()}><Plus size={24}/></div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}



export default App;
