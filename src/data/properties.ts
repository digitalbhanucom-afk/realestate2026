export type Property = {
  id: string;
  name: string;
  location: string;
  category: "Vijayawada" | "Amaravati" | "Bapatla";
  tag: string;
  type: string;
  image: string;
  brochure?: string;
};

const BASE = "https://capitalinvestors.info";

export const properties: Property[] = [
  {
    id: "sun-siri",
    name: "Sun Siri Rise-2",
    location: "Amaravathi, Khaza toll",
    category: "Amaravati",
    tag: "Premium",
    type: "Plots",
    image: `${BASE}/images/sun_siri_enhanced.webp`,
    brochure: `${BASE}/pdf/Sunsiri%20The%20Rise%20Brochure.pdf`,
  },
  {
    id: "the-royal",
    name: "Sun Siri The Royal",
    location: "Paritala",
    category: "Vijayawada",
    tag: "Luxury",
    type: "Duplex & Plots",
    image: `${BASE}/images/ChatGPT%20Image%20Apr%2028,%202026,%2005_19_39%20PM.webp`,
    brochure: `${BASE}/pdf/Sunsiri%20The%20Royal%20Brochure%2027-01-2026.pdf`,
  },
  {
    id: "regal-city",
    name: "Sri Bhramara Regal City",
    location: "Poranki, Vijayawada",
    category: "Vijayawada",
    tag: "Elite",
    type: "Open Plots",
    image: `${BASE}/images/regal_city_enhanced.webp`,
    brochure: `${BASE}/pdf/Regal%20City_Final.pdf`,
  },
  {
    id: "the-lotus",
    name: "The Lotus",
    location: "Ponnekallu, Amaravati",
    category: "Amaravati",
    tag: "Future",
    type: "Villa Plots",
    image: `${BASE}/images/the_lotus_enhanced.webp`,
    brochure: `${BASE}/pdf/Sunsiri%20The%20Lotus%20Brochure.pdf`,
  },
  {
    id: "the-icon",
    name: "The Icon",
    location: "Tadikonda, Amaravati",
    category: "Amaravati",
    tag: "Iconic",
    type: "Premium Plots",
    image: `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.59%20PM%20(1).webp`,
    brochure: `${BASE}/pdf/The%20Icon%20Folder_19-06-24-V4.pdf`,
  },
  {
    id: "the-meadows",
    name: "The Meadows",
    location: "Ganguru, Vijayawada",
    category: "Vijayawada",
    tag: "Nature",
    type: "Villa Enclave",
    image: `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%2012.56.10%20PM.webp`,
    brochure: `${BASE}/pdf/The%20Meadows%20draft%20brochure%2009-05-25.pdf`,
  },
  {
    id: "sbt-ajanthaa",
    name: "SBT Ajanthaa",
    location: "Suryalanka Road, Bapatla",
    category: "Bapatla",
    tag: "Luxury",
    type: "Plots",
    image: `${BASE}/pdf/media__1777273658711.png`,
    brochure: `${BASE}/pdf/SBT_Ajanthaa%20Brochure_Booklet.pdf`,
  },
];

export const heroImage = `${BASE}/images/ChatGPT%20Image%20Apr%2028,%202026,%2003_57_51%20PM.webp`;
export const galleryImages = [
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.57%20PM.webp`,
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.58%20PM%20(1).webp`,
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.58%20PM%20(2).webp`,
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.59%20PM%20(1).webp`,
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.58%20PM.webp`,
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.59%20PM%20(2).webp`,
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.59%20PM.webp`,
  `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.03.57%20PM.webp`,
];
export const leaders = {
  ravi: `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.12.17%20PM.webp`,
  kanna: `${BASE}/images/WhatsApp%20Image%202026-04-27%20at%201.10.29%20PM.webp`,
  office: `${BASE}/images/regal_city_enhanced.webp`,
};
