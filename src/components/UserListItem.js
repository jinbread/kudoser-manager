import React from 'react'
import moment from 'moment'

export default function UserListItem({user, removeItem, index}) {
    
    
    return (
        <>
            <tr className="user-list-item-container">
                <td className="user-list-item">{user.number}</td>  
                <td className="user-list-item">{user.name}</td>
                <td className="user-list-item">{user.incoming}</td>
                <td className="user-list-item">{user.status}</td>
                <td className="user-list-item">{user.major_1}</td>
                <td className="user-list-item">{user.major_2}</td>
                <td className="user-list-item">{user.workplace}</td>
                <td className="user-list-item">{user.jobtitle}</td>
                <td className="user-list-item">{user.phone}</td>
                <td className="user-list-item">{user.email}</td>
                <td className="user-list-item">{moment(user.updated_at).fromNow()}</td>
                <td className="user-list-item"><button>수정</button></td>
                <td className="user-list-item"><button onClick={() => removeItem(index)}>삭제</button></td>
            </tr>
        </>
    )
}