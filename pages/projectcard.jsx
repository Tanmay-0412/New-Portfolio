import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import { Modal } from "antd";

const projectcard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BannerLayout>
      <div className="px-6 py-10 text-Snow">
        <h1 className="text-3xl font-bold mb-6">DigiKhata SDK</h1>
        <div className="mb-8">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="DigiKhata SDK Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      
       <p className="text-LightGray mb-8 text-lg">
        Developed a secure wallet onboarding SDK enabling users to create digital wallets
        through Aadhaar OTP or biometric-based KYC, integrated via an iFrame model.
        Implemented API-driven workflows and AES encryption to ensure data security and
        smooth integration.
      </p>

      {/* View Live Project */}
      <a href="https://www.w3schools.com" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-Green text-DeepNightBlack font-bold rounded-lg hover:bg-EveningBlack hover:text-Snow transition" >
        View Live Project
      </a>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://github.com/osamajavaid/portfolio"
          >
            Be the one to integrate this!
          </a>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default projectcard;
