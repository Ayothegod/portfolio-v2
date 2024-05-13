import { contactSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import test from "src/components/build/Arc.svg";

type Schema = z.infer<typeof contactSchema>;

export default function ContactAction() {
  const [messageCount, setMessageCount] = useState(0);
  const increment = () => {
    setMessageCount((prev) => prev + 1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: Schema, e: any) => {
    e.preventDefault();
    const response = await fetch("/api/route.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="box mt-10">
      <h3 className="text text-center block font-bold border-b default-border p-4">
        New Message
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 md:p-6 space-y-4">
          <div className="flex items-center gap-2 border-b default-border">
            <label htmlFor="email" className="hidden md:block min-w-max text">
              E-mail:{" "}
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md outline-none px-2 caret-purple-600 bg-transparent placeholder:text-dark-text"
            />
            {errors.email?.message && <p>{errors.email?.message}</p>}
          </div>

          <div className="flex items-center gap-2 border-b default-border">
            <label htmlFor="email" className="hidden md:block min-w-max text">
              Name:{" "}
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md outline-none px-2 caret-purple-600 bg-transparent placeholder:text-dark-text"
            />
            {errors.name?.message && <p>{errors.name?.message}</p>}
          </div>

          <div className="flex items-center gap-2 border-b default-border">
            <label htmlFor="email" className="hidden md:block min-w-max text">
              Subject:{" "}
            </label>
            <input
              type="text"
              {...register("subject")}
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md outline-none px-2 caret-purple-600 bg-transparent placeholder:text-dark-text"
            />
            {errors.subject?.message && <p>{errors.subject?.message}</p>}
          </div>

          <div>
            <textarea
              {...register("message")}
              rows={8}
              className="w-full dark:bg-dark resize-none outline-none p-2 font-medium rounded-md caret-purple-600 placeholder:text-dark-text"
              onChange={increment}
            ></textarea>
            <p
              className={`text-right  text-xs 
            ${messageCount >= 300 && "text-red-600"}`}
            >
              {messageCount <= 300 ? messageCount : messageCount - 300}/300
            </p>
            {errors.message?.message && <p>{errors.message?.message}</p>}
          </div>

          <div className="flex">
            <Button
              type="submit"
              className="w-full md:w-max text-right ml-auto"
            >
              Submit Data
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {/* <img src="./Arc.svg" alt="test-iconh" /> */}
            {/* <img src="src/assets/tech/subbi.png" alt="test-iconh" /> */}
            {/* <img src={test} alt="test-iconh" /> */}
            {/* <img src="src/components/build/Arc.svg" alt="test-iconh" /> */}
          </div>
        </div>
      </form>
    </div>
  );
}
