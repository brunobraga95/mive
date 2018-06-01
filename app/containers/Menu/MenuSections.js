import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Wrapper, Section } from './styles';

const mock = [
  {
    section: 'porcoes',
  },
  {
    section: 'bebidas',
  },
  {
    section: 'lanches',
  },
];

const MenuSections = (props) => (
  <Wrapper>
    <Slider centerMode draggable arrows={false}>
      {mock.map(({ section }) => (
        <Section
          decorated={props.section === section}
          onClick={() => props.changeSection(section)}
          key={`section-${section}`}
        >
          {section}
        </Section>
      ))}
    </Slider>
  </Wrapper>
);

MenuSections.propTypes = {
  section: PropTypes.string,
};

export default MenuSections;
