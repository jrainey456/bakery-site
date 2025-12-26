import { StaticImageData } from 'next/image';

interface RecipeCardProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
  borderColor: string;
  hoverBorderColor: string;
  rotation: string;
}

export default function RecipeCard({
  image,
  imageAlt,
  title,
  description,
  price,
  borderColor,
  hoverBorderColor,
  rotation
}: RecipeCardProps) {
  // Extract color classes from borderColor for text styling
  const getColorClasses = (borderColor: string) => {
    const colorClasses = {
      'border-amber-200': {
        title: 'text-amber-900',
        text: 'text-amber-800',
        badge: 'bg-amber-200 text-amber-900'
      },
      'border-teal-300': {
        title: 'text-teal-900',
        text: 'text-teal-800',
        badge: 'bg-teal-200 text-teal-900'
      },
      'border-purple-300': {
        title: 'text-purple-900',
        text: 'text-purple-800',
        badge: 'bg-purple-200 text-purple-900'
      },
      'border-pink-300': {
        title: 'text-pink-900',
        text: 'text-pink-800',
        badge: 'bg-pink-200 text-pink-900'
      },
      'border-orange-300': {
        title: 'text-orange-900',
        text: 'text-orange-800',
        badge: 'bg-orange-200 text-orange-900'
      },
      'border-emerald-300': {
        title: 'text-emerald-900',
        text: 'text-emerald-800',
        badge: 'bg-emerald-200 text-emerald-900'
      }
    };
    
    return colorClasses[borderColor as keyof typeof colorClasses] || colorClasses['border-amber-200'];
  };
  
  const colors = getColorClasses(borderColor);

  return (
    <div className={`bg-white rounded-2xl shadow-2xl border ${borderColor} flex flex-col hover:shadow-3xl hover:scale-105 transition-all duration-300 ${hoverBorderColor}`}>
      <div className={`polaroid transform ${rotation}`}>
          <img 
            src={image.src}
            alt={imageAlt}
          />
        </div>
      <div className="p-8 pt-2 flex flex-col justify-between flex-grow">
        <div>
          <h3 className={`text-3xl font-bold ${colors.title} mb-4 text-center`} style={{fontFamily: 'var(--font-dancing-script)'}}>
            {title}
          </h3>
          <p className={`${colors.text} text-base leading-relaxed text-center mb-4`}>
            {description}
          </p>
        </div>
        <div className="text-center mt-auto">
          <span className={`inline-block ${colors.badge} font-bold text-xl px-4 py-2 rounded-full`}>
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}