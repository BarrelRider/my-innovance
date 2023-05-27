import { StyleSheet, Button, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useState } from "react";
import { Character } from "../../constants/types/Character";
import { getCharacterById } from "../services/request";
import CharacterCard from "../../components/CharacterCard";
import { MyButton } from "../../components/MyButton";
import { MyInput } from "../../components/MyInput";

export default function TabThreeScreen() {
  const [character, setCharacter] = useState<Character | null>();
  const [charId, setCharId] = useState<number>();

  const handleRequest = (id: number) => {
    getCharacterById(id).then((data) => {
      setCharacter(data);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajax Call can be tested here</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <MyInput
        placeholder="Enter character id (e.g: 1 for Rick, 2 for Morty)"
        onChangeText={(number) => {
          setCharId(parseInt(number));
        }}
        keyboardType="numeric"
        autoCapitalize="none"
      />
      <MyButton
        title="Send Request"
        onPress={() => {
          if (charId && typeof charId === "number") {
            handleRequest(charId);
          }
        }}
      ></MyButton>

      {character && <CharacterCard character={character} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    width: "100%",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 8,
    height: 1,
    width: "100%",
  },
});
