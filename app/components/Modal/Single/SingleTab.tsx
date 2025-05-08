"use client";
import React, { useState } from "react";

const SingleTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div>
          <div>
            <div>
              <h2>Tabbed Modal</h2>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div>
              <button onClick={() => setActiveTab("tab1")}>Tab 1</button>
              <button onClick={() => setActiveTab("tab2")}>Tab 2</button>
            </div>

            <div>
              {activeTab === "tab1" && tab1}
              {activeTab === "tab2" && designTab}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const tab1 = (
  <div>
    <h1>Innehåll</h1>

    <div>
      <h3>BILD</h3>
    </div>

    <hr />

    <div>
      <h3>NÄN TYP AV OPTION</h3>
      <ul>
        <li>
          <strong>Något typ av värde</strong>
        </li>
        <li>NÄN TYP AV OPTION</li>
        <li>
          <strong>Något typ av värde</strong>
        </li>
      </ul>
    </div>
  </div>
);

const designTab = <h1>design</h1>;

export default SingleTab;
