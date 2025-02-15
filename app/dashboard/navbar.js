'use client'

import { useState } from 'react'
import {FaBars, FaBell, FaClock, FaCog, FaSearch, FaUser} from 'react-icons/fa'

export default function NavBar({menuItem, OnToggleSettings, fixedNavbar, isWhite, rtl=false}) {
    
    const [notifOpen, setNotifOpen] = useState(false);
    const onFocusNotif = () => {
        setNotifOpen(true);
    }
    const onBlurNotif = ()=> {
        setNotifOpen(false)
    }

    return (


       
        <nav dir={rtl? 'rtl': 'ltr'} className={
            fixedNavbar? 
            ` z-20 flex flex-wrap items-center justify-between w-full ${isWhite? 'absolute px-6 py-2 mx-auto  text-white': 'px-6 py-2 mx-auto top-[1%] backdrop-saturate-[200%] backdrop-blur-[30px]  shadow-blur'} transition-all shadow-none duration-250 ease-soft-in lg:flex-nowrap lg:justify-start` 
            :  
            "flex flex-wrap items-center justify-between px-0 py-2 mb-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start sticky top-[1%] backdrop-saturate-[200%] backdrop-blur-[30px] bg-[hsla(0,0%,100%,0.8)] shadow-blur z-110"}
        >
            <div className="flex items-center justify-between w-full px-6 py-1 mx-auto flex-wrap-inherit">
                <nav>
                    {/* <!-- breadcrumb --> */}
                    <ol className={`flex flex-wrap pt-1  ${!rtl && 'pl-2 pr-4 mr-12 sm:mr-16'} ${isWhite && fixedNavbar ? 'text-white': 'text-gray-600'} rounded-lg`}>
                        <li className={`${rtl && 'pl-2'} leading-normal text-sm`}>
                            <a className="opacity-50" href="#">{rtl? 'لوحات القيادة':'Dashboard'}</a>
                        </li>
                        <li className={`text-sm pl-2 capitalize leading-normal ${rtl? 'before:pl-2':'before:float-left'} before:px-2 before:content-['/']`} aria-current="page">{menuItem}</li>
                    </ol>
                    <h6 className={`mb-2 ml-2 font-bold ${isWhite && fixedNavbar ? 'text-white': 'text-gray-600'} capitalize`}>{menuItem}</h6>
                </nav>

                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                    <div className="flex items-center md:ml-auto md:pr-4">
                        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                            <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <FaSearch />
                            </span>
                            <input type="text" className={`${rtl? 'pr-8.75 pl-0':'pl-8.75 -ml-px pr-3'} py-2 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow`} placeholder={rtl? 'أكتب هنا...':"Type here..."} />
                        </div>
                    </div>
                    <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        {/* <!-- online builder btn  -->
              <!-- <li className="flex items-center">
                <a className="inline-block px-8 py-2 mb-0 mr-4 font-bold text-center text-white uppercase align-middle transition-all border border-solid rounded-lg shadow-none cursor-pointer leading-pro border-white/75 bg-white/10 ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft hover:border-white hover:bg-transparent hover:text-white hover:opacity-75 hover:shadow-none active:bg-white active:text-black active:hover:bg-transparent active:hover:text-white" target="_blank" href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053">Online Builder</a>
              </li> --> */}
                        <li className="flex items-center">
                            <a href="/signin" className={`flex items-center px-0 py-2 font-semibold ${isWhite && fixedNavbar ? 'text-white': 'text-gray-600'}  transition-all ease-soft-in-out text-sm`}>
                                {/* <i className="fa fa-user sm:mr-1" aria-hidden="true"></i> */}
                                <div className='sm:mr-1 ml-1'>
                                    <FaUser />
                                </div>
                                <span className="hidden sm:inline">Sign In</span>
                            </a>
                        </li>
                        <li className="flex items-center pl-4 xl:hidden">
                            <a onClick={OnToggleSettings} href="#" className={`block p-0 ${isWhite && fixedNavbar ? 'text-white': 'text-gray-600'}  transition-all ease-soft-in-out text-sm`} >
                                <div className="w-4.5 overflow-hidden">
                                    <FaBars className={`${isWhite && fixedNavbar ? 'text-white': 'text-gray-600'} font-bold `}/>
                                </div>
                            </a>
                        </li>
                        <li className="flex items-center px-4" onClick={OnToggleSettings}>
                            <div href="#" className={`p-0 ${isWhite && fixedNavbar ? 'text-white': 'text-gray-600'}  transition-all text-sm ease-soft-in-out`}>
                                <div className='cursor-pointer'>
                                    <FaCog />
                                </div>
                                {/* <!-- fixed-plugin-button-nav  --> */}
                            </div>
                        </li>

                        {/* <!-- notifications --> */}

                        <li className={`relative flex items-center pr-2`}>
                            <p className="hidden transform-dropdown-show"></p>
                            <a onFocus={onFocusNotif} onBlur={onBlurNotif} href="#" className={`block p-0 ${isWhite && fixedNavbar ? 'text-white': 'text-gray-600'}  transition-all text-sm ease-nav-brand`} aria-expanded="false">
                                {/* <i className="cursor-pointer fa fa-bell" aria-hidden="true"></i> */}
                                <div className='cursor-pointer'>
                                    <FaBell />
                                </div>
                            </a>

                            <ul
                            className={`text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 ${rtl? 'before:sm:left-3 left-0 before:left-2 before:right-auto': 'before:sm:right-7.5 right-0 before:right-2 before:left-auto lg:right-0 lg:left-auto'} before:text-5.5 absolute top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:mt-2 lg:block lg:cursor-pointer ${notifOpen? 'before:-top-5 transform-dropdown-show': 'opacity-0 pointer-events-none transform-dropdown'}`}>
                                {/* <!-- add show className on dropdown open js --> */}
                                <li className="relative mb-2">
                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 lg:transition-colors" href="#">
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <img src="../assets/img/team-2.jpg" className={`inline-flex items-center justify-center ${rtl? 'ml-4':'mr-4'} text-white text-sm h-9 w-9 max-w-none rounded-xl`} />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 font-normal leading-normal text-sm"><span className="font-semibold">{rtl? 'رسالة جديدة':'New message'}</span> {rtl? ' من لور':'from Laur'}</h6>
                                                <p className="flex items-center mb-0 leading-tight text-xs text-slate-400">
                                                    {/* <i className="mr-1 fa fa-clock" aria-hidden="true"></i> */}
                                                    <FaClock className={`${rtl? 'ml-1': 'mr-1'}`}/>
                                                    {rtl? ' منذ 13 دقيقة':'13 minutes ago'}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="relative mb-2">
                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 duration-300 lg:transition-colors" href="#">
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <img src="../assets/img/small-logos/logo-spotify.svg" className={`inline-flex items-center justify-center ${rtl? 'ml-4':'mr-4'} text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl`} />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 font-normal leading-normal text-sm"><span className="font-semibold">{rtl? 'البوم جدید':'New album'}</span> {rtl? ' بواسطة ترافيس سكوت':'by Travis Scott'}</h6>
                                                <p className="flex items-center mb-0 leading-tight text-xs text-slate-400">
                                                    {/* <i className="mr-1 fa fa-clock" aria-hidden="true"></i> */}
                                                    <FaClock className={`${rtl? 'ml-1': 'mr-1'}`}/>
                                                    {rtl? '1 یوم':'1 day'}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="relative">
                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 duration-300 lg:transition-colors" href="#">
                                        <div className="flex py-1">
                                            <div className={`inline-flex items-center justify-center my-auto ${rtl? 'ml-4':'mr-4'} text-white transition-all duration-200 ease-soft-in-out text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl`}>
                                                <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <title>credit-card</title>
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(453.000000, 454.000000)">
                                                                    <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                    <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 font-normal leading-normal text-sm">{rtl? 'اكتمل الدفع بنجاح':'Payment successfully completed'}</h6>
                                                <p className="flex items-center mb-0 leading-tight text-xs text-slate-400">
                                                    {/* <i className="mr-1 fa fa-clock" aria-hidden="true"></i> */}
                                                    <FaClock className={`${rtl? 'ml-1': 'mr-1'}`}/>
                                                    {rtl? '2 ایام':'2 days'}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}