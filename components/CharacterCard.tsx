import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { Character } from "../constants/types/Character";

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardMedia}>
        <Image style={styles.cardImage} source={{ uri: character!.image }} />
      </View>
      <Text style={styles.cardText}>Name: {character!.name}</Text>
      <Text style={styles.cardText}>Species: {character!.species}</Text>
      <Text style={styles.cardText}>Status: {character!.status}</Text>
      <Text style={styles.cardText}>Gender: {character!.gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#60269e",
    padding: 12,
    borderRadius: 16,
    shadowColor: "#999",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  cardText: {
    color: "#eee",
    fontSize: 20,
  },
  cardMedia: {
    flex: 1,
  },
  cardImage: {
    flex: 1,
  },
});
