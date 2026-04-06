import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactIcons() {
  return (
    <div className="flex gap-6 text-2xl">
      <a href="https://github.com/Rupesh6410" target="_blank">
        <FaGithub className="hover:text-purple-500 transition" />
      </a>

      <a href="https://www.linkedin.com/in/rupesh-kumar-884169231" target="_blank">
        <FaLinkedin className="hover:text-blue-500 transition" />
      </a>

      <a href="https://x.com/Rupesh05555" target="_blank">
        <FaTwitter className="hover:text-sky-400 transition" />
      </a>
    </div>
  );
}