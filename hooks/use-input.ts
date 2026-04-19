import { useState } from "react";

export default function useInput(){
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
        const handleNameError=()=>{
            if(name.length > 2)setNameError("");
            else{
                setNameError("Enter valid Name")
            }
        }
        const [password, setPassword] = useState<string>("");
        const [passwordError, setPasswordError] = useState<string>("");
        const handlePasswordError=()=>{
            if(password.length < 8){
                setPasswordError("Password must be 8 digits")
            }else if(!/[A-Z]/.test(password)){
                setPasswordError("Password must include an uppercase letter")
            }else if(!/[a-z]/.test(password)){
                setPasswordError("Password must include a lowercase letter")
            }else if(!/[^A-Za-z0-9]/.test(password)){
                setPasswordError("Password must include a special character")
            }else{
                setPasswordError("")
            }
        }
        const [confirm, setConfirm] = useState<string>("");
        const [confirmError, setConfirmError] = useState<string>("");
        const handleConfirmError=()=>{
            if(password !== confirm){
                setConfirmError("Passwords must match")
            }else{
                setConfirmError("")
            }
        }
        const [email, setEmail] = useState<string>("");
        const [emailError, setEmailError] = useState<string>("");
        const handleEmailError=()=>{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            console.log(emailRegex.test(email))
            if(emailRegex.test(email)){
                setEmailError("")
            }
            else{
                setEmailError("Enter a valid email")
            }
        }
        const [number, setNumber] = useState<string>("");
        const [numberError, setNumberError] = useState<string>("");
        const handleNumberError=()=>{
            if(number.length >= 11)setNumberError("");
            else{
                setNumberError("Enter valid number")
            }
        }
        const [date, setDate] = useState<string>("");
        const [dateError, setDateError] = useState<string>("");
        const handleDateError=()=>{
            const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20[0-1]\d|202[0-6])$/;
            console.log(Number(date.slice(0,2)) > 31)
            if(dateRegex.test(date))setDateError("");
            else{
                setDateError("Enter valid Date")
            }
        }
    return { 
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
        confirm,
        setConfirm,
        confirmError,
        setConfirmError,
        handleConfirmError
    }
}