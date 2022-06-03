import "../styles/globals.css";
import type {AppProps} from "next/app";
import {AuthProvider} from "../context/auth";
import {Toaster} from "react-hot-toast";
import {useRouter} from "next/router";
import {useEffect} from "react";
import * as gtag from "../lib/ga";

const isProduction = process.env.NODE_ENV === "production";


function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            /* invoke analytics function only for production */
            if (isProduction) gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <AuthProvider>
            <Toaster/>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
