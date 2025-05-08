import React, { useState } from 'react';

const SettingsTab = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'english',
    autoUpdate: true,
    locationAccess: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div>
      <h2>Settings Tab</h2>

      <div>
        <label>
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
          />
          Enable Dark Mode
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Enable Notifications
        </label>
      </div>

      <div>
        <label htmlFor="language">Language</label>
        <select
          id="language"
          name="language"
          value={settings.language}
          onChange={handleChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="autoUpdate"
            checked={settings.autoUpdate}
            onChange={handleChange}
          />
          Enable Auto Update
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="locationAccess"
            checked={settings.locationAccess}
            onChange={handleChange}
          />
          Allow Location Access
        </label>
      </div>
    </div>
  );
};

export default SettingsTab;
