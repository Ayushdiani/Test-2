import { NextApiRequest, NextApiResponse } from 'next';

let retreats: any[] = [
  { id: 1, title: "Yoga in Bali", location: "Bali, Indonesia", date: "July 10-17", imageUrl: "/images/yoga-bali.jpg" },
  { id: 2, title: "Mindfulness Retreat", location: "Sedona, Arizona", date: "September 5-12", imageUrl: "/images/sedona-retreat.jpg" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(retreats);
  } else if (req.method === 'POST') {
    const { title, location, date, description, imageUrl } = req.body;
    const newRetreat = {
      id: retreats.length + 1,
      title,
      location,
      date,
      description,
      imageUrl,
    };
    retreats.push(newRetreat);
    res.status(201).json(newRetreat);
  } else {
    res.status(405).end();
  }
}
