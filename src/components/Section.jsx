
import {  Title } from './App.styled';

export const Section = ({title, children}) => {
  return (
      <div>
          <Title>{title}</Title>
          {children}
    </div>
  )
}

