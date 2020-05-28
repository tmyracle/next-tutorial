import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import Weather from "../components/weather";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import { getWeatherData } from "../lib/weather";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
  weatherData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  weatherData: any[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl text-gray-900">
          I'm Tyler, a product manager living in San Francisco. You can find me
          on <a href="https://www.twitter.com/tylermyracle">Twitter</a>.
        </div>
      </section>
      <section className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="font-medium text-2xl mb-4">Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-xl">
        <Weather weatherData={weatherData} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const weatherData = await getWeatherData();
  return {
    props: {
      allPostsData,
      weatherData,
    },
  };
};
