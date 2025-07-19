//  Global Component Prop Types in a Separate File
export interface HeroProps {
  hero : {
    mh_line : string;
    tg_line : string;
    discription : string;
    p_cta : string;
    s_cta : string;
    image : string;
    alt : string;
  };
}

export interface Hero_2Props {
  hero_2 : {
    mh_line : string;
    tg_line : string;
    discription : string;
    p_cta : string;
    s_cta : string;
    image : string;
    alt : string;
  };
}

export interface Hero_3Props {
  hero_3 : {
    mh_line : string;
    tg_line : string;
    discription : string;
    p_cta : string;
    s_cta : string;
    image : string;
    alt : string;
  };
}

export interface Hero_4Props {
  hero_4 : {
    mh_line : string;
    tg_line : string;
    discription : string;
    p_cta : string;
    s_cta : string;
    image : string;
    alt : string;
  };
}

export interface logo_cloudProps {
  logo_cloud:{
    title : string;
    logos : string[];
  };
}

export interface HowItWorksProps {
  Howitworks:{
    title: string;
    subtitle: string;
    image: string;
    steps: {
      title: string;
      desc: string;
      img: string;
      caption: string;
  }[];
};
}

export interface ForWhomItem {
  title: string;
  description: string;
  icon: string; // raw SVG string
}

export interface ForWhomBlock {
  forwhom: { 
    title: string;
    description: string;
    p_cta: string;
    items: ForWhomItem[]; 
  }; 
}

export interface list_headerProps {
  list_header : {
    title : string;
    discription : string;   
  };
}

export interface FeatureItem {
    title: string;
    description: string;
    cta: string;
    link: string;
    icon: string;
}

export interface FeatureGridProps {
  grid:{
  title: string;
  subtitle: string;
  features: FeatureItem[];
  };
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsProps {
  stats:{
    heading: string;
    description: string;
    items: StatItem[];
  };
}

export interface SubscribeFormProps {
  subscribe:{
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
}

export interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  image?: string;
  excerpt?: string;
  tags: string[];
  category?: string;
  href?: string;
}

export interface BlogCard {
  blog_data: BlogCardProps;
}