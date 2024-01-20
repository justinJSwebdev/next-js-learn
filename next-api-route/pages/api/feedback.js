import fs from "fs"
import path from "path"
const buildFeedbackPath = () => {
    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    return filePath;
}
const extractFeedbackData = (filePath) => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}
export default function handler(req, res) {
    if (req.method === "POST") {
        const email = req.body.email;
        const feedbackText = req.body.text;
        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text: feedbackText
        }
        //store in db o file
        const filePath = buildFeedbackPath();
        const data = extractFeedbackData(filePath);
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({ message: "Success !", feedback: newFeedback });
    } else {
        const filePath = buildFeedbackPath();
        const data = extractFeedbackData(filePath);
        res.status(200).json({
            message: "This works!",
            data
        })
    }
}