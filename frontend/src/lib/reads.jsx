import { collection, doc, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";


export const getLinks = async () => {
    return (await getDocs(query(collection(db, 'links')))).docs.map(
        (docSnap) => ({

            ...docSnap.data(),
            id: docSnap.id,
        }
    )
    );
};

export const getLinksFromLinkID = async (linkID) => {
    return (await getDocs(doc(db, 'links', linkID))).data();
};

export const userIsAdmin = async (uid) => {
    return (await getDocs(doc(db, 'admins', uid))).exists();
};