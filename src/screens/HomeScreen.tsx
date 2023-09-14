
import { View, Text, StyleSheet } from 'react-native';
import CastVideoButton from '../components/CastVideoButton';
import React, { useEffect, useState } from 'react';
import {  Button,  } from 'react-native';
import GoogleCast, { useRemoteMediaClient, CastState } from 'react-native-google-cast'

// const CastVideoButton = () => {
//     const client = useRemoteMediaClient();
  
//     function cast() {
//       if(client) {
//         client.loadMedia({
//             mediaInfo: {
//                 contentUrl: 
//                 'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
//                 contentType: 'video/mp4',
//             },
//         })
//       }
  
//       GoogleCast.showExpandedControls()
//     }
//       return (
//         <TouchableOpacity  onPress={cast}>
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//       );
// };


const HomeScreen = () => {
  const client = useRemoteMediaClient()


  function cast() {
    
    if (client) {
      // Send the media to your Cast device as soon as we connect to a device
      // (though you'll probably want to call this later once user clicks on a video or something)
      client.loadMedia({
        mediaInfo: {
          contentUrl:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
          contentType: 'video/mp4',
        },
      })
    }
    console.log(client);
    console.log("click play");

    GoogleCast.showExpandedControls();
  }

  async function handleCast() {
    try {
      GoogleCast.showCastDialog();
    } catch (error) {
      console.log(error)
    }
  }


  return (
    
    <View style={styles.container}>
     <Text style={styles.title}>Home Screen</Text>
      {/* <CastButton  style={{ tintColor: 'white', width: 50, height: 50 }} />
       <CastVideoButton/> */}
       <Text onPress={cast}>Play</Text>
       <Text onPress={handleCast}> Show cast dialog</Text>
      <CastVideoButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
