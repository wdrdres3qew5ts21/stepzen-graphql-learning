https://dummy.restapiexample.com/
ตัวอย่าง API

https://fakestoreapi.com/docs



stepzen import curl https://dummy.restapiexample.com/api/v1/employees --name employees --query-type Employees --query-name employees --path-params '/employees'


stepzen import curl https://dummy.restapiexample.com/api/v1/employee/1 --name employees --query-type Employees --query-name employees 

stepzen import curl https://fakestoreapi.com/products --name employees --query-type Products --query-name products 

stepzen import curl https://fakestoreapi.com/products --name employees --query-type Products --query-name products 

stepzen import curl https://fakestoreapi.com/products/categories --name employees --query-type Categories --query-name categories 

stepzen import curl https://fakestoreapi.com/carts --name employees --query-type Carts --query-name carts 


stepzen deploy


1. create the graphql schema using `stepzen import curl`. 
   ```
   stepzen import curl https://customerapi-zo6fgz3fza-uc.a.run.app/customers/4 --name customers --query-type Customer --query-name customer --path-params '/customers/$id'
   ```
   It can be helpful to explain the extra command line flags that are used to alter the generated schema. For full descriptions see [StepZen Import Command](https://stepzen.com/docs/cli/cli-commands#stepzen-import).   
   `-name` specifies that the generated schema will be written to the `customers` subdirectory.<br>
   `-query-type` specifies that the type returned by the endpoint will be named `Customers`.<br>
   `--query-name` specifies that the field `customer` will be added to `type Query` to accesses the imported curl endpoint.<br>
   `--path-params` specifies that `/customers/$id` is the path parameter in the URL path. 


supakorn.t@Supakorns-MacBook-Pro stepzen-kbank % stepzen deploy
Deploying api/melting-gorilla to StepZen... done in 3.1s 🚀
  ✓ 🔐 https://sangregoriodenigua.stepzen.net/api/melting-gorilla/__graphql
  ✓ 🔐 wss://sangregoriodenigua.stepzen.net/stepzen-subscriptions/api/melting-gorilla/__graphql (subscriptions)

You can test your hosted API with curl:

curl https://sangregoriodenigua.stepzen.net/api/melting-gorilla/__graphql \
   --header "Authorization: Apikey $(stepzen whoami --apikey)" \
   --header "Content-Type: application/json" \
   --data-raw '{
     "query": "query SampleQuery { __schema { description queryType { fields {name} } } }"
   }'

Or explore it with GraphiQL at
   https://dashboard.stepzen.com/explorer?endpoint=api%2Fmelting-gorilla

   The StepZen Dashboard at dashboard.stepzen.com is the new default way to
   explore your GraphQL APIs. You can use the --dashboard=local flag to start
   a locally running GraphiQL instead.

Stepzen logic
https://github.com/stepzen-dev/examples/blob/main/with-rest/stepzen/rest.graphql


Stepzen GraphQL API

query categoriesAll {
  carts {
    date
    id
    products {
      id
      productId
      quantity
    }
  }
  productsAll {
    image
    id
    title
  }
}

GraphQL Directive
https://graphql.org/learn/queries/#directives

SOAP Endpoint Demo Online
https://www.crcind.com/csp/samples/SOAP.Demo.cls

query watchDetailAll {
  carts {
    products {
      productDetail {
        price
      }
      quantity
    }
  }
}

https://jsonplaceholder.typicode.com/guide/