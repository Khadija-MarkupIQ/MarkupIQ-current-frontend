import React from 'react'
import { inter } from '../layout'

const Integrations = () => {
    return (
        <div>
            <div className='px-6'>
                <div>
                    <h1 className={`${inter.className} text-[#000024] mt-4 font-semibold text-[21px]`}>Integrations</h1>
                    <p className={`${inter.className} text-[#4B4B55] font-medium mt-2 text-[14px]`}>Manage your connected tools and integrations</p>
                </div>
                <div className="mt-20 ">
                    <table className="w-[580px] h-40 border-collapse">

                        {/* Table Header */}
                        <thead className={`${inter.className} bg-[#F5F6FA] `}>
                            <tr>
                                <th className="px-4 py-3 text-left text-[14px] font-medium text-[#4B4B55]">
                                    Integration
                                </th>
                                <th className="px-4 py-3 text-left text-[14px] font-medium text-[#4B4B55]">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-[14px] font-medium text-[#4B4B55]">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            <tr className=" border-b border-[#D9D9D9] text-[12px] font-medium text-[#4B4B55]">
                                <td className="px-4 py-3 ">Autodesk</td>
                                <td className="px-4 py-3">Connected</td>
                                <td className="px-7 py-3">Disconnect</td>
                            </tr>

                            <tr className="border-t border-b border-[#D9D9D9] text-[12px] font-medium text-[#4B4B55]">
                                <td className="px-4 py-3 ">Procore</td>
                                <td className="px-4 py-3">Not Connected</td>
                                <td className="px-4 py-3"><button className="inline-flex  px-4 py-1.5 text-[#FFF] bg-[#4D8FF3] w-[89px] h-[30px] border border-hidden rounded-lg">Connect</button></td>
                            </tr>

                            <tr className="border-t border-b border-[#D9D9D9] text-[12px] font-medium text-[#4B4B55]">
                                <td className="px-4 py-3">BIM 360</td>
                                <td className="px-4 py-3">Not Connected</td>
                                <td className="px-4 py-3"><button className="inline-flex  px-4 py-1.5 text-[#FFF] bg-[#4D8FF3] w-[89px] h-[30px] border border-hidden rounded-lg">Connect</button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}

export default Integrations
