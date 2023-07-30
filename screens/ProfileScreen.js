import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { firebase } from "../config";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
          setEmail(snapshot.data());
          setPassword(snapshot.data());
        } else {
          console.log("user doesn't exist");
        }
      });
  }, []);
  return (
    <View style={styles.flexA}>
      <ScrollView contentContainerStyle={styles.base}>
        <View style={styles.userProfile}>
          <View style={styles.userProfileTop}>
            <View style={styles.avatar}>
              <View style={styles.avatarContainer}>
                {/* <Entypo
                  style={{ position: "absolute", bottom: 25 }}
                  name="user"
                  size={50}
                  color="#0C134F"
                /> */}
                <Image source={{ uri: image }} />
              </View>
            </View>
            <View style={styles.userProfileInfo}>
              <Text style={styles.userProfileInfoName}>{name.name}</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#fff",
                padding: 15,
                width: "80%",
                alignSelf: "center",
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>{email.email}</Text>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderColor: "#fff",
                padding: 15,
                width: "80%",
                alignSelf: "center",
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>
                {password.password}
              </Text>
            </View>
            <TouchableOpacity style={styles.btnA} onPress={() => pickImage()}>
              <Text style={styles.btnTextA}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  flexA: {
    flex: 1,
    backgroundColor: "#0C134F",
  },
  base: {
    flexGrow: 1,
  },
  userProfile: {
    flex: 1,
  },
  userProfileTop: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    minHeight: 70,
  },
  userProfileTopBg: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: null,
    height: null,
  },

  avatar: {
    flexShrink: 0,
    width: 128,
    height: 128,
  },
  avatarContainer: {
    position: "absolute",
    top: 12,
    left: 15,
    width: "80%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ffffff",
    borderRadius: 64,

    overflow: "hidden",
  },
  // avatarImg: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  // },
  avatarStatus: {
    position: "absolute",
    right: 10.1,
    bottom: 10.1,
    width: 20,
    height: 20,
  },
  userProfileInfo: {
    paddingHorizontal: 24,
  },
  userProfileInfoName: {
    paddingTop: 10,
    color: "#ffffff",
    fontSize: 22,
    textAlign: "center",
  },
  userProfileInfoJobTitle: {
    marginTop: 4,
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
  },

  flexB: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  btnA: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    height: 46,
    width: "50%",
    borderColor: "#D4ADFC",
    borderWidth: 1,
    backgroundColor: "#0C134F",
    borderRadius: 8,
    marginTop: 20,
  },
  btnTextA: {
    color: "#ffffff",
    fontSize: 16,
  },
});
