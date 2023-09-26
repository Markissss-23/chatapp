import React, { useContext, useState } from 'react'
import Attach from '../img/attach-file.png'
import Img from '../img/gallery.png'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc,serverTimestamp,updateDoc } from 'firebase/firestore'
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../firebase'



const style = {
  input: `flex items-center justify-between h-12 bg-white padding-2.5`,
  send: `flex items-center gap-2.5`,
  inputs: `w-4/5 border-none outline-none text-blue-900 placeholder-gray-500`,
  fileImport: ``,
  img: `h-6 w-6 cursor-pointer`, 
  button: `border-none py-2 px-4 text-white bg-[#4d9dcb] mr-1.5`
}
const Input = () => {

  const [ text, setText ] = useState("")
  const [ img, setImg ] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if(img) {

      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (error) => {
          console.log(error)
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          Id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);

  };




  return (
    <div className={style.input}>
      <input 
        className={style.inputs} 
        type='text' 
        placeholder='Send Message...' 
        onChange={ e=> setText(e.target.value)}
        value={text}
        />
      <div className={style.send}>
        <img className={style.img} src={Attach} alt='' />
        <input className={style.inputs} type='file' style={{ display: "none" }} id="file" onChange={e => setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <img className={style.img} src={Img} alt='' />
        </label>
        <button className={style.button} onClick={handleSend}>Send</button>
      </div>

    </div>
  )
}

export default Input