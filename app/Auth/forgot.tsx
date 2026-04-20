import AuthContainer from "@/components/auth-container";
import Input from "@/components/input";
import { ThemedText } from "@/components/themed-text";
import useInput from "@/hooks/use-input";
import styles from "./styles";
import Button from "@/components/custom-button";
import { router } from "expo-router";

export default function Register() {
  const {
    password,
    setPassword,
    passwordError,
    setPasswordError,
    handlePasswordError,
    confirm,
    setConfirm,
    confirmError,
    setConfirmError,
    handleConfirmError,
  } = useInput();

  const handleSubmit = ()=>{
          handlePasswordError(); handleConfirmError();
          const errors = passwordError + confirmError
          console.log(errors)
          if(errors.length === 0){
              router.navigate('/(tabs)')
          }else{
              console.log("there is an error")
          }
      }
  return (
    <AuthContainer title="Set Password" style={styles.container}>
      <ThemedText style={styles.topText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex obcaecati quasi natus minima iste molestiae quo.</ThemedText>
      <>
        <Input
          label="Password"
          placeholder="*************"
          password
          value={password}
          setValue={setPassword}
          error={passwordError}
          setError={setPasswordError}
          handleError={handlePasswordError}
        />
        <Input
          label="Confirm Password"
          placeholder="*************"
          password
          value={confirm}
          setValue={setConfirm}
          error={confirmError}
          setError={setConfirmError}
          handleError={handleConfirmError}
        />
        <Button text="Create New Password" loading={false} style={styles.button} textSize={20} onPress={handleSubmit}/>
      </>
    </AuthContainer>
  );
}
