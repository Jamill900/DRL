import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let careers = [
          {
              id: 0,
              name: 'Angular\nDeveloper',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2063/CHWZG24AES9N9RKYY2'
          },
          {
              id: 1,
              name: 'Senior Full Stack\nDeveloper',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2043/Q76I6XXGNLR85331PB'
          },
          {
              id: 2,
              name: 'Student Research\nAssistant',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2103/2ZSD4244VIBM9LPBZK'
          },
          {
              id: 3,
              name: 'General\nApplication',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2083/6SPI1CAZ1OXL2MMW4J'
          }
      ];

      let team = [
          {
              id: 3,
              name: 'Vafa Dadashova',
              position: 'Researcher',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/vafa.jpg'
          },
          {
              id: 5,
              name: 'Ruslan Malikov',
              position: 'Junior Researcher',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/ruslan.jpg'
          },
          {
              id: 6,
              name: 'Ramil Mamishov',
              position: 'Junior Researcher',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/ramil.jpg'
          },
          {
              id: 7,
              name: 'Gunel Rzayeva',
              position: 'Junior Researcher',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/gunel.jpg'
          },
          {
              id: 8,
              name: 'Elmir Abilov',
              position: 'Junior Researcher',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/elmir.jpg'
          },
          {
              id: 9,
              name: 'Tatyana Yeleskina',
              position: 'Junior Researcher',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/tatyana.jpg'
          },
          {
              id: 10,
              name: 'Fidan Karimova',
              position: 'Research Assistant',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/fidan.jpg'
          },
          {
              id: 11,
              name: 'Orkhan Mammadov',
              position: 'Researcher',
              link: 'https://www.linkedin.com/in/jamil-alizada-71281b1b7/',
              cover: 'assets/team/orkhan.jpg'
          }
      ]

      let news = [
        {
          id: 1,
          cover: 'assets/news/news2.png',
          title: 'CoreDB 2.0 is developed and deployed for two major hydrocarbon fields in SCP',
          info: 'A new updated version of the CoreDB web application was introduced for the Azeri-Chirag-Gunashli (ACG) and Shah Deniz (SD) fields located in the South Caspian Basin. Our team focused on the optimization of several existing features and development of new functionalities based on the feedback received from the customer:\n\n· Fully reworked the numerical table page with more focus on the advance data manipulation and analytics features.\n\n· New notification system between users and admins, that will update users regarding any additions to the database.\n\n· Integration to the customer’s inhouse mapping platform (OneMap). An interactive maps integrated with the data inventory tables.\n\n· Add a new well functionality that ensures seamless introduction of new wells and their data\n\n· Optimized Image, Report and CT Scan Pages.',
          date: '1 September 2022'
        },
        {
          id: 2,
          cover: 'assets/news/news1.png',
          title: 'Design, Manufacturing and Assembly of the flow loop facility finished. Starting flow tests!',
          info: 'As a result of agile collaboration between the AiQUM team and local manufacturing contractor, the test facility was designed, manufactured and installed in our laboratory. A through safety checks was conducted and the facility is accepted for the next phase flow tests.',
          date: '1 November 2022'
        }
      ];

      return { careers, team, news };
  }
}
