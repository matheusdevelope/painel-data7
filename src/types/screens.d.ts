type RootStackParamList = {
    Home: any;
    Panel: { address: string };
  };
  
   type IHomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
   type IPanelProps = NativeStackScreenProps<RootStackParamList, "Panel">;