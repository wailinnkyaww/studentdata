import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const Remove = (id) => {
    if (window.confirm("Are u delete?")) {
      fetch("http://localhost:8000/students/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("DELETE Successsfully");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Student Records</h2>
      <div className="table-container">
        <Link to="/student/create" className="btn btn-add">
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "6px 12px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Add New Student
          </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.place}</td>
                <td>{student.phone}</td>
                <td>
                  <Link
                    to={`/student/view/${student.id}`}
                    className="btn"
                    style={{
                      display: "inline-block",
                      backgroundColor: "blue",
                      color: "white",
                      padding: "5px 12px",
                      margin: "0 2px",
                      borderRadius: "5px",
                      textDecoration: "none",
                    }}
                  >
                    View
                  </Link>
                  <Link
                    to={`/student/edit/${student.id}`}
                    className="btn"
                    style={{
                      display: "inline-block",
                      backgroundColor: "green",
                      color: "white",
                      padding: "5px 12px",
                      margin: "0 5px",
                      borderRadius: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Edit
                  </Link>
                  <Link
                    className=""
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px 12px",
                      margin: "0 2px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    onClick={() => {
                      Remove(student.id);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
