import AuthContainer from "@/components/auth-container";
import Input from "@/components/input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import useInput from "@/hooks/use-input";
import { Bottom2 } from "../../components/bottom";
import styles from "./styles";

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
    handleLogIn,
    loading,
  } = useInput();
  return (
    <AuthContainer
      title="Hello!"
      style={[styles.container, { justifyContent: "center" }]}
    >
      <>
        <ThemedText
          type="title"
          style={{ color: Colors.primary, marginBottom: 40 }}
        >
          Welcome
        </ThemedText>
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
      <Bottom2 submit={handleLogIn} loading={loading} />
    </AuthContainer>
  );
}
