import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Alert,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/native";

export default function Picture({ navigation }) {
  // Delete this later
  // now testing
  let cameraRef = useRef(null);

  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      try {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const mediaLibraryPermission =
          await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
        setHasMediaLibraryPermission(
          mediaLibraryPermission.status === "granted"
        );
      } catch (error) {
        console.error(error);
        return;
      }
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    try {
      let options = {
        quality: 1,
        base64: true,
        exif: false,
      };

      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(newPhoto);
    } catch (error) {
      console.error(`YOU HAVE AN ERROR: ${error}`);
      return;
    }
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    const getMenuItems = async (menuImage) => {
      // FUNCTION -> Send to Lazarus api
      // Return - Array of menu items with {Item Name, Item Description, Item Price}

      const data = {
        menuImage,
      };

      try {
        const response = await axios.post(
          "https://www.example.com/api/endpoint",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // handle the response
      } catch (error) {
        // handle the error
      }
    };

    const getMenuItemData = async (menuItems) => {
      // FUNCTION -> Send each menu item to OpenAi to get ingredients and images
      // Return - Obj of { { ItemImage, Item Description }, [ { IngredientImage }] }

      const dataArray = [
        { field1: "value1", field2: "value2" },
        { field1: "value3", field2: "value4" },
        { field1: "value5", field2: "value6" },
      ];

      async function sendRequests() {
        const requests = dataArray.map((data) =>
          axios.post("https://www.example.com/api/endpoint", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        );

        try {
          const responses = await Promise.all(requests);

          // handle the responses
        } catch (error) {
          // handle the error
        }
      }
    };

    const getDishIngredients = async (dish) => {
      const data = {
        dish,
      };

      try {
        const response = await axios.post(
          "https://www.example.com/api/endpoint",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // handle the response
      } catch (error) {
        // handle the error
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
