import Zoran from "../../images/zoran.jpg";
import Richard from "../../images/richard.jpg";
import John from "../../images/john.jpg";

const getTestimonials = () => {
  return [
    {
      id: 1,
      image: Zoran,
      title: "Project Manager",
      name: "Zoran Vujkov",
      text:
        "Christian always produced high quality code and helped a lot in rolling out Agile. His professional attitude, domain knowledge as well as technical fluency are nothing short of impressive. He is a very skilled professional and he would be a great asset to any company.",
    },
    {
      id: 2,
      image: Richard,
      title: "Head of Software",
      name: "Richard Altwasser",
      text:
        "Christian lead the development [of ActivOffice] from inception to on-schedule release, against a background of changing requirements and challenging architecture. He is technically innovative and a popular leader who works well with customers and senior management.",
    },
    {
      id: 3,
      image: John,
      title: "Head of Software Testing",
      name: "John Sumner",
      text:
        "Christian has strived for quality in his products. He is highly respected by his co-workers and many members of the department including all of my testing team. Anyone who employs Christian is certainly going to have an excellent addition to their business.",
    },
  ];
};

export default getTestimonials;
