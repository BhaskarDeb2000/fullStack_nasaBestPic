import express, { Request, Response } from 'express';
import axios from "axios"
import cors from "cors"
const app = express();

const port = process.env.PORT || 5001;

interface Inasa {
	copyright: string,
	date: string,
	explanation: string,
	hdurl: string,
	media_type: string,
	service_version: string,
	title: string,
	url: string
}



app.use(cors())

app.get('/', async (req: Request, res: Response) => {

	const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=lGia9bvVwTFTENYiPF9Z9xm3V7mdab0zFtNaUJWj&date=2024-11-12&hd=true`)
	res.send(response.data as Inasa)

});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});