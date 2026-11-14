import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export const Layout = () => (
    <main>
        <Header />
        <Outlet />
        <Footer />
    </main>
)