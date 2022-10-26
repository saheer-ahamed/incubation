import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Apply from "../../components/Apply";
import Booking from "../../components/bookings";

function Home() {
  const [bookingExist, setBookingExist] = useState(null)
  const getData = async () => {
    try {
      const response = await axios.post(
        "/api/user/getUserInfo",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setBookingExist(response.data.bookings)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="apply-parent" style={{display: "-ms-flexbox", flexDirection:"column", alignItems:"center"}}>
        {!bookingExist && <Apply />}
        {bookingExist && <Booking data={bookingExist}/>}
      </div>
    </div>
  );
}

export default Home;
