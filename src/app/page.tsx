"use client";

import Image from "next/image";
import Link from "next/link";
import book from "../../public/img/book.png";
import { IoPersonOutline } from "react-icons/io5";
import { motion } from "motion/react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="mx-auto w-full text-sm min-h-screen text-black relative">
      <section className="md:px-7 lg:px-12 px-5 md:pt-32 pt-32">
        <aside>
          <h1 className="mb-3 md:text-5xl text-4xl font-bold">VocabVerse</h1>
          <h3 className="text-xl md:w-1/2 leading-8">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={book}
            alt="book"
            className="absolute right-24 top-10 hidden md:block md:pl-24 lg:pl-0 md:mt-16 lg:mt-0"
            width={400}
            height={400}
          />
        </motion.div>
      </section>
      <section className="text-lg mt-52 text-center lg:px-40 md:px-12 px-5 bg-gray-100 pt-12 pb-20">
        <motion.p
          className="text-base bg-white w-fit mx-auto px-3 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, type: "easeOut", delay: 0.2 }}
        >
          Effective Learning
        </motion.p>
        <h1 className="text-4xl font-bold mb-2 mt-1">
          Proven Techniques for Mastering English
        </h1>
        <p>
          Our comprehensive online courses combine interactive lessons, engaging
          activities, and personalized feedback to help you achieve your
          language learning goals.
        </p>
        <article className="md:grid grid-cols-3 gap-5 mt-5 text-left space-y-2 md:space-y-0">
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
      <section className="my-32 text-center w-full md:px-24 px-5">
        <motion.h1
          className="text-4xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          How does it work?
        </motion.h1>

        <motion.p
          className="mt-3 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
          }}
        >
          With lots of unique blocks, you can easily build a page without any
          coding.
        </motion.p>

        <motion.ul
          className="steps mt-8 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {[...Array(4)].map((_, i) => (
            <motion.li
              key={i}
              className={`step ${i < 2 ? "step-primary" : ""}`}
              variants={itemVariants}
            >
              <h3>Step {i + 1}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.li>
          ))}
        </motion.ul>
      </section>
      <section className="w-auto mx-5 md:mx-12 my-12 h-96 rounded-xl shadow-md bg-gray-100 p-3 md:p-5">
        <section className="md:w-1/2 mt-7 lg:mt-12 md:mt-3 ml-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            Lets make things happen
          </h1>
          <p className="mt-3 text-base md:text-lg">
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
      <section className="text-lg mt-16 text-center lg:px-40 md:px-12 px-5 mb-24">
        <p className="text-base bg-white w-fit mx-auto px-3 py-1 rounded-full">
          Student Testimonials
        </p>
        <h1 className="text-4xl font-bold mb-2 mt-1">What Our Students Say</h1>
        <p>
          Hear from real students who have transformed their English skills with
          our courses.
        </p>
        <article className="md:grid grid-cols-3 gap-5 mt-5 text-left space-y-2 md:space-y-0">
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
      <section className="md:flex justify-between px-5 md:px-12 gap-5 my-24">
        <section>
          <h1 className="text-4xl font-bold">Our Newsletters</h1>
          <p className="mt-3 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aut
            nisi nulla at ut, consectetur totam, molestiae quam exercitationem
            hic adipisci explicabo delectus eligendi impedit cumque perferendis
            sapiente repudiandae fugit?
          </p>
        </section>
        <section className="flex items-center gap-1 mt-3 md:mt-0">
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
    <motion.main
      className="bg-white rounded-lg p-5 shadow-sm w-[300px]"
      initial={{ opacity: 0, marginLeft: -30 }}
      whileInView={{ opacity: 1, marginLeft: 0 }}
      transition={{ duration: 0.3, type: "easeOut", delay: 0.3 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1">{description}</p>
    </motion.main>
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
