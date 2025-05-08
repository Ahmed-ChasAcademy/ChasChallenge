import { useState } from "react";
import styles from "../modal.module.css";

type TabbedModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

import ProfileTab from "./tabs/ProfileTab";
import SettingsTab from "./tabs/SettingsTab";
import NotificationsTab from "./tabs/NotificationsTab";

const tabs = [
  { id: "profile", title: "Profile", component: ProfileTab },
  { id: "settings", title: "Settings", component: SettingsTab },
  { id: "notifications", title: "Notifications", component: NotificationsTab },
];

export default function TabbedModal({ isOpen, onClose }: TabbedModalProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  if (!isOpen) return null;

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className={styles.modal}>
      <button className={styles.closeButton} onClick={onClose}>
        ×
      </button>

      <div className={styles.header}>
        {tabs.find((tab) => tab.id === activeTab)?.title.toUpperCase()}
      </div>

      <div className={styles.test}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "active" : ""}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {ActiveComponent ? <ActiveComponent /> : <p>No content</p>}
        </div>
      </div>
    </div>
  );
}
