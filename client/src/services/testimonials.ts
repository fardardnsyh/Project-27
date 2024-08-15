interface testimonials {
  name: string;
  position: string;
  imgUrl: string;
  message: string;
}

const testimonials: testimonials[] = [
  {
    name: "Mark S.",
    position: "Product Manager",
    imgUrl:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      '"Jats is a game-changer! As someone who applies to multiple positions daily, keeping track of all the details was a nightmare. Jats makes it effortless to log applications, follow up, and even prepare for interviews. The seamless integration and user-friendly design have saved me so much time and stress. Highly recommend it to anyone looking for a job."',
  },
  {
    name: "Jane D.",
    position: "Software Engineer",
    imgUrl:
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      '"I\'ve been using Jats for the past few months, and it has completely transformed the way I manage my job applications. The intuitive interface and detailed tracking features help me stay organized and focused. I especially love how I can easily see the status of each application and add specific notes for every job. This tool is a must-have for anyone in the job market!"',
  },
  {
    name: "Lisa K.",
    position: "Marketing Specialist",
    imgUrl:
      "https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      '"Before discovering Jats, I was struggling to keep track of my job applications and follow-ups. This application has been a lifesaver! The ability to categorize and sort applications by status, company, and role makes it incredibly easy to manage everything in one place. Plus, the reminders and updates ensure I never miss a follow-up. Thank you, Jats, for making my job search process so much smoother!"',
  },
];

export default testimonials;