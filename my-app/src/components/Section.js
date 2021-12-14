import React from "react"
import styled from "styled-components"
import Wave from "./wave"

const SectionGroup = styled.div`
  margin: 100px 0 0;
  background: url(${props => props.image});
  background-size: cover;
  height: 920px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  align-items: center;

  @media (max-width: 640px) {
    height: 950px;
  }
`

const SectionLogo = styled.img`
  width: 128px;
  margin: 0 auto;
  align-self: end;
`

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
const Sectiontitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
`
const SectionText = styled.p`
  color: white;
`
const Wavebottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const Wavetop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <Wavetop>
      <Wave />
    </Wavetop>
    <Wavebottom>
      <Wave />
    </Wavebottom>
    <SectionTitleGroup>
      <Sectiontitle>{props.title}</Sectiontitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
