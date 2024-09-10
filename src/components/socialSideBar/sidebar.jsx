import React, { Fragment } from "react";
import Link from "next/link";
import { SocialMediaData } from "@/utils/helpers";

const SocialMedia = () => {
  return (
    <Fragment>
      <div className='lg:fixed lg:bottom-[50%] lg:pl-2 lg:gap-2 flex gap-4 flex-row lg:flex-col z-10'>
        {SocialMediaData.map((social, key) => (
          <Link className='w-fit' target='_blank' href={social.link} key={key}>
            <div
              className="p-2 rounded-full text-xl text-white"
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialMedia;
