import React from 'react'
import moment from 'moment'
import {X, Edit2} from 'react-feather'

export default function UserListItem({user, removeItem, index}) {
    
    
    return (
        <>
            <tr className="user-list-item-container">
                <td className="user-list-item">{user.number}</td>  
                <td className="user-list-item">{user.name}</td>
                <td className="user-list-item">{user.incoming}</td>
                <td className="user-list-item">{user.major_1}</td>
                <td className="user-list-item">{moment(user.updated_at).fromNow()}</td>
                <td className="user-list-btn">
                    <div className="button"><Edit2 size={20}/></div>
                    <div className="button" onClick={() => removeItem(index)}><X size={24}/></div>
                </td>
            </tr>
        </>
    )
}