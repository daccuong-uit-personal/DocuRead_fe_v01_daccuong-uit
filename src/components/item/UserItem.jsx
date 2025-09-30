import React from "react";
import Avatar from "../ui/Avatar";

export default function UserItem({ avatar, name, role }) {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md">
      <Avatar src={avatar} alt={name} size="sm" />
      <div>
        <p className="text-sm font-medium">{name}</p>
        {role && <p className="text-xs text-gray-500">{role}</p>}
      </div>
    </div>
  );
}
