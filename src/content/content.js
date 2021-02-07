import tagtracelogo from "../assets/projects/tagtrace-splashpage.png";
import html5logo from "../assets/techstack-logos/html5.png";
import css3logo from "../assets/techstack-logos/css3.png";
import javascriptlogo from "../assets/techstack-logos/javascript.png";
import reactlogo from "../assets/techstack-logos/react.png";
import styledcomponentslogo from "../assets/techstack-logos/styled-components.jpg";
import nodejslogo from "../assets/techstack-logos/nodejs.png";
import mongodblogo from "../assets/techstack-logos/mongodb.png";

export const projectsContent = [
  {
    src: tagtracelogo,
    alt: "TagTrace",
    title: "TagTrace",
    description: [
      "Durch mein Interesse an Fotografie bin ich auf die Idee gekommen, 'TagTrace' zu entwickeln: Beim Anschauen von Bildern sind wir üblicherweise an die Struktur der Ordner gebunden, in denen sie abgelegt sind. Mithilfe von 'TagTrace' kann der User seine eigene Bildersammlung zusammenstellen, die Bilder mit Tags versehen und dann unabhängig von starren Ordnerstrukturen durchklicken.",
      "Die Bilder werden auf Cloudinary hochgeladen, die weiteren Daten in einer Collection auf MongoDB abgelegt. Die Benutzeroberfläche ist mit React programmiert.",
      "Die Tags kann der Betrachter anschließend wie Spuren durch die Sammlung verfolgen. Jedes Bild wird so zu einem thematischen Knotenpunkt, Bilder anschauen zu einer Wanderung durch ein rhizomartiges Gewebe von assoziativen Querverweisen.",
    ],
    deploymentLink: "https://tagtrace.herokuapp.com",
    repoLink: "https://github.com/SvLowman/tagtrace",
  },
  {
    src: "src-Dummy-2",
    alt: "TareBears",
    title: "TareBears",
    description: [
      "Ein Tool, das den Kohlenhydratgehalt von Lebensmitteln in ihr Gummibärchen-Äquivalent umrechnet.",
      "Der User kann nach seinem Bedürfnis Werte im lokalen Speicher einspeichern und dann zum Berechnen abrufen. Ideal, wenn von der aufgetischten Portion etwas übrig bleibt und Unterzuckerung droht.",
    ],
    deploymentLink: "https://tarebears-cpdk6ydds.vercel.app",
    repoLink: "https://github.com/SvLowman/tagtrace",
  },
];

export const techStackContent = [
  {
    src: html5logo,
    alt: "HTML 5",
    name: "HTML 5",
  },
  {
    src: css3logo,
    alt: "CSS 3",
    name: "CSS 3",
  },
  {
    src: javascriptlogo,
    alt: "JavaScript",
    name: "JavaScript ES-8",
  },
  {
    src: reactlogo,
    alt: "React",
    name: "React 17",
  },
  {
    src: styledcomponentslogo,
    alt: "Styled-Components",
    name: "Styled-Components",
  },
  {
    src: nodejslogo,
    alt: "Node.js",
    name: "Node.js",
  },
  {
    src: mongodblogo,
    alt: "Mongo DB",
    name: "Mongo DB",
  },
];

export const cvContent = [
  {
    position: "Trainee Webentwicklung",
    company: "neue fische - Digital School and Pool for Talent, Köln",
    period: "09 / 2020 - 01 / 2021",
    tasks: [
      "Intensiv-Coding-Bootcamp in Vollzeit (540 Stunden)",
      "Entwicklung einer eigenen WebApp",
      "Erlernen von HTML, CSS, JavaScript, React",
    ],
  },
  {
    position: "Lehrkraft",
    company: "Sächsische Lehmbaugruppe, Leipzig",
    period: "02 / 2019 - 08 / 2020",
    tasks: [
      "Planung und Durchführung von Unterricht in Grundbildungsfächer für Teilnehmer an einem Schulersatzprojekt",
    ],
  },
  {
    position: "Digital Trainer",
    company: "Capita Customer Services, Leipzig",
    period: "11 / 2017 - 11 / 2018",
    tasks: ["Konzeption und Betextung von digitalen Lernumgebungen"],
  },
  {
    position: "Redaktionsmitarbeiter",
    company: "Infonetwork GmbH, Mediengrupe RTL, Köln",
    period: "07 / 2012 - 07 / 2016",
    tasks: ["Erstellen von Nachrichtenbeiträgen"],
  },
  {
    position: "Promotionsstudium Deutsche Philologie",
    company: "Universität zu Köln, Istitut für deutsche Sprache und Literatur",
    period: "10 / 2010 - 10 / 2016",
    tasks: ["Abschluss: Dr. phil."],
  },
];
