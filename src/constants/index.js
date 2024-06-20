import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  audible,
  discordBlack,
  facebook,
  eat,
  file02,
  fuel,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  google,
  maps,
  plusSquare,
  spotify,
  waze,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  youtube,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const novaServices = [
  "Autonomous driving",
  "Real-time updates",
  "Intelligent assistance",
  "Seamless integration",
];

export const novaServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Natural voice recognition",
    text: "NOVA will adapt to your unique speech patterns so you can enjoy natural speech interaction without the need to remember specific commands.",
    date: "June 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "NOVA will award points for good driving habits, regular vehicle maintenance, refueling, and more, making learning and improving driving skills engaging and fun.",
    date: "October 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Full customization",
    text: "Customize NOVA's appearance, behavior, voice and more to suit your preferences, offering a personalized and more engaging driving experience.",
    date: "March 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "More integrations with APIs",
    text: "Connect seamlessly with a wide range of third-party services and applications, from smart home devices to social media APIs like Discord and Slack for better connectivity.",
    date: "July 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Enjoy enhanced entertainment, connectivity, and productivity features directly from your vehicle's dashboard.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "Easily integrate your favorite apps like Spotify, Google Maps, and Audible to enhance your driving experience.",
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Google Assistant",
    icon: google,
    width: 30,
    height: 30,
  },
  {
    id: "1",
    title: "Spotify",
    icon: spotify,
    width: 30,
    height: 30,
  },
  {
    id: "2",
    title: "Google Maps",
    icon: maps,
    width: 30,
    height: 30,
  },
  {
    id: "3",
    title: "Audible",
    icon: audible,
    width: 30,
    height: 30,
  },
  {
    id: "4",
    title: "YouTube",
    icon: youtube,
    width: 30,
    height: 30,
  },
  {
    id: "5",
    title: "Waze",
    icon: waze,
    width: 30,
    height: 30,
  },
  {
    id: "6",
    title: "Fuel",
    icon: fuel,
    width: 30,
    height: 30,
  },
  {
    id: "7",
    title: "Eat",
    icon: eat,
    width: 30,
    height: 30,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Essential features for everyday driving",
    price: "250",
    features: [
      "Advanced guiding systems for collisions, stops, lanes, and pedestrians",
      "Real-time route updates and predictive traffic analysis",
      "Full smartphone and apps integration for hands-free driving",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced features for your best driving",
    price: "399",
    features: [
      "Enhanced route planning with lane guidance and complex maneuvers",
      "Predictive maintenance alerts and remote diagnostics",
      "Intelligent Driving Coach with trip logs and driving insights",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Comprehensive solutions for manufacturers",
    price: null,
    features: [
      "Deep integration with vehicle’s internal systems and features",
      "Branding and feature customization tailored to manufacturer",
      "Advanced analytical tools for managing multiple vehicle updates",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Sit back and relax",
    text: "Experience hands-free driving on your toughest routes with NOVA's advanced autonomous navigation system from start to finish.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Stay informed",
    text: "NOVA monitors traffic, road conditions, and weather changes to give you real-time updates and provide alternative, safer routes.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect your phone to NOVA for hands-free calls, messages, music streaming, and access to your favorite apps.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Drive with confidence",
    text: "NOVA offers smart assistance from adaptive cruise control to lane-keeping assist and automatic parking.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Respond faster",
    text: "NOVA's collision & pedestrian detection, emergency braking, and proactive alerts keep you and your passengers safe.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "5",
    title: "Save money",
    text: "NOVA regularly monitors critical systems and notifies you early, helping you avoid unexpected breakdowns and costly repairs.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
