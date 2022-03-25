import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 50px;
  text-transform: capitalize;
  width: 120px;
  height: 40px;
  font-size: 30px;
`;

export function FeedbackOptions({ options }) {
  return (
    <div>
      {options.map(({ name, action }) => (
        <Button key={name} onClick={action}>
          {name}
        </Button>
      ))}
    </div>
  );
}
