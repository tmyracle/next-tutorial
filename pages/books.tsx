import Head from "next/head";
import Link from "next/link";

export default function Books() {
  return (
    <div>
      <Head>
        <title>Books I enjoy</title>
      </Head>
      <div className="max-w-3xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-xl">
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <div>
          Here's where I put some books that I enjoy reading. Maybe use
          Goodreads API in the future?
        </div>
      </div>
    </div>
  );
}
