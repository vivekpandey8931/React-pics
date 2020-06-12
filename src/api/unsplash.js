import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers:{
         Authorization : 'Client-ID arGiP8pDIdBvq3Tqv50OgvU_9AdWN31piX3sx6QB4m4'
   	   		}
});