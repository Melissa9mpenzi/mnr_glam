
import { Button, Modal, TextInput, Avatar, MantineProvider } from '@mantine/core';
import { useState } from 'react';

const Profile = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [user, setUser] = useState({
    username: 'GlamLover123',
    email: 'user@example.com',
    phone: '+1234567890',
    memberSince: 'January 2023',
  });
  const [form, setForm] = useState(user);

  const saveProfile = () => {
    setUser(form);
    setEditModalOpen(false);
  };

  return (
    <div className="bg-accent">
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="p-8 min-h-screen bg-accent">
        <div className="flex items-center space-x-4">
          <Avatar size="lg" radius="xl" className="bg-blue-500">
            {user.username.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Your Profile</h1>
            <p>Welcome, {user.username}!</p>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold">Account Information</h2>
          <ul className="mt-4 space-y-2">
            <li><strong>Username:</strong> {user.username}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Phone:</strong> {user.phone}</li>
            <li><strong>Member Since:</strong> {user.memberSince}</li>
          </ul>
        </div>

        <div className="mt-4">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setEditModalOpen(true)}>
            Edit Profile
          </Button>
        </div>
        
        
        <div className="bg-green-600">

        <Modal 
          opened={editModalOpen} 
          onClose={() => setEditModalOpen(false)} 
          title="Edit Profile" 
          withinPortal={false}
        >
          <div className="space-y-4">
            <TextInput
              label="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <TextInput
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextInput
              label="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="mt-4 text-right">
            <Button className="bg-green-600 hover:bg-green-700" onClick={saveProfile}>
              Save
            </Button>
          </div>
        </Modal>
        </div>
      </div>
    </MantineProvider>
    </div>
  );
};

export default Profile;
