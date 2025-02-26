import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <div className="">
        <div className="border-b-2 mx-8 my-14 ">
        </div>
        {/* Services */}
        <div className="h-auto">
            <div className="text-center font-mono">
                <h1 className="text-xl text-black md:text-2xl lg:text-3xl">Our Services</h1>
                <p className=" text-slate-500 md:text-xl lg:text-lg p-3 text-center lg:text-nowrap py-1">We provide a wide range of services to help you stay safe online.</p>
            </div>
        <div className="my-4 ">
        <div className="flex justify-center flex-col items-center lg:flex lg:flex-row md:flex-row md:flex ">
        <ServiceCard src="https://cdn-icons-png.flaticon.com/512/7134/7134971.png"  serviceName="Network Packet"/>
        <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName="View Report"/>
        <ServiceCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMM7EnIlMRjm10Ms04Jxm-jak4BUDQh5Fiw&s" serviceName="Block Address"/>
        <ServiceCard src="https://icons.veryicon.com/png/o/miscellaneous/ourchem__icon/ip-1.png" serviceName="History of Ip"/> 
        </div>
        <div className="flex justify-center flex-col items-center lg:flex lg:flex-row md:flex-row md:flex">
        <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName="Capture Packet"/>
        <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName="Capture Packet"/>
        <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName="Capture Packet"/>
        <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName="Capture Packet"/>
        </div>
       
    

        </div>

    </div>
    </div>
  )
}

export default Services
