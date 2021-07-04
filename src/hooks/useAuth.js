import React, { useState, useEffect } from 'react';
import { getStorage } from '../utils';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({});

    const getData = async () => {
        const data = await getStorage('user');
        if (data !== null) {
            setUser(data);
            setAuthenticated(true)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return {
        authenticated,
        user
    };
};
export default useAuth;
