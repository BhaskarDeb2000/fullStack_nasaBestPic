import express, { Request, Response } from 'express';
import axios, { AxiosError } from "axios"
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

app.get('/nasa', async (req: Request, res: Response) => {
	const date = req.query.date as string;
	try {
		const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=lGia9bvVwTFTENYiPF9Z9xm3V7mdab0zFtNaUJWj&date=${date}&hd=true`)
		res.send(response.data as Inasa)
	}
	catch (error: AxiosError | unknown) {
		res.send();
	}


});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});