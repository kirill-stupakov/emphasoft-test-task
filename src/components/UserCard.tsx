import React from "react";

import { user } from "../types";
import { Badge, Container } from "react-bootstrap";

interface Props {
  user: user;
}

const hasFirstOrSecondName = (user: user) => user.first_name || user.last_name;

const isoToReadableString = (string: string) => {
  const date = new Date(string);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return dateTimeFormat.format(date);
};

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <Container
      className={`user-card bg-${
        user.is_superuser ? "primary" : "secondary"
      } bg-opacity-10 rounded-3 shadow-sm px-3 py-2`}
    >
      <h4 className="fw-bold">
        <Badge className={user.is_superuser ? "bg-primary" : "bg-secondary"}>
          {user.id}
        </Badge>{" "}
        {user.username}
      </h4>
      {hasFirstOrSecondName(user) && (
        <p className="mb-0">
          <i className="bi bi-person" /> {user.first_name} {user.last_name}
        </p>
      )}
      {user.last_login && (
        <p className="mb-0">
          <i className="bi bi-clock-history" />{" "}
          {isoToReadableString(user.last_login)}
        </p>
      )}
    </Container>
  );
};

export default UserCard;
