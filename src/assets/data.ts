import iconFacebook from "./images/icon-facebook.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconYoutube from "./images/icon-youtube.svg";

export const socialStats = [
  {
    platform: "facebook",
    icon: iconFacebook,
    username: "@nathanf",
    metric: "followers",
    total: 1_987,
    change: 12,
    trend: "up",
  },
  {
    platform: "twitter",
    icon: iconTwitter,
    username: "@nathanf",
    metric: "followers",
    total: 1_044,
    change: 99,
    trend: "up",
  },
  {
    platform: "instagram",
    icon: iconInstagram,
    username: "@realnathanf",
    metric: "followers",
    total: 11_000,
    change: 1_099,
    trend: "up",
  },
  {
    platform: "youtube",
    icon: iconYoutube,
    username: "Nathan F.",
    metric: "subscribers",
    total: 8_239,
    change: 144,
    trend: "down",
  },
];

export const overviewStats = [
  {
    platform: "facebook",
    icon: iconFacebook,
    label: "Page Views",
    value: 87,
    changePercent: 3,
    trend: "up",
  },
  {
    platform: "facebook",
    icon: iconFacebook,
    label: "Likes",
    value: 52,
    changePercent: 2,
    trend: "down",
  },
  {
    platform: "instagram",
    icon: iconInstagram,
    label: "Likes",
    value: 5_462,
    changePercent: 2_257,
    trend: "up",
  },
  {
    platform: "instagram",
    icon: iconInstagram,
    label: "Profile Views",
    value: 52_000,
    changePercent: 1_375,
    trend: "up",
  },
  {
    platform: "twitter",
    icon: iconTwitter,
    label: "Retweets",
    value: 117,
    changePercent: 303,
    trend: "up",
  },
  {
    platform: "twitter",
    icon: iconTwitter,
    label: "Likes",
    value: 507,
    changePercent: 553,
    trend: "up",
  },
  {
    platform: "youtube",
    icon: iconYoutube,
    label: "Likes",
    value: 107,
    changePercent: 19,
    trend: "down",
  },
  {
    platform: "youtube",
    icon: iconYoutube,
    label: "Total Views",
    value: 1_407,
    changePercent: 12,
    trend: "down",
  },
];