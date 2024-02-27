import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { MyContext } from "./MyContext";
const Student = () => {
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);
  const { name, setName, email, setEmail } = useContext(MyContext);

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
  /////////////////////////////////////////////

  // function handleUpdate(id) {
  //   axios
  //     .get("http://localhost:5000/student/" + id)
  //     // .then((res) => console.log(res));
  //     .then((res) => {
  //       console.log(res);
  //       setName(res.data[0].Name);
  //       setEmail(res.data[0].Email);
  //     });
  // }

  // useEffect(() => {
  //   handleUpdate();
  // }, [name, email]);

  //////////////////////////////////////////////////////////

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/student/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
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
                      <Link
                        to={`/update/${data.ID}`}
                        className="btn btn-primary"
                        // onClick={(e) => handleUpdate(data.ID)}
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={(e) => handleDelete(data.ID)}
                      >
                        Delete
                      </button>
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
