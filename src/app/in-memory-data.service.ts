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
              name: 'Computational\nGeophysicist',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2063/CHWZG24AES9N9RKYY2'
          },
          {
              id: 1,
              name: 'Applied\nGeophysicist',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2043/Q76I6XXGNLR85331PB'
          },
          {
              id: 2,
              name: 'Geophysicist\n(Interpreter)',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2103/2ZSD4244VIBM9LPBZK'
          },
          {
              id: 3,
              name: 'Signal\nProcessing Engineer',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2083/6SPI1CAZ1OXL2MMW4J'
          },
          {
              id: 4,
              name: 'Advanced\nData Science',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2023/FPZ380T896T54I8HRR'
          },
          {
              id: 5,
              name: 'Applied\nGeologist',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-1983/7SXHYOXA3LNHX0UC2D'
          },
          {
              id: 6,
              name: 'Well\nPlanner',
              location: 'Baku, Azerbaijan',
              link: 'https://forms.clickup.com/31136212/f/xp6em-2003/OP7Y138ZTQFFEVIB51'
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
          cover: 'assets/news/news1.png',
          title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
          info: 'At the initiative of the bp AGT Innovation team, over the past 11 months, we have been working in collaboration with bp AGT specialists to develop a new method that enables significantly improved vertical resolution while broadening seismic data bandwidth.\n\n Integration of advanced AI algorithms with signal processing allowed us to mitigate one of the main shortcomings of conventional approaches, as deep learning-based S.I.Q.E. does not require the availability of well data or any prior geological interpretation.\n\n As the result of S.I.Q.E. seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development, starting from exploration to depletion.',
          date: '5 September 2022'
        },
        {
          id: 2,
          cover: 'assets/news/news2.png',
          title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
          info: 'We are pleased to announce that our first seismic image quality enhancement (S.I.Q.E.) algorithm has been successfully applied in the Azeri-Chirag-Gunashli (ACG) and Shah Deniz (SD) fields located in the South Caspian Basin. The interest in these fields is that they have a large number of wells that allow you to check the performance of the S.I.Q.E. methodology. At the same time, it is important to note that both fields have different seismic qualities and also that various data acquisition methods were used in their collection. Specifically, towed streamer for the ACG field and ocean bottom seismic for the SD field.\n\n In general, we can highlight the key facts from the obtained results. Quantitatively, the high-frequency components were seen to be enhanced over various time intervals. On average, the outcomes have 15 Hz more frequency bandwidth compared to the initial cubes. At the time, an increase in the signal-to-noise ratio of 35% was observed. As a result of the enhancement of the high-frequency components and broadening of the bandwidth, there is also an increase in the dominant frequency values of 56% and, consequently, an increase in resolution of 38%. These results were obtained within a few weeks in comparison to traditional methods, which require several months.\n\n Due to the large availability of well data, various analyses were carried out. One of which demonstrated a good match of seismic events between synthetic seismic data and enhanced seismic volumes. This indicates that the observed seismic events are consistent with the actual logging data. In parallel, comparisons were made with the vertical seismic profile (VSP) data, which led to similar conclusions. Finally, statistical analysis showed a better fit between the seismic responses interpreted from the enhanced seismic volume and the geological units determined using a standard set of well logs from drilled wells and consistent assumptions.',
          date: '23 August 2022'
        },
        {
          id: 3,
          cover: 'assets/news/news3.png',
          title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
          info: 'WAVERITY team developed an in-house tool for increasing the signal-to-noise ratio (SNR) of seismic reflectivity data. The methodology employs deep learning algorithms which efficiently manage the conditioning of corrupted images, decreasing or completely removing various types of noise, including random, coherent, colored, and structural/orientation noises.\n\n Among the benefits of the proposed methodology is its superiority over conventional filtering methods such as f-x deconvolution and structural filtering, as S.I.N.A. increases the data quality without affecting the seismic events themselves. Unlike conventional methods, the developed algorithm does not require a lot of parameterizations and the desired output can be obtained within a short time interval. Moreover, it is important to note that this methodology does not need any well data and completely depends only on the original seismic data.\n\n The robustness of S.I.N.A. has been tested on a number of open-source data as well as on several real fields from the South Caspian Basin, such as Azeri-Chirag-Guneshli and Shah Deniz. As a result, specialists are able to improve their interpretation and enhance field understanding by upgrading the visibility of the geological objects.',
          date: '16 October 2022'
        },
        {
          id: 4,
          cover: 'assets/news/news1.png',
          title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
          info: 'We are happy to announce that WAVERITY team has successfully implemented the Seismic Imaging Quality Enhancement (S.I.Q.E.) algorithm for three prospects (North Khali, Bibi-Heybat, Qarabatdakh), which are located within the Shallow Water Absheron Peninsula (SWAP) area and are undergoing exploration activities.\n\n While each of these three fields is unique in terms of its geological setting, exploration objectives, and seismic data quality, the S.I.Q.E. has effectively increased the vertical resolution and removed various types of noise in all cases, making the geological interpretation more efficient.\n\n Considering the very limited amount of well data, the validation was done by means of analyzing various types of attribute maps, as well as applying seismic stratigraphy methods to identify and compare important stratigraphic events between original and processed seismic volumes.\n\n Overall, we achieved up to a 40% increase in dominant frequency (which practically translates to doubling, or in some cases, tripling, the number of troughs and peaks in reservoir intervals). We also improved the signal-to-noise ratio by 24%, resulting in a much cleaner seismic image.',
          date: '29 October 2022'
        },
        {
          id: 5,
          cover: 'assets/news/news2.png',
          title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
          info: 'We are pleased to announce that our first seismic image quality enhancement (S.I.Q.E.) algorithm has been successfully applied in the Azeri-Chirag-Gunashli (ACG) and Shah Deniz (SD) fields located in the South Caspian Basin. The interest in these fields is that they have a large number of wells that allow you to check the performance of the S.I.Q.E. methodology. At the same time, it is important to note that both fields have different seismic qualities and also that various data acquisition methods were used in their collection. Specifically, towed streamer for the ACG field and ocean bottom seismic for the SD field.\n\n In general, we can highlight the key facts from the obtained results. Quantitatively, the high-frequency components were seen to be enhanced over various time intervals. On average, the outcomes have 15 Hz more frequency bandwidth compared to the initial cubes. At the time, an increase in the signal-to-noise ratio of 35% was observed. As a result of the enhancement of the high-frequency components and broadening of the bandwidth, there is also an increase in the dominant frequency values of 56% and, consequently, an increase in resolution of 38%. These results were obtained within a few weeks in comparison to traditional methods, which require several months.\n\n Due to the large availability of well data, various analyses were carried out. One of which demonstrated a good match of seismic events between synthetic seismic data and enhanced seismic volumes. This indicates that the observed seismic events are consistent with the actual logging data. In parallel, comparisons were made with the vertical seismic profile (VSP) data, which led to similar conclusions. Finally, statistical analysis showed a better fit between the seismic responses interpreted from the enhanced seismic volume and the geological units determined using a standard set of well logs from drilled wells and consistent assumptions.',
          date: '23 August 2022'
        },
        {
          id: 6,
          cover: 'assets/news/news3.png',
          title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
          info: 'WAVERITY team developed an in-house tool for increasing the signal-to-noise ratio (SNR) of seismic reflectivity data. The methodology employs deep learning algorithms which efficiently manage the conditioning of corrupted images, decreasing or completely removing various types of noise, including random, coherent, colored, and structural/orientation noises.\n\n Among the benefits of the proposed methodology is its superiority over conventional filtering methods such as f-x deconvolution and structural filtering, as S.I.N.A. increases the data quality without affecting the seismic events themselves. Unlike conventional methods, the developed algorithm does not require a lot of parameterizations and the desired output can be obtained within a short time interval. Moreover, it is important to note that this methodology does not need any well data and completely depends only on the original seismic data.\n\n The robustness of S.I.N.A. has been tested on a number of open-source data as well as on several real fields from the South Caspian Basin, such as Azeri-Chirag-Guneshli and Shah Deniz. As a result, specialists are able to improve their interpretation and enhance field understanding by upgrading the visibility of the geological objects.',
          date: '16 October 2022'
        },
        {
          id: 7,
          cover: 'assets/news/news3.png',
          title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
          info: 'WAVERITY team developed an in-house tool for increasing the signal-to-noise ratio (SNR) of seismic reflectivity data. The methodology employs deep learning algorithms which efficiently manage the conditioning of corrupted images, decreasing or completely removing various types of noise, including random, coherent, colored, and structural/orientation noises.\n\n Among the benefits of the proposed methodology is its superiority over conventional filtering methods such as f-x deconvolution and structural filtering, as S.I.N.A. increases the data quality without affecting the seismic events themselves. Unlike conventional methods, the developed algorithm does not require a lot of parameterizations and the desired output can be obtained within a short time interval. Moreover, it is important to note that this methodology does not need any well data and completely depends only on the original seismic data.\n\n The robustness of S.I.N.A. has been tested on a number of open-source data as well as on several real fields from the South Caspian Basin, such as Azeri-Chirag-Guneshli and Shah Deniz. As a result, specialists are able to improve their interpretation and enhance field understanding by upgrading the visibility of the geological objects.',
          date: '16 October 2022'
        }
      ];

      return { careers, team, news };
  }
}
