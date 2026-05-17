"use client"
import React, {ChangeEvent, SubmitEvent} from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { toast } from "sonner";

interface InputObj {
  email: string,
  message: string,
}

function page() {
  const [inputEls, setInputEls] = React.useState<InputObj>(
    { email: "", message: ""}
  );
  
  const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    toast.promise<{name:string}>(
      () => new Promise(resolve => setTimeout(()=> resolve({name: "Message"}), 2000)
      ),
      {
        loading: "Loading...",
        success: (data) => ({
          message: `${data.name} has been sent`,
          description: new Date(). toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true}),
        }),
        error: "Error",
        position: "bottom-center",
      }
    );
  
    setInputEls({email: "", message: ""});
  }
  
  const handleChangeEvent = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {name, value} = e.target;
    setInputEls(prev => ({ ...prev, [name]:value }));  
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">We're here to help with any questions about our courses, programs or events. Reach out and let us know how we can assist you in your musical journey.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center mt-4">
          <input type="email" name="email" placeholder="Your email address" 
          value={inputEls.email}
          onChange={handleChangeEvent}
          required
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          />

          <textarea name="message" placeholder="Your message" 
          value={inputEls.message}
          onChange={handleChangeEvent}
          required
          rows={5}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          ></textarea>

          <button type="submit" className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer">
            Send Message
          </button>
        </form>

      </div>
    </div>
  )
}

export default page