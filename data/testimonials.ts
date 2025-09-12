export interface Testimonial {
  avatar: {
    src: string;
    alt: string;
  };
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export const testimonials = {
  viktor: {
    avatar: {
      src: "/images/testimonials/viktor-zeman-real.webp",
      alt: "Viktor Zeman"
    },
    name: "Viktor Zeman",
    title: "CEO",
    company: "LiveAgent & Post Affiliate Pro",
    quote: "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.",
    rating: 5,
    verified: true
  },
  daniel: {
    avatar: {
      src: "/images/testimonials/daniel-pison.jpeg",
      alt: "Daniel Pison"
    },
    name: "Daniel Pison",
    title: "CMO",
    company: "Quality Unit",
    quote: "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in website quality. I consider him one of the greatest technical SEO experts on the market.",
    rating: 5,
    verified: true
  }
} as const;

export const testimonialsList = [testimonials.viktor, testimonials.daniel];