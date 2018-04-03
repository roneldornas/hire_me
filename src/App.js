import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyAkBXrijQSUAl0zV1Vw9TxUI8wWc2Z2VEI',
            authDomain: 'hire-me-6c68a.firebaseapp.com',
            databaseURL: 'https://hire-me-6c68a.firebaseio.com',
            projectId: 'hire-me-6c68a',
            storageBucket: 'hire-me-6c68a.appspot.com',
            messagingSenderId: '206531134583'
        };
        Firebase.initializeApp(config);
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;
