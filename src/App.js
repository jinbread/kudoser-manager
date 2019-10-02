import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList'
import produce from 'immer'

function App({users, labels, index}) {
  const initialData = [{
    "id": 1,
    "name": "박형준",
    "incoming": "09",
    "number": "1기",
    "major_1": "경영학과",
    "updated_at": "2019-09-30 21:00:00"
  },
  {
      "id": 2,
      "name": "이진재",
      "incoming": "09",
      "number": "14기",
      "major_1": "건축사회환경공학과",
      "updated_at": "2019-09-30 21:00:00"
  }];
  const [data, setData] = useState(initialData);

  const addItem = () => {
    const name = document.querySelector('#nameinput').value.trim();
    const number = document.querySelector('#numberinput').value.trim();
    const incoming = document.querySelector('#incominginput').value.trim();
    const major_1 = document.querySelector('#major1input').value.trim();
    if (name && number) {
      const nextState = produce(data, draftState => {
        draftState.push({ name, number, incoming, major_1 });
      });
      document.querySelector('#nameinput').value = '';
      document.querySelector('#numberinput').value = '';
      
      setData(nextState);
    }
  }

  const removeItem = index => {
    console.log(index)
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="App">
      <table className="user-list">
        <tbody>
          <UserList user={data} label={labels} removeItem={removeItem}/>
            <tr className="user-list-item-container">
              <td className="user-list-item"><input id="numberinput" type="text"/></td>  
              <td className="user-list-item"><input id="nameinput" type="text"/></td>  
              <td className="user-list-item"><input id="incominginput" type="text"/></td>
              <td className="user-list-item"><input id="major1input" type="text"/></td>
              <td className="user-list-item"></td>
              <td className="user-list-item"><div onClick={() => addItem()}>추가</div></td>  
              <td className="user-list-item"><div>리셋</div></td>  
            </tr>
        </tbody>
      </table>
    </div>
  );
}



export default App;
