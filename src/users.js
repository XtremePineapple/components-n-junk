import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';

const Pager = ({count}) => {
    let idx = []
    for(let i = 1; i <= Math.ceil(count / 50); i++){
        idx.push(i)
    }

    return <div >
        {idx.map(x => {
            return <a key={x} className = "page" href={ '#view=users&page=' + x }>{x}</a>
        })}
    </div>
}

const Users = ({page}) => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        fetchUsers(page)
            .then(response => {
                setUsers(response.users)
                setCount(response.count)
            })
    }, [page])

    return (
        <div>
            <Pager count={count} />
            <hr/>
            Users page {page}
            <ul>
                {users.map(use => {
                    return(<li key={use.id}>{use.fullName}</li>)
                })}
            </ul>
        </div>
    );
}

export default Users;