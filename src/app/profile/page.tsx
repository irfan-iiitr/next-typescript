"use client";

export default function page() {

  const func = () => {
    throw new Error("Error in profile page");
  };

  return (
    <div>
      Profile Page
      <button className="bg-slate-400" onClick={func}>
        Click to generate error
      </button>
    </div>
  );
};
