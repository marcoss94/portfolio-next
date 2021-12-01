import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Front End Developer and Systems Engineer with 2 years of
        experience. I define myself as a communicative, enterprising, positive
        person who likes teamwork. My main objective is to continue growing to
        add value and provide innovative solutions.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:marcossalvarez94@gmail.com")}
      >
        Send me a email
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
