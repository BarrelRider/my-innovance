import { TextInput, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setUserSuccess } from "../state/reduxStore/userSlice";
import { MyButton } from "../../components/MyButton";
import { MyInput } from "../../components/MyInput";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };
  const initialErrors: LoginFormErrors = {};

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (values: LoginFormValues) => {
    dispatch(
      setUserSuccess({
        id: "1",
        name: values.email.substring(0, values.email.lastIndexOf("@")),
        email: values.email,
      })
    );
    router.push("/one");
  };

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={initialErrors}
      validateOnChange={false}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
    >
      {({ validateField, handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Text style={styles.title}>My Innovannce Login</Text>
          <MyInput
            value={values.email}
            error={errors.email}
            onBlur={() => {
              validateField("email");
            }}
            placeholder="Enter Dummy Email"
            onChangeText={handleChange("email")}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <MyInput
            value={values.password}
            error={errors.password}
            onBlur={() => {
              validateField("password");
            }}
            onChangeText={handleChange("password")}
            placeholder="Enter Dummy Password"
            secureTextEntry
          />
          <MyButton
            title="Login"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
