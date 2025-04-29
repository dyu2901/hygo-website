import React from 'react';

type Props = {
  user: {
    name: string
    img: string
    job: string
    desc: string
  }
  index: number
}

const Review = ({ user, index }: Props) => {
  return (
    <div className={`${index % 2 !== 0 && "md:mb-5"} p-4 max-w-[300px] bg-[#d5f5ff] rounded-xl shadow-sm`}>
      <div className="flex gap-2 items-center">
        <img className="w-10 h-10 rounded-full object-cover" src={user.img} alt={user.name} />
        <div className="-space-y-0.5">
          <h6 className="font-medium text-sm">{user.name}</h6>
          <p className="text-[15px] opacity-75">{user.job}</p>
        </div>
      </div>
      <p className="opacity-85 text-xs mt-0.5">{user.desc}</p>
    </div>
  )
}

export default Review
