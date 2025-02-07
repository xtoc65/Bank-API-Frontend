import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../services/fetchUserProfile";
import { editForm, cancelEdit } from "../store/FormSlice";
import { updateUserProfile } from "../services/userService";
import Bank from "../components/Bank";
import ErrorMessage from "../components/ErrorMessage";

import "../assets/styles/user.css";

function User() {
  const dispatch = useDispatch();
  const { user, loading, error, edited} = useSelector((state) => state.user);
  const { isEditing } = useSelector((state) => state.form);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const hasError = error !== null

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setNewFirstName(user.firstName);
      setNewLastName(user.lastName);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Aucun utilisateur connecté.</div>;
  }

  const handleEdit = () => {
    dispatch(editForm({ firstName: user.firstName, lastName: user.lastName }));
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  const handleSave = () => {
    const updatedFirstName = newFirstName || user.firstName;
    const updatedLastName = newLastName || user.lastName;

    dispatch(
      updateUserProfile({
        firstName: updatedFirstName,
        lastName: updatedLastName,
      })
    );
    handleCancel()
  };

  return (
    <main className="user">
      <div>
       {hasError && <ErrorMessage />}
        <h1>
          Welcome back
          <br />
          {user?.firstName} {user?.lastName}!
        </h1>
        {isEditing || !edited ? (
          <div className="form">
            <div>
              <input
                id="firstName"
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <label htmlFor="firstName"></label>
              <input
                id="lastName"
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              <label htmlFor="lastName"></label>
            </div>
            <div className="form__button-zone">
              <button className="form__button" onClick={handleSave}>
                Save
              </button>
              <button className="form__button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        )}
      </div>
      <Bank />
    </main>
  );
}

export default User;
