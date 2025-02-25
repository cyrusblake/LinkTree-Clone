import { getFirestore, doc, deleteDoc, collection, getDocs  } from 'firebase/firestore';
import { db } from './firebase';

export const setLinkDoc = (linkName, linkID, userID) => {
  return setDoc(doc(db, 'links', linkName), {
    linkName: linkName,
    linkID: linkID,
    userID: userID
  });
};

export const deleteDocument = async (collectionName, docId) => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

// const deleteDocumment = async (collectionName, docID) => {
//   const docRef = doc(db, collectionName, docID);


//   try {
//     const subcollection = await getDocs(collection(db, `${collectionName}/${docID}/subcollection`));
  
//     for (const s)
//   } catch {

//   }
// }