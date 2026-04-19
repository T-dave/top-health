import AuthContainer from "@/components/auth-container";
import Input from "@/components/input";
import useInput from "@/hooks/use-input";
import styles from "./styles";
import { Bottom2 } from "./bottom";
import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";

export default function Register() {
  const {
    name,
    setName,
    nameError,
    setNameError,
    handleNameError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    handlePasswordError,
  } = useInput();
  return (
    <AuthContainer title="Hello!" style={[styles.container, {justifyContent:'center'}]}>
      <>
        <ThemedText type="title" style={{color:Colors.primary, marginBottom:40}}>Welcome</ThemedText>
        <Input
          label="Email or Mobile Number"
          placeholder="example@gmail.com"
          value={name}
          setValue={setName}
          error={nameError}
          setError={setNameError}
          handleError={handleNameError}
        />
        <Input
          label="Password"
          placeholder="*************"
          password
          value={password}
          setValue={setPassword}
          error={passwordError}
          setError={setPasswordError}
          handleError={handlePasswordError}
          forgot
        />
      </>
      <Bottom2/>
    </AuthContainer>
  );
}
