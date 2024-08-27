"use client";

import Image from "next/image";
import Link from "next/link";
import book from "../../public/img/book.png";
import { IoPersonOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="mx-auto w-full text-sm min-h-screen text-black relative">
      <section className="md:px-40 px-5 md:pt-32 pt-32">
        <aside>
          <h1 className="mb-3 md:text-5xl text-4xl font-bold">VocabVerse</h1>
          <h3 className="text-xl">
            Learn english very fast and easily like a child,
            <br />
            with many tools that can help you growth so fast.
          </h3>
          <Link
            href={"/home?page=1"}
            className="p-3 btn-primary text-white rounded-md btn mt-5"
          >
            Go to Home Page🚀
          </Link>
        </aside>
        <Image
          src={book}
          alt="book"
          className="absolute right-24 top-10 hidden md:block"
          width={400}
          height={400}
        />
      </section>
      <section className="text-lg mt-52 text-center md:px-40 px-5">
        <p className="text-base bg-white w-fit mx-auto px-3 py-1 rounded-full">
          Effective Learning
        </p>
        <h1 className="text-4xl font-bold mb-2 mt-1">
          Proven Techniques for Mastering English
        </h1>
        <p>
          Our comprehensive online courses combine interactive lessons, engaging
          activities, and personalized feedback to help you achieve your
          language learning goals.
        </p>
        <article className="grid grid-cols-3 gap-5 mt-5 text-left">
          <CardLearning
            title="Communicative Approach"
            description="Our courses focus on developing your conversational skills through
              real-life scenarios and discussions."
          />
          <CardLearning
            title="Personalized Feedback"
            description="Receive personalized feedback from your instructor to identify
              your strengths and areas for improvement."
          />
          <CardLearning
            title="Multimedia Resources"
            description="Enhance your learning experience with a variety of multimedia
              resources, including videos, audio recordings, and interactive
              exercises."
          />
        </article>
      </section>
      <section className="text-lg mt-24 text-center md:px-40 px-5">
        <p className="text-base bg-white w-fit mx-auto px-3 py-1 rounded-full">
          Student Testimonials
        </p>
        <h1 className="text-4xl font-bold mb-2 mt-1">What Our Students Say</h1>
        <p>
          Hear from real students who have transformed their English skills with
          our courses.
        </p>
        <article className="grid grid-cols-3 gap-5 mt-5 text-left">
          <CardStudent
            name="John Doe"
            coment="The English course at this institution has been a\n game-changer for me. The engaging lessons and personalized\n feedback have helped me improve my language skills\n significantly."
          />
          <CardStudent
            name="Jane Doe"
            coment="I highly recommend this English course to anyone looking\n to improve their language proficiency. The instructors are\n knowledgeable and supportive, and the curriculum is\n well-structured and engaging."
          />
          <CardStudent
            name="Sarah Miller"
            coment="I'm amazed by the progress I've made in my English\n proficiency since enrolling in this course. The interactive\n teaching methods and supportive environment have been\n instrumental in my learning journey."
          />
        </article>
      </section>
    </main>
  );
}

const CardLearning = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <main className="bg-white rounded-lg p-5 shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1">{description}</p>
    </main>
  );
};

const CardStudent = ({ name, coment }: { name: string; coment: string }) => {
  return (
    <main className="bg-white rounded-lg p-5 shadow-sm">
      <section className="flex gap-5 items-center">
        <IoPersonOutline size={30} />
        <aside>
          <h3 className="text-xl font-bold">{name}</h3>
          <p>Student</p>
        </aside>
      </section>
      <p className="mt-2">{coment}</p>
    </main>
  );
};
