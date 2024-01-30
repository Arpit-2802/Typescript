import React, { PropsWithChildren } from "react";
import Data from "../models/data";

interface TableDisplayProps {
  content: Data[];
}

const TableDisplay: React.FC<PropsWithChildren<TableDisplayProps>> = ({ content }) => {
  return (
    <>
      <div className="flex flex-row pt-10 items-center justify-center px-96">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Employee Id
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
              <th scope="col" className="px-6 py-3">
                PinCode
              </th>
            </tr>
          </thead>

          <tbody>
            {content.map((e) => (
              <tr key={e.id}>
                <td className="px-6 py-4">{e.id}</td>
                <td className="px-6 py-4">{e.firstName}</td>
                <td className="px-6 py-4">{e.lastName}</td>
                <td className="px-6 py-4">{e.email}</td>
                <td className="px-6 py-4">{e.country}</td>
                <td className="px-6 py-4">{e.address}</td>
                <td className="px-6 py-4">{e.city}</td>
                <td className="px-6 py-4">{e.state}</td>
                <td className="px-6 py-4">{e.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableDisplay;
