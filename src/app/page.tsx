"use client";

import Image from "next/image";
import Link from "next/link";
import book from "../../public/img/book.png";
import { IoPersonOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="mx-auto w-full text-sm min-h-screen text-black relative">
      <section className="md:px-12 px-5 md:pt-32 pt-32">
        <aside>
          <h1 className="mb-3 md:text-5xl text-4xl font-bold">VocabVerse</h1>
          <h3 className="text-xl w-1/2 leading-8">
            Learn English quickly and easily, just like a child, using powerful
            tools that accelerate your learning and help you progress faster
            than ever.
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
      <section className="text-lg mt-52 text-center md:px-40 px-5 bg-gray-100 pt-12 pb-20">
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
      <section className="my-32 text-center w-full px-24">
        <h1 className="text-4xl font-bold">How does it work?</h1>
        <p className="mt-3 text-lg">
          With lots of unique blocks, you can easily build a page without any
          coding.
        </p>
        <ul className="steps mt-8 gap-3">
          <li className="step step-primary">
            <h3>Register</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="step step-primary">
            <h3>Register</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="step">
            <h3>Register</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="step">
            <h3>Register</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </section>
      <section className="w-auto mx-12 my-12 h-96 rounded-xl shadow-md bg-gray-100 p-5">
        <section className="w-1/2 mt-12 ml-5">
          <h1 className="text-4xl font-bold">Lets make things happen</h1>
          <p className="mt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eaque porro, tenetur corrupti incidunt autem nobis est ea, officiis
            cum eum provident sed. Dolorem doloribus qui minima fugit?
            Distinctio, similique?
          </p>
          <button className="btn-primary text-white rounded-md btn mt-3">
            Get Started
          </button>
        </section>
      </section>
      <section className="text-lg mt-16 text-center md:px-40 px-5 mb-24">
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
      <section className="flex justify-between px-12 gap-5 my-24">
        <section>
          <h1 className="text-4xl font-bold">Our Newsletters</h1>
          <p className="mt-3 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aut
            nisi nulla at ut, consectetur totam, molestiae quam exercitationem
            hic adipisci explicabo delectus eligendi impedit cumque perferendis
            sapiente repudiandae fugit?
          </p>
        </section>
        <section className="flex items-center gap-1">
          <input type="text" placeholder="Email" className="input bg-white" />
          <button className="btn-primary text-white btn">Subscribe</button>
        </section>
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
