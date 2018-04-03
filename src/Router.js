import React from 'react';
import {
    Scene,
    Stack,
    Router
} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene
                key="login"
                component={LoginForm}
                title="Login"
                initial
                titleStyle={styles.titleStyle}
                navigationBarStyle={styles.barStyle}
                />
            </Stack>
        </Router>
    );
};

const styles = {
    titleStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontFamily: 'titillium_web_bold'
    },
    barStyle: {
        backgroundColor: '#009688'
    }
};

export default RouterComponent;
