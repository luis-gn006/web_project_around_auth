import React from "react";
import DivWithForm from "./DivWithForm.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Login({ isOpen, onUpdateUser }) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isPatching, setIsPatching] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setDescription(currentUser.about || "");
    }
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsPatching(true);
    onUpdateUser({
      name,
      about: description,
    }).finally(() => {
      setIsPatching(false);
    });
  }
  React.useEffect(() => {
    if (!isOpen) {
      if (currentUser) {
        setName(currentUser.name || "");
        setDescription(currentUser.about || "");
      }
    }
  }, [isOpen]);
  return (
    <>
      <DivWithForm
        name={"Login"}
        title={"Inicia sesión"}
        isOpen={isOpen}
        buttonText={isPatching ? "Guardando..." : "Inicia sesión"}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="div__form-label"></label>
        <input
          type="text"
          className="div__form-input div__form-name"
          id="name"
          name="name"
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
          onChange={handleChangeName}
          value={name}
        />
        <div className="div__line div__line-name"></div>
        <span className="div__input-error name-error"></span>
        <label htmlFor="job" className="div__form-label"></label>
        <input
          type="text"
          className="div__form-input div__form-job"
          id="job"
          name="job"
          placeholder="Acerca de mí"
          required
          minLength="2"
          maxLength="200"
          onChange={handleChangeDescription}
          value={description}
        />
        <div className="div__line div__line-job"></div>
        <span className="div__input-error job-error"></span>
      </DivWithForm>
    </>
  );
}

export default Login;
