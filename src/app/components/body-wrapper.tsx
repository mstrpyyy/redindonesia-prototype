

export const BodyWrapper = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={`flex items-center max-sm:px-10 ${className ?? ''}`}>
      <div className={`sm:mx-auto body-container-limit w-full`}>
        {children}
      </div>
    </div>
  )
}
