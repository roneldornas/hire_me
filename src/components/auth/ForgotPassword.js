import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../common';
import { 
  emailChanged
} from '../../actions/auth';

class ForgotPassword extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <Text>Hello World</Text>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, error_message } = auth;

  return { email, error_message };
};

export default connect(mapStateToProps, {
  emailChanged
})(ForgotPassword);
