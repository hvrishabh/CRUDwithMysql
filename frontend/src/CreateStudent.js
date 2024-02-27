import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";

const CreateStudent = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const { name, setName, email, setEmail } = useContext(MyContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/create", { name, email })
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
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
              //   value={name}
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
              //   value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
