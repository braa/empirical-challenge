import { useEffect, useState } from "react";
import useApiService from "./useApiService";

interface User {
    name: {
        title: string
        first: string
        last: string
    }
    picture: {
        thumbnail: string
    }
  }
  
interface ResponseRandomUser {
    results: Array<User>
}

interface UseUser {
    user: User | null
    error: Error | null
}

const useUser = (): UseUser => {
    const [user, setUser] = useState<User | null>(null);
    const { response, error } = useApiService<ResponseRandomUser>('https://randomuser.me/api/');
    useEffect(()=>{
        if(response){
            setUser(response.results[0])
        }
    },[response])
    return { user, error };
}

export default useUser;