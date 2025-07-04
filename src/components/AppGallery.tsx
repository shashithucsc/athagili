import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const AppGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('app');

  const galleryItems = {
    app: [
      {
        id: 1,
        image: '/api/placeholder/300/600',
        title: 'Profile Creation',
        description: 'Easy and intuitive profile setup with photo verification',
        type: 'image'
      },
      {
        id: 2,
        image: '/api/placeholder/300/600',
        title: 'Smart Matching',
        description: 'AI-powered compatibility matching algorithm',
        type: 'image'
      },
      {
        id: 3,
        image: '/api/placeholder/300/600',
        title: 'Chat Interface',
        description: 'Secure messaging with multimedia support',
        type: 'image'
      },
      {
        id: 4,
        image: '/api/placeholder/300/600',
        title: 'Video Calls',
        description: 'Built-in video calling for safe connections',
        type: 'video'
      }
    ],
    couples: [
      {
        id: 5,
        image: '/api/placeholder/400/300',
        title: 'Wedding in Colombo',
        description: 'Priya & Kasun\'s beautiful traditional ceremony',
        type: 'image'
      },
      {
        id: 6,
        image: '/api/placeholder/400/300',
        title: 'Engagement in Kandy',
        description: 'Nishani & Ruwan\'s romantic proposal',
        type: 'image'
      },
      {
        id: 7,
        image: '/api/placeholder/400/300',
        title: 'Family Celebration',
        description: 'Amara & Sachith with their newborn',
        type: 'image'
      },
      {
        id: 8,
        image: '/api/placeholder/400/300',
        title: 'Love Story Video',
        description: 'How they met and fell in love',
        type: 'video'
      }
    ]
  };

  const categories = [
    { id: 'app', name: 'App Features', icon: '📱' },
    { id: 'couples', name: 'Happy Couples', icon: '💕' }
  ];

  const currentItems = galleryItems[currentCategory as keyof typeof galleryItems];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % currentItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + currentItems.length) % currentItems.length);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See <span className="gradient-text">Athagili</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our intuitive app interface and witness the joy of couples who found 
            their perfect match through our platform.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`grid gap-6 ${
            currentCategory === 'app' 
              ? 'grid-cols-2 md:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div 
                  className={`relative bg-gradient-to-br from-gray-200 to-gray-300 ${
                    currentCategory === 'app' ? 'aspect-[9/16]' : 'aspect-[4/3]'
                  }`}
                >
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <PlayIcon className="w-8 h-8 text-gray-700 ml-1" />
                        </div>
                      </div>
                    )}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>

                {/* Image */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div 
                    className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${
                      currentCategory === 'app' ? 'aspect-[9/16] max-h-[80vh]' : 'aspect-[4/3] max-h-[70vh]'
                    }`}
                  >
                    {currentItems[selectedImage]?.type === 'video' && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                        <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center">
                          <PlayIcon className="w-12 h-12 text-gray-700 ml-1" />
                        </div>
                      </div>
                    )}
                    <span className="text-xl font-medium text-gray-600">
                      {currentItems[selectedImage]?.title}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentItems[selectedImage]?.title}
                    </h3>
                    <p className="text-gray-600">
                      {currentItems[selectedImage]?.description}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                {currentItems.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Experience the Magic Yourself
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Download Athagili today and start your journey towards finding meaningful 
              connections with people who truly understand you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Download App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Try Web Version
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppGallery;
