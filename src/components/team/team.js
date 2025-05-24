import { TeamCard } from './team-card.js';

export function Team() {

    const teamMembers = [
        { name: 'John Doe', position: 'CEO' },
        { name: 'Celina Thomas', position: 'Team Lead' },
        { name: 'Mike Tysen', position: 'Delivery Head' }
    ];

    const teamList = teamMembers.map(member => {
        return `
            ${TeamCard(member.name, member.position)} 
        `;
    }).join('');

    return (
        `
            ${teamList}
        `
    )
}