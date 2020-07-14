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
        <div className="mb-4 mt-4 text-xl">Here's a little bit about me.</div>
        <p>
          Most recently I was a Senior Product Manager at Samsara where I worked
          on products in the manufacturing space. This was my first experience
          having to take into account the tradeoffs between hardware and
          software and what that means for the product development process.
        </p>
        <p>
          I moved to San Francisco for the role at Samsara because I wanted to
          get back into product and work with teams to build things that
          delighted customers. I also knew that the Bay Area was the epicenter
          for the tech industry and I needed to be there to expand my network
          and career.
        </p>
        <p>
          My first experience in technology was at RigUp where I joined as a
          very early employee. At that point we didn't yet have a cohesive
          product or any customers, we were still searching for a path forward.
          I was fortunate that I had domain knowledge in the energy industry and
          could make use of that to help shape potential products. I had also
          spent some of my downtime when I was working on rigs in the Gulf of
          Mexico or in South Texas learning Ruby on Rails and basic web
          development.
        </p>
        <p>
          Here's an old picture from 2013 where I was learning Rails while
          working in South Texas outside of Cotulla:
          <img src="/images/rails.JPG" />
        </p>
        <p>
          My interest in building software combined with my domain expertise in
          the energy industry allowed me to carve out a product management role
          for myself. One thing led to another and I ended up leading product at
          RigUp up until just after our Series C round. After 4 years of leading
          product I transitioned into a new role exploring new verticals. This
          role ended up being a hybrid of research, analysis, and corporate
          development. I ended up learning a lot in that role and one of those
          learnings was that I was much happier and more fulfilled when I was
          working on product.
        </p>
        <p>
          In a previous life I was an engineer in the energy industry after
          getting a degree in Chemical Engineering at Texas A&M University. I
          grew up in Texas and that meant that oil & gas was THE industry to go
          into. I didn't have much exposure to white collar career paths growing
          up aside from basic things like nursing or accounting. I sometimes
          regret that I didn't major in computer science, but the truth is I had
          no idea that computer science was even a field that I could enter. I
          didn't know anyone growing up that worked on software or technology
          and our high school didn't seem to do much in the way of infoming us
          about potential fields to enter and degrees to pursue.
        </p>
        <p>
          The only thing I knew about my academic future was that I wanted to be
          an engineer because I was good at math and science and I knew that
          engineers were paid well. When I came to the realization that you need
          to choose a particular branch of engineering to go into I chose
          Chemical Engineering because I enjoyed Chemistry so it seemed like a
          decent enough of a fit. As far as A&M is concerned, it was the only
          school that I applied to. I had a group of friends in my AP physics
          class that were all applying to Texas A&M engineering programs so I
          pretty much just tagged along. Luckily I was accepted into the
          Chemical Engineering program and that was that.
        </p>
        <div>
          <div className="mt-8 mb-4 text-xl">
            Here's a brief summary of my work:
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
                  including mapping the competitive landscape, understand margin
                  structures, and developing a macro growth thesis.
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
                  Defined product strategy and collaborated with engineering and
                  design to build the leading workforce and services marketplace
                  for the energy industry from Seed through Series C.
                </li>
                <li>
                  Joined as the 7th employee and built the product management
                  function from the ground up including hiring and mentoring the
                  first 7 product managers.
                </li>
                <li>
                  Developed product requirements, conducted customer research,
                  built prototypes, assisted with technical sales, determined
                  product positioning, facilitated cross-functional
                  understanding of our customers, and helped wherever needed to
                  grow the business.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
