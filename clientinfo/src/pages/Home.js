import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getClientInfo } from '../redux/clientInfo/actions';


const Home = () => {
    const clients = useSelector(state => state);
    const dispatch = useDispatch();

    console.log('clients', clients)

    function onGetData() {
        dispatch(getClientInfo());
    }

    return (
        <>
            <h1>Home page</h1>
            <button onClick={onGetData}>View Clients</button>

        </>
    );
}

export default Home;