import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";

const UpdateStudent = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const { name, setName, email, setEmail } = useContext(MyContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    function setValues() {
      axios
        .get("http://localhost:5000/student/" + id)
        // .then((res) => console.log(res));
        .then((res) => {
          setName(res.data[0].Name);
          setEmail(res.data[0].Email);
        });
    }
    setValues();

    return () => {
      setName("");
      setEmail("");
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:5000/update/" + id, { name, email })
      .then((res) => {
        // console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  ///// Code for get request.............

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     axios
  //       .get(`http://localhost:5000/create?name=${name}&email=${email}`)
  //       .then((res) => {
  //         console.log(res);
  //         navigate("/");
  //       })
  //       .catch((err) => console.log(err));
  //   }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
