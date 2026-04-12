import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const Label = styled.label`
  font-weight: 500;
`;

function CreateCabinForm({ cabinToEdit = {} , onCLoseModal }) {
  const { id: editedId, ...editedValues } = cabinToEdit;
  const isEditSession = Boolean(editedId);
  const {createCabin , isCreating} = useCreateCabin() ;
  const {editCabin , isEditing} = useEditCabin() ;

  const isWorking = isEditing || isCreating ;

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession?editedValues : {},
  });
  const { errors } = formState;

 

  const onSubmit = (data) => {
    const image = typeof(data.image) === 'string' ?data.image :data.image["0"] ;
    if(isEditSession)
    {
      editCabin({newCabinData:{...data,image}, id : editedId} ,{
        onSuccess :(data)=> {
          console.log(data);
          reset() ;
          onCLoseModal?.() ;
        }
      } )
    }
    else 
    {
      createCabin({newCabin:{...data , image :image}},{
        onSuccess : ()=>{
          reset();
          onCLoseModal?.() ;
        }
      })
    }
  };

  const onError = (errs) => {
    console.log(errs);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}
    type={onCLoseModal?'modal'  :'regular'}
    >
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "capacity should be at least one",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="regularPrice"
          {...register("regularPrice", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="discount" error={errors?.discount?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
        {isEditSession && (
          <img
            src={editedValues.image}
            alt="current cabin"
            style={{ width: "100px", marginBottom: "10px" }}
          />
        )}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick ={()=>onCLoseModal?.()}variation="secondary" type="reset" disabled={isWorking}>
          Cancel
        </Button>
        <Button>{isEditSession ? "Edit Cabin" : "Create new cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
