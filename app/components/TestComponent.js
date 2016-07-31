import React from 'react';
import { View } from 'react-native';

function TestComponent(props) {
  return (
    <View style={props.style}>
      {props.children}
    </View>
  );
}

// 定義 prpos
TestComponent.propTypes = {
  style: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired,
};

export default TestComponent;
