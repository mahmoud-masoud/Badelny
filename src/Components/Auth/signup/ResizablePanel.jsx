import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

const ResizablePanel = ({ children }) => {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || 'auto' }}
      transition={{ duration: 0.2 }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
};

export default ResizablePanel;
