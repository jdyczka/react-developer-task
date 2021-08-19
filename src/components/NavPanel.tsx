import React from "react";
import { mainSubSites, secondarySubSites, getPath } from '../subSites';
import NavItem from "./NavItem";

interface NavPanelProps {
    shouldOpen: boolean;
    onClose(shouldClose: boolean): void;
}

export default function NavPanel({shouldOpen, onClose}: NavPanelProps) {

    const closePanel = () => onClose(true);

    return (
        <div 
            style={{
                transition: 'all .3s',
                transform: `translate(${!shouldOpen ? 0 : '-100%'})`,
                left: '100%',
            }} 
            className='w-almost-100 fixed top-0 min-h-screen flex flex-col justify-between bg-lightgrey pl-8 lg:static lg:w-auto lg:bg-transparent'>
            <div className='text-right lg:hidden'>
                <button className='p-5' onClick={closePanel}>
                    <svg width="17.181" height="17.182" viewBox="0 0 17.181 17.182">
                        <g id="Group_375" data-name="Group 375" transform="translate(-183.5 -234.773)">
                            <path id="Path_658" data-name="Path 658" d="M5.78,365.779a.957.957,0,0,0,0,1.352L21.052,382.4a.955.955,0,1,0,1.35-1.352L7.129,365.779A.955.955,0,0,0,5.78,365.779Z" transform="translate(178 -130.726)" fillRule="evenodd" />
                            <path id="Path_659" data-name="Path 659" d="M22.4,365.779a.957.957,0,0,1,0,1.352L7.129,382.4a.955.955,0,1,1-1.35-1.352l15.272-15.272A.956.956,0,0,1,22.4,365.779Z" transform="translate(178 -130.726)" fillRule="evenodd" />
                        </g>
                    </svg>

                </button>
            </div>
            <div className='hidden lg:flex font-black text-xl h-100-px items-center'>
                <h1>Hipercholesterolemia <span className='text-yellow text-xs'>4.0</span></h1>
            </div>
            <ul className='flex-grow font-bold text-lg lg:flex-grow-0'>
                {
                    mainSubSites.map((el, i) =>
                        <NavItem
                            key={i}
                            icon={el.icon}
                            title={el.title}
                            path={getPath(el.title)}
                            wrapperStyles='py-3 border-b border-grey flex items-center'
                            iconStyles='w-5 text-center'
                            textStyles='px-7'
                            handleClick={closePanel} />
                    )
                }
            </ul>
            <div className='mb-10 lg:order-1'>
                <div className='py-3 text-darkgrey'>PWZ: <span className='font-bold'>12345678</span></div>
                <div className='py-3 border-t border-grey flex items-center'>
                    <div className='w-5 text-center'>
                        <svg className='fill-current text-yellow lg:text-blue' width="22.969" height="16.844" viewBox="0 0 22.969 16.844">
                            <g id="Group_331" data-name="Group 331" transform="translate(0 0)">
                                <path id="Path_707" data-name="Path 707" d="M103.724,237a.768.768,0,0,1,0-1.084l4.053-4.052-4.053-4.052a.767.767,0,0,1,1.084-1.084l4.594,4.594a.768.768,0,0,1,0,1.084L104.808,237A.768.768,0,0,1,103.724,237Z" transform="translate(-86.656 -223.438)" fillRule="evenodd" />
                                <path id="Path_708" data-name="Path 708" d="M96.5,230.266a.766.766,0,0,1,.766-.766h13.781a.766.766,0,0,1,0,1.531H97.266A.766.766,0,0,1,96.5,230.266Z" transform="translate(-90.375 -221.844)" fillRule="evenodd" />
                                <path id="Path_709" data-name="Path 709" d="M94.8,241.344a2.3,2.3,0,0,1-2.3-2.3V226.8a2.3,2.3,0,0,1,2.3-2.3h10.719a2.3,2.3,0,0,1,2.3,2.3v2.3a.766.766,0,1,1-1.531,0v-2.3a.766.766,0,0,0-.766-.766H94.8a.766.766,0,0,0-.766.766v12.25a.766.766,0,0,0,.766.766h10.719a.766.766,0,0,0,.766-.766v-2.3a.766.766,0,1,1,1.531,0v2.3a2.3,2.3,0,0,1-2.3,2.3Z" transform="translate(-92.5 -224.5)" fillRule="evenodd" />
                            </g>
                        </svg>
                    </div>
                    <div className='inline px-7 font-bold text-lg'>Wyloguj</div>
                </div>
            </div>
            <ul className='text-sm flex flex-wrap gap-x-8 gap-y-3 pr-8 py-5 lg:py-0 lg:text-lg lg:font-bold lg:flex-grow lg:block'>
                {
                    secondarySubSites.map((el, i) =>
                        <NavItem
                            key={i}
                            icon={el.icon}
                            title={el.title}
                            path={getPath(el.title)}
                            wrapperStyles={'flex lg:py-3 lg:border-b lg:border-grey lg:items-center ' + el.customStyles || ''}
                            iconStyles='hidden lg:block lg:w-5 lg:text-center'
                            textStyles='lg:px-7'
                            handleClick={closePanel} />
                    )
                }
            </ul>
            <div className='py-5 border-t border-grey text-tiny lg:order-1'>
                LIP/ROS/LINIA6/AMOB/20/05/001
            </div>
        </div>
    )
}