import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
export default function HomeScreen({ navigation }: IHomeProps) {
  const [url, setUrl] = useState("http:192.168.0.21:3546");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Expedição</Text>
      <View style={styles.form}>
        <Text  style={styles.label}>Endereço Servidor:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="http:192.168.0.1:3546"
          value={url}
          onChangeText={(value) => {
            setUrl(value);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Panel", { address: url });
          }}
        >
          <Text style={styles.button_text}>Salvar e Abrir Painel</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const font_size = 18;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  form: {
    width: "95%",
    borderColor: "#bdbdbd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontSize: font_size,
    marginVertical: 6,
  },
  input: {
    fontSize: font_size,
    borderColor: "#c2c2c2",
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 6,
  },

  button: {
    backgroundColor: "#4679CC",
    height: 40,
    // width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 8,
  },
  button_text: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "900",
  },
});
