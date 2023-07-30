import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from "react";
import { View, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { firebase } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { GiftedChat } from "react-native-gifted-chat";
const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (
      //   <View style={{ marginLeft: 20 }}>
      //     <Avatar
      //       rounded
      //       source={{
      //         uri: auth?.currentUser?.photoURL,
      //       }}
      //     />
      //   </View>
      // ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={signOut}
        >
          <Text>logout</Text>
        </TouchableOpacity>
      ),
    });
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );
    return unsubscribe;
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    firebase.firestore().collection("users").add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("Sign In");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: firebase.auth()?.currentUser?.email,
          name: firebase.auth()?.currentUser?.displayName,
        }}
      />
    </View>
  );
};
export default ChatScreen;
