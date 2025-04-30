import React from 'react';
 // Optional: Add styles for the component

interface TeamMember {
  name: string;
  role: string;
  bio: string;
 image:  string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Priyank Vasavda',
    role: 'Co-Founder & CEO',
    bio: 'Priyank is a visionary leader with a passion for technology...',
    image: '../../../assests/Images/Doctors/doc2.png',
   
  },
  {
    name: 'Jane Smith',
    role: 'CTO & Co-Founder',
    bio: 'Jane is a seasoned software engineer with expertise in AI...',
    image: '/images/jane-smith.jpg',
  },
  // Add more team members as needed
];

const FoundibgTeam: React.FC = () => {
  return (
    <div className="founding-team">
      <h2>Meet Our Founding Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}'s photo`} className="team-member-image" />
            <h3>{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundibgTeam;