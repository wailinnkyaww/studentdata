import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewDetails() {
  const { studentid } = useParams();
  const [student, setStudent] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8000/students/${studentid}`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container">
      <h2>View Student Detials</h2>
      <div className="details">
        <p>
          <strong>ID : </strong>
          {student.id}
        </p>
        <p>
          <strong>Name : </strong>
          {student.name}
        </p>
        <p>
          <strong>Place : </strong>
          {student.place}
        </p>
        <p>
          <strong>Phone : </strong>
          {student.phone}
        </p>
        <Link to="/" className="btn btn-back">
          Back
        </Link>
      </div>
    </div>
  );
}
