import { createContext } from "react";
import { ContextInterface } from "./ContextHook";
const AppContext = createContext<ContextInterface | undefined>(undefined);
export default AppContext;
