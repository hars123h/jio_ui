import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import asset43 from '../images/assets4/asset 0.jpeg'
import lenskart_logo from '../images/lenskart_logo.png';
import jio from '../images/asml/jio.png'


const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white w-full '>
            {/* [#2e9afe] */}
            <div className="options text-center text-white bg-red-800 py-2 px-1  items-center text-lg flex ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>

            <div className="hp_company mt-4">
                <img src={jio} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={280} />
            </div>

            <div className='flex flex-col w-[88%] mx-auto justify-between items-center p-2'>
                <div className="flex items-center justify-between px-2 shadow-sm shadow-gray-400 py-3 mt-4 rounded-md w-full mx-auto">
                    <div className='text-sm'>Company Profile</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-4 h-4 stroke-gray-400 rotate-180  cursor-pointer ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Jio</div>
                    <div className='text-xs'>
                        Welcome to Jio Fiber:
                        This website/webpage (“Website”) is provided by Reliance Retail Limited and/or its affiliates and/or partners (“Company”, “we”, “us” and “our”) located at 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai – 400 002, Maharashtra, India.
                        The Website is designed and made available by the Company and/or its affiliates and/or its partners to provide its users the Services (as defined hereinafter).
                        Your (“you”, “your” or “user”) use of the Website is subject to these Terms and Conditions (“Terms”).
                        The Terms contained herein shall be in addition to and not in derogation of the terms and conditions applicable to the Connectivity Services plans availed by you.
                        Your use of the Website and the Services requires that you agree to these Terms and the privacy policy of the Website. By accessing, browsing and by registering or signing up on the Website, or otherwise having access to, receiving, and/or using the Website, you acknowledge to have read, understood and you consent to be governed and bound by these Terms and the privacy policy of the Website. If you do not understand the Terms or the privacy policy of the Website, or do not accept any part of them, then you should not use the Website.
                        The Terms are an electronic record in terms of the Information Technology Act, 2000 (as amended / re-enacted) (“IT Act") and rules thereunder, and is published in accordance with the provisions of Rule 3 (1) of Information Technology (Intermediaries Guidelines and Digital Media Ethics code) Rules, 2021, which mandates for publishing of rules and regulations, privacy policy and terms of use for access or usage of Application. This electronic record is generated by a computer system and does not require any physical or digital signatures.
                        Terms and Conditions:
                        Definitions:
                        “Applications” means all software programs (together with all digital materials, content, other items and services comprised therein), including bug fixes, updates, upgrades, modifications, enhancements, supplements to, revisions, new releases and new versions of such software programs, as made available to the Recipient, through the Platform.
                        “Building Authorities” means all relevant persons, including the relevant building and/or society and/or condominium and all relevant governmental authorities, whose express consent and/or approval and/or permission is required for installation, maintenance and use of the FTTH Assets and Service Equipment in the Premises and for the Recipient availing Services at such Premises.
                        “Connectivity Services” shall mean connectivity services provided by an approved affiliate and/or partner of the Company, which currently is RJIL. The Company may solely at its discretion, change the connectivity service provider and/or allow the use of Service Equipment with any other compatible service provider. The Recipient shall in his/her sole discretion choose the connectivity service plan offered by the connectivity service provider chosen by the Company.
                        “Documentation” shall mean all user manuals, instructions of use and other documentation relating to the use of Service Equipment and FTTH Assets.
                        “FTTH Assets” includes all fiber-to-the-home assets catering to more than one Recipient of the Company’s Services in a building and includes optic fiber cables, optical patch cords, optical couplers, splitters, Gig Passive Optical Network (“GPON”) active devices, Optical Line terminal (“OLT”), Switches, Small form-factor Pluggable (“SFP”), Wi-Fi Access Point and Passive Optical Network (“PON”).
                        “Financing Entity” is the third-party company and / or lending institution used by the Company, in its sole discretion to enter into financial arrangements to facilitate the right to use of the Service Equipment to the Recipient.
                        “Premises” means all of premises owned and/or occupied and/or enjoyed by the Recipient and includes all necessary areas of ingress, egress and access thereto, including but not limited to common areas, ducts and other utilities used to service the same.
                        “Platform” means software and services as may be made available on the Service Equipment and includes storefronts branded, owned, and / or controlled by the Platform Owner, through which the Applications may be downloaded and includes any and all pre-loaded Applications on the STB.
                        “Recipient” shall mean a prospective applicant and/or an applicant duly enrolled, who is entitled to avail Services under the Terms, acting for himself/herself/itself and all persons using the Service Equipment and accessing the Services at the Premises of and/or with knowledge of and/or as permitted by such applicant.
                        “RJIL” shall mean Reliance Jio Infocomm Limited having its registered office at 9th Floor , Maker Chamber IV, Nariman Point , Mumbai-400021, Maharashtra and shall include any of its authorised representatives, agents and/or service providers.
                        “Platform Owner” shall mean the entity owning and/or controlling the Platform, whether acting for itself and/or on behalf of any of its affiliate companies and/or its third-party suppliers and/or its licensors and/or service providers.
                        “Recipient KYC” shall mean proof of identity and address applicable to each Recipient, as may be collected by the Company in order to provide the Services, under the Terms.
                        “Services” means all of the services contemplated to be provided and/or procured by the Company for the Recipient under the Terms, including but not limited to the rights of use, installation and commissioning, maintenance and repair, relocation, return or replacement of the Service Equipment and FTTH Assets.
                        “Service Equipment” means and includes but is not limited to the optic fiber cables, optical network terminal (“ONT”) and STB and/or any other accessories as opted by the Recipient and/or provided by the Company to the Recipient at the Premises, in order to utilise the Connectivity and Platform Services availed.
                        “STB” shall mean the set-top-box as provided by the Company to the Recipient under the Terms and includes all accessories thereto as may be made available by the Company on such additional terms and conditions as it may stipulate from time to time.
                        Enrolment:
                        The Company offers to the Recipient, the right to use the Service Equipment and avail the Services, in the manner and in accordance with the terms and conditions herein contained.
                        The Recipient acknowledges and agrees that:
                        The Service Equipment are owned and/or taken on lease by the Company and has been provided to the Recipient on a right-to-use basis for utilising the Services. Company may obtain a Refundable Deposit against Service Equipment (as defined herein), if applicable
                        For the purposes of availing Connectivity Services, the Recipient has duly applied for and executed the customer application form of RJIL by agreeing to its terms and conditions, including but not limited to its privacy policy applicable thereto, as made available at https://www.jio.com/en-in/fiber/terms-and-conditions (“CAF”);The Company has no responsibility for the actual provision of Connectivity Services and that the Recipient is solely responsible for availing Connectivity Services from RJIL and/or any of its authorized distributors and/or retailers, in accordance with the terms and conditions as may be stipulated by RJIL from time to time;
                        For use and operation of the STB, the Recipient shall be required to adhere to the terms and conditions of use of the STB, as per its end-user license agreement (“EULA”) and relevant Documentation, including but not limited to the privacy policy applicable thereto;
                        For use of the Platform and Applications forming part thereof, the Recipient shall be required to adhere to the terms and conditions including privacy policy applicable to the Platform, as may be stipulated by the Platform Owner, and the terms and conditions, including privacy policy, applicable to each of the Applications availed by the Recipient on the Platform, as may be stipulated by the relevant developer of each such Application.
                        For the purposes of availing the Services, the Recipient shall adhere to the enrolment process as stipulated by the Company and as amended by the Company, from time to time.
                        The Recipient acknowledges and agrees that the Services are subject to availability of and/or feasibility for installation and/or commissioning and/or interconnection of FTTH Assets in the building where the Recipient seeks to avail Services. The Company shall have the sole discretion to determine the feasibility of performing any of the foregoing activities and may refuse enrollment of the Recipient for provision of Services and/or provision of Services, at any point of time, without assigning any reasons thereto.
                        Security Deposit:
                        An interest-free refundable security deposit as solely determined and communicated by the Company (“Refundable Deposit”), if applicable, shall be deposited by the Recipient in the manner stipulated by the Company.
                        The Refundable Deposit is being obtained purely to secure the Company for the purposes of Continuous Use and proper handling of the Service Equipment and its safe return by the Recipient to the Company, as per Terms.
                        The Company shall, without prejudice to its rights and remedies under any law or in equity, have a right of lien over the Refundable Deposit for satisfaction of all the obligations under the Terms by the Recipient.
                        Installation, Commissioning and Maintenance:
                        1. Recipient hereby permits and undertakes to procure all necessary permissions to permit the Company, access to the Premises on need-basis, at reasonable hours and after prior notice (except in cases of emergency), for the purposes of:
                        installing, commissioning, repairing and maintaining the FTTH Assets and/or the Service Equipment; and
                        commence and carry out installation, cabling, ducting, flooring activities, and any other activities required, including laying out cables and all works incidental and/or ancillary thereto, as may be deemed necessary by the Company to install, commission, repair and maintain the FTTH Assets and/or the Service Equipment.
                        The Company shall have the right to share FTTH Assets with its affiliates, third parties and other customers in any manner whatsoever, for which no separate consent shall be required.
                        The installation and commissioning of FTTH Assets and/or the Service Equipment shall be in accordance with the installation and commissioning process as stipulated by the Company from time to time. Without prejudice to the generality of the foregoing, the Company shall be entitled to stipulate, in terms of such process, the procedure for booking appointments for installation and commissioning, the feasibility inspections that the Company may perform as a pre-requisite for installation and commissioning, the approvals from Building Authorities that the Recipient should furnish before commencement of installation and commissioning, the actual process of installation and commissioning, including timelines, materials provided free-of-cost and/or on chargeable basis during such installation and commissioning, the policy for works at the Premises, etc.
                        Use of Service Equipment and FTTH Assets:
                        The Recipient acknowledges and agrees that the rights of use of the Service Equipment and the FTTH Assets granted by the Company is subject to the Recipient ensuring continued and proper usage, handling and purchase of recharge vouchers from the Company of a value and period as may be prescribed by the Company from time to time (“Continuous Use”). The Company shall collect, and appropriate payments received hereunder, towards charges payable.
                        The Company also has the right, from time to time, to prescribe and levy fees for the purposes of installation, commissioning, maintenance, including repairs, relocation and dismantling of Service Equipment and FTTH Assets.
                        The rights of use granted to the Recipient as contemplated under the Terms, is only for the personal use of the Recipient and such use shall be in strict adherence with applicable laws and in accordance with guidelines/ stipulations issued from time to time by the government or the Company for fair and authorized use.
                        The Recipient hereby represents, warrants and covenants that:
                        The Recipient is in legal and physical possession and/or use and/or enjoyment of the Premises;
                        The Premises is not prohibited under any law, regulation, notice, order of any judicial or quasi-judicial authority, or objected by other residents, from being used for the purposes contemplated in the Terms;
                        The Recipient shall provide the Company, sufficient space at the Premises and attendant rights, including right of way, for installation, maintenance and use of the FTTH Assets, Service Equipment and for Services;
                        The Recipient is solely responsible and liable for, at all times, securing all necessary approvals, permissions, licenses and no-objection certificates from Building Authorities for installation, maintenance and use of the FTTH Assets and Service Equipment in the Premises and for availing Services at such Premises;
                        The Recipient has satisfied himself/herself/itself with the features of the Service Equipment and the FTTH Assets and has availed the same on “as-it-is” basis;
                        The Recipient shall use the Service Equipment strictly in accordance with the Documentation;
                        The Recipient shall have no right of access to the FTTH Assets, at any point of time, except through authorised personnel of the Company;
                        The Recipient shall not misuse the Services in any manner or alter, misappropriate or cause any damage to the FTTH Assets and the Service Equipment or tamper with and/or use the FTTH Assets and Service Equipment in any manner for a prohibited purpose, including but not limited to rooting attempts, reverse engineering, unlocking or jail-breaking the Service Equipment, FTTH Assets or original firmware(s) or software(s) thereof;
                        The Recipient shall ensure the safety and security of the FTTH Assets and the Service Equipment at the Premises and provide uninterrupted power supply;
                        The Recipient shall be solely responsible and liable for all costs and expenses to ensure that there is no loss, theft, and damage to the FTTH Assets and the Service Equipment installed at the Premises and shall indemnify the Company in case of such loss, theft and/or damage thereto, due to acts attributable to the Recipient and/or its family members, including reimbursing the losses/damages incurred by the Company;
                        The Recipient has no right to sell, lease, assign, and transfer or otherwise dispose-of the Service Equipment and/or FTTH Assets in any manner whatsoever;
                        The Company at its sole discretion to work out financial arrangements with Financing Entities to facilitate the right to use of the Service Equipment to the Recipient.
                        The Recipient shall not create any encumbrance, lien or charge on the Service Equipment and/or FTTH Assets, in any manner whatsoever;
                        Nothing contained herein shall be construed as creating any arrangement for transfer of title, ownership or interest including rights of any intellectual property in/of the Service Equipment and/or FTTH Assets in favour of the Recipient;
                        The Recipient shall not allow the Service Equipment to be used by third parties for any services; and
                        The Recipient shall not, whether directly or indirectly, indulge in any act or omission that may obstruct the provision of the Services or lead to dislocation of the Service Equipment and/or FTTH Assets or adversely affect the Company’s rights under the Terms.
                        Warranty for Use and Repair:
                        The limited warranty applicable to the Service Equipment and the servicing costs applicable for repair of the Service Equipment shall be such as stipulated by the Company from time to time.
                        Relocation of Service Equipment and/or FTTH Assets:
                        The Recipient acknowledges and agrees that the Service Equipment is available for use at the Premises only and as installed and commissioned by the Company.
                        The Recipient shall have no rights over the FTTH Assets that the Company may install and commission.
                        The Recipient has no right to relocate or move any Customer Equipment, without adhering to the process for relocation of Service Equipment, as stipulated by the Company from time to time. Without prejudice to the generality of the foregoing, the Company shall be entitled to stipulate, in terms of such process, the procedure for relocation, including services that may be performed free-of-cost and on chargeable basis in the course of such relocation. For avoidance of doubt, all installation and commissioning necessary to a relocated Premises shall be undertaken by the Company under these Terms.
                        Return of Service Equipment and Refundable Deposit:
                        In the event the Recipient opts to return the Service Equipment at any time, the Recipient shall adhere to the process as stipulated by the Company and as updated by it from time to time, including but not limited to, the process for booking appointments for return of Service Equipment, the scheduled visit by the Company’s representatives for inspection of the FTTH Assets and the Service Equipment, the actual process of receiving back the Service Equipment (and FTTH Assets, if so determined by the Company), including the actual evaluation of the condition of the Service Equipment and/or FTTH Assets during such inspection and return, the levy of charges for damages, if any, caused to the Service Equipment and/or FTTH Assets, etc.
                        The Company will accept the return of the Service Equipment and thereafter return Refundable Deposit, if applicable, as the full and final closure by Recipient, provided:
                        The Service Equipment is not damaged (normal wear and tear excepted) and is in working condition; and
                        In the assessment of the Company, the Recipient has adhered to the Terms, including the obligations of Continuous Use until such return; and
                        All monies recoverable in accordance with the Terms have been duly recovered by the Company from the Recipient; and
                        The Recipient has issued necessary intimation to RJIL for discontinuation of Connectivity Services, in due compliance with such process as may be stipulated by RJIL from time to time, including settlement of all outstanding payments, if applicable, owed by the Recipient to RJIL for Connectivity Services; and
                        Recipient has complied with all of its obligations under the Terms to the satisfaction of the Company to enable release of the Company’s lien on Refundable Deposit, if applicable; and
                        The Recipient complies with any other terms and conditions as may be stipulated by the Company from time to time.
                        Default and Consequences:
                        In the event of any failure, delay, neglect or refusal to ensuring Continuous Use and/or breach of the Terms by the Recipient, the Company shall (either by itself and/or engaging such agents and/or representatives as it may, at its sole discretion, determine) have the right to (i) discontinue provision of Services; and (ii) repossess the Service Equipment from the Recipient by entering the Premises after providing reasonable notice and at reasonable hours; and (iii) exercise any other recourse or remedy that it may have, whether in law or in equity.
                        Intellectual Property Rights:
                        The Company or all the right holders in/of each of the FTTH Assets, Service Equipment, Platform and Applications, as the case may be, own title, interest and rights, including all related intellectual property rights, therein and the Recipient acknowledges that such ownership shall include all intellectual property rights arising from any suggestions, enhancement requests, recommendations or other information provided by the Recipient, whether in the course of use of the Services or otherwise.
                        Suspension and Termination:
                        Company shall be entitled to immediately suspend and/or terminate this Agreement in the event of:
                        any breach of the Terms by the Recipient and/or where such suspension and/or termination is necessary for (1) the purposes of the Company complying with any applicable law, regulation, direction; and/or (2) to prevent any abuse or wrong-doing; and/or (3) under circumstances, deemed necessary by the Company.
                        Recipient failing to ensure Continuous Use;
                        Termination and/or suspension of the Connectivity Services;
                        Termination and/or suspension of the EULA.
                        Recipient may terminate this Agreement at any time after ensuring full repayment of the Facility (in such manner and on such terms as may be stipulated by RRFL) and by complying with all obligations as specified in Clause 10.
                        Redressal of Complaints:
                        If the Recipient has any grievances with respect to Connectivity Services, the Recipient may contact RJIL at addresses stipulated at and following the process specified in the CAF.
                        If the Recipient has any grievances with respect to Services, the Recipient may contact the Company at jiofibercare@jio.com
                        Consequences of Termination:
                        The Company shall have the right to dismantle and remove the Service Equipment and/or FTTH Assets from the Premises on the termination of the Agreement, without incurring any liability resulting from such dismantling and/or removal.

                    </div>
                    {/* <img src={lenskart_logo} alt="spacex" /> */}
                </div>

                {/* <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Our Manufacturing Ethos</div>
                    <div className='text-xs'>
                        Our quality towers tall because of the solid foundation our manufacturing operations offer.
                        With ISO 9001:2015 certified plants – two in Maharashtra, in Ratnagiri and Urse; and a third in
                        Masar, Gujarat. Every plant has been instrumental in helping us deliver quality and reliable products
                        across the country. With every employee on the floor aligned to the bigger picture, holding themselves
                        personally accountable for the output, and the reputation we enjoy out in the world.

                        Our flagship facility in Ratnagiri, spread over 650 acres, consists of an open sea cryogenic jetty
                        and storage facility to receive raw materials, a PVC resin manufacturing facility in technical
                        collaboration with Uhde GmbH, Germany, with Hoechst technology, and a PVC pipe manufacturing facility.
                        In house resin manufacture ensures that all our pipe manufacturing facilities in all locations
                        receive a dedicated supply of consistent and superior quality resin. But the thing that really
                        drives our machines across all plants, is the ethos we share. Our common passion for quality.
                    </div>
                    
                </div> */}

                {/* <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>A Network of Trust</div>
                    <div className='text-xs'>
                        We have over 900 dealers and 21,000 retail touchpoints across the country. Many of the people in this
                        network have been with us for over 30 years, as members of our parivaar, our family. Over the decades,
                        we have earned their trust, and they, ours, as families do. Their faith in us has, in turn, inspired their
                        customers, many of whom swear by our products. Creating a beautifully interwoven tapestry of partnerships.
                        An interconnected network of collaboration and trust, that is as enduring as the pipes and fittings.
                    </div>
                    
                </div> */}
            </div>


        </div>
    )
}

export default Company