import React, { useState } from "react";
import {
  ButtonStyle,
  ContainerStyle,
  InputStyle,
  TextStyle,
} from "../../styles/global";
import { api } from "../../services/api";
import { loginSchema } from "./validations";
import { z } from "zod";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../store/modules/user/actions";
import {} from "react-native";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const login = async () => {
    const loginData = {
      email,
      password,
    };

    try {
      const validatedData = loginSchema.parse(loginData);
      const { data } = await api.post("/sessions", validatedData);

      dispatch(authUser(data.user));
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};

        error.issues.forEach((issue) => {
          if (issue.path.length > 0) {
            const fieldName = issue.path[0];
            fieldErrors[fieldName] = issue.message;
          }
        });

        setFormErrors(fieldErrors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <ContainerStyle>
      <TextStyle fontSize={3} color="ff577f" fontWeight="bold">
        Kenzie Hub
      </TextStyle>
      <InputStyle
        placeholder="Digite aqui seu email"
        onChangeText={(value) => setEmail(value)}
      />
      {formErrors.email && <TextStyle>{formErrors.email}</TextStyle>}
      <InputStyle
        placeholder="Digite aqui sua senha"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      {formErrors.password && <TextStyle>{formErrors.password}</TextStyle>}
      <ButtonStyle onPress={login}>
        <TextStyle>Logar</TextStyle>
      </ButtonStyle>

      <TextStyle>Não possui cadastro?</TextStyle>

      <ButtonStyle onPress={() => navigation.navigate("Register" as never)}>
        <TextStyle>Cadastre-se</TextStyle>
      </ButtonStyle>
    </ContainerStyle>
  );
};

export default LoginForm;
