import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { TypeUser } from "../types/user.interface";

type TypeContext = {
    user: TypeUser,
    setUser: Dispatch<SetStateAction<TypeUser>>
}
export const AuthContext = createContext<TypeContext>({
    user: null,
    setUser: () => { },
});

const AuthProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [user, setUser] = useState<TypeUser>(null);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;