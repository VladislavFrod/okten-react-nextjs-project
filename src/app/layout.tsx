import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer/Footer-Component";
import GenresSidebarComponent from "@/components/genres-sidebar/GenresSidebarComponent";
import HeaderComponent from "@/components/header/HeaderComponent";
import SliderComponent from "@/components/slider/SliderComponent";
import MenuComponent from "@/components/menu/MenuComponent";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "KinoCove",
  description: "The best movie theater for movies and TV series online.",
};

type PropType = { children: React.ReactNode };

export default function RootLayout({children}: Readonly<PropType>) {
  return (
      <html lang="en">
      <body className={inter.className} >

        <HeaderComponent/>
        <MenuComponent/>
        <div className={'menu-component'}>
        <SliderComponent/>
        </div>
        <div className={'main-component'}>
        <GenresSidebarComponent/>
        {children}
         </div>
      <FooterComponent/>


      </body>
      </html>
  );
}