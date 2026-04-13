
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
        const newParams = new URLSearchParams(searchParams) ;
        
        value ? newParams.set(name,value)  : newParams.delete(name) ;
        
        setSearchParams(newParams) ;
    }

    return {getParam , setParam}
}