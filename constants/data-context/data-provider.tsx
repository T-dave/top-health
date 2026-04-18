import { ReactNode, useState } from "react";
import DataContext, { DataProps } from "./data-context";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [ data, setData ] = useState<DataProps>({
    name:'',
    password:'',
    email:'',
    phoneNumber:'',
    dateOfBirth:'',
  });

  const createData =(data:DataProps)=>{
    const {name, password, email, phoneNumber, dateOfBirth} = data;
    if (name.length > 0 && password.length > 0 && phoneNumber.length > 0 && email.length > 0 && dateOfBirth.length > 0){
      setData(data);
      console.log(data);
    }
    else alert("Invalide data");
  }


  return (
    <DataContext.Provider value={{ data, createData }}>
      {children}
    </DataContext.Provider>
  );
};
