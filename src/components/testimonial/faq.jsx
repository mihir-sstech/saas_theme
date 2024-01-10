import React, { useState } from "react";
const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(0);
 
  const handleToggle = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
 
  const faqData = [
    {
      question: "Can I use Upper on multiple devices?",
      answer:
        "Of course, Upper Route Planner syncs seamlessly across multiple devices. All you have to do is log in with your Upper Route Planner credentials and start managing your delivery operations.",
    },
    {
      question:
        "What are the payment options to avail Upper Route Planner subscription?",
      answer:
        "At Upper, we accept debit card, credit card or Stripe as mode of payment to avail monthly or yearly subscription plan.",
    },
    {
      question: "What is a 7 days free trial?",
      answer:(
        <>
          7 days free trial helps you explore unique features so that you can know how well it works for your delivery business. Below is the list of features included in a trial version:
          <ul className="list-unstyled">
            <li>
              <i className="fa fa-circle me-2"></i>Multistop Route planning
            </li>
            <li>
              <i className="fa fa-circle me-2"></i>Driver app
            </li>
            <li>
              <i className="fa fa-circle me-2"></i>Excel import
            </li>
            <li>
              <i className="fa fa-circle me-2"></i>One-click dispatch
            </li>
            <li>
              <i className="fa fa-circle me-2"></i>Proof of Delivery (Photo/Signature)
            </li>
            <li>
              <i className="fa fa-circle me-2"></i>Analytics and reports
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Can I create route for multiple drivers on Upper?",
      answer:
        "For sure, Upper Route Planner allows you to add up to 25 delivery drivers. In fact, you can plan routes for all your drivers simultaneously using Upper Route Planner.",
    },
    {
      question: "Is it possible to import more than one CSV file?",
      answer:
        "Why not? Dispatchers or managers can easily upload more than one Excel spreadsheets for creating a single route. We recommend you make sure all the fields are assigned accurately for the best results.",
    },
    {
      question:
        "Do I need to install software for planning and optimizing routes?",
      answer:
        "No, you can directly access the route planner from your web browser and quickly start planning your multi-stop routes.",
    },
    {
      question: "Can I view route distance in miles?",
      answer:
        "Absolutely, Upper allows its users to select miles or kms as a default option to display route distance.",
    },
    {
      question: "Will Upper save my imported addresses?",
      answer:
        "Yes, as soon as you will add addresses on the Upper Route Planner, the software will automatically save them for your future use.",
    },
  ];
 
  return (
    <div className="faq mt-10">
      {faqData.map((faq, index) => (
        <div key={index}>
          <div className="accordion-item" style={{ marginBottom: "7px" }}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button ${
                  openQuestion === index ? "" : "collapsed"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded={openQuestion === index}
                aria-controls={`collapse-${index}`}
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "17px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderBottom: "1px solid rgb(101 101 101)",
                  borderRadius: "5px",
                  padding: "10px 20px"
                }}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span
                  className="plus-icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    fontSize: "30px",
                  }}
                >
                  +
                </span>
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${
                openQuestion === index ? "show" : ""
              }`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ fontSize: "15px", padding: "10px" }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default Faq;
 