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
                name: 'Senior Python\nDeveloper',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2263/IMXCVX7064QS24PMVQ'
            },
            {
                id: 1,
                name: 'Graduate Petroleum\nEngineer',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2423/A6MKNTETY4YJOYGXNJ'
            },
            {
                id: 2,
                name: 'Student Research\nAssistant',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2303/L5QXEEBL3EDEPW944A'
            }
        ];

        let team = [
            {
                id: 1,
                name: 'Vugar Bayramov',
                position: 'Director',
                link: 'https://www.linkedin.com/in/vugar-bayramov-55288558',
                cover: 'assets/team/Vugar Bayramov.jpg',
                cover2: 'assets/team/Vugar Bayramov 2.jpg'
            },
            {
                id: 2,
                name: 'German Krauklit',
                position: 'Junior Researcher',
                link: 'https://www.linkedin.com/in/german-krauklit/',
                cover: 'assets/team/German Krauklit.jpg',
                cover2: 'assets/team/German Krauklit 2.jpg'
            },
            {
                id: 3,
                name: 'Kamran Niftaliyev',
                position: 'Full-Stack Developer',
                link: 'https://www.linkedin.com/in/niftaliyev/',
                cover: 'assets/team/Kamran Niftaliyev.jpg',
                cover2: 'assets/team/Kamran Niftaliyev 2.jpg'
            },
            {
                id: 4,
                name: 'Tapdig Abdullayev',
                position: 'Front-End Developer',
                link: 'https://www.linkedin.com/in/tapdiq-abdullayev',
                cover: 'assets/team/Tapdig Abdullayev.jpg',
                cover2: 'assets/team/Tapdig Abdullayev 2.jpg'
            },
            {
                id: 5,
                name: 'Gunel Novruzova',
                position: 'UX/UI Designer',
                link: 'https://www.linkedin.com/in/gunel-novruzova-77689978',
                cover: 'assets/team/Gunel Novruzova.jpg',
                cover2: 'assets/team/Gunel Novruzova 2.jpg'
            },
            {
                id: 6,
                name: 'Ali Huseynov',
                position: 'Back-End Developer',
                link: 'https://www.linkedin.com/in/alihuseynov1/',
                cover: 'assets/team/Ali Huseynov.jpg',
                cover2: 'assets/team/Ali Huseynov 2.jpg'
            },
            {
                id: 7,
                name: 'Aslan Rzayev',
                position: 'Junior Researcher',
                link: 'https://www.linkedin.com/in/aslan-rzayev/',
                cover: 'assets/team/Aslan Rzayev.jpg',
                cover2: 'assets/team/Aslan Rzayev 2.jpg'
            },
            {
                id: 8,
                name: 'Dashgin Khudiyev',
                position: 'Back-End Developer',
                link: 'https://www.linkedin.com/in/dashgin-khudiyev',
                cover: 'assets/team/Dashgin Hudiyev.jpg',
                cover2: 'assets/team/Dashgin Hudiyev 2.jpg'
            },
            {
                id: 9,
                name: 'Fuad Salim-zade',
                position: 'Back-End Developer',
                link: 'https://www.linkedin.com/in/fuad-salim-zade-4a632223a',
                cover: 'assets/team/Fuad Zelimzade.jpg',
                cover2: 'assets/team/Fuad Zelimzade 2.jpg'
            },
            {
                id: 10,
                name: 'Osman Mammadov',
                position: 'Back-End Developer',
                link: 'https://www.linkedin.com/in/osman-mamedov-6a120a212',
                cover: 'assets/team/Osman Mammadov.jpg',
                cover2: 'assets/team/Osman Mammadov 2.jpg'
            },
            {
                id: 11,
                name: 'Sabit Alizade',
                position: 'Middle Front-End Developer',
                link: 'https://www.linkedin.com/in/sabitalizade/',
                cover: 'assets/team/Sabit Alizada.jpg',
                cover2: 'assets/team/Sabit Alizada 2.jpg'
            },
            {
                id: 12,
                name: 'Teymur Rzali',
                position: 'Research Assistant',
                link: 'https://www.linkedin.com/in/teymurzali/',
                cover: 'assets/team/Teymur Rzali.jpg',
                cover2: 'assets/team/Teymur Rzali 2.jpg'
            },
            {
                id: 13,
                name: 'Yunis Huseynzada',
                position: 'Research Assistant',
                link: 'https://www.linkedin.com/in/yunisdev',
                cover: 'assets/team/Yunis Huseynzada.jpg',
                cover2: 'assets/team/Yunis Huseynzada 2.jpg'
            },
            {
                id: 14,
                name: 'Arif Khalaf',
                position: 'Project Coordinator',
                link: 'https://www.linkedin.com/in/arif-khalaf-6214b318a',
                cover: 'assets/team/Arif Khalaf.jpg',
                cover2: 'assets/team/Arif Khalaf 2.jpg'
            }
        ]

        let news = [
            {
                id: 1,
                cover: 'assets/news/news2.png',
                title: 'CoreDB 2.0 is developed and deployed for two major hydrocarbon fields in SCB',
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
