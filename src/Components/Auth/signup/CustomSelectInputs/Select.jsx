import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Select = ({ field, values }) => {
  const [selected, setSelected] = useState(field?.value);

  useEffect(() => {
    field?.onChange(selected);
  }, [selected, field]);

  return (
    <Listbox {...field} value={field?.value} onChange={setSelected}>
      <div className='relative'>
        <Listbox.Button
          className='relative w-full cursor-default rounded
           bg-white px-4 py-2 pr-10 text-start border border-slate-400 focus:outline-none
            focus-visible:border-indigo-500 focus-visible:ring-2
             focus-visible:ring-white/75 focus-visible:ring-offset-2
              focus-visible:ring-offset-blue-300'
        >
          {selected}

          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronUpDownIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>

        <AnimatePresence mode='wait'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            <Listbox.Options
              className={`absolute z-20 mt-1 max-h-60 w-full
           overflow-auto rounded-md bg-white py-1 text-base
            shadow-lg ring-1 ring-black/5 focus:outline-none
             sm:text-sm`}
            >
              {values.map((item, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-200 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className='absolute inset-y-0 left-0 flex items-center
                         pl-3 text-blue-600'
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </motion.div>
        </AnimatePresence>
      </div>
    </Listbox>
  );
};

export default Select;
