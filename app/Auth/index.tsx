import AuthContainer from "@/components/auth-container";
import Button from "@/components/custom-button";
import Input from "@/components/input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Register() {
  return (
    <AuthContainer title="New Account" style={styles.container}>
      <>
        <Input label="Full Name" placeholder="John Doe..." />
        <Input label="Password" placeholder="********" password />
        <Input label="Email" placeholder="example@email.com" />
        <Input label="Phone Number" placeholder="xxxx-xxx-xxxx" />
        <Input label="Date of Birth" placeholder="DD/MM/YYYY" />
      </>
      <View style={styles.bottom}>
        <ThemedText style={styles.bottomText}>
          By continuing, you agree to
          <ThemedText type="defaultSemiBold" style={[{ color: Colors.primary }, styles.bottomText]}>
            {" "}
            Terms of Use{" "}
          </ThemedText>
          and
          <ThemedText type="defaultSemiBold" style={[{ color: Colors.primary }, styles.bottomText]}>
            {" "}
            Privacy Policy.
          </ThemedText>
        </ThemedText>
        <Button
          text={"Sign Up"}
          loading={false}
          style={styles.button}
          textSize={20}
        />
        <ThemedText style={styles.bottomText}>or sign up with</ThemedText>
        <View style={styles.downText}>
            <ThemedText style={styles.bottomText}>already have an account?</ThemedText>
            <TouchableOpacity><ThemedText type="defaultSemiBold" style={[styles.bottomText, {color:Colors.primary}]}> Log in</ThemedText></TouchableOpacity>
        </View>
      </View>
    </AuthContainer>
  );
}
