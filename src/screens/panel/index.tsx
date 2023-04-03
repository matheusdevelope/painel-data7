import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import WebView from "react-native-webview";
export default function PanelScreen({ route, navigation }: IPanelProps) {
  const [loading, setLoading] = useState(true);
  const [pageStatus, setPageStatus] = useState(0);
  const url = route.params.address;
  const getPageStatus = async () => {
    try {
      const { status } = await fetch(url);
      setPageStatus(status);
    } catch (error) {
      Alert.alert(
        "Conexão Servidor:",
        "Erro ao testar a conexão com o servidor. \nVerifique se o endereço informado está correto e se o servidor está online.\n" +
          JSON.stringify(error),
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPageStatus();
  }, []);

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Carregando...</Text>
        <ActivityIndicator animating size="large" color="#0000ff" />
      </View>
    );

  if (pageStatus >= 200 && pageStatus < 300) {
    return <WebView source={{ uri: url }} />;
  }
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>O servidor não está online ou não retornou nenhum conteúdo. </Text>
      <Text>Status: {pageStatus}</Text>
    </View>
  );
}
