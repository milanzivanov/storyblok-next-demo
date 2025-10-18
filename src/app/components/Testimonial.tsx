interface TestimonialParams {
  blok: {
    name: string;
    comment: string;
  };
}

function Testimonial(params: TestimonialParams) {
  // console.log("Testimonial component params:", params);

  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <p className="text-xl leading-relaxed text-gray-700">
        {params.blok.name}
      </p>
      <p className="text-lg font-semibold mt-6">{params.blok.comment}</p>
    </div>
  );
}
export default Testimonial;
