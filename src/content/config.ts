import { AichatbotBlog } from './schema/ai-chatbot_blogs_schema';
import { AichatbotCases } from './schema/ai-chatbot_cases_schema';
import { CloudComputingBlog } from './schema/cloud-computing_blogs_schema';
import { CloudComputingCases } from './schema/cloud-computing_cases_schema';
import { CustomMLBlog } from './schema/custom_ml_blogs_schema';
import { CustomMLCases } from './schema/custom_ml_cases_schema';
import { DevopsBlog } from './schema/devops_blog_schema';
import { DevopsCases } from './schema/devops_cases_schema';
import { servicePage } from './schema/index_service_schema';
import { listpage } from './schema/list_schema';

export const collections = {
  AichatbotBlog: AichatbotBlog,
  AichatbotCases: AichatbotCases,
  CloudComputingBlog: CloudComputingBlog,
  CloudComputingCases: CloudComputingCases,
  CustomMLBlog: CustomMLBlog,
  CustomMLCases: CustomMLCases,
  DevopsBlog: DevopsBlog,
  DevopsCases: DevopsCases,
  servicePage : servicePage,
  listpage: listpage,
};





// how to use it 
//    import { getCollection } from 'astro:content';

//    const devopsBlogs = await getCollection('DevopsBlog');