import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { user } from "../types";
import { apiUrl } from "../constants";
import axios from "axios";
import UserCard from "./UserCard";
import { AuthContext } from "./AuthContext";

const UserList = () => {
  const { token } = useContext(AuthContext)!;

  const [users, setUsers] = useState<user[]>([]);
  const [filterString, setFilterString] = useState("");
  const [isSortAscending, setIsSortAscending] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrl + "/api/v1/users/", {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then((res) => setUsers(res.data));
  }, [token]);

  const displayUsers = users
    .filter(
      (user) => filterString === "" || user.username.includes(filterString)
    )
    .sort((a, b) => (isSortAscending ? a.id - b.id : b.id - a.id));

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">User List</h1>
      <InputGroup className="mb-2">
        <FormControl
          placeholder="Username"
          value={filterString}
          onChange={(event) => setFilterString(event.target.value)}
        />
        <Button onClick={() => setIsSortAscending(!isSortAscending)}>
          Sort Order{" "}
          <i
            className={`bi bi-sort-numeric-${isSortAscending ? "down" : "up"}`}
          />
        </Button>
      </InputGroup>
      <Stack gap={2}>
        {displayUsers.map((displayUser) => (
          <UserCard key={displayUser.id} user={displayUser} />
        ))}
      </Stack>
    </Container>
  );
};

export default UserList;
