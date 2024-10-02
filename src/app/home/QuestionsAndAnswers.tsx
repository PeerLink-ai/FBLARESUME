import { Link } from "components/documentation";

const QAS = [
  {
    question: "Q1. How can I use ResumeReady to earn FBLA points?",
    answer: (
      <>
        <p>
          FBLA (Future Business Leaders of America) members can leverage
          ResumeReady to earn points in various categories, such as leadership
          development, career preparation, and community service. By using the
          resume builder to create a professional resume, you can showcase
          personal achievements, leadership roles, and projects you've worked
          on in FBLA, which can contribute toward your FBLA recognition.
        </p>
        <p>
          ResumeReady’s built-in FBLA-ready templates make it easier to format
          resumes for competitive events, ensuring you present your work in the
          best light to judges.
        </p>
      </>
    ),
  },
  {
    question: "Q2. How can ResumeReady help with FBLA competitive events?",
    answer: (
      <>
        <p>
          ResumeReady is a valuable tool for FBLA members participating in
          competitive events. Whether you're entering a competition that
          requires a resume, or you need to prepare for job interviews during
          career development events, the platform provides professionally
          designed templates that adhere to best practices. FBLA members can
          easily build, edit, and perfect their resumes for use in competitive
          events like Job Interview and Electronic Career Portfolio.
        </p>
        <p>
          You can also practice your resume writing skills by using the platform
          and testing its ATS (Applicant Tracking System) readability, which is
          critical for many modern job applications.
        </p>
      </>
    ),
  },
  {
    question: "Q3. What other features can I use on ResumeReady?",
    answer: (
      <>
        <p>
          ResumeReady isn’t just about building resumes. It also offers a
          powerful resume parser that allows you to check the formatting and ATS
          compliance of your existing resume. This ensures that your resume is
          readable by automated systems, which is essential for applying to
          competitive jobs.
        </p>
        <p>
          ResumeReady provides customization options for personal branding,
          helping you create a resume that reflects your skills and personality.
          You can also store multiple versions of your resume for different job
          applications, tailoring each one for specific roles.
        </p>
      </>
    ),
  },
  {
    question: "Q4. How does ResumeReady ensure my privacy?",
    answer: (
      <>
        <p>
          ResumeReady prioritizes your privacy by storing your data locally in
          your browser. This means that all of your information remains
          accessible only to you, and you never have to worry about sharing your
          personal data or signing up for an account.
        </p>
        <p>
          This focus on privacy allows you to build and customize your resume
          with peace of mind, knowing that your information stays secure.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
<head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9909888228762886"
crossOrigin="anonymous"></script>
</head>