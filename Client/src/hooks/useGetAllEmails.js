import { useContext, useEffect } from "react"
import messageContext from "../Context/messageContext"

const useGetAllEmails = () => {
    const {email, setEmail} = useContext(messageContext);
    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const rawData = await fetch("https://gmail-clone-ggn9.onrender.com/api/v1/email/getallemail",{
                    credentials: "include"
                })
                const response = await rawData.json()
                console.log(response)
                setEmail(response.email)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchEmail();
    }, [email])
}


export default useGetAllEmails;