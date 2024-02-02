import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import coursesData from "./../CoursesData";

const MainCourse = () => {
  let params = useParams();
  let mainCoursesData = coursesData.find(
    (course) => course.id == params.courseID
  );

  console.log(mainCoursesData);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img
            src={mainCoursesData.img}
            alt=""
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
          />
        </Col>
        <Col style={{direction: "rtl"}}>
          <h2>{mainCoursesData.title}</h2>
          <p>{mainCoursesData.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCourse;
