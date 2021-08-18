import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface ResponseUseApiService<T> {
    response: T | null,
    error: Error | null
}

const useApiService = <T>( url: string, config?: AxiosRequestConfig ): ResponseUseApiService<T> => {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        try {
          const res = await axios(url, config);
          setResponse(res.data);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, [url, config?.params.start, config?.params.sort, config?.params.sort_dir]);
    return { response, error };
  }

  export default useApiService;