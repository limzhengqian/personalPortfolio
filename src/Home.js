export default function Home() {
  return (
    <div className="container mainIntro-container">
      <div className="row nameIntro">
        <div className="col">
          <img src="profilePic.png" className="profilePic"></img>
        </div>
        <div className="col right">
          <h1>Lim Zheng Qian</h1>
          <h6 className="text-muted">
            Major in Software Engineering, Looking for Internship
          </h6>
        </div>
      </div>
      <div className="aboutMe container">
        <h2>About Me</h2>
        <p>
          Ambitious and passionate second year Software Engineering student
          thatcurrently studying in Universiti Malaya. Mastered Java.
          Self-learned web-development skills and developed some working
          applications during semesterbreak. Possessed great communication skill
          and very collaborative whenworking on huge project.{" "}
          <b>
            Currently looking for internship which last for 24 - 26 weeks
            starting from August 2022 till January 2023.
          </b>
        </p>
      </div>

      <div className="Bios container">
        <h2>Bios</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p className="left">
              <b>2022</b>
            </p>
            <p className="right">
              Currently year 2 semester 2, after this semester will have to get
              involved in an internship program lasted for <b>24 - 26 months</b>
              . Feel free to contact me at{" "}
              <a href="#socialMedia">
                <b>Here</b>
              </a>{" "}
            </p>
          </li>
          <li class="list-group-item">
            <p className="left">
              <b>2021</b>
            </p>
            <p className="right">
              Finish my year 1 study with CGPA of 3.98 (got only A- in
              Networking subject)
            </p>
          </li>
          <li class="list-group-item">
            <p className="left">
              <b>2020</b>
            </p>
            <p className="right">
              End my education at KMNS with CGPA of <b>4.0</b>, finally enter my
              dream university, University Malaya, enrolled in the course called{" "}
              <b>Bachelor of Computer Science, Major in Software Engineering</b>
            </p>
          </li>
          <li class="list-group-item">
            <p className="left">
              <b>2019</b>
            </p>
            <p className="right">
              Graduate from secondary school with SPM <b>6A+ 4A (10A)</b>, went
              to Kolej Matrikulasi Negeri Sembilan (KMNS) to further my study
            </p>
          </li>
          <li class="list-group-item">
            <p className="left">
              <b>2014</b>
            </p>
            <p className="right">
              Graduate from primary school with UPSR <b>7A</b>, went to SMJK (C)
              Chung Ling Butterworth, Pulau Pinang to further my study
            </p>
          </li>
          <li class="list-group-item">
            <p className="left">
              <b>2008</b>
            </p>
            <p className="right">
              Move on to primary school, SJK (C) Kwang Hwa Butterworth, Pulau
              Pinang
            </p>
          </li>

          <li class="list-group-item">
            <p className="left">
              <b>2006</b>
            </p>
            <p className="right">
              Went to my first school, a kindergarden called Tadika Laksamana
              Bestari
            </p>
          </li>
          <li class="list-group-item">
            <p className="left">
              <b>2001</b>
            </p>
            <p className="right">I was born in Kulim, Kedah in Malaysia</p>
          </li>
        </ul>
      </div>

      <div className="skills container">
        <h2>Skills</h2>
        <div className="container skills-logo-container">
          <img src="java.png" className="skill-logo"></img>
          <img src="py.png" className="skill-logo"></img>
          <img src="htmlLogo.png" className="skill-logo"></img>
          <img src="css.png" className="skill-logo"></img>
          <img src="js.png" className="skill-logo"></img>
          <img src="logo192.png" className="skill-logo"></img>
          <img src="php.png" className="skill-logo"></img>
          <img src="nodejs.png" className="skill-logo"></img>
        </div>
      </div>

      <div className="container socialMedia" id="socialMedia">
        <h2>Social Media</h2>
        <ul class="list-group list-group-flush ">
          <li class="list-group-item">
            <a href="https://github.com/limzhengqian" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              @limzhengqian
            </a>
          </li>
          <li class="list-group-item">
            <a
              href="https://www.linkedin.com/in/lim-zheng-qian-693384218"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              @Lim Zheng Qian
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://www.facebook.com/zhengqian.lim.7" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              @ZhengQian Lim
            </a>
          </li>
          <li class="list-group-item">
            <a
              href="mailto:limzhengqian12@gmail.com"
              target="_blank"
              className="email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              @limzhengqian12@gmail.com
            </a>
          </li>
          <li class="list-group-item">
            <a
              href="https://wa.me/60174573538"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              @Limzhengqian
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
