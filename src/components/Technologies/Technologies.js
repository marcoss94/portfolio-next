import React from "react";
import { DiHtml5, DiReact, DiCss3, DiSass } from "react-icons/di";
import { SiNextDotJs, SiTypescript } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I`ve worked with a range a technologies in the web developement world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"4rem"} />
        <ListContainer>
          <ListTitle>React.js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size={"4rem"} />
        <ListContainer>
          <ListTitle>Next.js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size={"4rem"} />
        <ListContainer>
          <ListTitle>TypeScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size={"4rem"} />
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size={"4rem"} />
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size={"4rem"} />
        <ListContainer>
          <ListTitle>SASS</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
