import React from 'react'

export default function About() {
  return (
    <div className="about-div">
      <p className="display-6 mt-2 mb-2">About us</p>
      <div className="accordion mb-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyse Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a versatile web app revolutionizing the way we interact with text. With its user-friendly interface and powerful features, it's your go-to tool for text analysis. Seamlessly paste or input your text to unleash a world of possibilities. From word and character count to sentiment analysis, TextUtils offers a spectrum of utilities that unravel your text's intricacies. Whether you're a writer aiming for conciseness, a student meeting a word limit, or a business decoding customer feedback, TextUtils caters to all. Elevate your understanding of text composition and emotions effortlessly with this indispensable, elegant platform.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils, the ultimate text utility web app, empowers users to delve into text analysis seamlessly. This indispensable tool offers an array of features to dissect your text's complexities, and the best part – it's entirely free to use. From character and word count optimization to sentiment analysis, TextUtils caters to writers, students, businesses, and more. With its user-friendly interface, harness the power of text analysis without any cost. Elevate your writing, comprehend emotions in feedback, and conquer word limits effortlessly with TextUtils. Unleash the potential of your text without limitations, all at no expense.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Meet TextUtils: compatibility with all browsers. Seamlessly analyze text without constraints, as this versatile tool effortlessly adapts to your preferred browser. From tracking word and character counts to unveiling sentiment analysis, TextUtils caters to writers, students, and businesses alike. The best part? It's entirely free to use, making powerful text analysis accessible to everyone. Elevate your writing, understand customer feedback, and conquer language nuances without limitations. Embrace the convenience of browser compatibility and unlock the true potential of your text with TextUtils.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
