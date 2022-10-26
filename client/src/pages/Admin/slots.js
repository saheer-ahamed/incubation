// import React, { useEffect, useState } from "react";
// import AdminLayout from "../../components/adminLayout";
// import Button from "@mui/material/Button";
// import axios from "axios";

// function slots() {
//   const [slotList, setSlotList] = useState([]);

//   const getSlots = async () => {
//       const response = await axios.post("/api/admin/getSlots");
//       console.log(response.data.slotData);
//       setSlotList(response.data.slotData)
//   }

//   useEffect(() => {
//     getSlots()
//   },[])

//   let buttons = () => {
//     return (
//       <Button variant="contained">Container</Button>
//     )
//   };
//   let addSlot = () => {
//     return (
//       <Button variant="contained" color="danger">
//         +
//       </Button>
//     );
//   };
//   return (
//     <div>
//       <AdminLayout buttons={buttons()}/>
//     </div>
//   );
// }

// export default slots;
