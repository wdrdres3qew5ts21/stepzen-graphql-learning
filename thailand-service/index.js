require('dotenv').config()
console.log(process.env)
var express = require('express')
var bodyParser = require('body-parser')
var { graphql, buildSchema } = require("graphql")
var port = 3000
var app = express()
var { request, gql, GraphQLClient } = require('graphql-request');
const { createClient } = require('graphql-ws');
const { WebSocket } = require('ws');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
    // create user in req.body
})

app.get('/api/basic', (req, res) => {
    let headers = {};
    headers["Content-Type"] = "application/json";
    headers['Authorization'] = `apikey ${process.env.API_USER}::stepzen.io+1000::${process.env.API_KEY}`
    let graphql = JSON.stringify({
        query: `  query watchDetailAll {
                    watchDetailAll {
                    description
                    exportedFrom
                    id
                    name
                    }
                }`,
        variables: {}
    })

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: graphql
    };

    fetch("https://sangregoriodenigua.stepzen.net/api/melting-gorilla/__graphql", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            res.send(result)
        })
        .catch(error => console.log('error', error));

})


app.get('/api/client-lib', (req, res) => {
    const graphQLClient = new GraphQLClient('https://sangregoriodenigua.stepzen.net/api/melting-gorilla/__graphql', {
        headers: {
            authorization: `apikey ${process.env.API_USER}::stepzen.io+1000::${process.env.API_KEY}`
        },
    });
    const query = gql`
            query carts {
                carts {
                    id
                    userId
                    productDetailList {
                    id
                    title
                    }
                }
                }
            `;
    graphQLClient.request(query).then(result => {
        res.send(result)
    })

})

let url ='wss://sangregoriodenigua.stepzen.net/stepzen-subscriptions/api/melting-gorilla/__graphql';
// let query = 'subscription { binance(symbol: "ETHUSD", windowSize: "10m") { priceChange } }'
let query = 'subscription { actorListParameterSub(after: 0, first: 10){actor_id first_name last_name  } }';

console.log(`running: ${query}`);


const client = createClient({
    webSocketImpl: WebSocket,
    url: url,
    connectionParams: () => {
        return {
            headers: {
                Authorization: `apikey ${process.env.API_USER}::stepzen.io+1000::${process.env.API_KEY}`
            },
        };
    },
});





let result;
client.subscribe(
    {
        query: query,
    },
    {
        next: (data) => console.log(new Date(), data?.data),
        error: (e) => {
            console.log('ERROR', e);
        },
        complete: () => {
            console.log('Complete');
        },
    },
);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})