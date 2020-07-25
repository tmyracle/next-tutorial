import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div>
        <Head>
          <title>About me</title>
        </Head>
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="text-xl">About</div>
          <div className="mt-4 mb-4">Here's a little bit about me:</div>
          <p>
            Most recently I was a Senior Product Manager at Samsara where I
            worked on an IoT product for the manufacturing industry. Prior to 
            that I was the Head of Product and then a GM at RigUp. In my free time 
            I enjoy playing golf, making music, and taking photos.
          </p>
          <div>
            <div className="mt-8 mb-4 text-xl">
              Here's a brief summary of my previous roles:
            </div>
            <div className="mb-4">
              <div className="font-medium">
                <a href="https://www.samsara.com">Samsara</a>
              </div>
              <div className="flex justify-between mb-2">
                <span className="mr-4">Senior Product Manager</span>
                <span>01/2020 - 05/2020</span>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li className="mb-2">
                    Led the launch and execution of the Manufacturing Analytics
                    product line in the Industrial business unit which surpassed
                    $100k in bookings first quarter in market.
                  </li>
                  <li className="mb-2">
                    Developed plug and play hardware kit in response to COVID-19
                    travel restrictions that reduced install time from hours to
                    less than 30 minutes resulting in a $50k deal closed in 28
                    days from start of pilot.
                  </li>
                  <li>
                    Partnered with product marketing to build sales collateral,
                    performed sales enablement training, led customer feedback
                    calls with sales and customer success, and collaborated with
                    engineering to find the best solutions for customer pain
                    points.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-medium">
                <a href="https://www.rigup.com">RigUp</a>
              </div>
              <div className="flex justify-between">
                <span className="mr-4">General Manager</span>
                <span>11/2018 - 12/2019</span>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li>
                    Led the research and corporate development efforts that
                    resulted in RigUp’s entry into the solar, wind, commercial
                    construction, and maritime/defense industries.
                  </li>
                  <li>
                    Performed analysis of industrial contingent labor markets
                    including mapping the competitive landscape, understand
                    margin structures, and developing a macro growth thesis.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-medium">
                <a href="https://www.rigup.com">RigUp</a>
              </div>
              <div className="flex justify-between">
                <span className="mr-4">Head of Product</span>
                <span>11/2014 - 11/2018</span>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li>
                    Defined product strategy and collaborated with engineering
                    and design to build the leading workforce and services
                    marketplace for the energy industry from Seed through Series
                    C.
                  </li>
                  <li>
                    Joined as the 7th employee and built the product management
                    function from the ground up including hiring and mentoring
                    the first 7 product managers.
                  </li>
                  <li>
                    Developed product requirements, conducted customer research,
                    built prototypes, assisted with technical sales, determined
                    product positioning, facilitated cross-functional
                    understanding of our customers, and helped wherever needed
                    to grow the business.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
