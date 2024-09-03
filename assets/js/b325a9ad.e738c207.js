"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5996],{29730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const r={title:"Mutability",description:"Explore best practices for handling mutability in programming with our detailed guide. Learn when to use references versus ownership in functions with clear examples. This guideline helps developers optimize their code for better performance and clarity, especially in performance-sensitive environments. Ideal for contributors and programmers looking to refine their coding techniques and understanding of mutability."},a=void 0,o={id:"contributors/mutability",title:"Mutability",description:"Explore best practices for handling mutability in programming with our detailed guide. Learn when to use references versus ownership in functions with clear examples. This guideline helps developers optimize their code for better performance and clarity, especially in performance-sensitive environments. Ideal for contributors and programmers looking to refine their coding techniques and understanding of mutability.",source:"@site/docs/contributors/mutability.md",sourceDirName:"contributors",slug:"/contributors/mutability",permalink:"/docs/contributors/mutability",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/contributors/mutability.md",tags:[],version:"current",lastUpdatedAt:1718210207e3,frontMatter:{title:"Mutability",description:"Explore best practices for handling mutability in programming with our detailed guide. Learn when to use references versus ownership in functions with clear examples. This guideline helps developers optimize their code for better performance and clarity, especially in performance-sensitive environments. Ideal for contributors and programmers looking to refine their coding techniques and understanding of mutability."},sidebar:"docs",previous:{title:"Integration Testing",permalink:"/docs/contributors/integration-testing"},next:{title:"Telemetry",permalink:"/docs/contributors/telemetry"}},c={},l=[{value:"Using References",id:"using-references",level:2},{value:"Using Ownership",id:"using-ownership",level:2},{value:"Using Mutable References",id:"using-mutable-references",level:2},{value:"Exceptions",id:"exceptions",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Typically you would have a question about an argument being passed as a value vs as a reference specially if you are new to Rust. This is short guide that will help in deciding when to use mutability in the Tailcall codebase."}),"\n",(0,i.jsx)(t.h2,{id:"using-references",children:"Using References"}),"\n",(0,i.jsx)(t.p,{children:"When calling functions that do not need to modify the values they receive, pass references to these values. This avoids unnecessary copying and preserves the original data integrity.\ud83d\udcb0"}),"\n",(0,i.jsx)(t.p,{children:"Consider a function that calculates the total number of items in a list. This function does not alter the list, so pass the list as a reference:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"fn count_items(items: &Vec<i32>) -> usize {\n    items.len()\n}\nlet my_items = vec![1, 2, 3];\nlet total = count_items(&my_items);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"using-ownership",children:"Using Ownership"}),"\n",(0,i.jsx)(t.p,{children:"When calling functions that need to modify the values they receive, pass ownership of these values to the function. This makes it clear that the function might change the value. Ensure that the modified values are returned from the function if further use is required."}),"\n",(0,i.jsx)(t.p,{children:"Consider a function that adds an item to a list. Since this modifies the list, pass the list with ownership and return the modified list:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"fn add_item(mut items: Vec<i32>, item: i32) -> Vec<i32> {\n    items.push(item);\n    items\n}\nlet my_items = vec![1, 2, 3];\nlet updated_items = add_item(my_items, 4);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"using-mutable-references",children:"Using Mutable References"}),"\n",(0,i.jsx)(t.p,{children:"Mutable references are particularly useful when you need to modify the data a function receives without taking ownership of it. This approach is ideal for types that behave like classical stateful services, where maintaining state across multiple function calls is necessary."}),"\n",(0,i.jsx)(t.p,{children:"Consider a caching mechanism where data needs to be frequently updated or retrieved based on function calls. In this case, using a mutable reference allows the cache to be updated without transferring ownership each time:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'struct Cache {\n    data: HashMap<String, String>,\n}\n\nimpl Cache {\n    fn add_entry(&mut self, key: String, value: String) {\n        self.data.insert(key, value);\n    }\n\n    fn get_entry(&self, key: &str) -> Option<&String> {\n        self.data.get(key)\n    }\n}\n\nlet mut my_cache = Cache { data: HashMap::new() };\nmy_cache.add_entry("session1".to_string(), "User123".to_string());\nif let Some(user) = my_cache.get_entry("session1") {\n    println!("Cached user: {}", user);\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Even though in Rust mutability is a lot more tamed than other languages, as a standard we try to stay away from mutable references as much as possible."})}),"\n",(0,i.jsx)(t.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,i.jsx)(t.p,{children:"The approach outlined above may not be suitable for performance-sensitive components or frequently executed sections of code (hot code paths). In such scenarios, prioritize efficiency and adopt optimization strategies to enhance performance. Sometimes the API design of a dependent library can also influence the way we write code. These are all the exceptions where it's ok to move away from the above set guidelines."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);