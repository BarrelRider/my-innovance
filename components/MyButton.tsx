import { Text } from "./Themed"; 
import { StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
}

export const MyButton = ({
  title,
  buttonStyle,
  textStyle,
  ...buttonProps
}: MyButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...buttonProps}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#60269e",
    padding: 10,
    borderRadius: 5,
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
