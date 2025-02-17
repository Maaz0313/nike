import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const handleRippleEffect = (e) => {
    e.preventDefault();

    const anchor = e.currentTarget;
    const rippleContainer = anchor.querySelector(".ripple-container");

    if (!rippleContainer) return;

    const rect = anchor.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    rippleContainer.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    setTimeout(() => {
      const href = anchor.getAttribute("href");
      if (href) {
        window.open(href, "_blank");
      } else {
        console.error("No href attribute found on the anchor element");
      }
    }, 600);
  };
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="Logo"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a
                href={icon.href}
                target="_blank"
                className="relative flex items-center justify-center overflow-hidden bg-white rounded-full size-12"
                onClick={handleRippleEffect}
                key={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
                <span className="absolute inset-0 pointer-events-none ripple-container" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-palanquin">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-base leading-normal cursor-pointer font-montserrat text-white-400 hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat">
          <img
            src={copyrightSign}
            alt="&copy;"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>
            Copyright. All Rights Reserved.
          </p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
