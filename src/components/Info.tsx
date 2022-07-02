const Info = () => {
  return (
    <div className="container mx-auto px-10 mt-10">
      <div className="flex flex-col">
        <span className="text-lg">
          Hey! I'm Austin McCalley and I like to write code and solve problems.
          I am currently working for{' '}
          <a
            href="https://www.linkedin.com/company/atllas-inc/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-1 text-[#8972ee] hover:text-[#2153d5]"
          >
            Atllas
          </a>{' '}
          as a Software Engineer. I have a strong passion for data science and
          machine learning and I am currently working on several machine
          learning projects.
        </span>
        <div className="py-3">
          <h3>
            <span className="font-bold">Education</span>
          </h3>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 px-4">
              <h4 className="font-bold">
                <span className="font-sans text-gray-dark">
                  Oregon State University
                </span>
              </h4>
              <p className="text-sm leading-tight flex flex-col">
                <span className="font-sans text-gray-dark text-sm">
                  Bachelor of Science in Computer Science
                </span>
                <span className="font-sans text-gray-dark text-xs">
                  Minor in Mathematics
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
