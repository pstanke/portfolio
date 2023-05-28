export const initialState = {
  projects: [
    {
      id: 1,
      name: 'Music Service',
      description:
        "The website offers songs from various music genres. Users can filter songs by categories and utilize a song search engine. The 'discover' subpage provides a randomly selected song from the entire collection. The website follows a Single Page App (SPA) architecture and employs Handlebars templates. Additionally, the application utilizes an API server with JSON-Server.The designated time for completing this project was 3 weeks.",
      gitHubLink: 'https://github.com/pstanke/project-music',
      appLink: 'https://music-app-7czb9.ondigitalocean.app',
      technologies: ['HTML', 'CSS', 'SASS', 'JAVASCRIPT'],
      photo: 'music.png',
    },
    {
      id: 2,
      name: 'Pizzeria MAMMAMIA!',
      description:
        "This restaurant website offering various products such as breakfast items, salads, and, of course, pizza. The appearance of the products changes based on the customer's choices. Users can finalize their orders through a shopping cart. The website also provides the option to reserve a table at the restaurant for a specific day and time. All orders, reservations, and product information are retrieved from the server using JSON-server.The website follows a Single Page App (SPA) architecture and employs Handlebars templates.The designated time for completing this project was 3 weeks.",
      gitHubLink: 'https://github.com/pstanke/project-pizzeria',
      appLink: 'https://pizzeria-app-93au5.ondigitalocean.app',
      technologies: ['HTML', 'CSS', 'SASS', 'JAVASCRIPT'],
      photo: 'pizzeria.png',
    },
    {
      id: 3,
      name: 'Bazar Online Shoping',
      description:
        'This is a website for a store offering a variety of furniture. The site features multiple promotional banners and advertisements for new products. Users can compare products on the website, add them to their favorites section, and rate them. It was a group project in which I participated with other 4 students. Our tasks included completing assignments and submitting daily reports. We met weekly to discuss the progress made so far and set goals for the following week. The code was reviewed by the Project Manager and other developers before being approved. The designated time for completing this project was 3 weeks.',
      gitHubLink: 'https://github.com/pstanke/wdp-2212',
      appLink: 'https://bazar-online-shopping-9sbmy.ondigitalocean.app',
      technologies: ['SASS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT', 'REDUX'],
      photo: 'bazar.png',
    },
    {
      id: 4,
      name: "FLIP'EM",
      description:
        'This is a classifieds portal where users can list their advertisements. To create an ad, prior login or registration is required. Logged-in users can manage their ads by editing or deleting them. The website also includes a search functionality for ads. The application utilizes the Express server and MongoDB database to store information about ads, users, and sessions. The designated time for completing this project was 3 weeks.',
      gitHubLink: 'https://github.com/pstanke/backendWorkShops',
      appLink: 'https://flip-em-596ch.ondigitalocean.app',
      technologies: [
        'SASS',
        'BOOTSTRAP',
        'JAVASCRIPT',
        'REACT',
        'REDUX',
        'NODE',
        'EXPRESS',
        'MONGODB',
      ],
      photo: 'flipem.png',
    },
    {
      id: 5,
      name: 'Rock Your Grails',
      description:
        ' This is an e-commerce website. The site features a unique banner displaying flying shoes, which represent all the products on the site, capturing the attention of customers. When the user clicks on the banner, they are taken to a product page where they can add selected quantities of products to their shopping cart. The cart allows further editing of the ordered products, including adding notes. Registration or login is required to complete the purchase. In the user panel, customers have access to all their orders. The website utilizes local storage to store information about the logged-in user and the products in the cart. The application server is built using the Nest.JS framework, while the database storing product and user information is created using MySQL and Prisma. The designated time for completing this project was 3 weeks.',
      gitHubLink: 'https://github.com/pstanke/e_commerce_Rock_Your_Grails',
      appLink: 'https://rock-your-grails-w83i5.ondigitalocean.app',
      technologies: [
        'SASS',
        'BOOTSTRAP',
        'JAVASCRIPT',
        'TYPESCRIPT',
        'REACT',
        'REDUX',
        'NODE',
        'NEST',
        'MYSQL',
      ],
      photo: 'rock.png',
    },
  ],
};
