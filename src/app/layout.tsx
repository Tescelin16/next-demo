import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/styles/theme/theme";
import Header from "./ui/header/Header";


export const metadata: Metadata = {
  title:{ 
    default:"Grupo Sur",
    absolute: "",
    template: "%s - Grupo Sur"
  },
  description: "Grupo Sur app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  style={{ height: '100vh', width: '100%' }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
