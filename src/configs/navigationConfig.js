import React from "react";
import { Home } from "react-feather";
import { AiFillQuestionCircle,AiOutlineUser} from "react-icons/ai"
import {FaUserFriends , FaCity ,FaWarehouse,FaEllo} from "react-icons/fa"
import { MdPrivacyTip } from "react-icons/md";
import { GiVerticalBanner,GiPlayerTime,GiKing} from "react-icons/gi";
import { BsInfoCircle,} from "react-icons/bs"


const navigationConfig = [
  {
    id: "home",
    title: "home",
    type: "item",
    icon: <Home size={20} />,
    navLink: "/dashboard",
  },
  {
    id: "user_Management",
    title: "user_management",
    type: "collapse",
    icon: <FaUserFriends size={20} />,
    children: [
      {
        id: "admin",
        title: "admins",
        type: "item",
        icon: <GiKing size={20} />,
        navLink: "/dashboard/admin",
        
      },
   
      {
        id: "users",
        title: "users",
        type: "item",
        icon: <AiOutlineUser size={20} />,
        navLink: "/dashboard/user",
      },

    
    ]
  },
 
  {
    id: "warehouse",
    title: "warehouse",
    icon: <FaWarehouse  size={20} />,
    type: "item",
    navLink: "/dashboard/warehouse",  
  },
  {
    id: "banner",
    title: "banner",
    icon: <GiVerticalBanner size={20} />,
    type: "item",
    navLink: "/dashboard/banner",  
  },
  {
    id: "delivery_method",
    title: "delivery_method",
    icon: <GiPlayerTime size={20} />,
    type: "item",
    navLink: "/dashboard/delivery_method",
  
    
    
  },
  
  {
    id: "coupon",
    title: "coupon",
    icon: <FaEllo size={20} />,
    type: "item",
    navLink: "/dashboard/coupon",
  
    
    
  },
  {
    id: "SupportedCity",
    title: "supported_city",
    icon: <FaCity size={20} />,
    type: "item",
    navLink: "/dashboard/supportedcity",
  
    
    
  },

  // {
  //   id: "order",
  //   title: "order",
  //   icon: <DiDatabase size={20} />,
  //   type: "item",
  //   navLink: "/orders",
  
    
    
  // },

  // {
  //   id: "social_media",
  //   title: "social_media",
  //   type: "item",
  //   icon: <FiMail size={20} />,
  //   navLink: "/social_media",
  // },
  {
    id: "information",
    title: "information",
    type: "collapse",
    icon: <BsInfoCircle size={20} />,
    children: [
      {
        id: "privacy",
        title: "privacy",
        type: "item",
        icon: <MdPrivacyTip size={20} />,
        navLink: "/dashboard/information/privacy",
      },

      {
        id: "about_us",
        title: "about_us",
        type: "item",
        icon: <AiFillQuestionCircle size={20} />,
        navLink: "/dashboard/information/about-us",
      },
    ],
  },
  // {
  //   id: "accounts",
  //   title: "accounts",
  //   type: "collapse",
  //   icon: <AdminPanelSettingsIcon />,
   
  //   children: [
  //     {
  //       id: "view_accounts",
  //       title: "view_accounts",
  //       type: "item",
  //       icon: <PeopleIcon />,
  //       navLink: "/accounts/view",
       
  //     },
  //     {
  //       id: "add_account",
  //       title: "add_account",
  //       type: "item",
  //       icon: <PersonAddIcon />,
  //       navLink: "/accounts/add",
       
  //     },
  //     {
  //       id: "role",
  //       title: "role",
  //       type: "item",
  //       icon: <BiLockAlt />,
  //       navLink: "/accounts/role",
       
  //     },
  //   ],
  // },

];

export default navigationConfig;
