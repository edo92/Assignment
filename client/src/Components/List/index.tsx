import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 10px;
`;

interface IProps {
  data: any[];
  handleSelect: any;
}

const List: React.FC<IProps> = ({ data, handleSelect }) => {
  return (
    <ul>
      {data.map((dr) => (
        <ListItem key={dr.id} onClick={() => handleSelect(dr.id)}>
          {dr.firstName}, {dr.lastName}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
