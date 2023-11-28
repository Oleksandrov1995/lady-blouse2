// import React, { useState, useEffect } from 'react';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import './ShopingLIst.css'

// export const ShopingList = ({ openModal, closeModal }) => {
//   const [paymentMethod, setPaymentMethod] = useState('cash');
 
//   const [yourProduct, setYourProduct] = useState([]);


 


//   useEffect(() => {
//     // Отримайте дані з локального сховища та розберіть їх у масив об'єктів
//     const storedProduct = localStorage.getItem('yourProduct');
//     if (storedProduct) {
//       setYourProduct(JSON.parse(storedProduct));
//     }
//   }, [localStorage.getItem('yourProduct')]);
 
//   return (
//     <Modal
//       open={openModal}
//       onClose={closeModal}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box className="modalBox">
//         <AiOutlineCloseCircle onClick={closeModal} size={30} />
    
// {yourProduct && yourProduct.map((product) => (
  
//   <div key={product.id}>
//     <p>{product.color}</p>
//     <p>Price: {product.todayPrice}</p>
//   </div>
// ))}
  



//         <form >
         
//           <label>
//             ПІБ одержувача:
//             <input type="text" name="fullName" />
//           </label>

//           <label>
//             Телефон:
//             <input type="tel" name="phone" />
//           </label>

//           <label>
//             Населений пункт:
//             <input type="text" name="city" />
//           </label>
//           <FormControl component="fieldset">
//             <label>Виберіть спосіб оплати:</label>
//             <RadioGroup
//               row
//               aria-label="paymentMethod"
//               name="paymentMethod"
//               value={paymentMethod}
//               onChange={e => setPaymentMethod(e.target.value)}
//             >
//               <FormControlLabel
//                 value="cash"
//                 control={<Radio />}
//                 label="При отриманні (накладний платіж)"
//               />
//               <FormControlLabel
//                 value="card"
//                 control={<Radio />}
//                 label="Оплата на картку (надішлемо смс із номером картки для оплати)"
//               />
//             </RadioGroup>
//           </FormControl>

//           <div  role="group" aria-labelledby="language-head">
//             <p>Надіслати посилку без дзвінка менеджера</p>
//             <label>
//               <input type="checkbox" name="language" value="python" />
//             </label>
//           </div>

//           <button type="submit">Відправити</button>
//         </form> 
//       </Box>
//     </Modal>
//   );
// };
