import axios from "axios";



export default {
  getResults: function() {
    return axios.get('https://randomuser.me/api/?inc=picture, name, phone, email, dob');
  }
};
