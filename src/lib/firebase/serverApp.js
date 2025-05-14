// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

import { cookies } from "next/headers";
import { initializeServerApp, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Returns an authenticated client SDK instance for use in Server Side Rendering
// and Static Site Generation
export async function getAuthenticatedAppForUser() {
  const authIdToken = (await cookies()).get("__session")?.value;
  const firebaseConfig = {
    apiKey: "AIzaSyAHqBFSc3aRC2zV-Vo3DGHw7BdL23FrbGo",
    authDomain: "friendlyfire-e8a94.firebaseapp.com",
    projectId: "friendlyfire-e8a94",
    storageBucket: "friendlyfire-e8a94.firebasestorage.app",
    messagingSenderId: "695407578953",
    appId: "1:695407578953:web:185979cfd9cc2db6ee1498",
  };

  const firebaseServerApp = initializeServerApp(initializeApp(firebaseConfig), {
    authIdToken,
  });

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}
