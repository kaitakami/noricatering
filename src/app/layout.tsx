import "~/styles/globals.css";
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
