import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let {friendId} = useParams()
    const [detail, setDetails] = useState([])
    const {name, email, phone, website} = detail
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])

    return ( 
        <div>
            <h1>{name}</h1>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
        </div>
    );
};

export default FriendDetail;