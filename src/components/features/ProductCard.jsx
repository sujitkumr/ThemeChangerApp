import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

const ProductCard = ({ 
  product, 
  onAddToCart,
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
  className = ''
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Preload image immediately when component mounts
  useEffect(() => {
    if (product.image) {
      const img = new Image();
      img.onload = () => {
        setIsImageLoading(false);
        setImageError(false);
      };
      img.onerror = () => {
        setIsImageLoading(false);
        setImageError(true);
      };
      img.src = product.image;
    }
  }, [product.image]);

  const handleImageLoad = useCallback(() => {
    setIsImageLoading(false);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setIsImageLoading(false);
    setImageError(true);
  }, []);

  const handleAddToCart = useCallback(() => {
    onAddToCart?.(product);
  }, [onAddToCart, product]);

  const handleViewDetails = useCallback(() => {
    onViewDetails?.(product);
  }, [onViewDetails, product]);

  const handleToggleFavorite = useCallback(() => {
    onToggleFavorite?.(product);
  }, [onToggleFavorite, product]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const ratingStars = useMemo(() => {
    return Array.from({ length: 5 }, (_, index) => ({
      id: index,
      filled: index < Math.floor(product.rating.rate),
      half: index === Math.floor(product.rating.rate) && product.rating.rate % 1 > 0
    }));
  }, [product.rating.rate]);

  const imageSrc = useMemo(() => {
    if (imageError) {
      return 'https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=Product+Image';
    }
    return product.image || 'https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=Product+Image';
  }, [product.image, imageError]);

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(product.price);
  }, [product.price]);

  return (
    <div 
      className={`product-card ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid={`product-card-${product.id}`}
    >
      <div className="product-image-container">
        <div className="product-image">
          {isImageLoading && (
            <div className="image-skeleton" />
          )}
          <img 
            src={imageSrc}
            alt={product.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`product-image ${isImageLoading ? 'hidden' : ''}`}
            style={{ display: isImageLoading ? 'none' : 'block' }}
          />
        </div>
        
        {/* Quick Actions Overlay */}
        <div className={`quick-actions ${isHovered ? 'visible' : ''}`}>
          <button
            onClick={handleViewDetails}
            className="action-button view-button"
            aria-label={`View details for ${product.title}`}
            title="View Details"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={handleToggleFavorite}
            className={`action-button favorite-button ${isFavorite ? 'favorited' : ''}`}
            aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites`}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <Heart size={16} />
          </button>
        </div>

        {/* Category Badge */}
        <div className="category-badge">
          {product.category}
        </div>
      </div>

      <div className="product-content">
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>
        
        <p className="product-description" title={product.description}>
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description
          }
        </p>

        <div className="product-rating">
          <div className="stars" aria-label={`Rating: ${product.rating.rate} out of 5 stars`}>
            {ratingStars.map((star) => (
              <Star 
                key={star.id} 
                className={`star ${star.filled ? 'filled' : star.half ? 'half' : ''}`} 
                size={16}
              />
            ))}
          </div>
          <span className="rating-text">
            ({product.rating.count} reviews)
          </span>
        </div>

        <div className="product-footer">
          <span className="price" aria-label={`Price: ${formattedPrice}`}>
            {formattedPrice}
          </span>
          <button 
            onClick={handleAddToCart}
            className="add-to-cart-button"
            aria-label={`Add ${product.title} to cart`}
            title="Add to Cart"
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 