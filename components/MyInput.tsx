import { Text } from "./Themed";
import {
  StyleSheet,
  TextInputProps,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";


interface MyInputProps extends TextInputProps {
    error?: string | null,
    inputStyle?: StyleProp<ViewStyle>
    errorStyle?: StyleProp<TextStyle>
}

export const MyInput = ({ error, inputStyle, errorStyle, ...inputProps }: MyInputProps) => {
  return (
    <View>
      <TextInput
        style={[styles.input, inputStyle, error ? styles.inputInvalid : null]}
        {...inputProps}
      />
      {error && <Text style={[styles.errorText, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#1a1a1a",
    borderBottomWidth: 1,
    backgroundColor: "transparent",
    marginBottom: 6,
  },
  inputInvalid: {
    borderColor: "#FB0536",
  },
  errorText: {
    color: "#FB0536",
    marginBottom: 6,
    textAlign: "left",
  },
});
