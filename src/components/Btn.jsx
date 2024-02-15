/* eslint-disable react/prop-types */
const Btn = ({
    link,
    text, 
    outline=false, 
    onclick,
    customClasses,
    disabled,
    children,
    type,
    
}) => {

  return (
    <a 
        disabled={disabled}
        onClick={onclick}
        type={type}
        href={`${link}`}
        className={`flex flex-row items-center justify-center cursor-pointer rounded-md px-4 py-2.5   hover:bg-yellow-500 hover:text-gray-800  ${outline ? "border-yellow-500 border-2 bg-transparent text-yellow-500" : "border-none  bg-yellow-500 text-gray-50   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 shadow-2xl shadow-yellow-500/20"} gap-1  transition-all duration-200 ${customClasses}`}
    >
        {
            children ? (
                <>
                <span className={`${!outline && "text-gray-100"} `}>{text}</span>
                <span >{children}</span>
                </>
                
            ) : 
            (text)
        }
    </a>
  )
}

export default Btn
