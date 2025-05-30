"use client";
import {
  FaGithub,
  FaEye,
  FaArrowLeft,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function ProjectDetailClient({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const mediaContainerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const controlsTimeout = useRef(null);
  const lastTapRef = useRef(0);

  // Combine all media items
  const mediaItems = [
    ...(project.video ? [{ type: "video", url: project.video }] : []),
    ...(project.image
      ? project.image.map((img) => ({ type: "image", url: img }))
      : []),
  ];

  // Disable default video controls
  useEffect(() => {
    videoRefs.current.forEach((ref) => {
      if (ref) {
        ref.controls = false;
        ref.muted = isMuted;
      }
    });
  }, [isMuted]);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      setShowControls(true);
      resetControlsTimeout();
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    pauseAllVideos();
    resetControlsTimeout();
  };

  // Pause all videos
  const pauseAllVideos = () => {
    videoRefs.current.forEach((ref) => {
      if (ref) {
        ref.pause();
      }
    });
    setIsPlaying(false);
  };

  // Toggle video play/pause
  const toggleVideoPlay = (index) => {
    const ref = videoRefs.current[index];
    if (!ref) return;

    if (ref.paused) {
      videoRefs.current.forEach((r, i) => {
        if (r && i !== index) r.pause();
      });
      ref.play()
        .then(() => {
          setIsPlaying(true);
          resetControlsTimeout();
        })
        .catch(console.error);
    } else {
      ref.pause();
      setIsPlaying(false);
    }
  };

  // Handle video container click
  const handleVideoClick = (index, e) => {
    if (mediaItems[index]?.type !== "video") return;
    
    // Handle double click for fullscreen
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapRef.current;
    if (tapLength < 300 && tapLength > 0) {
      toggleFullscreen(e);
      lastTapRef.current = 0;
    } else {
      lastTapRef.current = currentTime;
      setTimeout(() => {
        if (new Date().getTime() - lastTapRef.current >= 300) {
          toggleVideoPlay(index);
        }
      }, 300);
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = (e) => {
    e?.stopPropagation();
    if (!document.fullscreenElement) {
      mediaContainerRef.current
        ?.requestFullscreen?.()
        .then(() => {
          setIsFullscreen(true);
          setShowControls(true);
          resetControlsTimeout();
        })
        .catch(console.error);
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
          resetControlsTimeout();
        })
        .catch(console.error);
    }
  };

  // Toggle mute
  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    resetControlsTimeout();
  };

  // Handle time updates
  const handleTimeUpdate = (index) => {
    const ref = videoRefs.current[index];
    if (ref && activeIndex === index) {
      setCurrentTime(ref.currentTime);
      setProgress((ref.currentTime / ref.duration) * 100);
    }
  };

  // Handle loaded metadata
  const handleLoadedMetadata = (index) => {
    const ref = videoRefs.current[index];
    if (ref && activeIndex === index) {
      setDuration(ref.duration);
    }
  };

  // Handle video end
  const handleVideoEnd = (index) => {
    if (activeIndex === index) {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    }
  };

  // Handle seek
  const handleSeek = (e) => {
    e.stopPropagation();
    const ref = videoRefs.current[activeIndex];
    if (ref) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      ref.currentTime = pos * ref.duration;
    }
    resetControlsTimeout();
  };

  // Format time display
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes().toString().padStart(2, "0");
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    return `${mm}:${ss}`;
  };

  // Reset controls timeout
  const resetControlsTimeout = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Handle mouse movement
  const handleMediaContainerMouseMove = () => {
    if (mediaItems[activeIndex]?.type === "video") {
      resetControlsTimeout();
    }
  };

  // Clean up
  useEffect(() => {
    return () => {
      clearTimeout(controlsTimeout.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {project.description}
          </p>
          {project.disclaimer && (
            <p className="text-sm text-red-500 dark:text-red-400 mt-2">
              {project.disclaimer}
            </p>
          )}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - media */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main media display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-black ${
                isFullscreen ? "fixed inset-0 z-50 m-0 w-screen h-screen rounded-none" : "h-[70vh] max-h-[700px]"
              }`}
              ref={mediaContainerRef}
              onMouseMove={handleMediaContainerMouseMove}
              onMouseLeave={() => {
                if (mediaItems[activeIndex]?.type === "video") {
                  controlsTimeout.current = setTimeout(() => {
                    setShowControls(false);
                  }, 1000);
                }
              }}
            >
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                  type: "fraction",
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[EffectFade, Navigation, Pagination, Thumbs]}
                className="h-full w-full"
                initialSlide={activeIndex}
                onSlideChange={handleSlideChange}
              >
                {mediaItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className="relative w-full h-full flex items-center justify-center bg-black cursor-pointer"
                      onClick={(e) => handleVideoClick(index, e)}
                    >
                      {item.type === "video" ? (
                        <>
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={item.url}
                            className="w-full h-full object-contain"
                            muted={isMuted}
                            onTimeUpdate={() => handleTimeUpdate(index)}
                            onLoadedMetadata={() => handleLoadedMetadata(index)}
                            onEnded={() => handleVideoEnd(index)}
                            playsInline
                          />
                          
                          {/* Video controls overlay */}
                          <div className={`absolute inset-0 ${
                            showControls ? 'bg-gradient-to-t from-black/50 to-transparent' : ''
                          } transition-opacity duration-300 pointer-events-none`}></div>

                          {/* Video controls - positioned at bottom */}
                          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                            showControls ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                          }`}>
                            <div className="flex flex-col gap-2 p-4">
                              {/* Progress bar */}
                              <div
                                className="w-full h-2 bg-gray-600/50 rounded-full cursor-pointer group"
                                onClick={handleSeek}
                              >
                                <div className="relative h-full">
                                  <div
                                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                                    style={{ width: `${progress}%` }}
                                  />
                                  <div
                                    className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{
                                      left: `${progress}%`,
                                      transform: "translate(-50%, -50%)",
                                    }}
                                  />
                                </div>
                              </div>

                              {/* Controls row */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {/* Play/Pause button */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleVideoPlay(activeIndex);
                                    }}
                                    className="text-white hover:text-blue-400 transition-colors p-2"
                                    aria-label={isPlaying ? "Pause" : "Play"}
                                  >
                                    {isPlaying ? (
                                      <FaPause size={18} />
                                    ) : (
                                      <FaPlay size={18} />
                                    )}
                                  </button>

                                  {/* Mute button */}
                                  <button
                                    onClick={toggleMute}
                                    className="text-white hover:text-blue-400 transition-colors p-2"
                                    aria-label={isMuted ? "Unmute" : "Mute"}
                                  >
                                    {isMuted ? (
                                      <FaVolumeMute size={18} />
                                    ) : (
                                      <FaVolumeUp size={18} />
                                    )}
                                  </button>

                                  {/* Time display */}
                                  <div className="text-white text-sm">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                  </div>
                                </div>

                                {/* Fullscreen button */}
                                <button
                                  onClick={toggleFullscreen}
                                  className="text-white hover:text-blue-400 transition-colors p-2"
                                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                                >
                                  {isFullscreen ? (
                                    <FaCompress size={16} />
                                  ) : (
                                    <FaExpand size={16} />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Play button overlay - only when video is paused */}
                          {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleVideoPlay(activeIndex);
                                }}
                                className="p-6 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all group pointer-events-auto"
                                aria-label="Play video"
                              >
                                <div className="relative">
                                  <FaPlay className="text-4xl group-hover:scale-110 transition-transform" />
                                  <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </button>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={item.url}
                            alt={`${project.title} - ${item.type === "video" ? "Video" : `Screenshot ${index + 1}`}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation elements */}
              <div className="swiper-button-prev !text-white !opacity-70 hover:!opacity-100 after:!text-xl"></div>
              <div className="swiper-button-next !text-white !opacity-70 hover:!opacity-100 after:!text-xl"></div>
              <div className="swiper-pagination !text-white !bottom-2 !left-auto !right-2 !w-auto !bg-black/50 !px-2 !py-1 !rounded-full"></div>
            </motion.div>

            {/* Thumbnails for all media */}
            {mediaItems.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="h-28"
              >
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={12}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="h-full !pb-2"
                  breakpoints={{
                    640: {
                      slidesPerView: 5,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {mediaItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`relative h-full w-full rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                          activeIndex === index ? "ring-2 ring-blue-500 dark:ring-blue-400 scale-105" : "opacity-70 hover:opacity-100 hover:scale-105"
                        }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        {item.type === "video" ? (
                          <div className="relative h-full w-full bg-gray-800 flex items-center justify-center">
                            <video
                              src={item.url}
                              className="absolute inset-0 w-full h-full object-cover opacity-70"
                              muted
                              playsInline
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <FaPlay className="text-white/80 text-xs" />
                            </div>
                            <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                              Video
                            </span>
                          </div>
                        ) : (
                          <>
                            <img
                              src={item.url}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                              {index + 1}
                            </span>
                          </>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}
          </div>

          {/* Right column - details */}
          <div className="space-y-8">
            {/* Project links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Project Links
              </h2>
              <div className="space-y-3">
                {project.links?.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Source Code</span>
                  </a>
                ) : (
                  <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400">
                    Source code not available
                  </div>
                )}
                {project.links?.preview ? (
                  <a
                    href={project.links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <FaEye className="text-xl" />
                    <span>View Live Demo</span>
                  </a>
                ) : (
                  <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400">
                    Live demo not available
                  </div>
                )}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Media info */}
            {mediaItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Media
                </h2>
                <div className="space-y-2">
                  {project.video && (
                    <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="w-24 font-medium">Video:</span>
                      <span>Demo available</span>
                    </p>
                  )}
                  {project.image && project.image.length > 0 && (
                    <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="w-24 font-medium">Screenshots:</span>
                      <span>{project.image.length} available</span>
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}