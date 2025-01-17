import NavigationBar from "../components/NavigationBar"; 
import "./globals.css"; // Ensure font-face declarations are included here

// Server-side metadata
export const metadata = {
  title: "VOXA",
  description: "Revolutionize your email workflow.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png", // For iOS devices
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

