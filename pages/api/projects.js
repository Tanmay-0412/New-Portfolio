// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pCards = [
  {
    id: 0,
    name: 'DigiKhata SDK',
    video: "https://drive.google.com/file/d/1N04WnoCbmqTpMpRizDexfzHFReM5qx7n/preview",
    images: [],
    description: "Developed a secure wallet onboarding SDK enabling users to create digital wallets through Aadhaar OTP or biometric-based KYC, integrated via an iFrame model.Implemented API-driven workflows and AES encryption to ensure data security and smooth integration.",
    liveurl:"https://vrmaccountsbeta.unlockwww.com/"
  },
  {
    id: 1,
    name: 'VR Maritime',
    video: "https://drive.google.com/file/d/1HneItSz7Buqd-hhD_j33WQoUIScMlZTR/preview",
    images: [],
    description: "Built a web application for inventory, finance, and vessel management with efficient state handling using Redux.Implemented modules for invoicing, currency exchange, and vendor-customer management, streamlining shipping operations. Used React Router for seamless navigation and React Hook Form for optimized form handling and validation.",
    liveurl:"https://v2022stage.paypointindia.co.in/Account/Login"
  },
  {
    id: 2,
    name: 'Hitachi TCO tool',
    video: "https://drive.google.com/file/d/1LahXuBV3XVwme5NPOVUx3Gyr-E3feYe8/preview",
    images: [],
    description: "Built a Total Cost of Ownership analysis tool to compare transformer designs based on cost, energy losses, GHG emissions, IRR, and payback period.Enabled evaluation of multiple transformer units under various decarbonization scenarios, supporting data-driven engineering decisions.",
    liveurl:"http://tco.unlockwww.com/"
  },
  {
    id: 3,
    name: 'Loankhata / Monarch Finance Loans',
    video: "https://drive.google.com/file/d/1eB-ON8UbnKPrh3DpAgWTQF1w75rtJGM1/preview",
    images: [],
    description: "Developed end-to-end loan application workflows including OTP authentication, PAN/Aadhaar verification, bank validation, KFS generation, and e-signature. with a focus on performance optimization and reliability.Designed optimized multi-step user journeys to improve conversion rates, compliance, and user experience.",
    liveurl:"https://clients.webcraftindia.com/loankhata/"
  },
  {
    id: 4,
    name: 'Transaction Stack - Merchant Portal',
    video: "",
    images: [
      "/images/txn_dashboard.jpg",
      "/images/txn_payment.jpg",
      "/images/txn_orders.jpg",
      "/images/txn_user.jpg",
    ],
    description: "Developed a merchant analytics dashboard displaying payment success rates, orders, and transaction history.Implemented role-based authentication and real-time transaction status tracking (success, failed, pending).",
    liveurl:"http://txnstack.unlockwww.com/"
  },
]
export default function handler(req, res) {
  res.status(200).json(pCards)
}
