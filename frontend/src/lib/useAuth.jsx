import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { userIsAdmin } from './reads';

export default function useAuth() {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
  //  const [isAdmin, setIsAdmin] = useState(false);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        // console.log("Auth state changed:", user); // Debugging log
        setUser(user);
        // if (user) {
        //   try {
        //     const isAdmin = await userIsAdmin(user.uid);
        //     setIsAdmin(isAdmin);
        //   } catch (error) {
        //     console.error("Error checking admin status:", error); // Debugging log
        //   }
        // }
        setLoading(false);
        // console.log("Loading state set to false"); // Debugging log
      });
      return () => unsubscribe();
   }, []);

   return { user, loading};
  //  return { user, loading, isAdmin };
};