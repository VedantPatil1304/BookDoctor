import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile: React.FC = () => {
  const { userData, setToken, token, backendUrl, loadUserProfileData } = useAppContext();

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({ line1: '', line2: '' });
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  React.useEffect(() => {
    if (userData) {
      setName(userData.name);
      setPhone(userData.phone);
      setAddress(userData.address);
      setGender(userData.gender);
      setDob(userData.dob);
    }
  }, [userData]);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('address', JSON.stringify(address));
      formData.append('gender', gender);
      formData.append('dob', dob);

      if (image) {
        formData.append('image', image);
      }

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: { token }
      });

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return userData ? (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      {isEdit ? (
        <label htmlFor="image">
          <div className="inline-block relative cursor-pointer">
            <img
              className="w-36 rounded opacity-75"
              src={image ? URL.createObjectURL(image) : userData.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt="Profile"
            />
            <img
              className="w-10 absolute bottom-12 right-12"
              src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
              alt="Upload"
            />
          </div>
          <input
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            type="file"
            id="image"
            hidden
          />
        </label>
      ) : (
        <img
          className="w-36 rounded"
          src={userData.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt="Profile"
        />
      )}

      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                onChange={(e) => setAddress(prev => ({ ...prev, line1: e.target.value }))}
                value={address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                onChange={(e) => setAddress(prev => ({ ...prev, line2: e.target.value }))}
                value={address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            onClick={updateUserProfileData}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default MyProfile;