import { useEffect, useRef } from 'react';

const useScrollToBottom = (trigger) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [trigger]);
  return ref;
};
export default useScrollToBottom;
