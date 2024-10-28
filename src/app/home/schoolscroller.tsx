// src/app/home/schoolscroller.tsx

"use client"; // This marks the component as a Client Component

import React from 'react';
import './scrollingbar.css'; // Ensure the CSS file exists in the same directory

export const Schools: React.FC = () => {
  const schools = [
    {
      id: 1,
      logo: 'https://cdnsm5-ss16.sharpschool.com/UserFiles/Servers/Server_318962/Image/BHS%20Homepage%20Photos/New%20Red%20Raiders%202023%20Capture.PNG', // Replace with actual image URL
      name: 'Belmont High School',
      url: 'https://bhs.nadams.k12.in.us/',
    },
    {
      id: 2,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_nFsMyWyjK0x7gzZYVDM2D6KVLLmg1PMYA&s', // Replace with actual image URL
      name: 'Campbell High School',
      url: 'https://www.litchfieldsd.org/campbellhighschool_home.aspx',
    },
    {
      id: 3,
      logo: 'https://yt3.googleusercontent.com/ytc/AIdro_n15rGWHm1HImdwgHFBQLP7B7uqBDWkdhRPGt09aN4Abg=s900-c-k-c0x00ffffff-no-rj', // Replace with actual image URL
      name: 'Coe-Brown Northwood Academy',
      url: 'https://coebrown.org',
    },
    {
      id: 4,
      logo: 'https://cmsv2-assets.apptegy.net/uploads/14608/logo/17781/ConcordHS.png', // Replace with actual image URL
      name: 'Concord High School',
      url: 'https://chs.sau8.org',
    },
    {
      id: 5,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHClC6KuB-Kl1UlvSv4o595ms--xsCKAPHoQ&s', // Replace with actual image URL
      name: 'Goffstown Area High School',
      url: 'https://goffstown.k12.nh.us',
    },
    {
      id: 6,
      logo: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1651058838/sau2k12nhus/wzjrqa5ppvq2csxh0suo/ILMHSLogoVector2021.png', // Replace with actual image URL
      name: 'Inter-Lakes High School',
      url: 'https://interlakes.org',
    },
    {
      id: 7,
      logo: 'https://khs.keeneschoolsnh.org/favicon.ico', // Replace with actual image URL
      name: 'Keene High School',
      url: 'https://khs.keeneschoolsnh.org',
    },
    {
      id: 8,
      logo: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1648141492/gwrsdorg/bfvi012iquopfub6p1sb/Kingswood_RegionalHigh.png', // Replace with actual image URL
      name: 'Kingswood Regional High School',
      url: 'https://kingswood.k12.nh.us',
    },
    {
      id: 9,
      logo: 'https://schoolassets.s3.amazonaws.com/logos/21536/21536.png', // Replace with actual image URL
      name: 'Lin-Wood Public School',
      url: 'https://www.lin-wood.org/',
    },
    {
      id: 10,
      logo: 'https://cmsv2-assets.apptegy.net/uploads/13137/logo/14642/Manchester_School_of_Technology_logo_template_300.png', // Replace with actual image URL
      name: 'Manchester School of Technology',
      url: 'https://mst.mansd.org',
    },
    {
      id: 11,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Manchester_High_School_West_Logo.svg/1200px-Manchester_High_School_West_Logo.svg.png', // Replace with actual image URL
      name: 'Manchester West High School',
      url: 'https://west.mansd.org',
    },
    {
      id: 12,
      logo: 'https://www.sau26.org//cms/lib/NH02217442/Centricity/Domain/250/M.png', // Replace with actual image URL
      name: 'Merrimack High School',
      url: 'https://www.sau26.org/Domain/250',
    },
    {
      id: 13,
      logo: 'https://static.hudl.com/users/prod/5375444_a9bdd5acf5074b45b68de117b28ee734.jpg', // Replace with actual image URL
      name: 'Merrimack Valley High School',
      url: 'https://mvhs.mvsdpride.org',
    },
    {
      id: 14,
      logo: 'https://3.files.edl.io/78bd/22/01/26/161649-a8717721-22fe-4c18-9800-5603b0690909.png', // Replace with actual image URL
      name: 'Milford High School',
      url: 'https://mhs.milfordk12.org',
    },
    {
      id: 15,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Berwick_Crest.jpg', // Replace with actual image URL
      name: 'Berwick Academy',
      url: 'https://www.berwickacademy.org/',
    },
    {
      id: 16,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBkLuHwAun74uP_eKYKxDVqYxO8gjI5E5qg&s', // Replace with actual image URL
      name: 'Pelham High School',
      url: 'https://www.pelhamsd.org/pelhamhighschool_home.aspx',
    },
    {
      id: 17,
      logo: 'https://pbs.twimg.com/profile_images/1329076530765385733/C8kinVs-_400x400.jpg', // Replace with actual image URL
      name: 'Phillips Exeter Academy',
      url: 'https://exeter.edu',
    },
    {
      id: 18,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjxfMbZQy__dmFJVPHjDEi6Yo-Z0kCh1NJQ&s', // Replace with actual image URL
      name: 'Pinkerton Academy',
      url: 'https://pinkertonacademy.org',
    },
    {
      id: 19,
      logo: 'https://sau51.org/pmhs/wp-content/uploads/2011/11/PMHS-Logo-1-300x288.jpg', // Replace with actual image URL
      name: 'Pittsfield Middle - High School',
      url: 'https://sau51.org/pmhs/',
    },
    {
      id: 20,
      logo: 'https://www.cityofportsmouth.com/sites/default/files/deparment-seals/high-school-seal.png', // Replace with actual image URL
      name: 'Portsmouth Senior High School',
      url: 'https://www.cityofportsmouth.com/school/phs',
    },
    {
      id: 21,
      logo: 'https://core-docs.s3.amazonaws.com/prospect_mountain_sau_ar/article/image/large_b31a5338-2a1f-479a-b550-5cf9ac6266e4.jpg', // Replace with actual image URL
      name: 'Prospect Mountain High School',
      url: 'https://pmhschool.com',
    },
    {
      id: 22,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsgZoPxn3I9c-3tDw1xHouPOSIfdFrEd2rw&s', // Replace with actual image URL
      name: 'Salem High School',
      url: 'https://sau57.org/shs',
    },
    {
      id: 23,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbBmtfTQ3HIERVPKoK09yV3Gd5xs6tdBjAA&s', // Replace with actual image URL
      name: 'Seacoast School of Technology',
      url: 'https://sst.sau16.org',
    },
    {
      id: 24,
      logo: 'https://resources.finalsite.net/images/v1614793837/bsuvtorg/bcgbzwsk9ywcrmim3xhz/shsgraph.png', // Replace with actual image URL
      name: 'Spaulding High School',
      url: 'https://www.rochesterschools.com/o/shs',
    },
    {
      id: 25,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjimstR2Q0GEK-ECdwpHggJZbAKJqtpPFyA&s', // Replace with actual image URL
      name: 'St. Thomas Aquinas High School',
      url: 'https://stalux.org',
    },
    {
      id: 26,
      logo: 'https://cmsv2-assets.apptegy.net/uploads/9748/logo/11265/Newport_2__NH_logo_template_300.png', // Replace with actual image URL
      name: 'Sugar River Valley Regional Technical Center, Newport',
      url: 'https://www.sau43.org/o/srv-rtc',
    },
    {
      id: 27,
      logo: 'https://cdnsm5-ss18.sharpschool.com/UserFiles/Servers/Server_27317624/Image/Banners/WHS%20logo.jpg', // Replace with actual image URL
      name: 'Windham High School',
      url: 'https://whs.windhamsd.org',
    },
    // Add more schools if necessary
  ];

  // Duplicate the schools array to create a seamless loop
  const scrollingSchools = [...schools, ...schools];

  return (
    <div className="scrolling-bar-container">
      <h2 className="scrolling-bar-title">Trusted by Schools Across the Seacoast</h2>
      <div className="scrolling-bar">
        <div className="scrolling-content">
          {scrollingSchools.map((school, index) => (
            <div className="school-item" key={`${school.id}-${index}`}>
              <a href={school.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={school.logo}
                  alt={school.name}
                  width={100} // Adjust width as needed
                  height={80} // Adjust height as needed
                  className="school-logo"
                  loading="lazy" // Optional: Enables lazy loading
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder.png'; // Ensure you have this image
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
