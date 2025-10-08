import React, { useEffect, useState, memo } from 'react';
import EmptyState from '../../../components/feedback/EmptyState';
import PropTypes from 'prop-types';

const BannerSlider = ({ banners }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!banners || banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners]);

  if (!banners || banners.length === 0) {
    return <EmptyState message="Chưa có banner nào" />;
  }

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg">
      {banners.map((banner, i) => (
        <a
          key={banner.id || i}
          href={banner.link || '#'}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
          }`}
          aria-label={banner.title || `Banner ${i + 1}`}
        >
          <img
            src={banner.image}
            alt={banner.title || `Banner ${i + 1}`}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => (e.target.src = '/fallback-banner.jpg')}
          />
        </a>
      ))}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-[5]">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition transform ${
              i === current ? 'w-5 bg-white' : 'bg-gray-800/70 hover:bg-gray-800'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

BannerSlider.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default memo(BannerSlider);