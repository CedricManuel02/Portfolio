import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Modal({modalRef} : any) {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        if (form.current) {
          emailjs
            .sendForm(
              "service_7i3trfl",
              "template_q5t5952",
              form.current,
              "CPc8VLyk3ZkK4RBGd"
            )
            .then(
              () => {
                toast.success(`Successfully Sent`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  style: { background: "white" },
                });
                setIsLoading(false);
                form.current?.reset();
              },
              (err) => {
                console.log(err);
                toast.warn(`Something went wrong, Try again. ${err}`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  style: { background: "white" },
                });
                setIsLoading(false);
              }
            );
        }
      };
  return (
    <dialog id="my_modal_3" className="modal" ref={modalRef}>
              <div className="modal-box">
                <form method="dialog">
                  <h3 className="font-bold text-lg">Email me</h3>
                  <p className="py-4">Let's collaborate !</p>
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form ref={form} onSubmit={sendEmail}>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Your Name</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                      </svg>
                      <input
                        type="text"
                        className="grow"
                        placeholder="Enter your name"
                        name="user_name"
                        required
                      />
                    </label>
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Your Email</span>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                      <input
                        type="email"
                        className="grow"
                        placeholder="Email"
                        name="user_email"
                        required
                      />
                    </label>
                  </label>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Message</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered textarea-lg h-24"
                      placeholder="Your message here"
                      name="message"
                      required
                    ></textarea>
                  </label>
                  <div className="pt-4 flex items-center justify-end">
                    {isLoading ? (
                      <button
                        type="submit"
                        className="btn btn-primary text-white"
                      >
                        <Loader2 className="animate-spin" /> Sending...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary text-white"
                      >
                        Send
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </dialog>
  )
}
