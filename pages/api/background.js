const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'BE in Computer Engineering',
                degree: 'CGPA - 7.77',
                detail: "Bachelor's Degree in Computer Engineering from Dilkap Research Institute of Management Studies.",
                year: '2021-2024'
            },
            {
                id: 1,
                title: 'Diploma in Computer Enginnering',
                degree: 'Percentage scored : 86%',
                detail: "Completed Diploma from Maratha Mandir Babasaheb Gawade Insititue of Technology.",
                year: '2019-2021'
            },
            {
                id: 2,
                title: 'SSC',
                degree: 'Percentage scored : 87%',
                detail: "Completed SSC from Kalina Education Society Hans Bhugra High School",
                year: '2016-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Unlock Technologies',
                role: 'Software Enginneer',
                // url: 'https://jmm.ltd/',
                desc: 'As a FrontEnd Team member, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '11/2024 - Present',
                location: 'Malad, Mumbai'
            },
            // {
            //     id: 2,
            //     title: 'HauzaTech',
            //     role: 'Internee',
            //     url: 'no website',
            //     desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
            //     year: '02/2023 - Present',
            //     location: 'Peshawar, Pakistan'
            // },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
