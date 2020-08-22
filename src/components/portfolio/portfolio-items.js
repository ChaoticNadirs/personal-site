import NochesDeSalsa from "../../images/noches-de-salsa.png";
import FyldePlanServices from "../../images/fylde-plan-services.png";

const getPortfolioItems = () => {
  return [
    {
      id: 1,
      image: NochesDeSalsa,
      title: "Noches De Salsa",
      url: "http://nochesdesalsa.co.uk/",
      urlText: "nochesdesalsa.co.uk",
      technologies: [
        {
          id: 1,
          icon: ["fab", "react"],
        },
        {
          id: 2,
          icon: ["fab", "bootstrap"],
        },
        {
          id: 3,
          icon: ["fab", "html5"],
        },
        {
          id: 4,
          icon: ["fab", "sass"],
        },
      ],
      text:
        "Carol and Alan needed a website for their latin dance school, Noches De Salsa, based in Blackpool. I made them a modern, responsive website using React and Bootstrap. They can advertise their lessons & parties and share photos from their events using Contentful CMS. They were really happy with the results.",
    },
    {
      id: 2,
      image: FyldePlanServices,
      title: "Fylde Plan Services",
      url: "http://fyldeplanservices.co.uk/",
      urlText: "fyledplanservices.co.uk",
      technologies: [
        {
          id: 1,
          icon: ["fab", "js"],
        },
        {
          id: 2,
          icon: ["fab", "bootstrap"],
        },
        {
          id: 3,
          icon: ["fab", "html5"],
        },
        {
          id: 4,
          icon: ["fab", "css3"],
        },
      ],
      text:
        "Paul wanted a website for his architecural design company, Fylde Plan Services. I produced a single page, responsive website where customers can view examples of his work and make requests for quotes & other information. Additional SEO work was carried out to ensure a strong presence on Google.",
    },
  ];
};

export default getPortfolioItems;
