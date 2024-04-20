import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function Navbar() {
  let [navListToggle, setNavListToggle] = useState(false);
  return (
    <nav
      className={`bg-white sticky top-0 z-[9999] flex md:flex-row md:h-fit md:px-36 max-w-full w-full px-6 shadow-sm bg-light-fondo dark:bg-dark-fondo items-center md:justify-between md:gap-4 gap-4 py-1 justify-around flex-col`}
    >
      <div className="flex flex-row justify-center items-center order-3 ">
        <Button
          variant="ghost"
          className="px-2 md:hidden"
          onClick={() =>
            navListToggle ? setNavListToggle(false) : setNavListToggle(true)
          }
        >
          <Menu></Menu>
        </Button>

        <AlertDialog className="flex justify-center items-center align-middle">
          <AlertDialogTrigger className="text-xl font-semibold">Integrantes</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader className="gap-5">
              <AlertDialogTitle className="text-2xl font-bold">Integrantes</AlertDialogTitle>
              <AlertDialogDescription className="text-center font-normal text-xl">
                <ul>
                  <li>Dylan Solarte 20201020088
                  </li>
                  <li>Cristian Casas 20192020091
                  </li>
                  <li>Cristian Espitia 2019020104
                  </li>
                </ul>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Salir</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className=" flex items-center justify-end text-3xl font-black font-sans md:order-2 order-first">

        <a href="/">CANDIDATOSAPP</a>
      </div>
      <div className="flex order-2">
      </div>
      <ul
        className={`md:flex md:flex-row md: md:justify-end md:relative md:order-1 ${navListToggle
          ? "text-center flex-col gap-0 items-center order-last"
          : "hidden"
          }`}
      >
        <li>
          <a
            href="/crear-candidatos"
            className={`${buttonVariants({
              variant: "ghost",
            })} lg:px-6 md:px-2 text-[1.125rem] font-semibold text-xl`}
          >
            Creacion Candidatos
          </a>
        </li>
        <li>
          <a
            href="/leer-candidatos"
            className={`${buttonVariants({
              variant: "ghost",
            })} lg:px-6 md:px-2 text-[1.125rem] font-semibold text-xl`}
          >
            Lista Candidatos
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
