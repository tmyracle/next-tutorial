import Head from "next/head";
import Link from "next/link";

export default function Writing() {
  return (
    <div>
      <Head>
        <title>My thoughts</title>
      </Head>
      <div className="max-w-3xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-xl">
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <div>
          Here is where I will put all of my blog posts in chronological order.
        </div>
      </div>
    </div>
  );
}
