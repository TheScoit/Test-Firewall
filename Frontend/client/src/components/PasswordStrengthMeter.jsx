import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
    const criteria = [
        { label: "At least 6 characters", met: password.length >= 6 },
        { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
        { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
        { label: "Contains a number", met: /[0-9]/.test(password) },
        { label: "Contains special character", met: /[!@#$%^&*]/.test(password) }
    ];

    return (
        <div className="mt-2 space-y-1 ">
            {criteria.map((item) => (
                <div key={item.label} className="flex items-center text-xs">
                    {item.met ? (
                        <Check className="size-4 mr-2 text-green-400" />
                    ) : (
                        <X className="size-4 mr-2 text-gray-500" />
                    )}
                    <span className={item.met ? "text-green-500" : "text-gray-500"}>
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

const PasswordStrengthMeter = ({ password }) => {
    const getStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 6) strength++;
        if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
        if (pass.match(/[0-9]/)) strength++;
        if (pass.match(/[!@#$%^&*]/)) strength++;
        return strength;
    };

    const strength = getStrength(password);

    const getColor = (strength) => {
        if (strength === 0) return "bg-red-500";
        if (strength === 1) return "bg-red-500";
        if (strength === 2) return "bg-yellow-500";
        if (strength === 3) return "bg-blue-500";
        return "bg-green-500";
    };

    const getStrengthText = (strength) => {
        if (strength === 0) return "Very Weak";
        if (strength === 1) return "Weak";
        if (strength === 2) return "Fair";
        if (strength === 3) return "Good";
        return "Strong";
    };

    return (
        <div className="mt-2 ">
            <div className="flex justify-between items-center mb-1 px-5 lg:px-0">
                <span className="text-xs text-gray-400">Password Strength:</span>
                <span className="text-xs font-medium ">{getStrengthText(strength)}</span>
            </div>

            {/* Strength Meter */}
            <div className="flex space-x-1 mb-2 size-11/12 lg:size-full ">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={` h-1 w-20 rounded-full transition-colors duration-300 
                        ${index < strength ? getColor(strength) : "bg-gray-900"}
                        `}
                    />
                ))}
            </div>

            {/* Password Criteria (Placed outside for better alignment) */}
            <PasswordCriteria password={password} />
        </div>
    );
};

export default PasswordStrengthMeter;
