import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend
    const friendStyle = {
        border: '1px solid green',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'
    }
    const history = useHistory()

    const handleClick = (frid) => {
        history.push(`/friend/${frid}`)
    } 


    return (

        <div style={friendStyle}>
            <h1>{name}</h1>
            <p>{email}</p>
            {/* <Link to={`/friend/${id}`}> 
                <button>Details</button>
            </Link> */}
            <button onClick={() => handleClick(id)}>details</button>
        </div>

    );
};

export default Friend;