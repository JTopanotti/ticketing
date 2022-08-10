import axios from 'axios';

export default ({ req }) => {
    if (typeof window == 'undefined') {
        //on server side
        return axios.create({
            baseURL: "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
            headers: req.headers
        });
    } else {
        //on client side
        return axios.create({
            baseURL: "/"
        });
    }
};