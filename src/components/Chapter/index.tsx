// Component for Chapter
export const Chapter = ({ title, content, children }) => {
  return (
    <div className="chapter">
      <h3>{title}</h3>
      <h4>{content}</h4>
      {children}
    </div>
  )
}
