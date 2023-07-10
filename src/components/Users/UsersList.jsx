import React from "react";
import Card from "../UI/Card";
import { styled } from "styled-components";

const UsersList = (props) => {
  return (
    <CardContainer>
      <List>
        {props.users.map((user) => (
          <ListItem key={user.id}>
            {user.name} ({user.age} years old!)
          </ListItem>
        ))}
      </List>
    </CardContainer>
  );
};

export default UsersList;

const CardContainer = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const ListItem = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;
