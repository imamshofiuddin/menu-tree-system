export default function TreeNode({ node }) {
  return (
    <div className="ml-4 border-l pl-2">
      <div>{node.name}</div>
      {node.children && node.children.map(child => (
        <TreeNode key={child.id} node={child} />
      ))}
    </div>
  )
}
