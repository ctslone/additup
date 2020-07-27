import axios from "axios";

const BASEURL = "http://api.mathjs.org/v4/?expr=";

export default {
  calculate: function(numA, numB) {
    return axios.get(BASEURL + numA + "%2B" + numB);
  }
};
