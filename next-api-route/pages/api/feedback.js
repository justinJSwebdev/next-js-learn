import fs from "fs"
import path from "path"
export function handler(req, res) {
    if (req.method === "POST") {
        const email = req.body.email;
        const feedbackText = req.body.text;
        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text: feedbackText
        }
        //store in db o file
        const filePath = path.join(process.cwd(), 'data', 'feedback.json')
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);
        data.push(newFeedback);
        fs.writefileSync(filePath, JSON.stringify(data))
        res.status(201).json({message:"Success !", feedback: newFeedback});
    }
    res.status(200).json({
        message: "This works!"
    })
}