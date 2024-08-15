import testimonials from "../services/testimonials";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial flex flex-wrap mx-auto max-w-7xl justify-center gap-12 lg:gap-48 mb-20 z-12">
        {testimonials.map((testimonial) => (
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-none">
            <div className="testimonial-profile-pic lg:relative lg:bottom-[7.5rem] lg:left-2 object-cover overflow-hidden w-44 h-44 rounded-full">
              <img src={testimonial.imgUrl} alt={testimonial.name} />
            </div>
            <div className="testimonial-message w-[20rem] 2xl:w-[30rem] rounded-3xl bg-zinc-700 p-5 bg-opacity-30 text-md">
              <p>{testimonial.name}</p>
              <p>{testimonial.position}</p>
              <p className="font-light">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
