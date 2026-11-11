export const site = {
  name: "Simran B.",
  tagline: "Websites That Work Beautifully.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  description:
    "Simran B. designs and builds beautiful, conversion-focused websites for beauty, cleaning and real estate businesses.",
  contact: {
    // EDIT ME: placeholders
    email: "hello@example.com",
    whatsapp: "https://wa.me/0000000000",
    whatsappLabel: "WhatsApp: +00 0000 000000 (placeholder)",
    instagram: "https://instagram.com/your_handle",
    instagramLabel: "@your_handle (placeholder)",
  },
};

export const demos = [
  {
    id: "nail",
    industry: "Nail & Beauty Studio",
    title: "Blush Studio",
    url: "https://blush-studio-nail-template.vercel.app/",
    description: "A soft, bookable website for nail and beauty studios, built to turn Instagram followers into appointments.",
    image: "",
    mobileImage: "",
  },
  {
    id: "cleaning",
    industry: "Cleaning Company",
    title: "Cleaning Company Website",
    url: "https://cleaning-comp-temp-blond.vercel.app/",
    description: "A trustworthy service website with clear quote requests for residential and commercial clients.",
    image: "",
    mobileImage: "",
  },
  {
    id: "realestate",
    industry: "Real Estate",
    title: "Real Estate Website",
    url: "https://real-estate-zeta-inky.vercel.app/",
    description: "A modern property website with listings, search and filtering, and agent enquiry forms.",
    image: "",
    mobileImage: "",
  },
];

const PLACEHOLDER = "Placeholder - edit in data/site.js";

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "beauty", label: "Beauty & Nail Studios" },
  { id: "cleaning", label: "Cleaning Businesses" },
  { id: "realestate", label: "Real Estate" },
];

export const projects = [
  {
    id: "beauty-1", category: "beauty", categoryLabel: "Beauty & Nail Studio",
    name: "Blush Studio",
    description: "A nail studio website with services, pricing, gallery and an easy path to booking.",
    features: ["Online appointment booking", "Service catalogue and pricing", "Nail art gallery", "Product shop", "Instagram integration", "Contact form and location"],
    url: "https://blush-studio-nail-template.vercel.app/", image: "",
  },
  ...[2, 3, 4, 5].map((n) => ({
    id: `beauty-${n}`, category: "beauty", categoryLabel: "Beauty & Nail Studio",
    name: `Beauty Project ${n} (placeholder)`,
    description: PLACEHOLDER,
    features: ["Online appointment booking", "Service catalogue and pricing", "Contact form and location"],
    url: "", image: "", placeholder: true,
  })),
  {
    id: "cleaning-1", category: "cleaning", categoryLabel: "Cleaning Business",
    name: "Cleaning Company Website",
    description: "A professional cleaning business website that makes it simple to request a quote.",
    features: ["Service listings", "Booking and quote request forms", "Residential and commercial options", "Why Choose Us section", "Reviews and testimonials layout", "Service areas", "Contact information"],
    url: "https://cleaning-comp-temp-blond.vercel.app/", image: "",
  },
  {
    id: "cleaning-2", category: "cleaning", categoryLabel: "Cleaning Business",
    name: "Cleaning Project 2 (placeholder)",
    description: PLACEHOLDER,
    features: ["Service listings", "Quote request form", "Service areas"],
    url: "", image: "", placeholder: true,
  },
  {
    id: "realestate-1", category: "realestate", categoryLabel: "Real Estate",
    name: "Real Estate Website",
    description: "A modern real estate website built around browsing, shortlisting and enquiring.",
    features: ["Property listings", "Property detail layouts", "Property image galleries", "Search and filtering", "Agent contact information", "Enquiry forms", "Modern real estate branding"],
    url: "https://real-estate-zeta-inky.vercel.app/", image: "",
  },
];

export const services = [
  { title: "Custom Website Design", text: "Beautiful, brand-aligned websites designed around your business." },
  { title: "Website Development", text: "Responsive, functional and fast websites that work across devices." },
  { title: "Online Booking Integration", text: "Make it easier for customers to schedule appointments and request services." },
  { title: "E-commerce & Product Displays", text: "Showcase and sell products directly through your website." },
  { title: "Website Redesign", text: "Transform outdated websites into modern digital experiences." },
  { title: "Landing Pages", text: "High-converting pages designed for campaigns and lead generation." },
];

export const reasons = [
  "Designs tailored to your business",
  "Mobile-first and responsive development",
  "Clear calls to action",
  "Easy customer enquiries and booking experiences",
  "Modern aesthetics and intuitive navigation",
  "Personal communication and attention to detail",
];

export const process = [
  { n: "01", title: "Discover", text: "Understanding your business, customers and goals." },
  { n: "02", title: "Design", text: "Creating a visual direction and website layout that fits your brand." },
  { n: "03", title: "Build", text: "Developing a responsive, functional website." },
  { n: "04", title: "Launch", text: "Testing, refining and launching your website." },
];

export const businessTypes = ["Beauty / Nail studio", "Cleaning business", "Real estate", "Other"];
export const websiteTypes = ["New website", "Website redesign", "Landing page", "Booking website", "Online shop", "Not sure yet"];
