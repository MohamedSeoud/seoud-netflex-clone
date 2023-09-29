// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { createContext, useContext } from "react"


const AuthContext = createContext({});

export function AuthContextProvider({children}:{children:React.ReactNode}) {
  return (
    <AuthContext.Provider value={{}} >
        {children}
    </AuthContext.Provider>
  )
}

export function UserAuth(){
    return useContext(AuthContext)

}
