import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CameraStyle from '../styles/CameraStyle'
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';

export default function CameraScreen({navigation}) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
    const [pictureUri, setPictureUri] = useState(null)
    const cameraRef = useRef(null)

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={CameraStyle.container}>
        <Text style={CameraStyle.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const retake = () =>{
    setPictureUri(null)
  }

  const takePicture = async () =>{
    if(cameraRef.current){
        const photo = await cameraRef.current.takePictureAsync();
        setPictureUri(photo.uri)
    }
  }

  return (
    <SafeAreaView style={CameraStyle.container}>
      {pictureUri ? (
        <>
          <Image source={{ uri: pictureUri }} style={CameraStyle.camera} />
          <View style={CameraStyle.buttonBottom}>
            <CustomButton btnText="Retake" btnOnPress={retake} />
          </View>
        </>
      ) : (
        <CameraView style={CameraStyle.camera} facing={facing} ref={cameraRef}>
          <View style={CameraStyle.buttonContainer}>
            <TouchableOpacity style={CameraStyle.button}>
              <CustomButton btnText={"Flip"} btnOnPress={toggleCameraFacing}/>
            </TouchableOpacity>
            <TouchableOpacity style={CameraStyle.button}>
              <CustomButton btnText="Take Picture" btnOnPress={takePicture}/>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </SafeAreaView>
  );
}