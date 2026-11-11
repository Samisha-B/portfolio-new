export const site = {
  name: "Simran B.",
  tagline: "Websites That Work Beautifully.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  description:
    "Simran B. designs and builds beautiful, conversion-focused websites for beauty, cleaning and real estate businesses.",
  contact: {
    instagram: "https://www.instagram.com/simran_b1108/",
    instagramLabel: "@simran_b1108",
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
  {
    id: "cleaning-1", category: "cleaning", categoryLabel: "Cleaning Business",
    name: "Cleaning Company Website",
    description: "A professional cleaning business website that makes it simple to request a quote.",
    features: ["Service listings", "Booking and quote request forms", "Residential and commercial options", "Why Choose Us section", "Reviews and testimonials layout", "Service areas", "Contact information"],
    url: "https://cleaning-comp-temp-blond.vercel.app/", image: "",
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

// Pricing intentionally not shown: edit `price` to publish real numbers.
export const plans = [
  {
    id: "showcase",
    name: "Showcase",
    tagline: "A beautiful, credible home for your business online.",
    price: "Custom quote",
    features: ["Custom, brand-aligned design", "Mobile-first responsive build", "Services and gallery sections", "Instagram feed / link integration", "Enquiry form delivered to your email inbox", "SEO-friendly structure"],
  },
  {
    id: "booking",
    name: "Booking & Calendar",
    tagline: "Turn visitors into scheduled appointments.",
    price: "Custom quote",
    featured: true,
    badge: "Great for service businesses",
    features: ["Everything in Showcase", "Online booking with Google Calendar integration", "Gmail / email notifications for new bookings and enquiries", "Service catalogue with pricing", "Product display or shop section", "Google Maps location and opening hours"],
  },
  {
    id: "ai",
    name: "AI-Powered Site",
    tagline: "A site that answers questions and captures leads for you.",
    price: "Custom quote",
    features: ["Everything in Booking & Calendar", "AI chat assistant trained on your services and FAQs", "AI-assisted lead and quote qualification", "Automated email follow-ups", "Priority support after launch"],
  },
];

export const reasons = [
  "Designs tailored to your business",
  "Mobile-first and responsive development",
  "Clear calls to action",
  "Easy customer enquiries and booking experiences",
  "Modern aesthetics and intuitive navigation",
  "Personal communication and attention to detail",
];

export const steps = [
  { n: "01", title: "Discover", text: "Understanding your business, customers and goals." },
  { n: "02", title: "Design", text: "Creating a visual direction and website layout that fits your brand." },
  { n: "03", title: "Build", text: "Developing a responsive, functional website." },
  { n: "04", title: "Launch", text: "Testing, refining and launching your website." },
];

export const businessTypes = ["Beauty / Nail studio", "Cleaning business", "Real estate", "Other"];
export const websiteTypes = ["New website", "Website redesign", "Landing page", "Booking website", "Online shop", "Not sure yet"];
export const planOptions = ["Showcase", "Booking & Calendar", "AI-Powered Site", "Not sure yet"];
