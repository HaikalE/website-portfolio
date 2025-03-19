import React, { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/resumeData';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  useEffect(() => {
    // Simple particles effect
    const canvas = document.getElementById('particles');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const particles = [];
      const particlesCount = 30;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 5 + 1;
          this.speedX = Math.random() * 3 - 1.5;
          this.speedY = Math.random() * 3 - 1.5;
          this.color = '#3b82f6';
          this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
          }
          
          if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
          }
        }
        
        draw() {
          ctx.fillStyle = this.color;
          ctx.globalAlpha = this.opacity;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      const init = () => {
        for (let i = 0; i < particlesCount; i++) {
          particles.push(new Particle());
        }
      }
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
        
        requestAnimationFrame(animate);
      }
      
      init();
      animate();
      
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center py-12 md:py-20 overflow-hidden">
      {/* Background Canvas for Particles */}
      <canvas id="particles" className="absolute inset-0 -z-10" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95 dark:from-dark/50 dark:to-dark/95 -z-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content - 3 columns on lg screens */}
          <motion.div className="lg:col-span-3 z-10" variants={itemVariants}>
            {/* Improved mobile profile image position - only show on mobile */}
            <motion.div 
              className="flex justify-center lg:hidden mb-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="relative">
                <div className="w-36 h-36 border-4 border-primary/20 rounded-full overflow-hidden">
                  <img 
                    src="/assets/images/profile.jpg" 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&size=200&background=3b82f6&color=ffffff`;
                    }}
                  />
                </div>
                
                {/* Background decorative elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-3 -left-3 w-16 h-16 bg-secondary/10 rounded-full -z-10"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                ></motion.div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center lg:text-left tracking-tight"
              variants={itemVariants}
            >
              <span className="block">Hi, I'm</span> 
              <motion.span 
                className="text-primary relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.5,
                  type: "spring", 
                  stiffness: 100 
                }}
              >
                Haikal
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                ></motion.span>
              </motion.span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="h-16 text-center lg:text-left">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  1500,
                  'Data Engineer',
                  1500,
                  'Computer Science Graduate',
                  1500,
                ]}
                wrapper="h2"
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
                cursor={true}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left leading-relaxed font-light"
              variants={itemVariants}
            >
              {personalInfo.summary}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button to="/projects" variant="primary" size="lg" fullWidth={window.innerWidth < 480}>
                View My Projects
              </Button>
              <Button to="/contact" variant="outline" size="lg" fullWidth={window.innerWidth < 480}>
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {[
                { icon: FiGithub, href: "https://github.com/HaikalE", label: "GitHub" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/muhammad-haikal-rahman/", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image - 2 columns on lg screens, hidden on mobile */}
          <motion.div 
            className="lg:col-span-2 hidden lg:flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 50,
                delay: 0.5
              }}
            >
              {/* Profile image with colorful border */}
              <div className="w-64 h-64 md:w-80 md:h-80 border-8 border-primary/20 rounded-full overflow-hidden">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&size=400&background=3b82f6&color=ffffff`;
                  }}
                />
              </div>
              
              {/* Background decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10"
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center"
        >
          <motion.span 
            className="text-sm mb-2 text-gray-600 dark:text-gray-400"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;