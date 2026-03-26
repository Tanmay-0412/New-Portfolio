import { useEffect, useState } from "react";
import BannerLayout from "../../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../../components/Fiverr_Icon";
import Footer from "../../components/Footer";
import { Modal } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const projectcard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [activeImg, setActiveImg] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/projects`)
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((p) => p.id === parseInt(id));
          setProject(found);
        });
    }
  }, [id]);

  useEffect(() => {
    if (project?.images?.length > 0) {
      setActiveImg(project.images[0]);
    }
  }, [project]);

  function renderVideo(id) {
    // https://drive.google.com/file/d/1N04WnoCbmqTpMpRizDexfzHFReM5qx7n/view?usp=drive_link
    if (id === "0")
      return "https://drive.google.com/uc?export=preview&id=1N04WnoCbmqTpMpRizDexfzHFReM5qx7n";
    if (id === 1) return "/videos/vrm.mp4";
    if (id === 2) return "/videos/tco.mp4";
    return null;
  }

  const handleNext = (e) => {
    if (e === 4) setBtnDisable(true);
    else {
      setActiveImg(activeImg + 1);
    }
  };

  const handlePrev = () => {};
  // console.log(project?.video);
  // console.log(project?.images);

  return !project ? (
    "Loading...."
  ) : (
    <BannerLayout>
      {" "}
      <div className="px-6 py-10 text-Snow">
        {" "}
        <h1 className="text-3xl font-bold mb-6">{project?.name}</h1>{" "}
        <div className="mb-8">
          {" "}
          {/* <video
            width="100%"
            height="400"
            controls
            className="rounded-xl shadow-lg"
            autoPlay
          >
            {" "}
            <source src={renderVideo(project?.id)} type="video/mp4" /> Your
            browser does not support the video tag.{" "}
          </video> */}
          {/* ----------- old iframe ---------------- */}
          {/* <iframe
            src={project?.video}
            width="100%"
            height="600"
            allow="autoplay"
            className="rounded-xl shadow-lg"
          /> */}
          {/* ----------- Gallery ---------------- */}
          {/* {project?.video ? (
            <iframe
              src={`${project?.video}?autoplay=1`}
              width="100%"
              height="600"
              allow="autoplay"
              className="rounded-xl shadow-lg"
            />
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {project?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project?.name} image ${index + 1}`}
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                />
              ))}
            </div>
          )} */}
          {project?.video ? (
            <iframe
              src={project?.video}
              width="100%"
              height="600"
              allow="autoplay"
              className="rounded-xl shadow-lg"
            />
          ) : (
            <div>
              {/* Main Image */}
              <img
                src={activeImg}
                alt="Main project view"
                className="rounded-xl shadow-lg object-cover w-full h-85 mb-4"
              />

              {/* Thumbnails */}
              <div className="flex gap-3">
                <button
                  onClick={(e) => handleNext(e.target.value)}
                  disabled={btnDisable}
                >
                  Next
                </button>
                {project?.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project?.name} thumbnail ${index + 1}`}
                    className={`w-24 h-24 rounded-lg object-cover cursor-pointer border-2 ${activeImg === img ? "border-green-500" : "border-transparent"}`}
                    onClick={() => setActiveImg(img)}
                  />
                ))}
                <button onClick={() => handlePrev}>Prev</button>
              </div>
            </div>
          )}{" "}
        </div>{" "}
        <p className="text-LightGray mb-8 text-lg">{project?.description}</p>{" "}
        <div className="bottombtns flex justify-between">
          {" "}
          <a
            href={project?.liveurl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-Green text-DeepNightBlack font-bold rounded-lg hover:bg-EveningBlack hover:text-Snow transition"
          >
            {" "}
            View Live Project{" "}
          </a>{" "}
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-Green text-DeepNightBlack font-bold rounded-lg hover:bg-EveningBlack hover:text-Snow transition"
          >
            {" "}
            Back{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
      <Footer />{" "}
    </BannerLayout>
  );
};

export default projectcard;
