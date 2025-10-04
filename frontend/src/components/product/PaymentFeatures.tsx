import { IndianRupee, CreditCard, ShieldCheck, CheckCircle } from "lucide-react";
import { DM_Serif_Text } from 'next/font/google';

const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' });

const PaymentFeatures = () => {
  const features = [
    { icon: <CheckCircle className="w-6 h-6" />, text: "RETURNABLE" },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "SECURE PAYMENT" },
    { icon: <CreditCard className="w-6 h-6" />, text: "QUALITY GUARANTEE" },
    { icon: <IndianRupee className="w-6 h-6" />, text: "COD AVAILABLE" },
  ];

  return (
    <div className="flex justify-between items-center gap-x-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center gap-2 text-center text-black">
          <div className="bg-black text-white rounded-full p-4 flex items-center justify-center">
            {feature.icon}
          </div>
          <span className={`text-xs`}>
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PaymentFeatures;
