import React from 'react'
import { View } from 'react-native';
import { CastButton, useRemoteMediaClient } from 'react-native-google-cast'
import GoogleCast from 'react-native-google-cast'

function CastVideoButton() {
  // This will automatically rerender when client is connected to a device
  // (after pressing the button that's rendered below)
 

  // This will render native Cast button.
  // When a user presses it, a Cast dialog will prompt them to select a Cast device to connect to.
  

  return (<View>
    <CastButton style={{ width: 45, height: 45, tintColor: 'black' }} />
      </View>)
}

export default CastVideoButton;