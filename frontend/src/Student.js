import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
const Student = () => {
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // if (loading) return console.log("loading...");
    // axios
    //   .get("http://localhost:5000/")
    //   .then((res) => setStudent(res.data))
    //   .then(setLoading(false))
    //   .catch((err) => console.log(err));

    /////////////////////////////////////////////////////
    //   async function test() {
    //     const res = fetch("http://localhost:5000/");
    //     // .then((req) => req.json())
    //     // .then((data) => console.log(data));
    //     /
    //     //   console.log(data);
    //     //   setStudent(data);
    //     setLoading(false);
    //   }
    //   test();
    /////////////////////////////////////////////////////
    async function test() {
      const res = await fetch("http://localhost:5000/");
      const data = await res.json();
      //   console.log(data);
      setStudent(data);
      setLoading(false);
    }
    test();
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-75 bg-white rounded">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>Loading...</tr>
            ) : (
              student.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td>
                      <button className="btn btn-primary">Update</button>
                      <button className="btn btn-danger ms-2">Delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
