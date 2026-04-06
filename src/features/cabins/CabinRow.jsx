import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import { HiPencilSquare, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);

  const { isDeleting, deleteCabin } = useDeleteCabin();

  const { createCabin, isCreating } = useCreateCabin();

  const {
    name,
    image,
    maxCapacity,
    regularPrice,
    discount,
    id: cabinId,
    description
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description
    });
  }

  console.log(image);

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <p>fites up to {maxCapacity} guests</p>
        <Price>{formatCurrency(regularPrice)}</Price>
        {cabin.discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}

        <Row type="horizontal" style={{ gap: "0.2rem" }}>
          <Button
            disabled={isCreating}
            onClick={handleDuplicate}
            variation="secondary"
          >
            <HiSquare2Stack />
          </Button>
          <Button onClick={() => setShowForm((state) => !state)}>
            <HiPencilSquare />
          </Button>
          <Button
            variation="danger"
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
          >
            <HiTrash size={"1.4rem"} />
          </Button>
        </Row>
      </TableRow>

      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;
