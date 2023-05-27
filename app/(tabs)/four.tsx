import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { useEffect, useState } from "react";
import { Character } from "../../constants/types/Character";
import { getTop10Characters } from "../services/request";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
    "character/details": { charId: string | null } | undefined;
  };

export default function TabFourScreen() {
  const [chars, setChars] = useState<Array<Character>>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    getTop10Characters().then((data) => {
      setChars([...data]);
    });
  }, []);

  const handleItemClick = (charId: string) => {
    navigation.navigate("character/details", {
        charId: charId,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 10 Characters of Rick And Morty</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {chars && chars.length > 0 && (
        <FlatList
          data={chars}
          alwaysBounceVertical={false}
          renderItem={(char: ListRenderItemInfo<Character>) => {
            return (
              <TouchableOpacity
                key={char.item.id}
                onPress={() => {
                    if(char.item.id) {
                        handleItemClick(char.item.id);
                    }
                }}
              >
                <View style={styles.charListItem}>
                  <Text style={styles.charListItemText}>{char.item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      )}
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
  charListItem: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 4,
    backgroundColor: "#60269e",
  },
  charListItemText: {
    color: "#fff",
    fontSize: 18,
  },
});
