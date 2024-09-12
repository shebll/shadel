// _app.tsx

import { AppProps } from "next/app"
import Script from "next/script"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XLESEE5RRC`} // Replace with your actual GA4 Tracking ID
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XLESEE5RRC');  // Replace with your actual GA4 Tracking ID
        `}
      </Script>

      {/* Your app */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
