import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>About me</title>
      </Head>
      <div className="max-w-3xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-xl">
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <div>This is where my about me stuff goes.</div>
      </div>
    </div>
  );
}
