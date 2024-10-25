const http = require('http')
const axios = require('axios')

const fetchUsers = async () => {
    try {
        const res = await axios.get('https://reqres.in/api/users')
        return res.data.data
    } catch (error) {
        console.log(err)
    }
}
const server = http.createServer(async (req, res) => {
    const users = await fetchUsers()
    res.end(JSON.stringify(users))
})

server.listen(3000);

/*
  # Axios: ( better than fetch method )
    - Method names related to HTTP methods (Eg.: .get(), .post(), etc.)
    - By default converts the data to JSON format
    - In the overall response , the JSON data is stored in 'data' property
*/