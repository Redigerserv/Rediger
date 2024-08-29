import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  reply: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message } = req.body;
  let reply: string;

  // Simple hardcoded response
  if (message.toLowerCase().includes('hello')) {
    reply = 'Hello! How can I help you today?';
  } else {
    reply = "I'm not sure how to respond to that.";
  }

  // if(message.length > 0){
  //   switch (message.toLowerCase()) {
  //     // Image formats
  //     case "hello":
  //     case "hi":
  //       reply = "Hello! How can I help you today?";
  //       break;
  //   }
  //   return reply
  // }



  res.status(200).json({ reply });
}
