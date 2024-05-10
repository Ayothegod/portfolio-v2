import { useState } from "react";
import { Input } from "../ui/input";

export default function ContactAction() {
  const [messageCount, setMessageCount] = useState(0);
  const increment = () => {
    setMessageCount(prev => prev + 1);
  };

  return (
    <div className="box mt-10">
      <h3 className="text text-center block font-bold border-b default-border p-4">
        New Message
      </h3>

      <form action="" method="post">
        
      </form>
      <div className="p-4 md:p-6 space-y-4">
        <div className="flex items-center gap-2 border-b default-border">
          <label htmlFor="email" className="hidden md:block min-w-max text">
            E-mail:{" "}
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md outline-none px-2 caret-purple-600 bg-transparent placeholder:text-dark-text"
          />
        </div>

        <div className="flex items-center gap-2 border-b default-border">
          <label htmlFor="email" className="hidden md:block min-w-max text">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md outline-none px-2 caret-purple-600 bg-transparent placeholder:text-dark-text"
          />
        </div>

        <div className="flex items-center gap-2 border-b default-border">
          <label htmlFor="email" className="hidden md:block min-w-max text">
            Subject:{" "}
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md outline-none px-2 caret-purple-600 bg-transparent placeholder:text-dark-text"
          />
        </div>

        <div>
          <textarea
            name="message"
            rows={8}
            className="w-full dark:bg-dark resize-none outline-none p-2 font-medium rounded-md"
            onChange={increment}
          ></textarea>
          <p
            className={`text-right  text-xs 
          ${messageCount >= 300 && "text-red-600"}`}
          >
            {messageCount <= 300 ? messageCount :  messageCount - 300}/300
          </p>
        </div>
      </div>
    </div>
  );
}

