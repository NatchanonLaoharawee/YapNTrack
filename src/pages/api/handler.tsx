export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        // Process a POST request
        res.status(200).json({ message: 'POST successul' });
    }
    else if (req.method === 'GET') {
        // Process a GET request
        res.status(200).json({ message: 'GET successul' });
    }
    else {
        // Handle any other HTTP method
        res.status(405).json({ message: 'Unsuccessful' });
    }
};