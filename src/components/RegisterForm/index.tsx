import React, { useReducer, useState } from "react";
import {
  ButtonStyle,
  ContainerStyle,
  InputStyle,
  TextStyle,
} from "../../styles/global";
import { OptionsContainerStyle, OptionsStyle, SelectStyle } from "./style";
import { Text } from "react-native";
import { FormAction, FormState } from "./@types";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/core";
import { z } from "zod";
import { registerSchema } from "./validations";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  bio: "",
  contact: "",
  course_module: "Escolha uma opção",
};

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const navigation = useNavigation();

  const data = [
    { label: "Primeiro módulo (Introdução ao Frontend)" },
    { label: "Segundo módulo (Frontend Avançado)" },
    { label: "Terceiro módulo (Introdução ao Backend)" },
    { label: "Quarto módulo (Backend Avançado)" },
  ];

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (field: string, value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const register = async () => {
    const { passwordConfirmation, ...data } = formState;

    try {
      const validatedData = registerSchema.parse(data);

      await api.post("/users", validatedData);
      navigation.navigate("Login" as never);
    } catch (error) {
      // if (error instanceof z.ZodError) {
      //   const fieldErrors: { [key: string]: string } = {};
      //   error.issues.forEach((issue) => {
      //     if (issue.path.length > 0) {
      //       const fieldName = issue.path[0];
      //       fieldErrors[fieldName] = issue.message;
      //     }
      //   });
      //   setFormErrors(fieldErrors);
      // } else {
      //   console.error(error);
      // }
    }
  };

  return (
    <ContainerStyle>
      <TextStyle fontSize={3} color="ff577f" fontWeight="bold">
        Kenzie Hub
      </TextStyle>

      <InputStyle
        placeholder="Digite aqui seu nome"
        value={formState.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      {formErrors.name && <TextStyle>{formErrors.name}</TextStyle>}

      <InputStyle
        placeholder="Digite aqui seu email"
        value={formState.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      {formErrors.email && <TextStyle>{formErrors.email}</TextStyle>}

      <InputStyle
        placeholder="Digite aqui sua senha"
        value={formState.password}
        onChangeText={(value) => handleInputChange("password", value)}
      />
      {formErrors.password && <TextStyle>{formErrors.password}</TextStyle>}

      <InputStyle
        placeholder="Digite aqui sua confirmação de senha"
        value={formState.passwordConfirmation}
        onChangeText={(value) =>
          handleInputChange("passwordConfirmation", value)
        }
      />
      {formErrors.passwordConfirmation && (
        <TextStyle>{formErrors.passwordConfirmation}</TextStyle>
      )}

      <InputStyle
        placeholder="Fale sobre você"
        value={formState.bio}
        onChangeText={(value) => handleInputChange("bio", value)}
      />
      {formErrors.bio && <TextStyle>{formErrors.bio}</TextStyle>}

      <InputStyle
        placeholder="Opção de contato"
        value={formState.contact}
        onChangeText={(value) => handleInputChange("contact", value)}
      />
      {formErrors.contact && <TextStyle>{formErrors.contact}</TextStyle>}

      <SelectStyle onPress={() => setIsOpen("flex")}>
        <Text>{formState.course_module}</Text>
      </SelectStyle>
      <OptionsContainerStyle display={isOpen} onPress={() => setIsOpen("")}>
        {data.map((item) => (
          <OptionsStyle
            key={item.label}
            onPress={() => {
              handleInputChange("course_module", item.label);
              setIsOpen("");
            }}>
            <TextStyle>{item.label}</TextStyle>
          </OptionsStyle>
        ))}
      </OptionsContainerStyle>

      <ButtonStyle onPress={register}>
        <TextStyle>Cadastrar</TextStyle>
      </ButtonStyle>
    </ContainerStyle>
  );
};

export default RegisterForm;
