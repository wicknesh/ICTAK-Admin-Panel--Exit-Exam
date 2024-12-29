import { Box, Button, MenuItem, Rating, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import axios from "axios";

const labels = {
  0.5: 'Very Poor',
  1: 'Poor',
  1.5: 'Below Average',
  2: 'Average',
  2.5: 'Above Average',
  3: 'Good',
  3.5: 'Very Good',
  4: 'Excellent',
  4.5: 'Outstanding',
  5: 'Exceptional',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const FeedbackForm = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4300/course/get-courses');
        setCourses(response.data);
      } catch (error) {
        console.log(`Error fetching courses: ${error}`);
      }
    };
    fetchCourses();
  }, []);

  const handleFeedbackSubmit = async () => {
    
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: "10rem",
          alignItems: 'center',
          flexDirection: 'column',
          '& .MuiTextField-root': { m: 1, width: '30ch' } 
        }}
        noValidate
        autoComplete="off">
          <Typography
            variant="h3"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}
          >
            Employee Form
          </Typography>
          <TextField
            id="courseName"
            label="Course Name"
            select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
          {courses.map((course) => (
            <MenuItem key={course.id} value={course.course_name}>
              {course.course_name}
            </MenuItem>
          ))}
          </TextField>
          <TextField
            id="feedbackComments"
            label="Feedback Comments"
            multiline
            rows={4}
          />
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 2,
              marginTop: 2,
              whiteSpace: 'nowrap'
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              size="large"
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
              setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
              <Typography>{value !== null && (<Box sx={{ ml: 2, display: 'inline-block' }}>{labels[hover !== -1 ? hover : value]}</Box>)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, width: '30ch' }}>
            <Button variant="contained" sx={{ fontSize: '1.2rem', width: '100%'}} onClick={handleFeedbackSubmit}>Submit</Button>
          </Box>
      </Box>
    </>
  )
}

export default FeedbackForm