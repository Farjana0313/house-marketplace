import { useEffect, useState, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMoounted = useRef(true)

    useEffect(() => {
        if (isMoounted) {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLoggedIn(true)
                }
                setCheckingStatus(false)
            })
        }
        return () => {
            isMoounted.current = false
        }


    },[isMoounted])

    return { loggedIn, checkingStatus }
}
