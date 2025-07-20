import { useRef } from 'react'
import { motion } from 'framer-motion'

const random = (min, max) => Math.random() * (max - min) + min

const FloatingTechIcons = ({ icons }) => {
  // Triple icons for more density
  const allIcons = [...icons, ...icons, ...icons]
  // Add a few larger, more blurred icons for depth
  const depthIcons = icons.slice(0, 3).map(icon => ({
    icon,
    top: random(10, 80),
    left: random(10, 85),
    size: random(90, 140),
    blur: random(12, 22),
    opacity: random(0.10, 0.18),
    duration: random(24, 36),
    direction: Math.random() > 0.5 ? 1 : -1,
    scale: random(0.9, 1.1),
  }))
  // Generate random positions and animation settings for each icon
  const iconSettings = useRef(
    allIcons.map(() => ({
      top: random(5, 85),
      left: random(5, 90),
      size: random(36, 64),
      duration: random(12, 24),
      delay: random(0, 8),
      blur: random(2, 8),
      opacity: random(0.16, 0.28),
      direction: Math.random() > 0.5 ? 1 : -1,
      rotate: Math.random() > 0.5 ? random(-15, 15) : 0,
      rotateDuration: random(18, 32),
      scale: Math.random() > 0.7 ? random(0.85, 1.15) : 1,
      scaleDuration: random(10, 22),
    }))
  )

  return (
    <div className="pointer-events-none fixed inset-0 w-full h-full -z-20">
      {/* Animated gradient background layer */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full animate-gradient bg-gradient-to-br from-primary-900 via-secondary-900 to-dark-900 opacity-80 blur-2xl"
        style={{ zIndex: -30 }}
      />
      {/* Depth icons */}
      {depthIcons.map((d, i) => (
        <motion.img
          key={"depth-"+i}
          src={d.icon}
          alt="tech icon"
          style={{
            position: 'absolute',
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            filter: `blur(${d.blur}px)`,
            opacity: d.opacity,
            zIndex: -25,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ y: 0, scale: d.scale }}
          animate={{ y: d.direction * random(60, 180), scale: d.scale }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          draggable={false}
        />
      ))}
      {/* Main floating icons */}
      {allIcons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon}
          alt="tech icon"
          style={{
            position: 'absolute',
            top: `${iconSettings.current[i].top}%`,
            left: `${iconSettings.current[i].left}%`,
            width: iconSettings.current[i].size,
            height: iconSettings.current[i].size,
            filter: `blur(${iconSettings.current[i].blur}px)`,
            opacity: iconSettings.current[i].opacity,
            zIndex: -20,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ y: 0, rotate: 0, scale: iconSettings.current[i].scale }}
          animate={{
            y: iconSettings.current[i].direction * random(40, 120),
            rotate: iconSettings.current[i].rotate,
            scale: iconSettings.current[i].scale,
          }}
          transition={{
            duration: iconSettings.current[i].duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: iconSettings.current[i].delay,
            ease: 'easeInOut',
            rotate: {
              duration: iconSettings.current[i].rotateDuration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            },
            scale: {
              duration: iconSettings.current[i].scaleDuration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
          draggable={false}
        />
      ))}
    </div>
  )
}

export default FloatingTechIcons 