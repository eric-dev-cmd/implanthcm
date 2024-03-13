// Component for Section
export const Section = ({ title = '', children }) => {
  return (
    <div className="section">
      {title && <h4>{title}</h4>}
      {children}
    </div>
  )
}
