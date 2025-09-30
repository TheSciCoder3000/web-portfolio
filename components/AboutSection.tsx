"use client";

import React from "react";
import Contributions from "./Contributions";
import TiltCard from "./TiltCard";

import contrib20 from "@/app/contrib-data/2020.json";
import contrib21 from "@/app/contrib-data/2021.json";
import contrib22 from "@/app/contrib-data/2022.json";
import contrib23 from "@/app/contrib-data/2023.json";
import contrib24 from "@/app/contrib-data/2024.json";
import Link from "next/link";

function AboutSection() {
  return (
    <div>
      <div>
        <div>
          <div>
            <h3>ABOUT ME</h3>
            <h2>Fresh and New</h2>
          </div>
          <p>
            i am a Computer Engineer graduate specializing in Software
            Development. Experienced in frontend web development using React and
            Typescript with solid foundation in backend development using Nodejs
            and Django.
          </p>
          <a
            href="/RESUME - JOHN JUVI QUIMADA DE VILLA.pdf"
            download="RESUME - JOHN JUVI DE VILLA"
            target="_blank"
          >
            Download My Resume
          </a>
        </div>

        <TiltCard />
      </div>

      <div>
        <div>
          <Contributions year="2020" data={contrib20.weeks} />
          <Contributions year="2021" data={contrib21.weeks} />
          <Contributions year="2022" data={contrib22.weeks} />
          <Contributions year="2023" data={contrib23.weeks} />
          <Contributions year="2024" data={contrib24.weeks} />
          <Contributions year="2025" />
        </div>

        <div>
          <h2>Experienced and Passionate</h2>
          <p>
            Programming since late 2020 with multiple projects covering frontend
            web development. Programming languages include Java, Javascript,
            Typescript Python, C++, C# and Dart. Check my history in my Github
            account below.
          </p>
          <Link
            href="https://github.com/TheSciCoder3000?tab=overview&from=2024-12-01&to=2024-12-31"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
