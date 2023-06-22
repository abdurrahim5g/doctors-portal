import Heading from "../../../components/Heading/Heading";
import "./Testimonial.css";
import quote from "../../../assets/icons/quote.svg";

import avater1 from "../../../assets/images/people1.png";
import avater2 from "../../../assets/images/people2.png";
import avater3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      avater: avater1,
    },
    {
      id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      avater: avater2,
    },
    {
      id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      avater: avater3,
    },
  ];

  return (
    <section className="testmonial section py-14 md:py-20">
      <div className="site-container">
        <div className="row">
          <div className="flex justify-between">
            <div className="section-heading">
              <Heading
                subtitle={"Testimonial"}
                title={"What Our Patients Says"}
              ></Heading>
            </div>
            <div className="quote-img">
              <img src={quote} alt="Quote" className="w-20 lg:w-40" />
            </div>
          </div>
        </div>

        <div className="row mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div
                className="card  bg-base-100 shadow-xl border "
                key={testimonial.id}
              >
                <div className="card-body">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="author flex items-center mt-4">
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={testimonial.avater}
                          alt="Avater"
                          className="w-10"
                        />
                      </div>
                    </div>
                    <div className="author-info ml-4">
                      <h5 className="font-semibold">{testimonial.name}</h5>
                      <p className="text-sm">{testimonial.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
