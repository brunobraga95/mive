import React from 'react';
import Slider from 'react-slick';
import { Wrapper, Section } from './styles';

const mock = [
  {
    section: 'bebidas',
    action: () => {},
  },
  {
    section: 'bebidas alcoolicas',
    action: () => {},
  },
  {
    section: 'porcoes',
    action: () => {},
  },
  {
    section: 'lanches',
    action: () => {},
  },
];

const MenuSections = () =>
   (
     <Wrapper>
       <Slider centerMode draggable arrows={false}>
         {mock.map(({ section, action }) => <Section onClick={action}>{section}</Section>)}
       </Slider>
     </Wrapper>
    );
export default MenuSections;
