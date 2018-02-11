import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Firebase from 'firebase';
import reducers from './reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Primeira tela do Hire Me</Text>
                    <Text>Lorem ipslum</Text>
                </View>
            </Provider>
        );
    }
}

export default App;
