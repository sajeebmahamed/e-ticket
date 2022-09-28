import express from 'express'

const router = express.Router()

router.post('/api/users/signout', (req, res) => {
    res.send('Hi there!')
})
router.get('/api/users/signout', (req, res) => {
    res.send('Hi there 3!')
})


export { router as signoutRouter }