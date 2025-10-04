import React from "react";

interface ColorSwatchRowProps {
  colors?: string[]; // Optional: list of seeds for images
  size?: number;     // Optional: size of each swatch
}

const ColorSwatchRow: React.FC<ColorSwatchRowProps> = ({
  colors = ["red", "blue", "green", "yellow", "purple"],
  size = 100,
}) => {
  return (
    <div className="flex gap-6 mt-6">
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={`https://picsum.photos/seed/${color}/${size}/${size}`}
            alt={`Color ${color}`}
            className="border border-gray-300 cursor-pointer hover:scale-110 transition-transform rounded"
          />
          <span className="mt-2 text-sm font-medium text-gray-700 capitalize">
            {color}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ColorSwatchRow;
