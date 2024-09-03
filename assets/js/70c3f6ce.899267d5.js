"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3688],{90380:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=r(74848),s=r(28453);const t={title:"Reading Environment Variables",description:"Learn how to effectively manage environment variables in your Tailcall GraphQL schema, enhancing security and flexibility in your application configuration. This guide explores the need for environment variables, their implementation in Tailcall schemas, and best practices for security and management.",slug:"graphql-environment-variables",sidebar_label:"Environment Variables"},a=void 0,o={id:"environment-variables",title:"Reading Environment Variables",description:"Learn how to effectively manage environment variables in your Tailcall GraphQL schema, enhancing security and flexibility in your application configuration. This guide explores the need for environment variables, their implementation in Tailcall schemas, and best practices for security and management.",source:"@site/docs/environment-variables.md",sourceDirName:".",slug:"/graphql-environment-variables",permalink:"/docs/graphql-environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/environment-variables.md",tags:[],version:"current",lastUpdatedAt:1717408113e3,frontMatter:{title:"Reading Environment Variables",description:"Learn how to effectively manage environment variables in your Tailcall GraphQL schema, enhancing security and flexibility in your application configuration. This guide explores the need for environment variables, their implementation in Tailcall schemas, and best practices for security and management.",slug:"graphql-environment-variables",sidebar_label:"Environment Variables"},sidebar:"docs",previous:{title:"GraphQL Scalars",permalink:"/docs/graphql-scalars-guide"},next:{title:"Configuration Formats",permalink:"/docs/tailcall-graphql-configuration-format-conversion"}},l={},c=[{value:"Need for Environment Variables",id:"need-for-environment-variables",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Security Aspects and Best Practices",id:"security-aspects-and-best-practices",level:2}];function h(e){const n={a:"a",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Environment variables are key-value pairs stored in our operating systems. Most of them come by default, and we can also create our own. They store information used by our operating system or other programs. For example, the ",(0,i.jsx)(n.code,{children:"PATH"})," variable stores a list of directories the operating system searches when we run a command in the terminal. The ",(0,i.jsx)(n.code,{children:"HOME"})," variable stores the path to our home directory."]}),"\n",(0,i.jsx)(n.p,{children:"These variables also serve in software development for storing configuration values."}),"\n",(0,i.jsx)(n.h2,{id:"need-for-environment-variables",children:"Need for Environment Variables"}),"\n",(0,i.jsx)(n.p,{children:"Applications rely on external tools, authentication methods, and configurations. For proper functioning, our code needs to access these values."}),"\n",(0,i.jsxs)(n.p,{children:["Consider a scenario of ",(0,i.jsx)(n.a,{href:"https://jwt.io/",children:"JWT authentication"}),". When signing tokens for our users, we need:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Expiry time"}),": The duration after which the token expires."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Secret key"}),": The key for encrypting the token."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Issuer"}),": The token issuer, often the organization's name."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to manage this:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hardcode the values in our code"}),": ",(0,i.jsx)(n.br,{}),"\n","This approach, while simple, poses a massive security risk by exposing sensitive information and requires code changes and application redeployment for updates."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Store the values in environment variables"}),": ",(0,i.jsx)(n.br,{}),"\n","Storing sensitive values in the OS of the server running your application allows runtime access without code modifications, keeping sensitive information secure and simplifying value changes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,i.jsxs)(n.p,{children:["With Tailcall, you can seamlessly integrate environment variables into your GraphQL schema. Tailcall supports this through a ",(0,i.jsx)(n.code,{children:"env"})," ",(0,i.jsx)(n.a,{href:"/docs/graphql-resolver-context-tailcall",children:"Context"})," variable. All directives share this Context, allowing you to resolve values in your schema."]}),"\n",(0,i.jsx)(n.p,{children:"Example schema:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]!\n    @http(\n      baseUrl: "https://jsonplaceholder.typicode.com"\n      path: "/users"\n    )\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here, we fetch a list of users from the ",(0,i.jsx)(n.a,{href:"https://jsonplaceholder.typicode.com/",children:"JSONPlaceholder"})," API. The ",(0,i.jsx)(n.code,{children:"users"})," field will contain the fetched value at runtime. This works fine, but what if we want to change the API endpoint? We would need to update the code and redeploy the application, which is cumbersome."]}),"\n",(0,i.jsx)(n.p,{children:"We can address this issue using environment variables. Replace the API endpoint with an environment variable, allowing us to change the variable's value without altering our codebase."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]!\n    @http(baseUrl: "{{env.API_ENDPOINT}}", path: "/users")\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here, you must set ",(0,i.jsx)(n.code,{children:"API_ENDPOINT"})," as an environment variable on the device running your server. Upon startup, the server retrieves this value and makes it accessible through the ",(0,i.jsx)(n.code,{children:"env"})," Context variable."]}),"\n",(0,i.jsxs)(n.p,{children:["This approach allows us to change the API endpoint without modifying our codebase. For instance, we might use different API endpoints for development (",(0,i.jsx)(n.code,{children:"stage-api.example.com"}),") and production (",(0,i.jsx)(n.code,{children:"api.example.com"}),") environments."]}),"\n",(0,i.jsxs)(n.p,{children:["Remember, environment variables are not limited to the ",(0,i.jsx)(n.code,{children:"baseUrl"})," or ",(0,i.jsx)(n.code,{children:"@http"})," directive. You can use them throughout your schema, as a Mustache template handles their evaluation."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's another example, using an environment variable in the ",(0,i.jsx)(n.code,{children:"headers"})," of ",(0,i.jsx)(n.code,{children:"@grpc"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]\n    @grpc(\n      service: "UserService"\n      method: "ListUsers"\n      protoPath: "./proto/user_service.proto"\n      baseURL: "https://grpc-server.example.com"\n      headers: [\n        {key: "X-API-KEY", value: "{{.env.API_KEY}}"}\n      ]\n    )\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"security-aspects-and-best-practices",children:"Security Aspects and Best Practices"}),"\n",(0,i.jsx)(n.p,{children:"Environment variables help reduce security risks, but it's crucial to understand that they do not remove these risks entirely because the values are in plain text. Even if configuration values are not always highly sensitive, there is still a potential for compromising secrets.\nTo ensure your secrets remain secure, consider the following tips:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Use a ",(0,i.jsx)(n.code,{children:".env"})," file"]}),": ",(0,i.jsx)(n.br,{}),"\n","It's a common practice to create a ",(0,i.jsx)(n.code,{children:".env"})," file in your project's root directory for storing all environment variables. Avoid committing this file to your version control system; instead, add it to ",(0,i.jsx)(n.code,{children:".gitignore"})," to prevent public exposure of your secrets. For clarity and collaboration, maintain a ",(0,i.jsx)(n.code,{children:".env.example"})," file that enumerates all the necessary environment variables for your application, thereby guiding other developers on what variables they need to set."]}),"\n",(0,i.jsxs)(n.p,{children:["Within Tailcall (or in other environments), you can make use of this ",(0,i.jsx)(n.code,{children:".env"})," file by exporting its key-value pairs to your operating system."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if your ",(0,i.jsx)(n.code,{children:".env"})," file looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"API_ENDPOINT=https://jsonplaceholder.typicode.com\n"})}),"\n",(0,i.jsx)(n.p,{children:"Export it to your OS with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export $(cat .env | xargs)\n"})}),"\n",(0,i.jsx)(n.p,{children:"On Windows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'Get-Content .env | Foreach-Object { [System.Environment]::SetEnvironmentVariable($_.Split("=")[0], $_.Split("=")[1], "User") }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After this, you can access ",(0,i.jsx)(n.code,{children:"API_ENDPOINT"})," in your codebase."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use Kubernetes Secrets"}),": ",(0,i.jsx)(n.br,{}),"\n","When deploying your application with Kubernetes, use its ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"Secrets"})," feature to manage environment variables. This approach ensures your secrets remain private and are not embedded in your codebase, while also making it easier to update values as necessary."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Store Secrets Through Cloud Provider GUIs"}),": ",(0,i.jsx)(n.br,{}),"\n","For deployments using a cloud provider, use their GUI for environment variable management. These interfaces are intuitive and practical for containerized applications that automatically scale."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Following these practices ensures effective and secure management of your environment variables."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(96540);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);