// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'DigiKhata SDK',
    image: "images/paypoint.png",
    designation: 'React JS | Rest APIs | iFrame',
    view: "Developed a secure wallet onboarding SDK enabling users to create digital wallets through Aadhaar OTP or biometric-based KYC, integrated via an iFrame model.Implemented API-driven workflows and AES encryption to ensure data security and smooth integration.",
    // linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
  {
    id: 1,
    name: 'VR Maritime',
    image: "images/vrm.png",
    designation: 'React.js | Redux | AsyncThunk | ReactRouter',
    view: "Built a web application for inventory, finance, and vessel management with efficient state handling using Redux.Implemented modules for invoicing, currency exchange, and vendor-customer management, streamlining shipping operations. Used React Router for seamless navigation and React Hook Form for optimized form handling and validation.",
    // linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 2,
    name: 'Hitachi TCO tool',
    image: "images/hitachi.png",
    designation: 'MERN | JavaScript | Tailwind | Excel calculation | Bootstrap',
    view: "Built a Total Cost of Ownership analysis tool to compare transformer designs based on cost, energy losses, GHG emissions, IRR, and payback period.Enabled evaluation of multiple transformer units under various decarbonization scenarios, supporting data-driven engineering decisions.",
    // linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: 'Loankhata / Monarch Finance Loans',
    image: "images/loankhata.ico",
    designation: 'Role-Based Permission Access-Control | React.js | Authentication & Authorization',
    view: "Developed end-to-end loan application workflows including OTP authentication, PAN/Aadhaar verification, bank validation, KFS generation, and e-signature. with a focus on performance optimization and reliability.Designed optimized multi-step user journeys to improve conversion rates, compliance, and user experience.",
    // linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
  {
    id: 4,
    name: 'Transaction Stack - Merchant Portal',
    image: "images/txnstack.png",
    designation: 'Anylatical Dashboard | REST APIs | ',
    view: "Developed a merchant analytics dashboard displaying payment success rates, orders, and transaction history.Implemented role-based authentication and real-time transaction status tracking (success, failed, pending).",
    // linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
