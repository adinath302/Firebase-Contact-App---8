import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import {collection} from 'firebase/firestore'

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsCollection = collection()
      } catch (error) {
        
      }
    };

    getContacts();
  });
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex flex-grow relative items-center">
          <CiSearch className=" ml-1 text-3xl text-white absolute" />

          <input
            type="text"
            className="flex-grow h-10 bg-transparent border border-white rounded-md text-white pl-9"
          />
        </div>

        <FaCirclePlus className="text-5xl text-white  cursor-pointer" />
      </div>
    </div>
  );
}

export default App;
