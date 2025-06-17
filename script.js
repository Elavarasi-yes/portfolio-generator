if (document.getElementById("portfolioForm")) {
  document.getElementById("portfolioForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = document.getElementById("photo").files[0];

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      birthdate: document.getElementById("birthdate").value,
      college: document.getElementById("college").value,
      course: document.getElementById("course").value,
      about: document.getElementById("about").value,
      skills: document.getElementById("skills").value,
      techInterests: document.getElementById("techInterests").value,
      nonTechInterests: document.getElementById("nonTechInterests").value,
      hobbies: document.getElementById("hobbies").value,
      achievements: document.getElementById("achievements").value,
      certifications: document.getElementById("certifications").value,
      internships: document.getElementById("internships").value,
      linkedin: document.getElementById("linkedin").value,
      github: document.getElementById("github").value
    };

    reader.onload = function () {
      data.photo = reader.result;
      localStorage.setItem("portfolioData", JSON.stringify(data));
      window.location.href = "output.html";
    };
    reader.readAsDataURL(file);
  });
}

if (document.getElementById("portfolioOutput")) {
  const data = JSON.parse(localStorage.getItem("portfolioData"));

  const makeList = (text) =>
    `<ul>${text.split(/[\n,]+/).map(i => `<li>${i.trim()}</li>`).join('')}</ul>`;

  document.getElementById("portfolioOutput").innerHTML = `
    <img src="${data.photo}" class="profile-pic" />
    <h1>${data.name}</h1>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Address:</strong> ${data.address}</p>
    <p><strong>Birthdate:</strong> ${data.birthdate}</p>

    <section><h2>Education</h2>
      <p><strong>College:</strong> ${data.college}</p>
      <p><strong>Course:</strong> ${data.course}</p>
    </section>

    <section><h2>About Me</h2><p>${data.about}</p></section>
    <section><h2>Skills</h2>${makeList(data.skills)}</section>
    <section><h2>Technical Interests</h2>${makeList(data.techInterests)}</section>
    <section><h2>Non-Technical Interests</h2>${makeList(data.nonTechInterests)}</section>
    <section><h2>Hobbies</h2>${makeList(data.hobbies)}</section>
    <section><h2>Achievements</h2>${makeList(data.achievements)}</section>
    <section><h2>Certifications</h2>${makeList(data.certifications)}</section>
    <section><h2>Internships</h2>${makeList(data.internships)}</section>

    <section>
      <h2>Social Links</h2>
      <ul>
        ${data.linkedin ? `<li><a href="${data.linkedin}" target="_blank">LinkedIn</a></li>` : ""}
        ${data.github ? `<li><a href="${data.github}" target="_blank">GitHub</a></li>` : ""}
      </ul>
    </section>
  `;
}
