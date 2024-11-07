import React from "react";
import Item from "./FagdataItem/Item";
import "./FagDataList.scss";

const FagDataList = () => {
  const FagData = [
    {
      id: "difference",
      question: "What is the difference between a UI and UX Designer?",
      answer:
        "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
    },
    {
      id: "become",
      question: "How to become a UI designer?",
      answer:
        "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
    },
    {
      id: "uI",
      question: "What is the best UI design tool?",
      answer:
        "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
    },
    {
      id: "designer",
      question: "What is the best place to learn Figma?",
      answer:
        "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
    },
    {
      id: "code",
      question: "Should designers code?",
      answer:
        "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
    },
  ];
  return (
    <React.Fragment>
      <div className="list_Container">
        {FagData.map((item) => {
          return (
            <Item key={item.id} question={item.question} answer={item.answer} />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FagDataList;
