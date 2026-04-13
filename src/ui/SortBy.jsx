
import Select from './Select'
import { useSearchUrl } from '../hooks/useSearchUrl';

export default function SortBy({options}) {

  const {setParam,getParam} = useSearchUrl() ;
  const sortBy = getParam('sortBy') ?? options[0].value ;

  function handleChange(e)
  {
    setParam('sortBy',e.target.value) ;
  } 

  return (
    <Select type='white' value={sortBy} options={options} onChange={handleChange}/>
  )
}
