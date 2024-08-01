'use client'
import { ReactNode } from "react";
import { Grid, Container } from "@mui/material";
import Header from "../ui/header/Header";
import { usePathname } from "next/navigation";

type MainLayoutProps = {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const pathName = usePathname();
    const isLoginPage = pathName === '/';

    return (
        <Grid container display='flex' flexDirection='column' sx={{ minHeight: '100vh', padding: 0, margin: 0 }}>
            {!isLoginPage && <Header />}
            <Container disableGutters maxWidth={false} sx={{ marginTop: isLoginPage ? '0px' : '60px', flexGrow: 1 }}>
                {children}
            </Container>
        </Grid>
    );
};

export default MainLayout;
