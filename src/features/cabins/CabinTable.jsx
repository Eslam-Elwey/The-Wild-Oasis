import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchUrl } from "../../hooks/useSearchUrl";
import Empty from "../../ui/Empty";

const CabinTable = () => {
  const { isLoading, error, cabins } = useCabins();

  const {getParam} = useSearchUrl() ;

  const filteredVal = getParam('discount') ??'all' ;

  let filteredCabins ; 

  //1- filter 
  if(filteredVal==='all')  
  {
    filteredCabins = cabins ;
  }
  else if(filteredVal==='with-discount') 
  {
    filteredCabins = cabins?.filter((cabin)=>cabin.discount!==0)
  }
  else if(filteredVal==='no-discount') 
  {
    filteredCabins = cabins.filter((cabin)=>cabin.discount===0)
  }

  // 2-sort 
  const sortBy = getParam('sortBy') ?? 'startDate-asc' ;
  const [field,direction] = sortBy.split('-') ;

  const modifier = direction ==='asc' ?1 : -1

  const sortedCabins = filteredCabins?.sort( (a,b)=> (a[field] - b[field])* modifier)  ;



  console.log(filteredVal);

  
  if (isLoading) return <Spinner />;

  if(!cabins.length) return <Empty resourceName='cabins' />
  
  if (error) return <p>Error in fetching cabins data : {error.message}</p>;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr" role="table">
        <Table.Header>
          <div></div>
          <div>cabin</div>
          <div>capacity</div>
          <div>price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => {
            return <CabinRow cabin={cabin} key={cabin.id} />;
          }}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
