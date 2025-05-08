import React, { useState } from 'react';

const NotificationTab = () => {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    weeklySummary: false,
    productUpdates: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h2>Notification Tab</h2>

      <div>
        <label>
          <input
            type="checkbox"
            name="emailAlerts"
            checked={notifications.emailAlerts}
            onChange={handleChange}
          />
          Email Alerts
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="smsAlerts"
            checked={notifications.smsAlerts}
            onChange={handleChange}
          />
          SMS Alerts
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="pushNotifications"
            checked={notifications.pushNotifications}
            onChange={handleChange}
          />
          Push Notifications
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="weeklySummary"
            checked={notifications.weeklySummary}
            onChange={handleChange}
          />
          Weekly Summary Email
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="productUpdates"
            checked={notifications.productUpdates}
            onChange={handleChange}
          />
          Product Updates
        </label>
      </div>
    </div>
  );
};

export default NotificationTab;
