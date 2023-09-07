interface ITestimoni {
  rating: string;
  title: string;
  content: string;
  avatar: string;
}

const testimonials: ITestimoni[] = [
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: "http://via.placeholder.com/400x400",
  },
];

export default function generateTestimonial(section: HTMLDivElement) {
  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.className = "col-6 mb-3 mb-sm-0 px-4";
    card.innerHTML = `
    <div class="card py-5" style="background: #F1F3FF">
      <div class="card-body d-flex justify-content-between align-items-center px-5">
        <div style="padding-right: 2rem;">
          <img src="${
            testimonial.avatar
          }" alt="avatar" width="80" style="border-radius: 50%;"/>
        </div>
        <div >
          <h5 class="card-title">${testimonial.rating}</h5>
          <h5 class="card-title">${testimonial.title}</h5>
          <p class="card-text" style="white-space: wrap;">${
            testimonial.content
          }</p>
          <p class="card-text" style="white-space: wrap; font-weight: bold;">${`January 01 1990`}</p>
        </div>
      </div>
    </div>
  `;
    section.appendChild(card)!;
  });
}
