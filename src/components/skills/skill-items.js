const getSkills = () => {
  return [
    {
      id: 1,
      icon: "code",
      title: "Front End",
      text:
        "For front end development I like to use ReactJS with Styled Components to create beautiful, responsive websites.",
    },
    {
      id: 2,
      icon: "cog",
      title: "Back End",
      text:
        "My favourite technologies for developing APIs and back end code are C#, .NET Core and occasionally NodeJS.",
    },
    {
      id: 3,
      icon: "database",
      title: "Database",
      text:
        "I use relational databases such as MSSQL with Entity Framework, and also document databases like Dynamo & RavenDB.",
    },
    {
      id: 4,
      icon: "wrench",
      title: "Devops",
      text:
        "I am familiar with building & configuring web infrastructure in AWS and setting up continuous integration pipelines in CircleCI.",
    },
    {
      id: 5,
      icon: "check",
      title: "Clean Code",
      text:
        "I am passionate about delivering high quality code using SOLID principles, design patterns, and test driven development.",
    },
    {
      id: 6,
      icon: "users",
      title: "Team Leader",
      text:
        "I have lead development teams of various sizes for over 8 years and I excel in getting the best out of my engineers.",
    },
  ];
};

export default getSkills;
