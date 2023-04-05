import Script from "next/script";
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from "../libs/gtag";

export const GaScript = () => {
  return (
    <>
      {GOOGLE_ANALYTICS_MEASUREMENT_ID && (
        <>
          <Script
            id="load-ga"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="load-ga-script">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
    </>
  )
}