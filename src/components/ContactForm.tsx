"use client";

import React from "react";
import { useForm } from "@formspree/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import clsx from "clsx";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [state, handleSubmit] = useForm("xgvzrzjw");

  return (
    <form onSubmit={handleSubmit} className={clsx("space-y-15", className)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          variant="vscode"
          className="rounded-none"
          required
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <Input
          variant="vscode"
          className="rounded-none"
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <Textarea
          variant="vscode"
          className="min-h-50 resize-none rounded-none md:col-span-2"
          required
          id="message"
          name="message"
          placeholder="message"
        />
      </div>
      <Button
        size="lg"
        className="w-full cursor-pointer rounded-sm bg-[#007acc] text-sm text-white hover:bg-[#005a9e] sm:w-fit"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
