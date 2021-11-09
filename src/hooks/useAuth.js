import { useContext } from "react"
import { authContext } from "../component/Context/AuthProvider";


const useAuth = () =>{
    return useContext(authContext)
}
export default useAuth;