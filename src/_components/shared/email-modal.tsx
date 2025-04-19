"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

export default function Modal() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_PRIVATE_KEY!
        )
        .then(
          () => {
            setIsLoading(false);
            form.current?.reset();
            toast("Thank you for sending email", {
              description: "Successfully sent email",
              unstyled: true,
              classNames: {
                toast: 'bg-black p-4 rounded-md',
                title: 'text-green-400 font-medium',
              },
            });
          },
          (error) => {
            setIsLoading(false);
            console.error("Something went wrong while sending email", error);
            toast("Opps!", {
              description: "Failed to send email, please try again later",
              unstyled: true,
              classNames: {
                toast: 'bg-black p-4 rounded-md',
                title: 'text-red-400 font-medium',
              },
            });
          }
        );
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="bg-transparent text-slate-400 w-32 h-12 sm:h-14 sm:w-44  rounded-full cursor-pointer">
          Send Email
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#121212] text-white border-0">
        <form ref={form} onSubmit={sendEmail}>
          <DialogHeader>
            <DialogTitle>Email me</DialogTitle>
            <DialogDescription>Let&apos;s collaborate !</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="user_email" className="text-slate-400">
                Your Name
              </Label>
              <Input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="col-span-3 border-slate-800 h-10"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="user_email" className="text-slate-400">
                Email
              </Label>
              <Input id="user_email" type="email" name="user_email" placeholder="Email" className="col-span-3 border-slate-800 h-10" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-slate-400">
                Message
              </Label>
              <Textarea id="message" name="message" className="min-h-20 border-slate-800 " />
            </div>
          </div>
          <DialogFooter>
            <Button variant={"default"} type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2Icon className="animate-spin" />
                  <p>Sending...</p>
                </div>
              ) : (
                "Send"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
