import * as React from 'react';
import { Button } from 'react-native-paper';
const CustomButton = ({btnText, btnOnPress}) => {
  return (
    <Button icon="camera" mode="contained" onPress={btnOnPress}>
        {btnText}
    </Button>
  )
}

export default CustomButton
