"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[369],{1837:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"description":"Commission project","title":"commission","version":"1.0.0","license":{"name":"ISC","url":"https://dev-lambda.github.io/commission/license"},"termsOfService":"https://dev-lambda.github.io/commission/terms","contact":{"name":"API Support","email":"support@devlambda.com","url":"http://dev-lambda.github.io/commission/support"},"externalDocs":{"description":"Full documentation site","url":"https://dev-lambda.github.io/commission/"}},"servers":[{"url":"http://localhost:3000/","description":"Development server"}],"paths":{"/openAPI":{"get":{"summary":"API specs file","description":"Get the OpenAPI json description for this API","tags":["Integration"],"responses":{"200":{"description":"A json containing the OpenAPI specification","content":{"application/json":{"schema":{"$ref":"#/components/schemas/base"}}}}}}},"/health":{"get":{"summary":"Health probe","description":"Health probe for liveness and readiness check","tags":["Monitoring"],"responses":{"200":{"description":"Returns `ok` status","content":{"application/json":{"schema":{"$ref":"#/components/schemas/healtStatus"},"example":{"server":true,"db":true}}}},"500":{"description":"Either the db or the server is not working as expected","content":{"application/json":{"schema":{"$ref":"#/components/schemas/healtStatus"},"examples":{"dbFail":{"summary":"the db connexion is faulty","value":{"server":true,"db":false}},"serverFail":{"summary":"the api server is faulty","value":{"server":false,"db":true}},"chaos":{"summary":"pure chaos","value":{"server":false,"db":false}}}}}}}}},"/license":{"get":{"summary":"License","description":"Get the license of this project","tags":["License"],"responses":{"200":{"description":"This project\'s licence"}}}},"/licenses":{"get":{"summary":"Dependencies","description":"Get the complete list of licenses used","tags":["License"],"responses":{"200":{"description":"Returns the production packages licence report"}}}},"/licenses/summary":{"get":{"summary":"License types used","description":"Get a summary of dependencies per license type","tags":["License"],"responses":{"200":{"description":"Returns a dictionary of dependent packages grouped per license type","content":{"application/json":{"schema":{"$ref":"#/components/schemas/licenseSummary"},"example":{"MIT":[{"name":"@apidevtools/openapi-schemas","version":"2.1.0","description":"JSON Schemas for every version of the OpenAPI Specification"},{"name":"@apidevtools/swagger-methods","version":"3.0.2","description":"HTTP methods that are supported by Swagger 2.0"}]}}}}}}},"/wrongPath":{"get":{"summary":"Not found","description":"The response given on any unknown path","tags":["API"],"responses":{"404":{"description":"The `not found` response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/notFoundMessage"},"example":{"message":"not found","path":"/wrongPath"}}}}}}},"/":{"get":{"summary":"Base response","description":"The default `200 OK` response at the root","tags":["API"],"responses":{"200":{"description":"The `ok` response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/message"},"example":{"message":"ok"}}}}}}}},"components":{"schemas":{"healtStatus":{"type":"object","properties":{"server":{"type":"boolean"},"db":{"type":"boolean"}}},"licenseSummary":{"type":"object","additionalProperties":{"type":"array","$ref":"#/components/schemas/licenceDigest"}},"licenceDigest":{"type":"object","properties":{"name":{"type":"string"},"version":{"type":"string"},"description":{"type":"string"}}},"notFoundMessage":{"type":"object","properties":{"message":{"type":"string"},"path":{"type":"string"}}},"message":{"type":"object","properties":{"message":{"type":"string"}}},"base":"{\\n    \\"$id\\": \\"https://spec.openapis.org/oas/3.1/dialect/base\\",\\n    \\"$schema\\": \\"https://json-schema.org/draft/2020-12/schema\\",\\n\\n    \\"title\\": \\"OpenAPI 3.1 Schema Object Dialect\\",\\n    \\"description\\": \\"A JSON Schema dialect describing schemas found in OpenAPI documents\\",\\n\\n    \\"$vocabulary\\": {\\n        \\"https://json-schema.org/draft/2020-12/vocab/core\\": true,\\n        \\"https://json-schema.org/draft/2020-12/vocab/applicator\\": true,\\n        \\"https://json-schema.org/draft/2020-12/vocab/unevaluated\\": true,\\n        \\"https://json-schema.org/draft/2020-12/vocab/validation\\": true,\\n        \\"https://json-schema.org/draft/2020-12/vocab/meta-data\\": true,\\n        \\"https://json-schema.org/draft/2020-12/vocab/format-annotation\\": true,\\n        \\"https://json-schema.org/draft/2020-12/vocab/content\\": true,\\n        \\"https://spec.openapis.org/oas/3.1/vocab/base\\": false\\n    },\\n\\n    \\"$dynamicAnchor\\": \\"meta\\",\\n\\n    \\"allOf\\": [\\n        { \\"$ref\\": \\"https://json-schema.org/draft/2020-12/schema\\" },\\n        { \\"$ref\\": \\"https://spec.openapis.org/oas/3.1/meta/base\\" }\\n    ]\\n}\\n"}},"tags":[{"name":"Integration","description":"Integration support resources"},{"name":"Monitoring","description":"Monitoring and health check features"},{"name":"License","description":"License introspection"},{"name":"API","description":"API specific routes","externalDocs":{"url":"https://dev-lambda.github.io/commission/"}}]}}')}}]);