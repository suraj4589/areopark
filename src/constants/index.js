import {
  Bihar_img, Erope_img,
  India_gate, Taj, Varanasi, O, R, C
} from "../assets/homeImg";

import {
  E6, AI, AK, DD,
  FD, OD, SG, SL, VJ, VZ,
  Gift, Insurance,
  InternationalFlight,
  Where2
} from '../assets/icon'


export const navbarMenu = [
  { id: "0", title: "Home", url: "/" },
  { id: "1", title: "About", url: "#about" },
  { id: "2", title: "HolidayOffer", url: "#offers" },
  { id: "3", title: "HotelBooking", url: "#hotel" },
  { id: "4", title: "Login", url: "#loginform" },
  { id: "5", title: "Sign-in", url: "#signupform" },

];

// {
//   id: "6",
//   title: "Sign in",
//   url: "/newaccount",
//   onlyMobile: true,
// },


export const items = [
  {
    id: "Where2Go",
    title: "Where To Go ? ",
    subtitle: "",
    imgSrc: Where2,
    alt: "Where2Go_image",
    url: "#"
  },
  {
    id: "Insurance",
    title: "Insurance",
    subtitle: "For International Trips",
    imgSrc: Insurance,
    alt: "Insurance_image",
    url: "#"
  },
  {
    id: "ExploreInternationalFlights",
    title: "Explore International Flights",
    subtitle: "Cheapest Flights to Paris, Bali, Tokyo & more",
    imgSrc: InternationalFlight,
    alt: "Explore International Flights_image",
    url: "#"
  },

  {
    id: "GiftCards",
    title: "Gift Cards",
    subtitle: "",
    imgSrc: Gift,
    alt: "Gift Cards_image",
    url: "#"
  },
];


export const slides = [
  {
    src: India_gate, alt: "India_gate", caption: "India_gate a beutiful place of Delhi",
  },
  {
    src: Taj, alt: "Taj_Mahal", caption: "Taj Mahal is one of the seven wonders of the world",
  },
  {
    src: Varanasi, alt: "Varanasi_ghat", caption: "Famous for being one of the main ghats of Varanasi for God Shiv"
  },
  {
    src: Bihar_img, alt: "Bihar travel place", caption: "Bihar travel palces"
  },
  {
    src: Erope_img, alt: "Erope_travel place", caption: "Erope_travel place"
  },

];

export const airlines = [
  { name: "IndiGo", code: "6E", imgSrc: E6 },
  { name: "AirAsia", code: "AK", imgSrc: AK },
  { name: "Batik Air Malaysia", code: "OD", imgSrc: OD },
  { name: "Thai AirAsia", code: "FD", imgSrc: FD },
  { name: "Air India", code: "AI", imgSrc: AI },
  { name: "Thai Lion Air", code: "SL", imgSrc: SL },
  { name: "SpiceJet", code: "SG", imgSrc: SG },
  { name: "Vietjet Air", code: "VJ", imgSrc: VJ },
  { name: "Nok Air", code: "DD", imgSrc: DD },
  { name: "Thai Vietjet Air", code: "VZ", imgSrc: VZ },
  // { name: "Thai Vietjet Air", code: "VZ", href: "/en/airlines/VZ-Thai-Vietjet-Air" },
];


export const hotels = [
  {
    id: 1,
    name: "Luxury Stay Resort",
    brand: "StayWell",
    image: R,
  },
  {
    id: 2,
    name: "Comfort Suites",
    brand: "RelaxInn",
    image: C,
  },
  {
    id: 3,
    name: "Ocean View Hotel",
    brand: "BlueHaven",
    image: O,
  },
];


