import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import { HiPencilSquare, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

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
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const { createCabin, isCreating } = useCreateCabin();

  const {
    name,
    image,
    maxCapacity,
    regularPrice,
    discount,
    id: cabinId,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  }

  console.log(image);

  return (
    <>
      <Table.Row>
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
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />
              <Menus.List id={cabinId}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
                >
                  Duplicate
                </Menus.Button>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencilSquare />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>
            </Menus.Menu>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
            
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={`cabin${name}`}
                onConfirm={() => deleteCabin(cabinId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>
        </Row>
      </Table.Row>
    </>
  );
};

export default CabinRow;
