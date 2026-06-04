import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSignupStore } from "../../../store/signup";

const avatarsUrls = [
  "https://res.cloudinary.com/dsc7bydof/image/upload/1_zoylgr.png",
  "https://res.cloudinary.com/dsc7bydof/image/upload/2_udmwyr.png",
  "https://res.cloudinary.com/dsc7bydof/image/upload/3_pwwqbf.png",
  "https://res.cloudinary.com/dsc7bydof/image/upload/4_hpk7fy.png",
  "https://res.cloudinary.com/dsc7bydof/image/upload/5_ugumsx.png",
  "https://res.cloudinary.com/dsc7bydof/image/upload/6_lr6qss.png",
];

const Avatars = () => {
  const { setFormData, formData } = useSignupStore();
  const [avatar, setAvatar] = useState(formData.avatar || null);
  useEffect(() => {
    setFormData({ avatar: avatar });
  }, [avatar, setFormData]);

  return (
    <div className="flex items-center justify-between gap-6 flex-wrap">
      {avatarsUrls.map((url, i) => {
        return (
          <button
            type="button"
            onClick={() => setAvatar(url)}
            key={i}
            className="w-16 h-16 relative "
          >
            <img
              src={url}
              alt=""
              className="relative z-10 max-w-full rounded-full"
            />
            <div
              className="z-0 bg-slate-100 rounded-full 
            animate-pulse h-full w-full absolute inset-0"
            ></div>
            {avatar === url && (
              <motion.div
                layoutId="ring"
                className="top-0 h-full w-full border-4 border-blue-500 absolute z-20
                 rounded-full"
              ></motion.div>
            )}
          </button>
        );
      })}
    </div>
  );
};
export default Avatars;
