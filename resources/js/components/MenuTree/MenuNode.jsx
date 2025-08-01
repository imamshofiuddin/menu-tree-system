import React, { useState } from "react";
import TreeConnector from "./TreeConnector";

export default function MenuNode({ node }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="ml-4">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
        {node.children && (
          <span className="text-xs">{open ? "▼" : "▶"}</span>
        )}
        <span>{node.name}</span>
        {node.children && <button className="ml-2 text-blue-600 text-sm"></button>}
      </div>
        {open && node.children && (
        <div className="relative pl-4 border-l border-gray-300 mt-1">
            {/* Tambah konektor vertikal */}
            <TreeConnector height={node.children.length * 24} />

            {node.children.map((child) => (
            <MenuNode key={child.id} node={child} />
            ))}
        </div>
        )}
    </div>
  );
}
