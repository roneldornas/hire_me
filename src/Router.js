import React from 'react';
import {
  Scene,
  Stack,
  Router
} from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import ForgotPassword from './components/auth/ForgotPassword';
import AvailableJobs from './components/jobs/AvailableJobs';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          initial
          titleStyle={styles.titleStyle}
          navigationBarStyle={styles.barStyle}
        />
        <Scene 
          key="forgotPassword"
          component={ForgotPassword}
          title="Esqueci minha senha"
          titleStyle={styles.titleStyle}
        />
      </Stack>
      <Stack key="main">
        <Scene 
          key="availableJobs"
          component={AvailableJobs}
          title="Vagas disponíveis"
          titleStyle={styles.titleStyle}
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
