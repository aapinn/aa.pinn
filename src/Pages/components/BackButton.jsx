import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);  // Mengarahkan pengguna ke halaman sebelumnya
  };

  return (
    <div onClick={handleBack} className='w-fit cursor-pointer flex items-center border rounded-xl justify-left pr-4 py-1 px-2 mb-5 group '>
        <IoIosArrowBack />
        <button className='text-sm group-hover:pl-3 duration-300' > Back </button>
    </div>
  );
};

export default BackButton;
