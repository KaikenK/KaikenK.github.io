import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dhruv Menon | CS & Finance Engineer",
    template: "%s | Dhruv Menon",
  },
  description:
    "Dhruv Menon - Computer Science & Finance Engineer. Specialized in quantitative trading, blockchain, and cybersecurity.",
  themeColor: "#000000",
  openGraph: {
    title: "Dhruv Menon - CS & Finance Engineer",
    description: "Quantitative Trading • Blockchain • Cybersecurity",
    url: "https://KaikenK.github.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Menon - Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;600;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/zen.css" />
        <link rel="stylesheet" href="/css/animations.css" />
        <link rel="stylesheet" href="/css/themes.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(u,x,s,n,i,f){
    u.ux=u.ux||function(){(u.ux.q=u.ux.q||[]).push(arguments)};
    i=x.getElementsByTagName('head')[0]; f=x.createElement('script');f.async=1; f.src=s+n;
    i.appendChild(f);
})(window,document,'https://api.uxsniff.com/cdn/js/uxsnf_track','.js');`,
          }}
        />
      </head>
      <body>
        {children}
        <Script src="/js/preloader.js" strategy="afterInteractive" />
        <Script src="/js/theme-toggle.js" strategy="afterInteractive" />
        <Script src="/js/parallax.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
