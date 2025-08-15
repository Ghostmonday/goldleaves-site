import React, { useEffect, useRef, useState } from "react";
import { useIntakeForm } from "../context/IntakeFormContext";
import { site } from "../mock";
import { useToast } from "../hooks/use-toast";
import { Collapsible, CollapsibleContent } from "./ui/collapsible";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget"),
  description: z.string().min(10, "Please describe your project"),
  agree: z.literal(true, { errorMap: () => ({ message: "Please acknowledge the engagement" }) }),
});

const PROJECT_TYPES = [
  "Full‑stack web app",
  "Dashboard/Admin panel",
  "AI tool integration",
  "Stripe/payments",
  "API-driven app",
  "Automation/Workflow",
];

const BUDGETS = ["$500–1k", "$1k–3k", "$3k–6k", "$6k–10k", "$10k+"];

export default function ExpandableFormSection() {
  const { open, closeForm } = useIntakeForm();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(formSchema), defaultValues: { name: "", email: "", projectType: "", budget: "", description: "", agree: false } });

  useEffect(() => {
    if (open && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [open]);

  const onSubmit = async (data) => {
    // Mock submit only
    await new Promise((r) => setTimeout(r, 700));
    toast({ title: "Request received", description: "Thanks — we'll reply within 24 hours at " + data.email });
    setSubmitted(true);
    reset();
  };

  const accent = site.brand.accent;

  return (
    <Collapsible open={open}>
      <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <section ref={ref} id="intake" className="bg-white">
          <div className="max-w-3xl mx-auto px-6 pb-12">
            <div className="rounded-2xl border border-gray-200 shadow-sm bg-white p-6 md:p-8">
              {!submitted ? (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Project Intake</h3>
                      <p className="text-sm text-gray-600 mt-1">Provide a few details and we'll get back within 24 hours.</p>
                    </div>
                    <Button variant="ghost" onClick={closeForm} className="text-gray-600 hover:text-gray-900">Cancel</Button>
                  </div>

                  <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Jane Doe" {...register("name")} />
                        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="you@company.com" type="email" {...register("email")} />
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label>Project Type</Label>
                        <Select onValueChange={(v) => setValue("projectType", v, { shouldValidate: true })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                          <SelectContent>
                            {PROJECT_TYPES.map((pt) => (
                              <SelectItem key={pt} value={pt}>{pt}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.projectType && <p className="text-xs text-red-600 mt-1">{errors.projectType.message}</p>}
                      </div>
                      <div>
                        <Label>Budget Range</Label>
                        <Select onValueChange={(v) => setValue("budget", v, { shouldValidate: true })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {BUDGETS.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.budget && <p className="text-xs text-red-600 mt-1">{errors.budget.message}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="desc">Project Description</Label>
                      <Textarea id="desc" rows={5} placeholder="What are we building? Key features, timeline, context." {...register("description")} />
                      {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description.message}</p>}
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="agree" onCheckedChange={(v) => setValue("agree", Boolean(v), { shouldValidate: true })} />
                      <Label htmlFor="agree" className="text-sm text-gray-700">I understand this is a project-based engagement.</Label>
                    </div>
                    {errors.agree && <p className="text-xs text-red-600 mt-1">{errors.agree.message}</p>}

                    <div className="flex items-center gap-3 pt-2">
                      <Button type="submit" disabled={isSubmitting} className="rounded-full px-5" style={{ backgroundColor: accent, color: "#111" }}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                      <Button type="button" variant="outline" onClick={closeForm} className="rounded-full px-5">Cancel</Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <h4 className="text-lg font-semibold text-gray-900">Thanks! Your details are submitted.</h4>
                  <p className="text-sm text-gray-600 mt-2">We typically respond within 24 hours. For urgent requests, email {site.brand.email}.</p>
                  <div className="mt-6 flex justify-center">
                    <Button onClick={() => { setSubmitted(false); closeForm(); }} className="rounded-full px-5" style={{ backgroundColor: accent, color: "#111" }}>
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </CollapsibleContent>
    </Collapsible>
  );
}