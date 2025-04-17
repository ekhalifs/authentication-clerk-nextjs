"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  const [counter, setCounter] = useState(0);

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};
