import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "./context";

export const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text> Master List Screen </Text>
    <Button
      title="React Native by Example"
      onPress={() =>
        navigation.push("Details", { name: "React Native by Example" })
      }
    />
    <Button
      title="React Native School"
      onPress={() =>
        navigation.push("Details", { name: "React Native School" })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </View>
);

export const Splash = () => (
  <View style={styles.container}>
    <Text> Loading... </Text>
  </View>
);

export const Details = ({ route }) => (
  <View style={styles.container}>
    {route.params.name && <Text> {route.params.name}</Text>}
  </View>
);

export const Search = ({ navigation }) => (
  <View style={styles.container}>
    <Text> Search </Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="React Native School"
      onPress={() =>
        navigation.navigate("Home", {
          // jumping to nested screens
          screen: "Details",
          params: { name: "React Native School" }
        })
      }
    />
  </View>
);

export const Search2 = () => (
  <View style={styles.container}>
    <Text> Search 2</Text>
  </View>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text> Profile </Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text> Sign In </Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </View>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text> CreateAccount </Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
