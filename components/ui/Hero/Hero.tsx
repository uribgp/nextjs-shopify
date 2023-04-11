import { FC } from "react";
import style from "./Hero.module.css";
import Link from "next/link";
import { Container } from "@components/ui";

interface Props {
  headline: string;
  description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className='bg-black'>
      <Container>
        <div className={style.root}>
          <h2 className={style.headline}>{headline}</h2>
          <div>
            <p className={style.description}>{description}</p>
            <Link className={style.link} href='/'>
              Read it here
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
