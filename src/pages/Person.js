import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { Chip } from 'primereact/chip';
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';

import { getUser } from "../services/api";

const Person = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(username);
      setUser({
        avatar_url: res.avatar_url,
        name: res.name,
        location: res.location,
      });
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div className="card">
        <div className="flex align-items-center flex-column sm:flex-row">
             <Chip label={user.name} image={user.avatar_url} className="mr-2 mb-2" />
        </div>
      </div>
    </div>
    


  );
};

export default Person;