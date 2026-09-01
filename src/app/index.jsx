import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.content}>
      <Button title="Serie Fibonacci" onPress={() => router.navigate("/Fibonacci")} />
      <Button title="Factorial" onPress={() => router.navigate("/factorial")} />
      <Button title="Tablas de multiplicar" onPress={() => router.navigate("/tablas")} />
      <Button title="Promedio de notas" onPress={() => router.navigate("/promedio")} />
      <Button title="Perfil" onPress={() => router.navigate("/perfil")} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});

export default Home;