import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { t } = useTranslation(); // Get translations

  return (
    <div className="">
      <div className="border-b-2 mx-8 my-14"></div>
      
      {/* Services */}
      <div className="h-auto">
        <div className="text-center font-mono">
          <h1 className="text-xl text-black md:text-2xl lg:text-3xl">
            {t("our_services")}
          </h1>
          <p className="text-slate-500 md:text-xl lg:text-lg p-3 text-center lg:text-nowrap py-1">
            {t("service_description")}
          </p>
        </div>

        <div className="my-4">
          <div className="flex justify-center flex-col items-center lg:flex-row md:flex-row">
            <ServiceCard src="https://cdn-icons-png.flaticon.com/512/7134/7134971.png" serviceName={t("network_packet")} />
            <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName={t("view_report")} />
            <ServiceCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMM7EnIlMRjm10Ms04Jxm-jak4BUDQh5Fiw&s" serviceName={t("block_address")} />
            <ServiceCard src="https://icons.veryicon.com/png/o/miscellaneous/ourchem__icon/ip-1.png" serviceName={t("history_of_ip")} />
          </div>

          <div className="flex justify-center flex-col items-center lg:flex-row md:flex-row">
            <Link to="/PacketCapture">
              <ServiceCard src="https://images.squarespace-cdn.com/content/v1/569805af1f4039853c5804f1/1526586326433-ER7GN1K932RALLWJENEC/SentryWire-Packet-Capture-Appliance-230-1.png" serviceName={t("capture_packet")} />
            </Link>
            <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName={t("capture_packet")} />
            <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName={t("capture_packet")} />
            <ServiceCard src="https://cdn-icons-png.flaticon.com/512/804/804085.png" serviceName={t("capture_packet")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
