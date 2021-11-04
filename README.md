[PROJECT IMAGER](https://github.com/facebook/create-react-app)

# Resources For English

Resources For English is a platform which offers a collection of free resources links for learning english. You will find :
- Most common words 
- Beginner Level Tv Shows
- Online Courses
- Listening Practices 
- Work Books 
- Reading Pratices

Plus it's all free !



# Contributing

First of all, thank you for taking the time to contribute! :+1::tada:

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Guide to add new courses

### Fill this Google Form

Add your course by filling this [Google Form](https://forms.gle/pbe9LwPMLWXsXhMHA)

### Add a new object in code

To add new course please follow steps:

1. Fork this repo
2. Go to the folder `/src/data`
3. Open the `resourcesData.js`
4. Add a new object, Example as follows:

```
   {
        title : "title of course",
        language :  "language of course",
        categories  : "category 1,",
        link :  "https://linkOfCouse.com/",
        description : "a short description of course",
        image: "https://linkToimage.com/image.png" // this is optional
    },
    {
        title: "Eng30",
        language: "English",
        categories: "courses",
        link: "https://eng30.com/",
        image: "",
        description: "basic english course"
    }
```


To add a new category:

1. Fork this repo
2. Go to the folder `/src/data`
3. Open the `categoriesData.js`
4. Add a new object, Example as follows:

```
    {
        title "Title of Category",
    },
    {
        title "Other",
    },

```


## Environment setup

### To run locally

- You'll need to have [node](https://nodejs.org/en/) installed in your system.

```
npm install 
```

- Run development server:

```
npm start
```

- Open the Web browser to `http://localhost:3000/`

### To build the Production package

```
npm run build
```


# License

Resources For English is licensed under the Creative Commons Zero v1.0 Universal


