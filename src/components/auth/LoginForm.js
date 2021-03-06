import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
import { 
	emailChanged,
  passwordChanged,
  loginUser,
  forgotPassword
} from '../../actions/auth';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  attemptLogin() {
    const { email, password } = this.props;

		this.props.loginUser({ email, password });
  }

  forgotPassword() {
    this.props.forgotPassword();
  }

  renderError() {
    if (this.props.error_message) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>
            {this.props.error_message}
          </Text>
        </View>
      );
    }
  }

  renderButtons() {
    if (this.props.loading) {
      return (
        <Spinner
          color='#009688'
          size={60}
          type='ThreeBounce'
          style={styles.spinnerStyle}
        />
      );
    }

    return (
      <View>
        <CardSection
          style={{ marginTop: 45 }}
        >
        <Button
          onPress={this.attemptLogin.bind(this)}
        >
          Entrar
        </Button>
        </CardSection>

        <CardSection>
          <Text
            style={styles.textStyle}
          >
            OU
          </Text>
        </CardSection>

        <CardSection>
          <Button>
            Criar uma Conta
          </Button>
        </CardSection>

        <CardSection>
					<TouchableOpacity
            style={styles.forgotTextStyle}
            onPress={() => { this.forgotPassword(); }}
					>
					<Text>
            Esqueci minha senha
          </Text>
					</TouchableOpacity>
				</CardSection>
      </View>
        );
    }

  render() {
    return (
      <Card>
        <CardSection
          style={{ marginTop: 60 }}
        >
          <Input
            label='E-mail'
            placeholder='exemplo@dominio.com.br'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.emal}
          />
        </CardSection>
                
        <CardSection>
          <Input
            secureTextEntry
            label='Senha'
            placeholder='senha'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
                
        <View>
          {this.renderButtons()}
        </View>

        {this.renderError()}

        </Card>         
    );
  }
}

const styles = {
  textStyle: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
  },
  errorTextStyle: {
    color: '#f90202',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'titillium_web_light',
    height: 100,
    marginTop: 8
  },
  spinnerStyle: {
    marginTop: 48,
    alignSelf: 'center'
  },
  forgotTextStyle: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  }
};

const mapStateToProps = ({ auth }) => {
  const {
    email,
    password,
    error_message,
    loading
  } = auth;
    
  return {
    email,
    password,
    error_message,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  forgotPassword
})(LoginForm);
