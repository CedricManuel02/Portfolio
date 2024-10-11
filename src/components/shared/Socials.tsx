import { ICON_SIZE } from "../../constant/Constant";
import SocialLinks from "./SocialLinks";
import { Facebook, Github, Instagram, LinkedinIcon, Mail } from "lucide-react";

export default function Socials() {
  return (
    <div className="flex items-center justify-start gap-4 py-4">
      <SocialLinks link={"#"} tooltip={"cedricmanuel02@gmail.com"}>
        <Mail size={ICON_SIZE} />
      </SocialLinks>
      <SocialLinks
        link={"https://www.facebook.com/cedricmanuel19"}
        tooltip={"@cedricmanuel19"}
      >
        <Facebook size={ICON_SIZE} />
      </SocialLinks>
      <SocialLinks
        link={"https://www.instagram.com/cedie_manuel"}
        tooltip={"@cedie_manuel"}
      >
        <Instagram size={ICON_SIZE} />
      </SocialLinks>
      <SocialLinks
        link={"https://www.linkedin.com/in/cedric-manuel-763902293/"}
        tooltip={"in/cedric-manuel"}
      >
        <LinkedinIcon size={ICON_SIZE} />
      </SocialLinks>
      <SocialLinks
        link={"https://github.com/CedricManuel02"}
        tooltip={"/CedricManuel02"}
      >
        <Github size={ICON_SIZE} />
      </SocialLinks>
    </div>
  );
}
