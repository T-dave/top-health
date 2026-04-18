import { createContext } from "react"; 
export interface DataProps{
  name:string;
  password:string;
  email:string;
  phoneNumber:string;
  dateOfBirth:string;
}
interface DataContextType {
  data:DataProps;
  createData:(data:DataProps)=>void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);
export default DataContext;
