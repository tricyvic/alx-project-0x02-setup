import { type CardProps } from "../../interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
}