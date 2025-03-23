
const Input = ({icon:Icon,...props}) => {
  return (
    <div className="relative mb-3 px-3 "> 
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mx-3"> 
            <Icon className="size-4 lg:size-4"/>
        </div>
        <input {...props}
        className="w-auto pl-10 pr-4 py-2 border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none  placeholder-gray-500 transition-duration-500"
        />
    </div>
  )
}

export default Input
