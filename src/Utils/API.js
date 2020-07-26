import axios from "axios";

const BASEURL = "http://api.mathjs.org/v4/?expr=2%";

export default {
  calculate: function(numA, numB) {
    return axios.get(BASEURL + numA + "B" + numB);
  }
};
