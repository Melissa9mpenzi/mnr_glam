const Profile = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <p className="mt-4">Welcome, [User]! Here’s your account information.</p>
      <ul className="mt-4 space-y-2">
        <li>Email: user@example.com</li>
        <li>Member since: January 2023</li>
      </ul>
    </div>
  );
};

export default Profile;
