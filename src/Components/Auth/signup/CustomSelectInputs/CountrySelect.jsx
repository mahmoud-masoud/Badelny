import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { countries } from '../../../../utils/zod';

const CountrySelect = ({ field }) => {
  const [selected, setSelected] = useState(field?.value);
  const [query, setQuery] = useState('');

  useEffect(() => {
    field?.onChange(selected);
  }, [selected, field]);

  const filteredCounties =
    query === ''
      ? countries
      : countries.filter((country) =>
          country
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <Combobox {...field} value={field?.value} onChange={setSelected}>
      <div className='relative mt-1'>
        <div
          className='relative w-full cursor-default overflow-hidden
         bg-white text-left focus:outline-none focus-visible:ring-2
          focus-visible:ring-white/75 focus-visible:ring-offset-2
           focus-visible:ring-offset-teal-300 sm:text-sm border border-slate-500 rounded-md'
        >
          <Combobox.Input
            placeholder='country'
            className='w-full block border-none px-4 py-2 pl-3 pr-10 leading-5
             rounded-md text-gray-900 focus:ring-0'
            displayValue={(country) => country}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronUpDownIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options
            className='z-20 absolute mt-1 max-h-60 w-full 
          overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
           ring-black/5 focus:outline-none sm:text-sm'
          >
            {filteredCounties.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                Nothing was found.
              </div>
            ) : (
              filteredCounties.map((country, i) => (
                <Combobox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    }`
                  }
                  value={country}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {country}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-secondary'
                          }`}
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default CountrySelect;
