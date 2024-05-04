/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
      <div style={{ paddingTop: "1em" }}>
        <p>There are no campuses.</p>
        <Link to={`newcampus`}>
          <Button style={{ color: "white", backgroundColor: "grey" }}>
            Add New Campus
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`} style={{ textDecoration: "none" }}>
            <h2
              style={{
                color: "rgb(85, 26, 139)",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              {campus.name}
            </h2>
          </Link>
          <img
            src={
              campus.imageurl ||
              "https://www.zillowstatic.com/bedrock/app/uploads/sites/26/shutterstock_262043447-dedc70.jpg"
            }
            alt={`Campus - ${campus.name}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />

          <h4>
            Campus ID: {campus.id} | Total Students Enrolled:{" "}
            {campus.students.length}
          </h4>
          <hr />
        </div>
      ))}
      <br />
      <Link to={`/newcampus`}>
        <Button style={{ color: "white", backgroundColor: "rgb(85, 26, 139)" }}>
          Add New Campus
        </Button>
      </Link>
      <br />
      <br />
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
