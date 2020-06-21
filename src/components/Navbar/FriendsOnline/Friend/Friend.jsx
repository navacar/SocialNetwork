import React from 'react';
import './Friend.css'

const Friend = (props) => (
    <div className="List">
            <img src='/icons/ObiWan.png' />
            <div>{props.name}</div>
    </div>
)
export default Friend