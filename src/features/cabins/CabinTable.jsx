import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const CabinTable = () => {
  const { isLoading, error, cabins } = useCabins();

  if (isLoading) return <Spinner />;

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
          data={cabins}
          render={(cabin) => {
            return <CabinRow cabin={cabin} key={cabin.id} />;
          }}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
