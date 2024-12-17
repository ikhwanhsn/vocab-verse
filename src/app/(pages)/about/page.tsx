import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import studentClass from "../../../../public/img/student class.jpg";
import team1 from "../../../../public/img/team1.webp";
import team2 from "../../../../public/img/team2.jpg";
import team3 from "../../../../public/img/team3.jpg";

export default function AboutPage() {
  return (
    <div className="container mx-auto md:px-0 lg:px-12 px-5 py-8 text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">About VocabVerse</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <article className="text-lg">
          <p className="mb-2">
            At VocabVerse, we are driven by a passion for helping individuals
            across the globe achieve mastery in the English language. We
            understand that language is not just a tool for communication, but a
            gateway to new opportunities, whether in career advancement,
            academic success, or personal growth. Our goal is to provide
            accessible, high-quality education that equips learners with the
            skills they need to excel in an increasingly interconnected world.
          </p>
          <p className="mb-2">
            Through innovative teaching methods, engaging content, and
            personalized learning experiences, we aim to make the journey of
            learning English both effective and enjoyable. Whether you're a
            beginner or looking to refine your language skills, VocabVerse
            offers a wide range of resources to cater to all levels. We believe
            that anyone, regardless of background or location, should have the
            chance to improve their English and broaden their horizons.
          </p>
          <p className="mb-2">
            At the heart of VocabVerse is the belief that mastering English goes
            beyond just learning vocabulary and grammar. It's about gaining
            confidence, understanding different cultures, and being able to
            connect with people from all walks of life. Our mission is to break
            down language barriers and create a more inclusive world where
            communication knows no boundaries, fostering a sense of global
            community and empowerment for all our students.
          </p>
        </article>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Founded in 2024 by a group of passionate linguists and educators,
              VocabVerse has grown from a small local school to an international
              institution with students from over 50 countries.
            </p>
            <p className="text-lg">
              Our journey has been one of continuous innovation in language
              teaching methodologies, always staying at the forefront of
              educational technology to provide the best learning experience for
              our students.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={studentClass}
              alt="VocabVerse campus"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-3">
          {[
            {
              title: "Expert Teachers",
              description: "Native speakers with advanced degrees in TESOL",
            },
            {
              title: "Innovative Curriculum",
              description: "Tailored courses using the latest teaching methods",
            },
            {
              title: "Global Community",
              description: "Connect with learners from around the world",
            },
            {
              title: "Flexible Learning",
              description: "Online, in-person, and hybrid options available",
            },
            {
              title: "Proven Results",
              description: "95% of our students achieve their language goals",
            },
            {
              title: "Career Support",
              description: "Resume workshops and job placement assistance",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-3">
          {[
            {
              name: "Ikhwanul Husna",
              role: "Founder & Academic Director",
              image: team1,
            },
            {
              name: "Muhammad Gilang",
              role: "Head of Online Learning",
              image: team2,
            },
            {
              name: "Gidhi Ramanda",
              role: "Student Success Coordinator",
              image: team3,
            },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6 mt-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mb-4 object-cover w-36 h-36"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Accreditations</h2>
        <div className="flex md:flex-row flex-col items-center flex-wrap gap-4 justify-center">
          {[
            "TESOL Certified",
            "Cambridge English Approved",
            "British Council Accredited",
            "IELTS Official Test Center",
          ].map((accreditation, index) => (
            <Badge
              key={index}
              variant="default"
              className="text-lg text-blue-50 py-2 px-4 w-fit"
            >
              {accreditation}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
