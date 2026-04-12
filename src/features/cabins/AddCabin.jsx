

import React from 'react'
import Modal from '../../ui/Modal'
import CreateCabinForm from './CreateCabinForm'
import Button from '../../ui/Button'
import CabinTable from './CabinTable'

export default function AddCabin() {
  return (
    <div>
        <Modal>
            <Modal.Open opens='cabin-form'>
                <Button>Add new Cabin </Button>
            </Modal.Open>

            <Modal.Window name='cabin-form'>
                <CreateCabinForm />
            </Modal.Window>
        </Modal>
    </div>

    
  )
}






// import React, { useState } from 'react'
// import Modal from '../../ui/Modal';
// import Button from '../../ui/Button';
// import CreateCabinForm from './CreateCabinForm';

// export default function AddCabin() {
//     const [isOpenModel , setIsOpenModel] = useState(false) ;
//   return (
//     <>
//         <Button onClick={()=>setIsOpenModel((status)=>!status)}>{isOpenModel?`close cabin form`:`Add new Cabin`}</Button>
//         {isOpenModel&&
//             <Modal onClose = {()=>setIsOpenModel(()=>false)}>
//                 <CreateCabinForm onCLoseModal={()=>setIsOpenModel(()=>false)} />
//             </Modal>
            
//         }
//     </>
//   )
// }
