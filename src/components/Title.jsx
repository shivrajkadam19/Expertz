import React from 'react';
import { Text } from 'react-native-paper';

const Title = ({children, variant, style, ...props }) => {
  return (
    <Text variant={variant} style={style} {...props}>
      {children}
    </Text>
  );
};
export default Title;
