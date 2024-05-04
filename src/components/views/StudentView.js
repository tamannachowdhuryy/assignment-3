import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const StudentView = (props) => {
  const { student, deleteStudent } = props;

  const displayField = (field) => field || 'Unknown'; // Function to handle empty fields

  const formatGPA = (gpa) => {
    return gpa && !isNaN(Number(gpa)) ? Number(gpa).toFixed(2) : "Unknown";
  };
  
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <div style={{
        backgroundColor: "white",
        paddingTop: "2em",
        paddingBottom: "2em",
        marginRight: "10em",
        marginLeft: "10em",
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <img
          src={student.imageurl || "https://www.pngfind.com/pngs/m/163-1631127_student-school-study-skills-college-test-students-pictures.png"}
          alt={`${student.firstname} ${student.lastname}`}
          style={{
            maxWidth: '100%',
            maxHeight: '100px',
            borderRadius: '50%',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <p><strong>First Name: </strong>{displayField(student.firstname)}</p>
        <p><strong>Last Name: </strong>{displayField(student.lastname)}</p>
        <p><strong>Email: </strong>{displayField(student.email)}</p>
        <p><strong>GPA: </strong> {formatGPA(student.gpa)}</p>

        {student.campus ? (
          <p>
            <strong>Attends: </strong>
            <Link to={`/campus/${student.campus.id}`} style={{ textDecoration: 'none' }}>
              <strong>{student.campus.name}</strong>
            </Link>
          </p>
        ) : (
          <p><strong>{student.firstname} does not currently attend a college.</strong></p>
        )}

        <div style={{ marginTop: '1em' }}>
          <Link to={`/editstudent/${student.id}`}>
            <Button style={{ color: "white", backgroundColor: "grey", marginRight: "0.5em" }}>Edit Student</Button>
          </Link>
          <Button style={{ color: "white", backgroundColor: "red" }} onClick={() => deleteStudent(student.id)}>Delete Student</Button>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
