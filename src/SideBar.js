import React,{useEffect,useState} from 'react'
import './SideBar.css'
import man from './img/man.png'
import SidebarChat from './SidebarChat'
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore"
import {db} from "./firebase";

export default function SideBar({userName}) {

    const[group, setGroup] = useState([]);

    const getGroups = async() =>
    {
        const getData = onSnapshot(collection(db, "groups" ) , (snapshot) =>
        {
            let list = [];
            snapshot.docs.forEach((doc) =>{
                list.push({
                    id:doc.id,
                    ...doc.data()
                })
            });
            setGroup(list);
        });
      
    }

    useEffect(()=>{
        getGroups();
    },[])

  return (
    <div className='sideBar'>
        {/* header */}

        <div className="sidebarHeader">
          
            <div style={{display:"flex"}}>
                <img src={man} alt="user" />
                <h1>
                    {userName}
                </h1>
            </div>
            <div className="sidebarHeaderRight">
                <button style={{border: "none"}}>
                <span className="material-symbols-outlined">
                 cycle
                 </span>
                 </button>

                 <button style={{border: "none"}}>
                 <span className="material-symbols-outlined">
                 more_vert
                 </span>
                 </button>

                 <button style={{border: "none"}}>
                 <span className="material-symbols-outlined">
                 chat
                 </span>
                 </button>
            </div>
        </div>

            {/* searchbar */}

            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                <span className="material-symbols-outlined">search</span>
                <input type="text" placeholder='Search Contact'/>
                </div>
            </div>


            {/* sidebar chats */}

            <div className="sidebarChats">
                <SidebarChat addNewChat />
               {
                group.map((group) => {
                    return <SidebarChat key={group.id} name={group.name} id={group.id}/>;
                })
               }
            </div>

    </div>
  )
}
