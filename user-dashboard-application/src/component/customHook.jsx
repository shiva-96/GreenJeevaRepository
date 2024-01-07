import { useState, useEffect } from 'react';

function useUserData(params) {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.org/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error.');
                }
                return response.json();
            })
            .then(users => {
                let userDetails = users
                setUsers(userDetails)
            })
            .catch(error => {
                alert('Server error .');
            });
    }, []); 
    return { users, addUser };
}

export default useUserData