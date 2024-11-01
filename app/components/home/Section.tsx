"use client";
import ToggleText from "@/app/utils/ToggleText";
import Image from "next/image";
import Link from "next/link";

const Section = () => {
  const data = [
    {
      imageUrl: "/home/animation-img/portrait-man-cartoon-style.jpg",
      title: "2d animation",
      url:"/service/2danimation"
    },
    {
      imageUrl: "/home/animation-img/portrait-man-cartoon-style.jpg",
      title: "3d animation",
      url:"/service/3danimation"
    },
    {
      imageUrl: "/home/animation-img/3d product.jpeg",
      title: "3d product video",
      url:"/service/3danimation"
    },
    {
      imageUrl: "/home/animation-img/motion graphic.jpg",
      title: "explainer video",
      url:"/service/3danimation"
    },
    {
      imageUrl: "/home/animation-img/portrait-man-cartoon-style.jpg",
      title: "motion graphic videos",
      url:"/service/3danimation"
    },
    {
      imageUrl: "/home/animation-img/portrait-man-cartoon-style.jpg",
      title: "whiteboard animation",
      url:"/service/3danimation"
    },
    {
      imageUrl: "/home/animation-img/portrait-man-cartoon-style.jpg",
      title: "business promotional videos",
      url:"/service/3danimation"
    },
    {
      imageUrl: "/home/animation-img/E-Learning.jpg",
      title: "e-learning videos",
      url:"/service/3danimation"
    },
    {
      imageUrl: "/home/animation-img/design.jpg",
      title: "design services",
      url:"/service/3danimation"
    },
  ];
  return (
    <div className="wrapper home-section">
      <div className="container">
        <h2>Animation Video Services</h2>
        <h3>
          <ToggleText
            text="In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available."
            maxLength={152}
          />
        </h3>
        <div className="sections">
          {data.map((x, i) => (
            <div className="sec" key={i}>
              <Image
                className="border-radius-15"
                src={x.imageUrl}
                alt={x.title}
                width={355}
                height={225}
              />
              <div className="title"><Link href={x.url}>{x.title}</Link></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
