// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pCards = [
  {
    id: 0,
    name: 'DigiKhata SDK',
    videos: "https://www.youtube.com/",
    description: "Developed a secure wallet onboarding SDK enabling users to create digital wallets through Aadhaar OTP or biometric-based KYC, integrated via an iFrame model.Implemented API-driven workflows and AES encryption to ensure data security and smooth integration.",
    liveurl:"https://www.w3schools.com/"
  }
]
export default function handler(req, res) {
  res.status(200).json(pCards)
}
