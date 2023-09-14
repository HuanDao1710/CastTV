import GoogleCast, { useDevices, useCastDevice } from 'react-native-google-cast'
import { Button } from 'react-native'

export default function CastButtonCustom() {
  const castDevice = useCastDevice()
  const devices = useDevices()
  const sessionManager = GoogleCast.getSessionManager()

  async function handleCast() {
    try {
      GoogleCast.showCastDialog();
    } catch (error) {
      console.log(error)
    }
  }

  return devices.map((device) => {
    const active = device.deviceId === castDevice?.deviceId

    return (
      <Button
        key={device.deviceId}
        onPress={() => {
          active
            ? sessionManager.endCurrentSession()
            : sessionManager.startSession(device.deviceId);
            handleCast();
            }
        }
        title={device.friendlyName}
      /> 
    )
  })
}