
import { useSearchParams } from "react-router-dom";

export function useSearchUrl()
{
    const [searchParams, setSearchParams] = useSearchParams() ;

    function getParam(name)
    {
        return searchParams.get(name) ;
    }
    
    function setParam(name, value)
    {
        searchParams.set(name,value) ;
        
        setSearchParams(searchParams) ;
    }

    return {getParam , setParam}
}