//import images
import project1 from "./img/projectthumbnail1.PNG";
import project2 from "./img/projectthumbnail2.png";
import jsicon from "./img/jsicon.png";
import reacticon from "./img/reacticon.png";
import framermotionicon from "./img/framermotionicon.png";

export const ProjectData = () => {
  return [
    {
      projectImg: project1,
      projectName: "Glass Theme Developer Portfolio Website",
      projectDescription:
        "My Software Developer Website portfolio with a minimulist Glass theme.",
      extendDescription:
        "My Software Developer Website portfolio with a minimulist Glass theme. Can we give more information? maybe we should, I’m not sure what about, but maybe about some project development keywords or some devops unit testing stuff that make it sound more complex then it should. That will make people think the project is complex and therefore I, the developer, am a genius for making such an intricut application all by myself. ",
      url: "/work/project1",
      githubLink: "#",
      liveLink: "#",
      tags: [
        { tagname: "Javascript", tagColour: "#FFB800", tagIcon: jsicon },

        { tagname: "ReactJS", tagColour: "#00C2FF", tagIcon: reacticon },

        {
          tagname: "FramerMotion",
          tagColour: "#DB00FF",
          tagIcon: framermotionicon,
        },
      ],
    },

    {
      projectImg: project2,
      projectName: "Tattoo Studio Booking System",
      projectDescription:
        "Tattoo studio Web App to showcase their book and take bookings.",
      extendDescription:
        "My Software Developer Website portfolio with a minimulist Glass theme. Can we give more information? maybe we should, I’m not sure what about, but maybe about some project development keywords or some devops unit testing stuff that make it sound more complex then it should. That will make people think the project is complex and therefore I, the developer, am a genius for making such an intricut application all by myself. ",
      url: "/work/project2",
      githubLink: "#",
      liveLink: "#",
      tags: [
        { tagname: "Javascript", tagColour: "#FFB800", tagIcon: jsicon },

        { tagname: "ReactJS", tagColour: "#00C2FF", tagIcon: reacticon },

        {
          tagname: "FramerMotion",
          tagColour: "#DB00FF",
          tagIcon: framermotionicon,
        },
      ],
    },
  ];
};
