import { useState } from "react";

function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: false,
  });
  const [language, setLanguage] = useState("en");
  const [timeZone, setTimeZone] = useState("UTC");

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleProfileChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="Short bio"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-gray-700">Profile Picture</label>
              <input type="file" className="mt-1" />
            </div>
          </form>
        </div>

        {/* Password & Security */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Password & Security</h2>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePasswordChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="Current Password"
              />
            </div>
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="New Password"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="Confirm New Password"
              />
            </div>
          </form>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <label className="text-gray-700">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <label className="text-gray-700">SMS Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="push"
                checked={notifications.push}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <label className="text-gray-700">Push Notifications</label>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700">Payment Method</label>
              <input
                type="text"
                name="paymentMethod"
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="e.g., Credit Card, PayPal"
              />
            </div>
            <div>
              <label className="block text-gray-700">Account Details</label>
              <input
                type="text"
                name="accountDetails"
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                placeholder="Your Account Number/Details"
              />
            </div>
          </form>
        </div>

        {/* Account Management */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Account Management</h2>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700">Language</label>
              <select
                name="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Time Zone</label>
              <select
                name="timeZone"
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded"
              >
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
              </select>
            </div>
          </form>
          <div className="mt-4">
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Deactivate Account
            </button>
          </div>
        </div>

        {/* Support & Feedback */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Support & Feedback</h2>
          <p className="text-gray-700">
            For support, please visit our{" "}
            <a href="#" className="text-blue-600 underline">
              Help Center
            </a>
            .
          </p>
          <p className="text-gray-700 mt-2">
            Have feedback?{" "}
            <a href="#" className="text-blue-600 underline">
              Submit Feedback
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
