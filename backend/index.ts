import express, { Request, Response } from 'express';
import axios, { AxiosError } from "axios"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 5001;
const NASA_API_KEY = process.env.NASA_API_KEY
app.use(cors())


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


app.get('/nasa', async (req: Request, res: Response) => {
	const date = req.query.date as string;
console.log({date});
console.log({NASA_API_KEY});
console.log("HEllo");


	try {
		const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}&hd=true`)
		res.send(response.data as Inasa)

	}
	catch (error: AxiosError | unknown) {
		res.send("Cannot get anything");
	}


});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});