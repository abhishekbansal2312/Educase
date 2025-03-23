import React from "react";

const AccountSettings = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-4  bg-white  ">
        <h1 className="text-xl  font-medium">Account Settings</h1>
      </div>

      <div className="p-4 bg-gray-100 flex items-center ">
        <div className="relative mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-9ciySczAC8DVjQD4MHY-x0Se_O-d23kOg&s"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-9ciySczAC8DVjQD4MHY-x0Se_O-d23kOg&s";
              }}
            />
          </div>
          <div className="absolute -right-1 -bottom-1 bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
            ✎
          </div>
        </div>

        <div>
          <h2 className="font-medium">Marry Doe</h2>
          <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="p-4 bg-gray-100 text-sm text-gray-600">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
