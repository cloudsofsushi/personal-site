import React from 'react';
import { Link } from 'react-router-dom';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Sushmita SAP Developer B.Tech NIT Kurukshetra"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome नमस्ते !</Link>
          </h2>
          <p>
            “Innovation distinguishes between a leader and a follower.” - Steve Jobs.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <section className="blurb">
        <ul className="actions">
          <li><a href="sushmita-CV.pdf" className="button" download>Download CV <FontAwesomeIcon icon={faFilePdf} /></a></li>
        </ul>
      </section>
      <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">This is a link and you should definitely click it.</a></p>
    </article>
  </Main>
);

export default Index;
