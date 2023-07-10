import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [errorModal, setErrorModal] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (nameInput === "" || ageInput === "" || +ageInput < 1) {
      setErrorModal({
        title: "OOPS...An error occured!",
        message:
          "Please enter a valid name and age (Non-empty values OR age > 1)",
      });
      return;
    }

    props.onAddUser(nameInput, ageInput);

    setNameInput("");
    setAgeInput("");
  };

  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const errorModalHandler = () => {
    setErrorModal(null);
  };

  return (
    <>
      {errorModal && (
        <Modal
          title={errorModal.title}
          message={errorModal.message}
          onHandleError={errorModalHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={nameInput}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age (In years): </label>
          <input
            type="number"
            id="age"
            value={ageInput}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
