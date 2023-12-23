"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

// filename app.js
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

const Page = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const data = await axios.get("http://localhost:3000/api/static/users");
    console.log(data, "data");
    setUserData(data.data?.Data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(16, userData);
  return (
    <div className="bg-[#1e293b]">
      <div className="md:container md:mx-auto " style={{ minHeight: "100vh" }}>
        <div className="grid grid-cols-3 gap-4">
          {userData?.length ? (
            userData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-md border-4 p-3 border-indigo-500/50 bg-[#64748b] text-[#ffffff] grid grid-cols-2 "
                >
                  {/* <div><Image src={item.}/></div> */}
                  <div>
                    {item?.name} <br />
                    {item?.email}
                    <br />
                  </div>
                </div>
              );
            })
          ) : (
            <li>No data found</li>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
