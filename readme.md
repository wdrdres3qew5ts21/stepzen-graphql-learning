### JSON Convert to SDL GraphQL Structure
https://transform.tools/json-to-graphql


### ตัวอย่าง REST API ใช้ Orchestrate
https://dummy.restapiexample.com/

ระบบ E-Commence สินค้า
https://fakestoreapi.com/docs

ระบบ Social Feed
https://jsonplaceholder.typicode.com/guide/

### คำสั่งในการ Import REST API ให้เป็น Structure GraphQL

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


stepzen import mysql

```sql
SELECT e.emp_no ,e.first_name ,e.last_name, dept_name  from employees e  
join dept_emp deemp ON deemp.emp_no = e.emp_no JOIN  departments de on de.dept_no = deemp.dept_no  ;
```
### Sakila DB สำหรับ MySQL 8
https://github.com/sakiladb/mysql

ตัวอย่่าง Syntax Query Sakila

```sql
SELECT * FROM actor a ;
SELECT * FROM film f ;
SELECT * FROM film_actor fa ;
```


#### เชื่อมต่อ Application NodeJS เข้ากับ GraphQL Endpoint
สามารถทำได้กันสองแบบคือการเรียกผ่าน CURL HTTP Endpoint เข้าไปโดยตรงหรือจะผ่าน Library ที่มีการจั
https://stepzen.com/docs/connecting-frontends/connecting-via-nodejs

```
yarn add graphql-request
```

### GraphQL สามารถใช้ Socket  Subscription ได้ผ่าน Socket
https://the-guild.dev/graphql/ws/get-started
ซึ่งสามารถเรียกใช้ Parameter Filter ได้เหมือนกัน
แล้วค่าที่เปลีย่นไปก็จะอัพเดทตามทุกๆสิบวินาที

```
yarn add graphql-ws
yarn add ws
```

