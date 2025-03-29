import Header from "./common/Header";
import Footer from "./common/Footer";
import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet } from "react-router";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </ClerkProvider>
  );
}

export default RootLayout;
