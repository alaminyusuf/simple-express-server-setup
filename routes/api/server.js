const express = require('express')
const router = express.Router()
const posts = require('../../posts')
router.get('/', (req, res) => {
  res.json(posts)
})

router.get('/:id', (req, res) => {
  const found = posts.some(post => post.id === parseInt(req.params.id))

  if (found) {
    const searchedPost = posts.filter(
      post => post.id === parseInt(req.params.id)
    )
    res.json(searchedPost)
    res.status(200)
  }
  res.status(400).send('There is no user with such ID')
})

module.exports = router
