import React from "react";

export default function TreeConnector({ height = 24 }) {
  return (
    <div
      className="absolute left-2 w-px bg-gray-400"
      style={{ height: `${height}px`, top: 0 }}
    ></div>
  );
}
