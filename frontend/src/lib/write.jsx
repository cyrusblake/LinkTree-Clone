import { doc, setDoc  } from 'firebase/firestore';
import { db } from './firebase';

export const setLinkDoc = (linkName, linkID, userID) => {
  return setDoc(doc(db, 'links', linkName), {
    linkName: linkName,
    linkID: linkID,
    userID: userID
  });
};

