import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/auth";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Toaster/>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
