import { useState } from "react";
import { DM_Serif_Text } from 'next/font/google';
import { ChevronDown } from "lucide-react";

const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' });

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2">
      <button
        className={`w-full flex justify-between items-center py-4 text-left text-black text-lg ${dmSerif.className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className={`pb-4 text-gray-700 text-sm ${dmSerif.className}`}>
          {content}
        </div>
      )}
    </div>
  );
};

const ProductAccordion = () => {
  const sections = [
    { title: "Description", content: "Here goes the product description..." },
    { title: "Product Details", content: "Here are the product details..." },
    { title: "Care Instructions & Disclaimer", content: "Care and disclaimer info..." },
    { title: "Shipping & Return", content: "Shipping and return policies..." },
    { title: "Assembly", content: "Assembly instructions here..." },
  ];

  return (
    <div className="w-full mt-6 border rounded-md ">
      {sections.map((section, index) => (
        <AccordionItem key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

export default ProductAccordion;
