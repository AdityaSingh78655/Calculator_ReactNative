import { View, Text, Switch, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("");
  const getColor = (light, dark) => (darkTheme ? dark : light);

  const calculate = (title) => {
    if (title == 'C') {
      setResult("");
    } else if (title == 'DL') {
     setResult(result.substring(0, result.length - 1));
    } else if(title=='=')
    {
      try {
        setResult(eval(result));
      } catch (error) {
        setResult("Invalid expression");
      }
    }
     else
     {
       setResult(result+title)
     }
  };

  const Btn = ({ title }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor("grey", "red"),
        height: 70,
        width: 70,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: getColor("black", "white"),
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: getColor("white", "black") }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
      />
      <Text
        style={{
          fontSize: 30,
          color: getColor("black", "white"),
          textAlign: "right",
          paddingRight: 10,
          marginTop: 190,
          bottom: 10,
        }}
      >
        {result}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Btn title="C" />
        <Btn title="DL" />
        <Btn title="*" />
        <Btn title="-" />
        <Btn title="9" />
        <Btn title="8" />
        <Btn title="7" />
        <Btn title="%" />
        <Btn title="6" />
        <Btn title="5" />
        <Btn title="4" />
        <Btn title="/" />
        <Btn title="3" />
        <Btn title="2" />
        <Btn title="1" />
        <Btn title="+" />
        <Btn title="00" />
        <Btn title="0" />
        <Btn title="." />
        <Btn title="=" />
      </View>
    </View>
  );
};

export default App;
