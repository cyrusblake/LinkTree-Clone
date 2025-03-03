  
  import { db } from "./firebase";
  import { deleteDoc, doc } from "firebase/firestore";
  
  
  export const deleteDocument = async (linkID) => {
    const ref = doc(db, "links", linkID);
    try {
      await deleteDoc(ref)
    } catch (error) {
      console.log("Error deleting document: ", error);
    }
  };

