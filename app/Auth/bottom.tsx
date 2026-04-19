import Button from "@/components/custom-button";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Bottom1() {
  return (
    <View style={styles.bottom}>
      <ThemedText style={styles.bottomText}>
        By continuing, you agree to
        <ThemedText
          type="defaultSemiBold"
          style={[{ color: Colors.primary }, styles.bottomText]}
        >
          {" "}
          Terms of Use{" "}
        </ThemedText>
        and
        <ThemedText
          type="defaultSemiBold"
          style={[{ color: Colors.primary }, styles.bottomText]}
        >
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
      <View style={styles.socials}>
        <Image
          source={require("../../assets/images/google.png")}
          style={styles.social}
        />
        <Image
          source={require("../../assets/images/facebook.png")}
          style={styles.social}
        />
        <Image
          source={require("../../assets/images/finger-print.png")}
          style={styles.social}
        />
      </View>
      <View style={styles.downText}>
        <ThemedText style={styles.bottomText}>
          already have an account?
        </ThemedText>
        <TouchableOpacity onPress={() => router.replace("/Auth/login")}>
          <ThemedText
            type="defaultSemiBold"
            style={[styles.bottomText, { color: Colors.primary }]}
          >
            {" "}
            Log in
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Bottom2() {
  return (
    <View style={styles.bottom}>
      <Button
        text={"Sign Up"}
        loading={false}
        style={styles.button}
        textSize={20}
      />
      <ThemedText style={styles.bottomText}>or</ThemedText>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Image
          source={require("../../assets/images/finger-print.png")}
          style={[styles.social, {marginTop:10, marginBottom:30}]}
        />
      </View>
      <View style={styles.downText}>
        <ThemedText style={styles.bottomText}>
          don&apos;t have an account?
        </ThemedText>
        <TouchableOpacity onPress={() => router.replace("/Auth")}>
          <ThemedText
            type="defaultSemiBold"
            style={[styles.bottomText, { color: Colors.primary }]}
          >
            {" "}
            Sign up
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
