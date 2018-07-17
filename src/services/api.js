import axios from 'axios' //import axios installed by npm

export default () =>{
	return axios.create({
		baseURL: `http://localhost:8093/` // the base url for the api
	})
}