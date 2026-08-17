import React from "react";

export default function Button({ text, variant = "primary" }) {
  const baseStyle =
    "px-6 py-3 rounded-lg font-medium transition duration-300";

  const styles = {
    primary: "bg-gray-900 text-white hover:bg-gray-700",
    outline:
      "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  };

  return <button className={`${baseStyle} ${styles[variant]}`}>{text}</button>;
}
