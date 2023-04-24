import React from "react";
import { StoriesPageWrapper } from "./styles";

const StoriesContent = () => {
  const storiesList = [
    {
      time: "2023",
      title: "Bubbles Spa Websites",
      description: `A website of spa, A spa website release should include key features such as online appointment booking, an online store, a blog section, social media integration, and a gallery section. These features provide customers with a convenient and engaging experience, helping to build excitement and anticipation for their spa visit.`,
      logoSkills: [
        { name: "typescript", imageURL: "/images/tsLogo.png" },
        { name: "redux", imageURL: "/images/reduxLogo.png" },
        { name: "antd", imageURL: "/images/antdLogo.png" },
        { name: "scss", imageURL: "/images/scssLogo.png" },
      ],
    },
    {
      time: "2023",
      title: "Bubbles Spa Websites",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.`,
      logoSkills: [
        { name: "typescript", imageURL: "/images/tsLogo.png" },
        { name: "redux", imageURL: "/images/reduxLogo.png" },
        { name: "antd", imageURL: "/images/antdLogo.png" },
        { name: "scss", imageURL: "/images/scssLogo.png" },
      ],
    },
    {
      time: "2023",
      title: "Bubbles Spa Websites",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.`,
      logoSkills: [
        { name: "typescript", imageURL: "/images/tsLogo.png" },
        { name: "redux", imageURL: "/images/reduxLogo.png" },
        { name: "antd", imageURL: "/images/antdLogo.png" },
        { name: "scss", imageURL: "/images/scssLogo.png" },
      ],
    },
  ];
  return (
    <StoriesPageWrapper>
      <div className="main-layout ">
        {storiesList.map((story, index) => {
          return (
            <div key={index} className="stories-container">
              <div className="year-box">
                <div className="line">
                  <div className="line-tip">x</div>
                </div>
                <div className="label-project">
                  2023 Bubbles Spa Websites
                  <div className="icon-skill">
                    {story.logoSkills?.map((skill) => {
                      return (
                        <div className="js_skill">
                          <img className="logo" src={`${skill.imageURL || "/images/cat2.png"}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="stories-box">
                <div className="image">
                  <img src="/images/cat2.png" />
                </div>
                <div className="content">{story.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </StoriesPageWrapper>
  );
};

export default StoriesContent;
