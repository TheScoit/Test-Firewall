import { useState } from "react";
import { useTranslation } from "react-i18next";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (index === open) {
            return setOpen(false);
        }
        setOpen(index);
    };

    const data = [
        {
            title: t("faq_firewall_title"),
            desc: t("faq_firewall_desc")
        },
        {
            title: t("faq_protection_title"),
            desc: t("faq_protection_desc")
        },
        {
            title: t("faq_antivirus_title"),
            desc: t("faq_antivirus_desc")
        },
        {
            title: t("faq_turn_off_title"),
            desc: t("faq_turn_off_desc")
        },
        {
            title: t("faq_slow_internet_title"),
            desc: t("faq_slow_internet_desc")
        }
    ];

    return (
        <div className="h-auto p-3 my-12">
            <h2 className="text-3xl text-center">{t("faq_title")}</h2>
            <div className="flex flex-col lg:flex-row my-5 lg:mx-16">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:mx-10">
                    <img 
                        className="mx-auto" 
                        src="https://cdni.iconscout.com/illustration/premium/thumb/faq-illustration-download-in-svg-png-gif-file-formats--customer-questions-interrogation-point-and-answers-whoooa-bw-1-pack-people-illustrations-3778933.png?f=webp" 
                        alt="FAQ Illustration" 
                    />
                </div>

                {/* Accordion Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-3 px-0 py-11">
                    {data.map((item, index) => (
                        <AccordionItem
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                            open={index === open}
                            toggle={() => toggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accordion;
