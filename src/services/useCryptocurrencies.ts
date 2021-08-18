import useApiService from "./useApiService";

interface ResponseCryptocurrencies {
    data: never[]
}

const useCryptocurrencies = (start: number, limit: number, sort: string, sort_dir: string) => 
    useApiService<ResponseCryptocurrencies>('/v1/cryptocurrency/listings/latest', {
        params: {
            start,
            limit,
            sort,
            sort_dir
        }
    });
  
export default useCryptocurrencies;


