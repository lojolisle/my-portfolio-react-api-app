import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import api from './api/portfolio';
import { useState, useEffect } from "react";
// import { render } from "@testing-library/react";


function App() {
  const [skills, setSkills] = useState([]);
  // const [works, setWorks] = useState([]);
  const [user, setUser] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await api.get('/skills/4');
        /* used from json-server for testing locally */
        /* const response = await api.get('/projects/list') */
        // console.log(' skills from API ', response.data)
        if(response && response.data) setSkills(response.data);
       
        if (response.status !== 200) throw Error('SOmething went wrong! No data received from API call');
        setFetchError(null);
      } catch(err) {
          if (err.response) {
            // not ok (not in 200 response range satus code)
            console.log('err-',err.response.data);
            console.log(err.response.status);
            setFetchError(err.message);
          } else {
            console.log(`Error: ${err.message}`);
            setFetchError(err.message);
          }
      }
    }
    fetchSkills();
  }, [])


  // useEffect(() => {
  //   const fetchWorks = async () => {
  //     try {
  //       const worksResponse = await api.get('/projects/4');
  //       /* used from json-server for testing locally */
  //       /* const workResponse = await api.get('/projects'); */
  //       if(worksResponse && worksResponse.data) setWorks(worksResponse.data);
  //   console.log(' work response from API ', worksResponse.data);
  //   console.log(' work length ', worksResponse.data.length);

    

  //       if (worksResponse.status !== 200) throw Error('Something went wrong! No data received from API call');
  //       setFetchError(null);
  //     } catch(err) {
  //         if (err.response) {
  //           // not ok (not in 200 response range satus code
  //           setFetchError(err.message);
  //         } else {
  //           setFetchError(err.message);
  //         }
  //     }
  //   }
  //   fetchWorks();
  // }, [])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await api.get('/users/4');
       // const userResponse = await api.get('/user');
        if(userResponse && userResponse.data) setUser(userResponse.data[0]);
        if (userResponse.status !== 200) throw Error('Something went wrong! No data received from API call');
        setFetchError(null);
      } catch(err) {
          if (err.response) {
            // not ok (not in 200 response range satus code)
            console.log(err.response.data);
            console.log(err.response.status);
            setFetchError(err.message);
          } else {
            console.log(`Error: ${err.message}`);
            setFetchError(err.message);
          }
      }
    }
    fetchUser();
  }, [])

  
    return (
      <div>
        <Navbar />
        <Home user={user} />
        <About user={user} />
        <Skills skills={skills} />
        <Work /> 
        <Contact user={user}/>
      </div>
    );
  
}

export default App;
