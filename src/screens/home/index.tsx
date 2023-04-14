import React, { useEffect, useState , useRef, useCallback} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableHighlight } from "react-native";
export default function HomeScreen({ navigation }: IHomeProps) {
  const [url, setUrl] = useState("http:192.168.0.1:3546?filial=1");
  const InputRef = useRef<TextInput>(null)
  const ButtonRef = useRef<TouchableOpacity>(null)
  const [focus, setFocus] = useState(false);
  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@host_address");
      if (value !== null) {
        setUrl(value);
         navigation.navigate("Panel", { address: value });
      }
    } catch (e) {
      Alert.alert("Atenção", "Falha ao carregar endereço salvo.");
    }
  };
  
  useEffect(() => {
    getData();
    InputRef.current?.focus()    
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Expedição</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Endereço Servidor:</Text>
        <TextInput
        ref={InputRef}
          style={styles.input}
          autoCapitalize="none"
          placeholder="http:192.168.0.1:3546"
          value={url}
          onChangeText={(value) => {
            setUrl(value);
          }}
          onBlur={()=>{
            ButtonRef.current?.focus()
          }}
        />
        <TouchableHighlight
     onFocus={onFocus}
     onBlur={onBlur}
     style={[styles.button, focus ? styles.wrapperFocused :null]}
          onPress={() => {
            navigation.navigate("Panel", { address: url });
          }}
        >
          <Text style={styles.button_text}>Salvar e Abrir Painel</Text>
        </TouchableHighlight>
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
  wrapperFocused:{
    borderColor:'#2b2b2b',
    borderWidth:2
  },
  button_text: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "900",
  },
});
