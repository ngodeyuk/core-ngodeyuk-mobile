import {
    useRouter,
    useSegments
} from "expo-router"
import {
    useState,
    useEffect,
    useContext,
    createContext,
    PropsWithChildren,
} from "react"


const AuthContext = createContext<any>(null)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: PropsWithChildren) {
    const rootSegment = useSegments()[0]
    const router = useRouter()
    const [user, setUser] = useState<string | undefined>("")

    useEffect(() => {
        if (user === undefined) return
        if (!user && rootSegment !== '(auth)') {
            router.replace('(auth)/signIn')
        } else if (user && rootSegment !== '(root)') {
            router.replace('/')
        }
    }, [user, rootSegment])
    return (
        <AuthContext.Provider
            value={{
                user: user,
                signIn: () => {
                    setUser("yuefii")
                },
                signOut: () => {
                    setUser("")
                }
            }}>
            {children}
        </AuthContext.Provider>
    )
}