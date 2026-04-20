import AuthContainer from "@/components/auth-container";
import Input from "@/components/input";
import useInput from "@/hooks/use-input";
import { Bottom1 } from "../../components/bottom";
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
    email,
    setEmail,
    emailError,
    setEmailError,
    handleEmailError,
    number,
    setNumber,
    numberError,
    setNumberError,
    handleNumberError,
    date,
    setDate,
    dateError,
    setDateError,
    handleDateError,
    handleRegister,
    loading,
  } = useInput();

  return (
    <AuthContainer title="New Account" style={styles.container}>
      <>
        <Input
          label="Full Name"
          placeholder="John Doe..."
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
        />
        <Input
          label="Email"
          placeholder="example@email.com"
          value={email}
          setValue={setEmail}
          error={emailError}
          setError={setEmailError}
          handleError={handleEmailError}
        />
        <Input
          label="Mobile Number"
          placeholder="xxxx-xxx-xxxx"
          value={number}
          setValue={setNumber}
          error={numberError}
          setError={setNumberError}
          handleError={handleNumberError}
          number
        />
        <Input
          label="Date of Birth"
          placeholder="DD/MM/YYYY"
          value={date}
          setValue={setDate}
          error={dateError}
          setError={setDateError}
          handleError={handleDateError}
          date
        />
      </>
      <Bottom1 submit={handleRegister} loading={loading} />
    </AuthContainer>
  );
}
