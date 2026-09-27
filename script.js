/**
 * Practice: Play with event listeners
 */
//create a description for each button
const workinfo = {
  Research:
    "I consider my skillset a service toolkit to contribute to finding solutions that benefit people, patients, clinicians, and wet-lab researchers. I am interested in research that intersect one or more of cancer genomics, clinical genomics, translational research, and genomics software development.",
  Writing:
    "I do scientific writing, technical documentation for biomedical software, and objective simplified summaries of biomedical research papers (or plain language summaries).",
  Educating:
    "I tutor bioinformatics virtually and as part of a university course. I've also delivered technical training tailored to bioscientists, and I mentor young STEM enthusiasts about the beauty and value of science",
};

//create a variable to store interactive buttons
const buttons = document.querySelectorAll(".work-button");

// console.log("interactive buttons", buttons);

const descriptions = document.querySelector("#work-description");

// console.log(descriptions);

// link featured projects to explored work
const projectButtons = document.querySelectorAll(".project-button");

// record each button click
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const selectedWork = event.target.textContent;
    descriptions.textContent = workinfo[selectedWork];

    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    button.classList.add("active");

    projectButtons.forEach(function (project) {
      project.classList.remove("highlight");

      if (project.dataset.category === selectedWork) {
        project.classList.add("highlight");
      }
    });
  });
});
