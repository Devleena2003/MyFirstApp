import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0C134F" }}>
      <View>
        <View
          style={{
            marginTop: 30,
            paddingLeft: 15,
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
            Talky
          </Text>
        </View>
        <View
          style={{ justifyContent: "center", alignSelf: "center", padding: 20 }}
        >
          <Image
            style={{ width: 300, height: 200 }}
            source={require("../assets/chat.png")}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              fontSize: 27,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Stay Connected With Your
          </Text>
          <Text
            style={{
              fontSize: 35,
              color: "#D4ADFC",
              marginTop: 15,
              textAlign: "center",
            }}
          >
            Friends & Family
          </Text>
        </View>

        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "transparent",
            width: "30%",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#D4ADFC",

            marginTop: 40,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Discover")}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              marginLeft: 20,
              color: "#fff",
            }}
          >
            Go
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text
              style={{ fontSize: 30, textAlign: "center", color: "#D4ADFC" }}
            >
              We provide the best service for you
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column-reverse",
              gap: 20,
              padding: 45,
              alignSelf: "center",
            }}
          >
            <View
              style={{
                padding: 30,
                backgroundColor: "#fff",
                borderWidth: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ paddingBottom: 10 }}>
                <AntDesign name="Safety" size={30} color="#D4ADFC" />
              </View>
              <View>
                <Text style={{ fontSize: 20, color: "#0C134F" }}>
                  Safety & Privacy
                </Text>
                <Text style={{ padding: 10, color: "#0C134F" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Text>
              </View>
            </View>

            <View
              style={{
                padding: 30,
                backgroundColor: "#fff",
                borderWidth: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ paddingBottom: 10 }}>
                <AntDesign name="message1" size={30} color="#D4ADFC" />
              </View>
              <View>
                <Text style={{ fontSize: 20, color: "#0C134F" }}>
                  {" "}
                  Simple Messaging
                </Text>
                <Text style={{ padding: 10, color: "#0C134F" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Text>
              </View>
            </View>

            <View
              style={{
                padding: 30,
                backgroundColor: "#fff",
                borderWidth: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ paddingBottom: 10 }}>
                <AntDesign name="staro" size={30} color="#D4ADFC" />
              </View>
              <View>
                <Text style={{ fontSize: 20, color: "#0C134F" }}>
                  Fast & Powerful
                </Text>
                <Text style={{ padding: 10, color: "#0C134F" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ padding: 10, backgroundColor: "#D4ADFC" }}>
          <Text style={{ fontSize: 20, color: "#0C134F", textAlign: "center" }}>
            Made with Love by Devleena
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
