import React from 'react'

export default function UserListLabel() {
    
    return (
        <>
            <tr className="user-list-item-container">
                <td className="user-list-label">기수</td>  
                <td className="user-list-label">이름</td>
                <td className="user-list-label">학번</td>
                <td className="user-list-label">본전공</td>
                <td className="user-list-label">업데이트</td>
                <td className="user-list-label"></td>
            </tr>
        </>
    )
}