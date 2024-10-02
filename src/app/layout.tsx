import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "ResumeReady - Free Resume Builder and Parser",
  description:
    "ResumeReady is a free and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, ResumeReady also provides a resume parser to help test and confirm its ATS readability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9909888228762886"
     crossOrigin="anonymous"></script>
     </head>
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
