import React, { useMemo } from 'react';
import ProductCard from '../components/features/ProductCard';
import Loading from '../components/common/Loading';
import { useProducts } from '../hooks/useProducts';
import { ShoppingBag, Zap, Shield, Star } from 'lucide-react';

const HomePage = () => {
  const { products, loading, error } = useProducts();

  const features = useMemo(() => [
    {
      icon: <ShoppingBag className="feature-icon" />,
      title: 'Easy Shopping',
      description: 'Browse and shop with ease using our intuitive interface',
    },
    {
      icon: <Zap className="feature-icon" />,
      title: 'Fast Delivery',
      description: 'Get your products delivered quickly and safely',
    },
    {
      icon: <Shield className="feature-icon" />,
      title: 'Secure Payment',
      description: 'Your transactions are protected with advanced security',
    },
  ], []);

  const handleGetStarted = () => {
    // Scroll to products section or handle navigation
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    // Implement cart functionality
  };

  const handleViewDetails = (product) => {
    console.log('Viewing details:', product);
    // Implement product details navigation
  };

  const handleToggleFavorite = (product) => {
    console.log('Toggling favorite:', product);
    // Implement favorite functionality
  };

  if (error) {
    return (
      <div className="page-container">
        <div className="error-message">
          <div className="error-icon">
            <Star className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="error-title">Oops! Something went wrong</h2>
          <p className="error-description">
            Error loading products: {error}
          </p>
          <button 
            onClick={handleRetry}
            className="error-button"
            aria-label="Retry loading products"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="text-gradient">ThemeApp</span>
          </h1>
          <p className="hero-description">
            Experience our dynamic theme switching with three unique layouts. 
            Browse products and see how each theme transforms the entire experience.
          </p>
          <button 
            onClick={handleGetStarted}
            className="hero-button"
            aria-label="Get started with our app"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">
            Discover the features that make our platform stand out
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              data-testid={`feature-${index}`}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-description">
            Explore our curated collection of premium products
          </p>
        </div>
        
        {loading ? (
          <Loading />
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
                onToggleFavorite={handleToggleFavorite}
                data-testid={`product-${product.id}`}
              />
            ))}
          </div>
        )}
        
        {!loading && products.length === 0 && (
          <div className="empty-state">
            <p className="empty-message">No products available at the moment.</p>
            <button 
              onClick={handleRetry}
              className="empty-button"
            >
              Refresh
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage; 