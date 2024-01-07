"use client";

const Button = () => {
  return (
    <div className="my-5">
      <button
        className="bg-green-500 rounded-sm px-2"
        onClick={() => console.log("clicked")}
      >
        CLick
      </button>
    </div>
  );
};

export default Button;
