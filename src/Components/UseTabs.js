import React from "react";
import useTabs from "../Hooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabs;
