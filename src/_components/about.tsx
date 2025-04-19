import Image from "next/image";
import Header from "./shared/header";
import Socials from "./shared/socials";
import MotionContainer from "./shared/motion-container";
export default function About() {
  return (
    <MotionContainer>
      <div id="about" className="flex items-center py-10 justify-between gap-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="w-full lg:w-7/12">
          <Header title={"About"} />
          <div className="px-4">
            <p className="text-slate-400 text-base">
              Hi, my name is Cedric Gio Manuel, and I&apos;m a {new Date().getFullYear() - 2002} years old individual with a keen interest in technology
              and innovation. I hold a Bachelor of Science degree in Information Technology from Cavite State University Bacoor Campus. My academic
              journey has been an exciting exploration of the vast world of IT, and I&apos;m eager to apply my knowledge to real-world projects.
            </p>
            <Socials />
          </div>
        </div>
        <div className="px-4">
          <Image
            src={
              "https://scontent.fmnl7-2.fna.fbcdn.net/v/t39.30808-6/461542624_8369654523152236_3388485198945854627_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHLx5It1sjHHECAtewU3Txlj00aAglN4QGPTRoCCU3hAY29SBIdcv-ydytsH6HnzMQSI1URPqSZrTM2vc0X6Fgp&_nc_ohc=OHfHUt0cFFAQ7kNvwGo2Da_&_nc_oc=AdlJmQOA25QrqvumzwuU8IpJAuifI6YI37SqGXXiMjo46QxljNqiOjdspBKwM8UWKrA&_nc_zt=23&_nc_ht=scontent.fmnl7-2.fna&_nc_gid=MIFfcXxBgCjksAdNCiUabA&oh=00_AfHkr0lrdcpWVrIkhrs88lvVDrtHMn23Vwqo9q4NzbzguQ&oe=680793DD"
            }
            className="rounded-md"
            alt="image"
            width={350}
            height={350}
          />
        </div>
      </div>
    </MotionContainer>
  );
}
