import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import React, { useState } from 'react';
import "../styles/globals.css";

// Import the dev tools and initialize them
import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [count, setCount] = useState(0);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
<button onClick={() => setCount(count + 1)}>Click me</button>
<p>You clicked {count} times</p>
    </SessionProvider>
  );
}

export default MyApp;
