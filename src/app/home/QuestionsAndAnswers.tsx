import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why is a resume builder better than a resume template document?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office or Google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and prone to formatting errors. Resume builders, like
          ResumeReady, save time and eliminate formatting mistakes by
          automatically formatting the resume for you. It also provides the
          convenience of easily changing font types or sizes with just a click.
          Overall, a resume builder is easier and more efficient compared to a
          resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What sets ResumeReady apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          While there are other great free resume builders out there, such as{" "}
          <Link href="https://rxresu.me/">Reactive Resume</Link> and{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>, ResumeReady stands out
          with two unique features:
        </p>
        <p>
          <span className="font-semibold">
            1. ResumeReady is tailored for FBLA members and career development.
          </span>
          <br />
          Unlike other resume builders that offer global customization options,
          ResumeReady is optimized for Future Business Leaders of America (FBLA)
          members by focusing on career-specific best practices. It provides
          clean, simple designs without unnecessary sections like references and
          avoids elements like profile pictures, preventing biases in the job
          market.
        </p>
        <p>
          <span className="font-semibold">
            2. ResumeReady emphasizes privacy.
          </span>
          <br />
          Unlike other resume builders that may require you to sign up and store
          data in the cloud, ResumeReady prioritizes your privacy by keeping all
          data stored locally in your browser. No sign-up is needed, and your
          data is accessible only by you.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created ResumeReady and why?",
    answer: (
      <p>
        ResumeReady was created by{" "}
        <Link href="https://github.com/xitanggg">Xitang Zhao</Link> and designed
        by <Link href="https://www.linkedin.com/in/imzhi">Zhigang Wen</Link> as
        a personal project. As job seekers, we noticed how difficult it was to
        create a resume that followed best practices. We wanted to make it
        easier for others, especially first-generation students, to avoid the
        mistakes we made when applying for jobs. ResumeReady integrates what
        we've learned to help users quickly create professional resumes that
        adhere to best practices.
      </p>
    ),
  },
  {
    question: "Q4. How can I support ResumeReady?",
    answer: (
      <>
        <p>
          The best way to support ResumeReady is by sharing your feedback and
          suggestions with us. You can email us at{" "}
          <Link href="mailto:hello@resumeready.com">hello@resumeready.com</Link>{" "}
          or{" "}
          <Link href="https://github.com/xitanggg/resume-ready/issues/new">
            open an issue
          </Link>{" "}
          on our GitHub repository. Whether you have positive or constructive
          feedback, we’d love to hear from you.
        </p>
        <p>
          Another way to support ResumeReady is by spreading the word. Share it
          with friends, on social media, or with your school’s career center. If
          you use GitHub, you can also show your support by{" "}
          <Link href="https://github.com/xitanggg/resume-ready">
            starring the project
          </Link>{" "}
          to help boost its visibility.
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
