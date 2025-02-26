

const ServiceCard = ({src,serviceName}) => {
  return (
    <div>
        <div className="border-2 border-gray-200 rounded-md lg:p-5 lg:m-4 lg:w-60 lg:h-60  m-4 p-10 h-48 w-48 ">
            <div className="lg:h-40 lg:w-40 mx-auto h-20 w-20"> 
            <img src={src} alt="" />
            </div>
            <div className="border-b-2 my-3 "></div>
            <div className="text-center ">
                <h3 className="text-nowrap">{serviceName}</h3>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard
