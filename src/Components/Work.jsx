import React from 'react';
import { Accordion, AccordionPanel, Box } from 'grommet';

export const Work = () => (
  <section className="p-4 pt-7">
    <h1 className="pb-5">Work History</h1>
    <Box>
      <Accordion>
        <AccordionPanel
          className="p-3"
          label="Capgemini (Wells Fargo), June-2020 to Present"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Senior Consultant, Charlotte, Nc</h4>
            <ul>
              <li>
                Develop and maintain micro-sites and supporting repositories in
                Vue ecosystem.
              </li>
              <li>
                Code review, govern coding standards, create new design and
                component patterns.
              </li>
              <li>Maintain enterprise wide front end boilerplate for Vue.</li>
              <li>Groom features for team, Pair programming on daily basis.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Capgemini (AIG), Oct-2019 to May-2020"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Senior Consultant, Houston, Tx</h4>
            <ul>
              <li>
                Developed and maintained micro-sites and supporting repositories
                in react, redux.
              </li>
              <li>
                Performed Code review, govern coding standards, maintain
                branching strategies.
              </li>
              <li>Supported bi-weekly prod and non-prod deployments.</li>
              <li>Groomed features for team, and coordinate with offshore.</li>
              <li>
                Collaborated with other teams inside the company and third
                parties.
              </li>
              <li>
                Participated in Hackathons and Proof of Concept creations.
              </li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Anagh Tech (AIG), Aug-2017 to Oct-2019"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Senior Consultant, Houston, Tx</h4>
            <ul>
              <li>
                Develop and maintain micro-sites and supporting repositories in
                react, redux.
              </li>
              <li>
                Code review, govern coding standards, maintain branching
                strategies.
              </li>
              <li>Support bi-weekly prod and non-prod deployments.</li>
              <li>Groom features for team, and coordinate with offshore.</li>
              <li>
                Collaborations with other teams inside the company and third
                parties.
              </li>
              <li>Participate in Hackathons and Proof of Concept creations.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Anagh Tech (HPE/DXE), Nov-2016 to July 2017"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Web Developer, Austin, Tx</h4>
            <ul>
              <li>Worked on intranet sites using React-Redux and Grommet.</li>
              <li>
                Played integral role on close knit team in showcasing agile
                capabilities to larger teams.
              </li>
              <li>Implemented React/Unit testing coding standards.</li>
              <li>
                Implemented Redux mock store, Webpack, Axios for api
                connections,
              </li>
              <li>Collaborated with Dev-Ops for deployments.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Anagh Tech (Code & Theory), June-2016 to Sep 2016"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Web Developer, New York, Ny</h4>
            <ul>
              <li>
                Developed websites such as, New york life, Heritage.org and
                Consumer.com.
              </li>
              <li>
                Created and delivered HTML/Sass prototypes for high-pressure
                deadlines.
              </li>
              <li>Used Jquery for nylife, introduced to React and Es6</li>
              <li>
                Experience with setting up Storybook, js animations libraries
                like Greensock.
              </li>
              <li>Collaborated closely with design team for development.</li>
            </ul>
          </Box>
        </AccordionPanel>
        <AccordionPanel
          className="p-3"
          label="Utis Technologies, Jun-2015 to May 2016"
        >
          <Box
            className="p-4"
            background="light-1"
            overflow="auto"
            height="small"
          >
            <h4>Software Developer, Piscataway, Nj</h4>
            <ul>
              <li>Developed internal websites using AngularJs.</li>
              <li>Developed HTML5/Sass based documentation dashboard.</li>
              <li>
                Worked on various form implementations using JavaScript and
                Angular.
              </li>
            </ul>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  </section>
);
