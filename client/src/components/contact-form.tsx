import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import AnimatedSection from "@/components/ui/animated-section";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { trackFormSubmission, trackConversion, trackLinkClick } from "@/lib/analytics";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  industry: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      industry: "",
      projectType: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (_, variables) => {
      setIsSubmitted(true);

      // Track form submission in Google Analytics
      trackFormSubmission('contact_form', {
        company: variables.company,
        industry: variables.industry,
        project_type: variables.projectType
      });

      // Track as a conversion/lead
      trackConversion('lead_generated');

      toast({
        title: "Message received!",
        description: "We'll be in touch within one business day.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2
                  className="font-bold text-4xl lg:text-5xl mb-6 text-black"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Let's talk about your operation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  No slides, no sales process. Just a straight conversation
                  about your operation and whether we can help — usually done
                  in 30 minutes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email Us</div>
                    <a
                      href="mailto:hello@hubble.inc"
                      className="text-gray-600 hover:text-black transition-colors"
                      onClick={() => trackLinkClick('Email', 'mailto:hello@hubble.inc', 'email')}
                    >
                      hello@hubble.inc
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Visit Us</div>
                    <div className="text-gray-600">
                      Winelands Business Park
                      <br />
                      28 Sandringham Road
                      <br />
                      Kraaifontein, Cape Town
                      <br />
                      South Africa
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Call Us</div>
                    <div className="text-gray-600">+27 21 987 0190</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Card
              className="border-0 shadow-xl"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Received!</h3>
                    <p className="text-gray-600">
                      We'll get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John"
                                  className="focus:ring-2 transition-shadow"
                                  style={{
                                    outlineColor: "#4F8EF7",
                                  }}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@yourcompany.co.za"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="road-freight">
                                  Road Freight & Transport
                                </SelectItem>
                                <SelectItem value="warehousing">
                                  Warehousing & Distribution
                                </SelectItem>
                                <SelectItem value="3pl-courier">
                                  3PL & Courier
                                </SelectItem>
                                <SelectItem value="manufacturing">
                                  Manufacturing
                                </SelectItem>
                                <SelectItem value="packaging">
                                  Packaging & Production
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What's your biggest operational challenge?</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={4}
                                placeholder="e.g. We're tracking everything on spreadsheets and drivers can't update us in real time..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full text-lg py-3 font-semibold text-white border-0 btn-shimmer"
                        style={{ backgroundColor: "#4F8EF7" }}
                        disabled={submitMutation.isPending}
                      >
                        {submitMutation.isPending
                          ? "Sending..."
                          : "Send Message →"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
