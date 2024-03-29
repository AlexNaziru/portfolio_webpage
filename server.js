const express = require("express")
const app = express()
const port = 8080

// Serve static files from the 'public' directory
app.use(express.static("public"));


app.listen(port, () => {
  console.log(`Connecting to port ${port}`)
})
