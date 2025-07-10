import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center md:space-x-12 ${service.reverse ? 'md:flex-row-reverse' : ''}`}>
      {service.reverse ? (
        <>
          <div className="md:w-1/2 text-sm leading-relaxed mt-6 md:mt-0">
            <h3 className="text-blue-900 font-bold mb-2 text-sm">{service.title}</h3>
            <p className="italic mb-3">{service.description}</p>
            <ul className="list-disc list-inside font-bold space-y-1 text-xs">
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <img 
            alt={service.imageAlt} 
            className="w-full md:w-1/2 object-cover rounded" 
            src={service.imageUrl} 
          />
        </>
      ) : (
        <>
          <img 
            alt={service.imageAlt} 
            className="w-full md:w-1/2 object-cover rounded" 
            src={service.imageUrl} 
          />
          <div className="md:w-1/2 text-sm leading-relaxed mt-6 md:mt-0">
            <h3 className="text-blue-900 font-bold mb-2 text-sm">{service.title}</h3>
            <p className="italic mb-3">{service.description}</p>
            <ul className="list-disc list-inside font-bold space-y-1 text-xs">
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;