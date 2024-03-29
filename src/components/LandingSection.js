import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nehemiah!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatar=require('../images/mypic.jpeg')

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
    <Avatar alt="" src={avatar} size='xl' />
    <Heading as="h6" size='2x1'>{greeting}</Heading>
    <Heading as="h3">{bio1}</Heading>
    <Heading as="h3">{bio2}</Heading>
  </VStack>

  </FullScreenSection>
);

export default LandingSection;
