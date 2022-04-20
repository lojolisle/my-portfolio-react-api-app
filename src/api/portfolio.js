import axios from "axios";

export default axios.create({
 // baseURL: 'http://pallav.rf.gd/api/'
   baseURL: 'http://localhost:8080/api/'
   // baseURL: 'http://localhost:3500'
})