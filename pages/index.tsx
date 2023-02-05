import Head from 'next/head';
import Image from 'next/image';
import { Josefin_Sans } from '@next/font/google';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main
        style={{
          background: "url('./images/good.jpeg') no-repeat center/cover"
        }}
        className='relative grid w-full place-items-center'>
        <div className='w-[94%] max-w-[80rem] rounded-lg py-5 px-7 backdrop-blur-md md:w-[89%]'></div>
      </main>
    </>
  );
}
