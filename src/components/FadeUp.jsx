import { motion } from 'framer-motion';

const FadeUp = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
};

export default FadeUp;