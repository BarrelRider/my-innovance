import { TextInput, Button, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";

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
  const router = useRouter();

  const handleSubmit = (values: ExampleFormValues) => {
    router.push("/one");
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
        age: Yup.string().matches(/[0-9]/g, "Age must be number between 0 and 999").max(3),
      })}
    >
      {({ validateField, handleChange, handleSubmit, values, errors }) => (
        <>
          <View>
            <TextInput
              style={[styles.input, errors.name ? styles.inputInvalid : null]}
              placeholder="Name"
              value={values.name}
              onBlur={() => {
                validateField("name");
              }}
              onChangeText={handleChange("name")}
              autoCapitalize="none"
            />
            <Text style={styles.errorText}>{errors.name && errors.name}</Text>
          </View>
          <View>
            <TextInput
              style={[styles.input, errors.surname ? styles.inputInvalid : null]}
              placeholder="Surname"
              value={values.surname}
              onBlur={() => {
                validateField("surname");
              }}
              onChangeText={handleChange("surname")}
              autoCapitalize="none"
            />
            <Text style={styles.errorText}>{errors.name && errors.name}</Text>
          </View>
          <View>
            <TextInput
              style={[styles.input, errors.email ? styles.inputInvalid : null]}
              placeholder="Email"
              value={values.email}
              onBlur={() => {
                validateField("email");
              }}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.errorText}>{errors.email && errors.email}</Text>
          </View>
          <View>
            <TextInput
              style={[
                styles.input,
                errors.password ? styles.inputInvalid : null,
              ]}
              placeholder="Password"
              onBlur={() => {
                validateField("password");
              }}
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <Text style={styles.errorText}>
              {errors.password && errors.password}
            </Text>
          </View>

          <View>
            <TextInput
              style={[
                styles.input,
                errors.age ? styles.inputInvalid : null,
              ]}
              placeholder="Age"
              onBlur={() => {
                validateField("age");
              }}
              value={values.age}
              onChangeText={handleChange("age")}
              keyboardType="number-pad"
              secureTextEntry
            />
            <Text style={styles.errorText}>
              {errors.age && errors.age}
            </Text>
          </View>
          <Button
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
  errorText: {
    color: "red",
    marginBottom: 6,
    textAlign: "left",
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#eee",
    marginBottom: 6,
    paddingHorizontal: 8,
  },
  inputInvalid: {
    borderColor: "red",
  },
});
