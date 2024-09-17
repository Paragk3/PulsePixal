import React from 'react';

const Title = ({ headline, subheading, description }) => { // Add props for flexibility
  return (
    <header className="title"> {/* Use <header> for semantic correctness */}
      <h1>{headline || 'PulsePixal'}</h1> {/* Default headline if not provided */}
      <h2>{subheading || 'Your Pictures'}</h2> {/* Default subheading */}
      <p>{description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p> {/* Default description */}
    </header>
  );
}

export default Title;