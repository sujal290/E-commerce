import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolution. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae nisi facilis delectus earum inventore, perferendis
            consequuntur architecto facere dolores quidem eos quas animi
            blanditiis assumenda, tempore modi, quibusdam nulla aliquam!
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis quia suscipit error, itaque nam dolore eius aut
            consequatur in tempore. Illum dicta possimus recusandae repudiandae
            nostrum quibusdam commodi minima molestiae!...
          </p>
          <b className="text-gray-800 "> Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            voluptate eligendi ut. Sit deleniti labore eligendi est, eveniet
            molestiae, minus accusamus voluptatem earum illum a itaque veniam
            atque suscipit nisi rerum necessitatibus amet! Ipsum?
          </p>
        </div>
      </div>
      <div class="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div class="flex flex-col md:flex-row text-sm mb-20">
        <div class="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent
          </p>
        </div>
        <div class="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping h
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptionsal Customer Services:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping h
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
