import { FC } from "react";
import { Container } from "@components/ui";
import Link from "next/link";
import { Usernav } from "@components/common";
import style from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <Container>
      <div className={style.root}>
        <div className='flex flex-1 items-center'>
          <Link href='/' className={style.logo}>
            Home
          </Link>
          <nav className='ml-6 space-x-6'>
            <Link href='/' className={style.link}>
              All
            </Link>
            <Link href='/collections/dice' className={style.link}>
              Dice
            </Link>
            <Link href='/collections/notebooks' className={style.link}>
              Notebooks
            </Link>
          </nav>
          <div className='flex flex-1 justify-end space-x-8'>
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
