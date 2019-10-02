import React from 'react';
import UserListItem from './UserListItem';
import UserListLabel from './UserListLabel';

export default function UserList({index, user, label, removeItem}) {
    
    return (
        <>
            <UserListLabel />
            {user.map((user, index) => (
                <UserListItem  key={index} index={index} user={user} removeItem={removeItem}/>
            ))}
        </>        
    )
}


