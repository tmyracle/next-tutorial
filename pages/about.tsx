import Head from "next/head";
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
          <p>
            I was born in raised in a city of about 100k in north Texas called
            Wichita Falls. After high school I went to Texas A&M University
            where I got my Bachelors in Chemical Engineering and a minor in
            Chemistry.
          </p>
          <p>
            During college I ended up doing 3 internships in the process
            industry: Bayer in Baytown, TX, Ascend Performance Materials in
            Alvin, TX, and Flint Hills Resources in Corpus Christi, TX. Through
            these internships I realized I don't want to spend the rest of my
            career in a chemical plant or refinery so I declined to join Flint
            Hills Resources after receiving an offer to come back full time
            after graduation.
          </p>
          <p>
            Instead I ended up joing BHP Billiton as a Drilling Engineer and
            worked on an offshore rig in the Gulf of Mexico for a year before
            transferring to the South Texas team. Taking a helicopter to work
            was quite a change, as was living on a 300' x 300' floating mini
            city for 2 weeks at a time where damn near everything can kill you.
            I loved my time offshore and had the opportunity to work on one of
            the most challenging drilling projects BHP had undertaken at that
            time (a 35,000ft exploration well called Ness Deep).
          </p>
          <p>
            After working at BHP for a little over 2 years it was time for a
            change and I joined a much smaller energy company called Hilcorp
            Energy as a Production Engineer. This gave me the ability to work in
            a much more entreprenuerial company and learn a new skillset in the
            energy industry. I was there for all of 6 months before leaving to
            jump head first into the startup world.
          </p>
          <p>
            My first experience in technology was at RigUp where I joined as a
            very early employee. I was fortunate that I had domain knowledge in
            the energy industry and could make use of that to help shape
            potential products. I had also spent some of my downtime when I was
            working on rigs learning Ruby on Rails and basic web development.
          </p>
          <p>
            My interest in building software combined with my domain expertise
            in the energy industry allowed me to carve out a product management
            role as the company grew. One thing led to another and I ended up
            leading product at RigUp up until just after our Series C round.
            After 4 years of leading product I transitioned into a new role
            exploring new verticals. This role ended up being a hybrid of
            research, analysis, and corporate development. I ended up learning a
            lot in that role and one of those learnings was that I was much
            happier and more fulfilled when I was working on product. After 5
            years at RigUp it was time for a change of pace.
          </p>
          <p>
            At the end of 2019 I moved to San Francisco to join Samsara because
            I wanted to get back into product. I also knew that the Bay Area was
            the epicenter for the tech industry and I needed to be there to
            expand my network and career.
          </p>
          <p>
            I spent 5 months at Samsara where I was leading a new product in the
            manufacturing space. My time at Samsara was cut short thanks to a
            round of COVID-19 inspired layoffs that affected me and 299 of my
            colleages. I spent the next few months decompressing and thinking
            about what was next. After a few months of exploring opportunities I
            decided to join Facebook at a Product Manager.
          </p>
          <p>
            So that's the story up to this point. I'm starting at Facebook in
            November 2020 and will be working on my product skills and doing
            some angel investing for the foreseeable future.
          </p>
        </div>
      </div>
    </Layout>
  );
}
