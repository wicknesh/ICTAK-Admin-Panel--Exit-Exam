import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4300/course/get-courses");
        setDatas(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return ( <div>
                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', margin: '15rem auto' }}>
                    {/* <LinearProgress sx={{ width: '100%', backgroundColor: 'grey', '& .MuiLinearProgress-bar': {backgroundColor: '#c0c0c0' }}}/> */}
                    <CircularProgress size='15rem' thickness="1" sx={{color: 'grey'}}/>
                </Box>
            </div> )
}
  return (
    <div>
      <TableContainer component={Paper} sx={{marginTop: '2rem'}}>
          <Table sx={{ minWidth: 650, backgroundColor: 'white', color: 'black', '& .MuiTableCell-root': { color: 'black' } }} aria-label="simple table">
              <TableHead>
                  <TableRow sx={{ borderBottom: '4px solid', borderColor: '#252525', backgroundColor: '#f0f0f0'}}>
                      <TableCell><Typography variant="h6">Course ID</Typography></TableCell>
                      <TableCell><Typography variant="h6">Course Name</Typography></TableCell>
                      <TableCell><Typography variant="h6">Course Duration</Typography></TableCell>
                      <TableCell><Typography variant="h6">Average Rating</Typography></TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {datas.map((data) => (
                      <TableRow key={data.id} sx={{ borderBottom: '2px solid', borderColor: '#c0c0c0', '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#fafafa'}}>
                          <TableCell component="th" scope="row">{data.course_id}</TableCell>
                          <TableCell>{data.course_name}</TableCell>
                          <TableCell>{data.course_duration}</TableCell>
                          <TableCell>{data.course_ratings}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

export default Home