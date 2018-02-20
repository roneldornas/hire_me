import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { 
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onPressButton() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    render() {
        return (
            <Card>

                <CardSection style={{ marginTop: 60 }}>
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

                <CardSection style={{ marginTop: 45 }}>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Entrar
                    </Button>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        OU
                    </Text>
                </CardSection>

                <CardSection>
                    <Button>
                        Criar uma Conta
                    </Button>
                </CardSection>

            </Card>
        );
    }

}

const styles = {
    textStyle: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
