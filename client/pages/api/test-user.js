import axios from "axios"

const getUserSession = async (req, res) => {
    if (req.method === "GET") {
        try {
            const data = await axios.get('https://ticketing.dev/api/users/currentuser')
            res.status(201).json(data)
        } catch (error) {
            res.status(405).json({
                message: error.message,
            })
        }
    } else {
        res.setHeader("Allow", ["GET"])
        res.status(405).json({
            message: `Method ${req.method} is not allowed.`,
        })
    }
}

export default getUserSession

