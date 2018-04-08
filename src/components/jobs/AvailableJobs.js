import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class AvailableJobs extends Component {
  render() {
    return (
      <Text>OI</Text>
    );
  }
}

const mapStateToProps = () => {

};

export default connect(mapStateToProps, {

})(AvailableJobs);
