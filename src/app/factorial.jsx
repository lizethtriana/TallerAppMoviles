import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Factorial = () => {
  const [numero, setNumero] = useState("");
  const [notacion, setNotacion] = useState("");
  const [serie, setSerie] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularFactorial = () => {
    const num = parseInt(numero, 10);

    if (isNaN(num) || num < 0) {
      setNotacion("");
      setSerie("");
      setResultado("Ingresa un número válido (>= 0)");
      return;
    }

    let factorial = 1;
    const pasos = [];

    for (let i = num; i >= 1; i--) {
      factorial *= i;
      pasos.push(i);
    }

    setNotacion(`n! = ${num}!`);
    setSerie(num === 0 ? "0! = 1" : pasos.join(" x "));
    setResultado(factorial);
  };

  return (
    <View style={style.content}>
      <Text style={style.titulo}>Calculadora de Factorial</Text>

      <TextInput
        style={style.input}
        keyboardType="numeric"
        placeholder="Ingresa un número"
        value={numero}
        onChangeText={(text) => {
          setNumero(text);
          setNotacion("");
          setSerie("");
          setResultado(null);
        }}
      />

      <Button title="Calcular Factorial" onPress={calcularFactorial} />

      {notacion !== "" && (
        <View style={style.resultadoContainer}>
          <Text style={style.notacion}>{notacion}</Text>
          <Text style={style.serie}>
            {serie} = {resultado}
          </Text>
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
  resultadoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  notacion: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
  serie: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Factorial;