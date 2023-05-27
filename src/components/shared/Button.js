
function Button({ children, version, type, isDisabled }) {
  return (
    <button 
    type={type} 
    version={version}
    className={`btn btn-${version}`}
    disabled={isDisabled}
    >{children}</button>
  )
}

export default Button