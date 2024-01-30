import { Button } from '@mui/material'
import Data from '../models/data';
import TableDisplay from './TableDisplay';
import { useState, useRef } from 'react';

export default function Input(){

  const firstNameRef=useRef<HTMLInputElement>(null);
  const lastNameRef=useRef<HTMLInputElement>(null);
  const emailRef=useRef<HTMLInputElement>(null);
  const countryRef=useRef<HTMLInputElement>(null);
  const addressRef=useRef<HTMLInputElement>(null);
  const cityRef=useRef<HTMLInputElement>(null);
  const stateRef=useRef<HTMLInputElement>(null);
  const pincodeRef=useRef<HTMLInputElement>(null);

  const [details,setDetails]=useState<Data[]>([])

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();

        // if(firstNameRef.current=null ){
        //   firstNameRef.current.value = ''
        // }

        const firstName=firstNameRef.current!.value;
        const lastName=lastNameRef.current!.value;
        const email=emailRef.current!.value;
        const country=countryRef.current!.value;
        const address=addressRef.current!.value;
        const city=cityRef.current!.value;
        const newDetails = new Data(firstName,lastName,email,country,address,city, stateRef.current!.value, pincodeRef.current!.value);
      
        setDetails((prev)=>{
          return prev.concat(newDetails);
        })
         if(firstNameRef.current!=null){
          firstNameRef.current.value = ''
         }
         if(lastNameRef.current!=null){
          lastNameRef.current.value = ''
         }
         if(emailRef.current!=null){
          emailRef.current.value = ''
         }
         if(countryRef.current!=null){
          countryRef.current.value = ''
         }
         if(addressRef.current!=null){
          addressRef.current.value = ''
         }
         if(cityRef.current!=null){
          cityRef.current.value = ''
         }
         if(stateRef.current!=null){
          stateRef.current.value = ''
         }
         if(pincodeRef.current!=null){
          pincodeRef.current.value = ''
         }
    }

    // const data=[
    //     new Data('Arpit', 'Thakur', 'thakuray@rknec.edu', 'India', 'Trillium L-102','Nagpur', 'Maharashtra', "440001"),
    //     new Data('Anushka', 'Shukla', 'thakuray@rknec.edu', 'India', 'Trillium L-102','Nagpur', 'Maharashtra', "440001")
    // ]

    return (
        <>
          <form className='px-60' onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
    
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      ref={firstNameRef}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      ref={lastNameRef}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                  </label>
                  <div className="mt-2">
                    <input 
                      required
                      type="text"
                      ref={countryRef}
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      ref={addressRef}
                      required
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      ref={cityRef}
                      required
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      ref={stateRef}
                      required
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      ref={pincodeRef}
                      required
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className='px96'>
                <Button type='submit' variant="contained">Add Employee</Button>
              </div>
            </div>
          </form>

          <TableDisplay content={details}/>


          <br /><br /> <br /><br />
        </>

      )

}