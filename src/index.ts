import axios from "axios";
import { Hono } from "hono";

type Bindings = {
  DISCORD_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  return c.html(` <html>
    <head><title>Success!</title></head>
    <body>
      <h1>You did it!</h1>
      <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
    </body>
  </html>`);
});

app.post("/github", async (c) => {
  const body = await c.req.json();
  console.log(body);
  const response = await axios.post(`${c.env.DISCORD_URL}`, {
    content: `:taco: :tada: Something happen your repo!`,
  });
  return c.json({
    message: "message send!",
  });
});

export default app;
/* 
NEXT_PUBLIC_IMAGE_URL="https://gceimagebucket.s3.ap-south-1.amazonaws.com/"
NEXT_PUBLIC_BASE_URL="https://greencleanearth.org/"
NEXT_PUBLIC_API_URL="https://api.greencleanearth.org/api/v1"
*/
