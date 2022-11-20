import React,{useState} from "react";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, phone);
        if (name === "" || email === "" || phone === "") {
          return alert("please fill all fields..");
        }
    
        // add user(name, email, phone);
        setName("");
        setEmail("");
        setPhone("");
      };
  return (
    <>
    {/* login */}
  <button title="Add client"
        type="button"
        className="btn btn-outline-dark me-2"
        data-bs-toggle="modal"
        data-bs-target="#addClientModel"
      >
        <div className="d-flex align-items-center">
        <i className="fa fa-sign-in me-1" aria-hidden="true"></i>
          <div>Login</div>
        </div>
      </button>

  

    {/* add clients button starts */}

      <div
        className="modal fade"
        id="addClientModel"
        aria-labelledby="addClientModelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addClientModelLabel">
                Add Your Details Below
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body project_card">
              {/* form starts here */}
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control project_card"
                    name=""
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control project_card"
                    name=""
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control project_card"
                    name=""
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-outline-dark"
                >
                  Submit
                </button>
              </form>
              {/* form ends here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
