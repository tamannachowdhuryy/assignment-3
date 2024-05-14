/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  unenrollStudent,
  enrollStudent,
} from "../../store/actions/actionCreators";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, deleteCampus, unenrollStudent } = props;
  const campus_id = campus.id;
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>{campus.name}</h1>
      <div
        style={{
          paddingTop: "2em",
          paddingBottom: "2em",
          marginRight: "10em",
          marginLeft: "10em",
        }}
      >
        <img
          src={
            campus.imageUrl ||
            "https://pbs.twimg.com/profile_images/1676600958153904131/OSV4hFd7_400x400.png"
          }
          alt={`Campus - ${campus.name}`}
          style={{
            maxWidth: "100%",
            maxHeight: "200px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <div>
          <p>
            <strong style={{ fontWeight: "bold" }}>Location: {" "}</strong>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                campus.address
              )}`}
              style={{
                textDecoration: "none", 
                color: "blue",
              }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {campus.address}
            </a>
          </p>

          <p>
            <strong style={{ fontWeight: "bold" }}>Description:</strong>{" "}
            {campus.description}
          </p>
        </div>

        <div style={{ marginTop: "1em" }}>
          <Link to={`/editcampus/${campus.id}`}>
            <Button
              style={{
                color: "white",
                backgroundColor: "grey",
                marginRight: "0.5em",
              }}
            >
              Edit Campus
            </Button>
          </Link>
          <Button
            style={{ color: "white", backgroundColor: "red" }}
            onClick={() => deleteCampus(campus.id)}
          >
            Delete Campus
          </Button>
        </div>
        <hr style={{ color: "white", margin: "10px" }} />
        <h3>Total Students Enrolled: {campus.students.length}</h3>

        {/* Table for student information, only display if there are students enrolled */}
        {campus.students.length > 0 && (
          <div
            style={{
              marginBottom: "0.85em",
              paddingLeft: "2em",
              paddingRight: "2em",
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid black",
                      backgroundColor: "white",
                    }}
                  >
                    Student Name
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      backgroundColor: "white",
                    }}
                  >
                    Enroll/Unenroll
                  </th>
                </tr>
              </thead>
              <tbody>
                {campus.students.map((student) => (
                  <tr key={student.id}>
                    <td
                      style={{
                        border: "1px solid black",
                        backgroundColor: "#003546",
                        padding: "20px",
                      }}
                    >
                      <Link
                        to={`/student/${student.id}`}
                        style={{ color: "white" }}
                      >
                        {student.firstname} {student.lastname}
                      </Link>
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        backgroundColor: "#003546",
                      }}
                    >
                      <Button
                        style={{ color: "white", backgroundColor: "red" }}
                        onClick={() => unenrollStudent(student)}
                      >
                        Unenroll
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <Link
          to={{
            pathname: `/:id/enrollnew`,
            query: { campus_id },
          }}
        >
          <Button
            style={{
              color: "white",
              backgroundColor: "#0B6623",
              margin: "10px",
            }}
          >
            Enroll New Student
          </Button>
        </Link>
        <Link
          to={{
            pathname: `/enrollexisting`,
            query: { campus_id },
          }}
        >
          <Button style={{ color: "white", backgroundColor: "#0B6623" }}>
            Enroll Existing Student
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CampusView;
