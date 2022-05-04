import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
export default function Project() {
  let projectElement;
  const projectObj = [
    {
      name: "QBLOG",
      desc: "A blog page that allow admin to post stuff and user to view and make comment",
      thumbnail: "QBLOGThumbnail.png",
    },
    {
      name: "MyAnimeList",
      desc: "A website that allow user to login using Google Account and view current trending anime and save them to watch later",
      thumbnail: "MyAnimeListThumbnail.png",
    },
    {
      name: "IssueTracker",
      desc: "A Java application that works similar to Github that allow users to push issues in project and wait for others to resolve it",
      thumbnail: "IssueTracker.jpg",
    },
    {
      name: "PersonalPortfolio",
      desc: "A personal Portfolio that display my own information, which is the page that you are currently visiting",
      thumbnail: "personalPortfolio.png",
    },
  ];

  const [projectArr, updateProject] = useState([]);
  let navigate = useNavigate();

  function directSingleProject(params){
    navigate(`/${params}`,{state:{"name":params}});
  }
  useEffect(() => {
    updateProject(projectObj);
  }, []);

  projectElement = projectArr.map((item) => {
    return (
      <div className="col-6 singleProjectCard" onClick={() => directSingleProject(item.name)}>
        <img src={item.thumbnail}></img>
        <h1>{item.name}</h1>
        <h6>{item.desc}</h6>
      </div>
    );
  });

  return (
    <div className="container project-container">
      <h2>Projects</h2>
      <figure>
        <blockquote class="blockquote">
          <p>It ain't much but it's honest work.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone who is trying to find internship😢
        </figcaption>
      </figure>
      <div className="row">{projectElement}</div>
    </div>
  );
}
