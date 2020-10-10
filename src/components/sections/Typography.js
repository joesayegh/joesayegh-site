import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

function handleClick(e) {
  e.preventDefault();
  alert('Heyyyy!');
  // console.log('The link was clicked.');
}

const Test = () => (
  <Section style={{ background: 'var(--bg)', color: 'var(--text)' }}>
    <Container>
      <Title>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </Title>

      <hr />

      <Text>
        <h2>Paragraph</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <br />

        <h2>Bold</h2>
        <p>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </strong>
        </p>

        <br />

        <h2>Italics</h2>

        <p>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </em>
        </p>

        <br />

        <hr />

        <h2>Preformatted</h2>
        <pre>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </pre>

        <h2>Code</h2>
        <p>
          <code>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </code>
        </p>

        <br />

        <hr />

        <h2>Unordered List</h2>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>List item 5</li>
          <li>List item 6</li>
        </ul>

        <h2>Ordered List</h2>
        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>List item 5</li>
          <li>List item 6</li>
        </ol>

        <br />

        <hr />

        <ButtonDefault onClick={handleClick}>Click me</ButtonDefault>
        <ButtonRed onClick={handleClick}>Click me</ButtonRed>
        <ButtonGhost onClick={handleClick}>Click me</ButtonGhost>

        <br />
      </Text>
    </Container>
  </Section>
);

const Title = styled.div`
  h1 {
    font-size: 1.4rem;
    line-height: 1.3;
    margin-bottom: 40px;

    @media (min-width: ${props => props.theme.screen.iphone}) {
      font-size: 1.6rem;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: 2.4rem;
    }
  }
`;

const Text = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1.4;

    @media (min-width: ${props => props.theme.screen.iphone}) {
      font-size: 1rem;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: 1.3rem;
    }
  }
`;

const ButtonDefault = styled.button`
  background-color: var(--text);
  color: var(--bg);
  border: 1px solid var(--text);
  margin: 10px 10px 10px 0;
  padding: 15px 40px;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background-color: var(--bg);
    color: var(--text);
  }
`;

const ButtonRed = styled.button`
  background-color: var(--accent);
  color: var(--bg);
  border: 1px solid var(--accent);
  margin: 10px 10px 10px 0;
  padding: 15px 40px;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background-color: var(--accent);
    color: var(--text);
    border: 1px solid var(--accent);
  }
`;

const ButtonGhost = styled.button`
  background-color: var(--bg);
  color: var(--text);
  border: 1px solid var(--text);
  margin: 10px 10px 10px 0;
  padding: 15px 40px;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background-color: var(--text);
    color: var(--bg);
    border: 1px solid var(--text);
  }
`;

export default Test;
