export const CONTACT = {
  phones: ["+91 9811 842 838", "+91 9811 842 839"],
  email: "info@techcoral.co.in",
  address:
    "Plot No. 12/15, khasra no. 155, pooth khurd Industrial Area, Delhi- 110039 (India)",
  whatsapp: "919811842838",
};

export const SOCIALS = {
  facebook: "https://www.facebook.com/TechCoralSolutions",
  youtube: "https://www.youtube.com/@techcoralsolutions569/featured",
};

export const ABOUT_TEXT =
  "Techcoral solutions is a New Delhi based company serving the needs of numerous buyers with premium quality products. Since the inception in 2010, we are offering a comprehensive product array packed with unmatched quality featured at great market price. Our company is known to be a noted exporter, manufacturer, supplier specialized in Engineering, Industrial products as per latest market demands and international standards. The non conventional items are integrated With innovative technology and are fabricated using quality material. This ensures the finest quality as well as performance in all type of conditions.";

// Desktop header: the live site renders WordPress' alphabetical page list,
// with Blocksy collapsing whatever doesn't fit into a "More" dropdown.
export const DESKTOP_MENU = [
  ["About", "/about/"],
  ["Aluminium Doors & Windows", "/aluminium-doors-windows/"],
  ["Aluminium Partition", "/aluminium-partition/"],
  ["Bank Beds/Storage Systems", "/bank-beds-storage-systems/"],
  ["BLOCK WORK ACCESSORIES", "/block-work-accessories/"],
  ["BOOM BARRIERS", "/boom-barriers/"],
  ["CABLE TRAY", "/cable-tray/"],
  ["Ceiling Works", "/ceiling-works/"],
  ["Certificate", "/certificate/"],
  ["Client", "/client/"],
  ["Contact", "/contact/"],
  ["Customized Fabrication", "/customized-fabrication/"],
  ["Delivery", "/delivery/"],
  ["Dismantling & Reinstallation of labour Camps", "/dismantling-reinstallation-of-labour-camps/"],
  ["Doors & Windows", "/doors-windows/"],
  ["Fabrication Works", "/fabrication-works/"],
  ["Finishing Works", "/finishing-works/"],
  ["Flooring", "/flooring/"],
  ["Furniture", "/furniture/"],
  ["Glass Doors & Windows", "/glass-doors-windows/"],
  ["Glass Partition", "/glass-partition/"],
  ["Gypsum Ceiling", "/gypsum-ceiling/"],
  ["Gypsum Partition", "/gypsum-partition/"],
  ["Heavy Steel Fabrication", "/heavy-steel-fabrication/"],
  ["Home", "/"],
  ["Hy-Rib SHEET", "/hy-rib-sheet/"],
  ["Interior Works", "/interior-works/"],
  ["Labour Accomodation Camps", "/labour-accomodation-camps/"],
  ["Metal Ceiling", "/metal-ceiling/"],
  ["METAL GRATING", "/metal-grating/"],
  ["METAL LINTELS", "/metal-lintels/"],
  ["Mild Steel Fabrication", "/mild-steel-fabrication/"],
  ["New Labour Camp Setup", "/new-labour-camp-setup/"],
  ["OFFSITE/ONSITE STEEL FABRICATION WORKS", "/offsite-onsite-steel-fabrication-works/"],
  ["Onsite/Offsite Furniture Fabrication", "/onsite-offsite-furniture-fabrication/"],
  ["Other applications", "/other-applications/"],
  ["Other Furniture as Per Drawing", "/other-furniture-as-per-drawing/"],
  ["Other Type of Ceiling", "/other-type-of-ceiling/"],
  ["Other Type of Doors & Windows", "/other-type-of-doors-windows/"],
  ["Other Type of Partition", "/other-type-of-partition/"],
  ["Partition Works", "/partition-works/"],
  ["Product", "/product/"],
  ["Project Study", "/project-study/"],
  ["PUDDLE FLANGES", "/puddle-flanges/"],
  ["REBAR CONNECTION BOX", "/rebar-connection-box/"],
  ["RUNGS/FOOT STEPS", "/rungs-foot-steps/"],
  ["Service", "/service/"],
  ["SHEET METAL FABRICATION", "/sheet-metal-fabrication/"],
  ["Steel Doors & Windows", "/steel-doors-windows/"],
  ["Steel Fabrication", "/steel-fabrication/"],
  ["STEEL SUPPORT SYSTEM", "/steel-support-system/"],
  ["Stone Works", "/stone-works/"],
  ["Structural Steel fabrication", "/structural-steel-fabrication/"],
  ["Wall Finishes", "/wall-finishes/"],
].map(([label, href]) => ({ label, href }));

export const MOBILE_MENU = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Product",
    href: "/product/",
    children: [
      { label: "Hy-Rib SHEET", href: "/hy-rib-sheet/" },
      { label: "METAL LINTELS", href: "/metal-lintels/" },
      { label: "REBAR CONNECTION BOX", href: "/rebar-connection-box/" },
      { label: "BLOCK WORK ACCESSORIES", href: "/block-work-accessories/" },
      { label: "METAL GRATING", href: "/metal-grating/" },
      { label: "BOOM BARRIERS", href: "/boom-barriers/" },
      { label: "PUDDLE FLANGES", href: "/puddle-flanges/" },
      { label: "RUNGS/FOOT STEPS", href: "/rungs-foot-steps/" },
      { label: "CABLE TRAY", href: "/cable-tray/" },
      { label: "All Products", href: "https://techcoral.bharatbizmart.com/product/" },
    ],
  },
  {
    label: "Service",
    href: "/service/",
    children: [
      {
        label: "Fabrication Works",
        href: "/fabrication-works/",
        children: [
          { label: "Steel Fabrication", href: "/steel-fabrication/" },
          { label: "Mild Steel Fabrication", href: "/mild-steel-fabrication/" },
          { label: "Structural Steel fabrication", href: "/structural-steel-fabrication/" },
          { label: "Heavy Steel Fabrication", href: "/heavy-steel-fabrication/" },
          { label: "Customized Fabrication", href: "/customized-fabrication/" },
        ],
      },
      {
        label: "Finishing Works",
        href: "/finishing-works/",
        children: [
          { label: "Interior Works", href: "/interior-works/" },
          {
            label: "Doors & Windows",
            href: "/doors-windows/",
            children: [
              { label: "Aluminium Doors & Windows", href: "/aluminium-doors-windows/" },
              { label: "Steel Doors & Windows", href: "/steel-doors-windows/" },
              { label: "Glass Doors & Windows", href: "/glass-doors-windows/" },
              { label: "Other Type of Doors & Windows", href: "/other-type-of-doors-windows/" },
            ],
          },
          {
            label: "Partition Works",
            href: "/partition-works/",
            children: [
              { label: "Aluminium Partition", href: "/aluminium-partition/" },
              { label: "Gypsum Partition", href: "/gypsum-partition/" },
              { label: "Glass Partition", href: "/glass-partition/" },
              { label: "Other Type of Partition", href: "/other-type-of-partition/" },
            ],
          },
          {
            label: "Ceiling Works",
            href: "/ceiling-works/",
            children: [
              { label: "Gypsum Ceiling", href: "/gypsum-ceiling/" },
              { label: "Metal Ceiling", href: "/metal-ceiling/" },
              { label: "Other Type of Ceiling", href: "/other-type-of-ceiling/" },
            ],
          },
          {
            label: "Stone Works",
            href: "/stone-works/",
            children: [
              { label: "Flooring", href: "/flooring/" },
              { label: "Wall Finishes", href: "/wall-finishes/" },
              { label: "Other applications", href: "/other-applications/" },
            ],
          },
        ],
      },
      {
        label: "Labour Accomodation Camps",
        href: "/labour-accomodation-camps/",
        children: [
          {
            label: "Dismantling & Reinstallation of labour Camps",
            href: "/dismantling-reinstallation-of-labour-camps/",
          },
          { label: "New Labour Camp Setup", href: "/new-labour-camp-setup/" },
        ],
      },
      {
        label: "Furniture",
        href: "/furniture/",
        children: [
          { label: "Onsite/Offsite Furniture Fabrication", href: "/onsite-offsite-furniture-fabrication/" },
          { label: "Bank Beds/Storage Systems", href: "/bank-beds-storage-systems/" },
          { label: "Other Furniture as Per Drawing", href: "/other-furniture-as-per-drawing/" },
        ],
      },
    ],
  },
  { label: "Project Study", href: "/project-study/" },
  { label: "Contact", href: "/contact/" },
];

export const HERO_SLIDES = [
  {
    image: "/images/hero-welcome.webp",
    title: ["Welcome to", "Techcoral Solutions"],
    text: [
      "At Techcoral Solutions, we specialize in delivering world-class",
      "engineering and industrial products tailored to meet global",
      "standards. With a legacy of excellence since 2010, we are",
      "committed to innovation, quality, and customer satisfaction.",
    ],
  },
  {
    image: "/images/hero-oil-rig-worker.webp",
    title: ['"Innovative', 'Engineering Excellence"'],
    text: [
      "Driving progress with innovative engineering solutions",
      "designed to deliver unmatched quality and",
      "performance in every application.",
    ],
  },
  {
    image: "/images/hero-manufacture.webp",
    title: ["Manufacture Process"],
    text: [
      "Techcoral Solutions manufactures engineering and industrial products using",
      "innovative technologies and high-quality materials. Our manufacturing",
      "process focuses on integrating non-conventional items to meet the",
      "latest market demands and international standards.",
    ],
  },
  {
    image: "/images/hero-services.webp",
    title: ["Services"],
    text: [
      "Techcoral Solutions is committed to providing exceptional services",
      "to its clients by ensuring timely delivery, customized solutions, and",
      "technical support. Our services include product consultation, design",
      "optimization, and after-sales assistance to help customers",
      "achieve maximum efficiency and satisfaction.",
    ],
  },
];

export const ABOUT_POINTS = [
  [
    "Client centric approach",
    "Team of deft and hard working professionals",
    "State of the art infrastructure prompt delivery",
  ],
  ["Competitive prices", "Transparent dealings"],
];

export const PROJECT_BOXES = [
  {
    title: ["OUR RUNNING", "PROJECTS"],
    href: "/delivery/",
    image: "/images/running-projects.webp",
    buttonClass: "bg-[#C90028]",
  },
  {
    title: ["OUR DELIVERY", "PROJECTS"],
    href: "/delivery/",
    image: "/images/delivery-projects.webp",
    buttonClass: "bg-gold",
  },
];

// Segments wrapped in ** are rendered bold, as on the live site.
export const TESTIMONIALS = [
  {
    title: "Excellent Quality Products!",
    text: "I ordered **Hy-Rib Sheets and Metal Lintels**, and the quality was absolutely **top-notch**! Strong, durable, and perfectly manufactured. Highly recommended for construction projects!",
  },
  {
    title: "Reliable & On-Time Delivery",
    text: "I purchased **Rebar Connection Boxes and Block Work Accessories**. The delivery was **on time**, and the product quality was **excellent**. A trustworthy supplier for construction materials!",
  },
  {
    title: "Affordable Prices & Great Service",
    text: "Compared to the market, I got **better pricing and superior quality**. Their customer service was also **helpful and responsive**. **Metal Grating and Lintels** were highly durable. Very satisfied with my experience!",
  },
  {
    title: "Trustworthy & Professional",
    text: "I have worked with them multiple times, and every time, I received **exceptional products and services**. **Timely delivery, high-strength materials, and fair pricing** – everything is perfect!",
  },
];

export const CLIENT_LOGOS = [
  "Untitled-1-1.webp",
  "logo-1.webp",
  "png-clipart-logo-air-conditioning-zamil-air-conditioners-zamil-industrial-business-text-label-1.webp",
  "ireo-logo-1.webp",
  "Untitled-1-2.webp",
  "OCUS_logo.webp",
  "image_2.webp",
  "Untitled-1-3.webp",
  "Untitled-111.webp",
  "png-clipart-tata-motors-european-technical-centre-car-tata-group-tata-steel-car-blue-company.webp",
  "images-2-1.webp",
  "Shapoorji_Pallonji_Group_logo.svg.webp",
  "images-3.webp",
  "Mahindra-Lifespaces.webp",
  "images-6.webp",
  "images-7.webp",
  "images-5.webp",
  "png-transparent-max-life-insurance-hdfc-life-mitsui-sumitomo-insurance-group-life-miscellaneous-blue-company.webp",
  "images-4.webp",
  "Untitled-1-4.webp",
  "images-9.webp",
  "images-8.webp",
  "img_20240222_091148578825822804383038.webp",
  "images.webp",
  "KALPATPOWR.NS_BIG-219bfef9.webp",
  "Untitled-1-5.webp",
  "EsselGroup_Logo.webp",
  "afcons-infrastructure-shares-rise-over-8-post-listing-should-you-buy-sell-or-hold.webp",
  "Untitled-1-6.webp",
  "Untitled-1-7.webp",
  "sobha-developers-logo-A13E8BA5BA-seeklogo.com_.webp",
  "images-10.webp",
  "images-2.webp",
].map((file) => `/images/clients/${file}`);

export const VIDEOS = ["Exp20WR7aRo", "rEXdiuT92jk", "UQrN3y9T_PE"];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Product", href: "/product/" },
  { label: "Service", href: "/service/" },
  { label: "Project Study", href: "/project-study/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_PRODUCTS = [
  { label: "Hy-Rib SHEET", href: "/hy-rib-sheet/" },
  { label: "Metal Lintels", href: "/metal-lintels/" },
  { label: "Rebar Connection Box", href: "/rebar-connection-box/" },
  { label: "Metal Grating", href: "/metal-grating/" },
  { label: "Boom Barriers", href: "/boom-barriers/" },
  { label: "Puddle Flanges", href: "/puddle-flanges/" },
  { label: "Rungs/Foot steps", href: "/rungs-foot-steps/" },
];
