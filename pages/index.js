import Head from "next/head";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { getSession, useSession, signOut } from "next-auth/react";
//import { useEffect, useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const { data, status } = useSession();

  console.log(data);
  // const [user, setUser] = useState(null)x

  if (status === "loading") return <div>Loading...</div>;

  if (status === "authenticated") {
    const { user } = data;

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={roboto.className}>
          <h1>Hola Tomas!</h1>
          <h3>{user.name}</h3>
          {user.email && <p>{user.email}</p>}
          <Image
            src={user.image}
            alt={`Imagen de ${user.name}`}
            height="200"
            width="200"
            priority
          />
          <button onClick={() => signOut({callbackUrl: '/login' })}>Cerrar sesión</button>
        </main>
      </>
    );
  }
}

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context)
//   return {
//     props: { user: session.user },
// }}
