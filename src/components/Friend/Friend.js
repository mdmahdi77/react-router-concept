import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, email, id} = props.friend
    const history = useHistory()

    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }
    return (
        <div className="friend">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Id: <Link to={`/friend/${id}`}>Show Friend Details {id}</Link></p>
            <button onClick={() =>handleClick(id)}>Details</button>
        </div>
    );
};

export default Friend;