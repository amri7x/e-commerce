import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet, useNavigation } from "react-router"
import { ProductsSkeleton } from "./ProductsSkeleton"

export const Layout = () => {
    const navigation = useNavigation()
    const isProductsLoading = 
        navigation.state === "loading" &&
        navigation.location?.pathname.startsWith("/products")
    return(
        <>
        <Header />
        {isProductsLoading
            ? <ProductsSkeleton />
            : <Outlet />
        }
        <Footer />
        </>
    )
}