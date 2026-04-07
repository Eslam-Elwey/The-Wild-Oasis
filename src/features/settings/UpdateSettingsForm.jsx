
import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUdateSettings } from './useUpdateSettings';
import Button from '../../ui/Button';

function UpdateSettingsForm() {
  const {isFetching ,settings : {minBookingLength , maxBookingLength ,maxGuestsPerBooking,breakfastPrice} = {}} = useSettings();

  const {updateSetting,isUpdating} = useUdateSettings() ;

  const {register} = useForm() ;


  function handleUpdate(e,field){
    const {value} = e.target ;
    updateSetting({[field] :value}) ;
  }

  if(isFetching) return (
    <Spinner />
  )

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} disabled={isUpdating}  {...register('minBookingLength')} onBlur={(e)=>handleUpdate(e,'minBookingLength')} />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} disabled={isUpdating} {...register('maxBookingLength')} onBlur={(e)=>handleUpdate(e,'maxBookingLength')} />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} disabled={isUpdating} {...register('maxGuestsPerBooking')} onBlur={(e)=>handleUpdate(e,'maxGuestsPerBooking')} />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} disabled={isUpdating} {...register('breakfastPrice')} onBlur={(e)=>handleUpdate(e,'breakfastPrice')} />
      </FormRow>

    </Form>
  );
}

export default UpdateSettingsForm;
