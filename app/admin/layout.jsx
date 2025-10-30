"use client";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import { useUser } from "@clerk/nextjs";

import Image from "next/image";
import { ToastContainer } from "react-toastify";


export default function Layout({ children }) {

const { user, isSignedIn } = useUser();
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            {isSignedIn && user && (<Image src={user.imageUrl} width={40} height={40} alt="" className="rounded-full"/>)}
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
