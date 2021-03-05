import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let {friendId} = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    
    return (
        <div>
            <h1>Friend Details: {friendId}</h1>
            <h2>{friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;