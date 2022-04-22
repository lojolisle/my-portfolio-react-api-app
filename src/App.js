import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import api from './api/portfolio';
import { useState, useEffect } from "react";


function App() {
  const [skills, setSkills] = useState([]);
  // const [works, setWorks] = useState([]);
  const [user, setUser] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await api.get('/skills/1');
        if(response && response.data) setSkills(response.data); 
        if (response.status !== 200) throw Error('Something went wrong! No data received from API call');
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await api.get('/users/1');

        if(userResponse && userResponse.data) setUser(userResponse.data[0]);

        if (userResponse.status !== 200) throw Error('Something went wrong! No data received from API call');

        setFetchError(null);
        
      } catch(err) {
          if (err.response) {
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
        <Contact />
      </div>
    );
  
}

export default App;
