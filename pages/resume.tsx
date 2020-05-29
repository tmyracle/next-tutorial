import Head from "next/head";
import Link from "next/link";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Tyler's Resume</title>
      </Head>
      <div className="max-w-3xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-xl">
        <Link href="/">
          <a>Back to home</a>
        </Link>
        {process.env.RESUME_SOURCE ? (
          <iframe
            className="mt-6"
            src={process.env.RESUME_SOURCE}
            width="100%"
            height="1000"
          ></iframe>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
