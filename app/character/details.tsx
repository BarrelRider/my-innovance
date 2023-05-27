import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import CharacterCard from "../../components/CharacterCard";
import { Character } from "../../constants/types/Character";
import { useEffect, useState } from "react";
import { getCharacterById } from "../services/request";

export default function CharDetail() {
  const [character, setCharacter] = useState<Character>();
  const { charId } = useLocalSearchParams<{charId: string}>();

  useEffect(() => {
    getCharacterById(charId!).then((character) => {
      setCharacter(character)
    })
  }, [])

  return (
    <>
      <Stack.Screen options={{ title: "Character Details" }} />
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          {character && <CharacterCard character={character}/>}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  detailContainer: {
    height: 500,
    justifyContent: "center"
  }
});
