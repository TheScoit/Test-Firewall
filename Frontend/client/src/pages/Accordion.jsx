import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
    {
        title: "What is Firewall?",
        desc: "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predefined security rules."
    },
    {
        title: "How firewall protect your system? ",
        desc: "A firewall is like a security guard for your system, controlling what comes in and goes out of your network. It helps block hackers, malware, and unauthorized access to keep your system safe."
    },
    {
        title: "Do I need a firewall if I have antivirus software?",
        desc: "Yes! Antivirus software detects and removes malware inside your system, while a firewall blocks threats before they reach your PC. Using both provides complete protection."
    },
    {
        title: "What happens if I turn off my firewall?",
        desc: "Turning off your firewall exposes your system to hackers, viruses, and unauthorized access. Only disable it if absolutely necessary and for a short time."
    },
    {
        title: "Can a firewall slow down my internet?",
        desc: "Firewalls may slightly affect speed if they analyze all traffic deeply, but modern firewalls are optimized to minimize impact."
    },
]

const Accordion = () => {
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (index === open) {
            return setOpen(false);
        }

        setOpen(index);
    };

    return (
        <div className="h-auto p-3 my-12">
            <h2 className="text-3xl text-center">FAQ</h2>
            <div className="flex flex-col lg:flex-row my-5 lg:mx-16">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:mx-10">
                    <img className="mx-auto" src="https://cdni.iconscout.com/illustration/premium/thumb/faq-illustration-download-in-svg-png-gif-file-formats--customer-questions-interrogation-point-and-answers-whoooa-bw-1-pack-people-illustrations-3778933.png?f=webp" alt="FAQ Illustration" />
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
