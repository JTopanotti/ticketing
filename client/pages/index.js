import axios from "axios";

const LandingPage = ({currentUser}) => {
    console.log(currentUser);
    axios.get('/api/users/currentuser');
    return <h1>Landing</h1>
}; 

// LandingPage.getInitialProps = async () => {
//     const resp = await axios.get('/api/users/currentuser');

//     return resp.data;
// };

export default LandingPage;