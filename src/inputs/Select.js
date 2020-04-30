import React from 'react';
import Styled from 'styled-components';

const DropDown = Styled.select`
    display: inline-block;
`;

const SelectInput = (props) => {
  const { name, onChange, data } = props;

  return (
    <DropDown name={name} onChange={onChange}>
      {data.map((data) => (
        <option value={data.id} key={data.id}>
          {data.title}
        </option>
      ))}
    </DropDown>
  );
};

export default SelectInput;
