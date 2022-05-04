import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export default function SingleProject() {
  const location = useLocation();
  const [currentProject, updateProject] = useState({});
  const [currentProjectStack, updateStack] = useState([]);
  const projectArr = [
    {
      name: "QBLOG",
      desc: "A blog page that allow admin to post stuff and user to view and make comment. Only admin can post his/her post. Meanwhile user can view all the post and have a discussion under each post",
      thumbnail: "QBLOGThumbnail.png",
      website: "Not Published",
      imgSec: "QBLOGDetails.png",
      stack: ["MEAN Stack"],
      year: 2021,
    },
    {
      name: "MyAnimeList",
      desc: "A website that allow user to login using Google Account and view current trending anime and save them to watch later",
      thumbnail: "MyAnimeListThumbnail.png",
      website: "https://myanimelistzq.netlify.app/",
      imgSec: "MyAnimeListDetails.png",
      stack: ["ReactJS", "Firebase"],
      year: 2022,
    },
    {
      name: "IssueTracker",
      desc: "A Java application that works similar to Github that allow users to push issues in project and wait for others to resolve it",
      thumbnail: "IssueTracker.jpg",
      website: "Not Published",
      imgSec: "none",
      stack: ["Java", "Java Swing GUI", "MySQL"],
      year: 2021,
    },
    {
      name: "PersonalPortfolio",
      desc: "A personal Portfolio that display my own information, which is the page that you are currently visiting",
      thumbnail: "personalPortfolio.png",
      website: "https://portfoliozqlim.netlify.app",
      imgSec: "none",
      stack: ["ReactJS", "ThreeJS"],
      year: 2022,
    },
  ];
  const [stackString, updateString] = useState("");

  useEffect(() => {
    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].name == location.state.name) {
        updateProject(projectArr[i]);
        updateStack(projectArr[i].stack);
      }
    }
  }, []);

  useEffect(() => {
    let tempStackString = "";
    for (let i = 0; i < currentProjectStack.length; i++) {
      if (i == currentProjectStack.length - 1) {
        tempStackString = tempStackString + currentProjectStack[i];
      } else {
        tempStackString = tempStackString + currentProjectStack[i] + ", ";
      }
    }
    updateString(tempStackString);
  }, [currentProject]);

  return (
    <div className="container singleProjectContainer">
      <a href="/project" className="backButton">
        Projects {">"}{" "}
      </a>{" "}
      {currentProject.name}
      <div className="projectTitleDesc">
        <h1>{currentProject.name}</h1>
        <p>{currentProject.desc}</p>
      </div>
      <div className="projectDetails">
        {currentProject.website != "Not Published" ? (
          <p>
            <span>LINK: </span>
            <a href={currentProject.website}>{currentProject.website}</a>
          </p>
        ) : (
          <p></p>
        )}

        <p>
          <span>STACK: </span>
          {stackString}
        </p>
        <p><span>YEAR: </span>{currentProject.year}</p>
        <div className="imgDiv">
        <img src={currentProject.thumbnail}></img>
        {currentProject.imgSec!="none"?<img src={currentProject.imgSec}></img>:<span></span>}
        </div>
        
      </div>
    </div>
  );
}
