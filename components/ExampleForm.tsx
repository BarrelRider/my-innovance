import { TextInput, Button, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { MyButton } from "./MyButton";
import { MyInput } from "./MyInput";

interface ExampleFormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  age?: string;
}

interface ExampleFormErrors {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  age?: string;
}

export default function ExampleForm() {
  const initialValues: ExampleFormValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  const initialErrors: ExampleFormErrors = {};

  const handleSubmit = (values: ExampleFormValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={initialErrors}
      validateOnChange={false}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        surname: Yup.string().required("Surname is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
        age: Yup.string()
          .matches(/[0-9]/g, "Age must be number between 0 and 999")
          .max(3),
      })}
    >
      {({ validateField, handleChange, handleSubmit, values, errors }) => (
        <>
          <MyInput
            placeholder="Name"
            value={values.name}
            error={errors.name}
            onBlur={() => {
              validateField("name");
            }}
            onChangeText={handleChange("name")}
            autoCapitalize="none"
          />
          <MyInput
            value={values.surname}
            error={errors.surname}
            placeholder="Surname"
            onBlur={() => {
              validateField("surname");
            }}
            onChangeText={handleChange("surname")}
            autoCapitalize="none"
          />
          <MyInput
            value={values.email}
            error={errors.email}
            placeholder="Email"
            onBlur={() => {
              validateField("email");
            }}
            onChangeText={handleChange("email")}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <MyInput
            value={values.password}
            error={errors.password}
            placeholder="Password"
            onBlur={() => {
              validateField("password");
            }}
            onChangeText={handleChange("password")}
            secureTextEntry
          />
          <MyInput 
            placeholder="Age"
            onBlur={() => {
              validateField("age");
            }}
            value={values.age}
            error={errors.age}
            onChangeText={handleChange("age")}
            keyboardType="number-pad"
          />
          <MyButton
            title="Send"
            onPress={() => {
              handleSubmit();
            }}
          />
        </>
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
});
