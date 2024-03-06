import React from 'react'
import '../css/Skills.css'

function Skills() {
    const frontEndSkills = [
        { name: 'HTML', level: 'Advanced', image: 'https://i.imgur.com/lzrLKql.png' },
        { name: 'CSS', level: 'Advanced', image: 'https://i.imgur.com/z96Cm4y.png' },
        { name: 'JavaScript', level: 'Intermediate', image: 'https://i.imgur.com/pWruRBm.png' },
    ];

    const backEndSkills = [
        { name: 'Node.js', level: 'Intermediate', image: 'https://i.imgur.com/C1Pq2R1.png' },
        { name: 'PHP', level: 'Intermediate', image: 'https://i.imgur.com/SQ32Hap.png' },
        { name: 'MyQSL', level: 'Advanced', image: 'https://i.imgur.com/VPJ0wGD.png' },
    ];

    return (
        <div className="container-skills">
            <h2>Skills</h2>
            <p className='border-bottom'>Front-end skills</p>
            <div className="skills-front">
                {frontEndSkills.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.image} alt={skill.name} />
                        <p className='hide-movile'><span className={skill.level.toLowerCase()}>{skill.level}</span></p>
                    </div>
                ))}
            </div>
            <p className='border-bottom'>Back-end skills</p>
            <div className="skills-back">
                {backEndSkills.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.image} alt={skill.name} />
                        <p className='hide-movile'><span className={skill.level.toLowerCase()}>{skill.level}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;