## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
📁 src/
├── 📁 content/                      
│   └── 📁 services/
│       ├── 📁 custom-ml/
│       │   ├── 📄 index.md
│       │   ├── 📁 blog/
│       │   │   └── 📄 intro-to-x.md
│       │   ├── 📁 case-studies/
│       │   │   └── 📄 case-1.md
│       │   ├── 📄 blog-list.md
│       │   ├── 📄 case-list.md
│       │   └── 📄 custom-page.md
│       ├── 📁 ai-chatbot/
│       │   ├── 📄 index.md
│       │   ├── 📁 blog/
│       │   │   └── 📄 intro-to-x.md
│       │   ├── 📁 case-studies/
│       │   │   └── 📄 case-1.md
│       │   ├── 📄 blog-list.md
│       │   ├── 📄 case-list.md
│       │   └── 📄 faq.md
│       ├── 📁 devops/
│       │   ├── 📄 index.md
│       │   ├── 📁 blog/
│       │   │   └── 📄 intro-to-x.md
│       │   ├── 📁 case-studies/
│       │   │   └── 📄 case-1.md
│       │   ├── 📄 blog-list.md
│       │   ├── 📄 case-list.md
│       │   └── 📄 deployment-guide.md
│       └── 📁 cloud-computing/
│           ├── 📄 index.md
│           ├── 📁 blog/
│           │   └── 📄 intro-to-x.md
│           ├── 📁 case-studies/
│           │   └── 📄 case-1.md
│           ├── 📄 blog-list.md
│           ├── 📄 case-list.md
│           └── 📄 whitepaper.md
├── 📁 pages/                        
│   ├── 📄 index.astro
│   ├── 📄 about.astro
│   ├── 📄 contact.astro
│   └── 📁 services/
│       └── 📁 custom-ml/
│           └── 📄 index.astro       
│       └── 📁 ai-chatbot/
│           └── 📄 index.astro
│       └── 📁 devops/
│           └── 📄 index.astro
│       └── 📁 cloud-computing/
│           └── 📄 index.astro
├── 📁 components/
│   ├── 📁 layout/
│   │   ├── 📄 Layout.astro          
│   │   ├── 📄 ServiceLayout.astro  
│   │   ├── 📄 BlogLayout.astro
│   │   └── 📄 StaticLayout.astro
│   ├── 📁 shared/
│   │   ├── 📄 Nav.astro             
│   │   ├── 📄 Footer.astro
│   │   ├── 📄 CTA.astro
│   ├── 📁 blog/
│   │   ├── 📄 BlogPost.astro
│   │   ├── 📄 BlogList.astro
│   ├── 📁 case/
│   │   ├── 📄 CaseStudy.astro
│   │   ├── 📄 CaseList.astro
│   ├── 📁 service/
│   │   ├── 📄 ServiceCard.astro
│   │   └── 📄 CustomContent.astro
│   └── 📁 ui/
│       └── 📄 Button.jsx           
├── 📁 data/                         
│   ├── 📄 site.json                 
│   └── 📄 nav.json                  
📁 public/
├── 📁 assets/
│   └── 📁 images/                   
├── 📁 styles/                         
│   ├── 📄 tailwind.css                
│   ├── 📄 base.css                   
│   ├── 📄 typography.css              
│   └── 📄 variables.css              
├── 📁 scripts/                       
│   ├── 📄 analytics.js               
│   ├── 📄 scrollToTop.js             
│   └── 📄 initTabs.js                
```



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Build and maintain by AJ && T