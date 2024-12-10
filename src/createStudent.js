import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validatoin, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentsData = { id, name, place, phone };
    console.log(studentsData);

    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "content-type": "application / json",
      },
      body: JSON.stringify(studentsData),
    })
      .then((res) => {
        alert("Save Successsfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h3>Add New Student</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <br />
        <input
          type="text"
          name="id"
          id="id"
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {id.length === 0 && validatoin && (
          <span className="errorMsg">Please Enter Your ID</span>
        )}
        <br />
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        {name.length === 0 && validatoin && (
          <span className="errorMsg">Please Enter Your Name</span>
        )}
        <br />
        <label htmlFor="place">Place:</label>
        <br />
        <input
          type="text"
          name="place"
          id="place"
          value={place}
          required
          onChange={(e) => setPlace(e.target.value)}
        />
        {place.length === 0 && validatoin && (
          <span className="errorMsg">Please Enter Your Place</span>
        )}
        <br />
        <label htmlFor="phone">Phone:</label>
        <br />
        <input
          type="phone"
          name="phone"
          id="phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        {phone.length === 0 && validatoin && (
          <span className="errorMsg">Please Enter Your Phone</span>
        )}
        <br />
        <br />
        <div>
          <button
            className="btn btn-save"
            type="submit"
            style={{
              width: "5vw",
              backgroundColor: "green",
              margin: "0px 15px",
              color: "white",
            }}
          >
            Save
          </button>
          <Link
            to="/"
            className="btn btn-back"
            style={{
              width: "5vw",
              backgroundColor: "orange",
              corlor: "white",
            }}
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
