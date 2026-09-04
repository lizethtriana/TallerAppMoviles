import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Tablas = () => {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);
  const [error, setError] = useState("");

  const calcularTabla = () => {
    const num = parseInt(numero, 10);

    if (isNaN(num) || num < 1 || num > 10) {
      setTabla([]);
      setError("Ingresa un número entre 1 y 10");
      return;
    }

    const filas = [];
    for (let i = 1; i <= 10; i++) {
      filas.push({ i, resultado: num * i });
    }

    setError("");
    setTabla(filas);
  };

  return (
    <View style={style.content}>
      <Text style={style.titulo}>Tabla de Multiplicar</Text>

      <TextInput
        style={style.input}
        keyboardType="numeric"
        placeholder="Ingresa un número (1-10)"
        value={numero}
        onChangeText={(text) => {
          setNumero(text);
          setTabla([]);
          setError("");
        }}
      />

      <Button title="Generar Tabla" onPress={calcularTabla} />

      {error !== "" && <Text style={style.error}>{error}</Text>}

      {tabla.length > 0 && (
        <View style={style.tablaContainer}>
          {tabla.map((fila) => (
            <Text key={fila.i} style={style.fila}>
              {numero} x {fila.i} = {fila.resultado}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    margin: 16,
    width: "80%",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: 8,
  },
  tablaContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  fila: {
    fontSize: 18,
    marginVertical: 2,
  },
});

export default Tablas;