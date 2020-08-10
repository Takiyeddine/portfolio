import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="img\taki.JPG"
                alt="avatar"
                style={{height: '450px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Hamdi Ahmed Takiy Eddine</h2>
            <h4 style={{color: 'grey'}}>softwar engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>3rd year student at higher natinal school of computer science in algiers,i love to learn about the latest technologies and finding out how to improve my craft ,i like solving problems and developing desctop and mobile softwars.
              Quick learner successfulworking in both team and self-directed settings</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>m'daourouch -souk ahrass-</p>
            <h5>Phone</h5>
            <p>0697210400</p>
            <h5>Email</h5>
            <p>ha_hamdi@esi.dz</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2022}
              schoolName="Abdallah Belhouchet high school"
              schoolDescription=""
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="higher national school of computer science"
                 schoolDescription=""
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

           
              <Experience
                startYear={2017}
                endYear={2020}
                jobName=""
                jobDescription="realise many mini projects using c,java and pascal including  tps,and some of them for learning
                 "
                />
                 <Experience
                startYear={2018}
                endYear={2019}
                jobName=""
                jobDescription="realise a multidisciplinary project as graduation of preparatory class. A desktop application for the assignment of the students of ESI to the classes of exams using visual basic ,sql and microsoft acces"
                />
                 <Experience
                startYear={2018}
                endYear={2019}
                jobName=""
                jobDescription="website for school management uses by student,teachers,and administration using laravel and vue js "
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />
                        <Skills
                      skill="mongodb"
                      progress={60}
                      />
                        <Skills
                      skill="Flutter"
                      progress={40}
                      />




          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
