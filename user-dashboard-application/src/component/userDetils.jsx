import React from 'react';
import './userDetails.css'

export default function userDetils(props) {

    return (
        <div className="userInfo">
            <h2>{props.firstname} Information</h2>
            <hr />
            <p><strong>First Name:</strong> {props.firstname}</p>
            <p><strong>Last Name:</strong> {props.lastname}</p>
            <p><strong>Phone No:</strong> {props.phone}</p>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Date Of Birth:</strong> {props.birthDate}</p>
            <div className="address">
                <p><strong>Address:</strong></p>
                <ul>
                    <li><strong>Street:</strong> {props.address?.street}</li>
                    <li><strong>Suite:</strong> {props.address?.suite}</li>
                    <li><strong>City:</strong> {props.address?.city}</li>
                    <li><strong>Zipcode:</strong> {props.address?.zipcode}</li>
                    <div className="geo">
                        <p><strong>Geo:</strong></p>
                        <ul>
                            <li><strong>Lat:</strong> {props.address?.geo?.lat}</li>
                            <li><strong>Lng:</strong> {props.address?.geo?.lng}</li>
                        </ul>
                    </div>
                </ul>
            </div>
            <p><strong>Website:</strong> <a href={`http://${props.website}`} target="_blank" rel="noopener noreferrer">{props.website}</a></p>
        </div>
    )
}
