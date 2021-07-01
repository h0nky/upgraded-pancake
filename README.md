# npm i to install dependencies
# npm start to start project

# Couple notes regading my decisions:
1. I choose Create React App to save some time on scaffolding and project configuration setup.
3. I decided to go without any state manager in this case just to make the app as simple as possible. State manager in this case I consider as an overkill.
4. I decided to use react portal to implement company details page in order to avoid using routing because of the same reasons - to make the app lean and simple and avoid using extra dependencies.
5. I choose to use Typescript in order to add a strong typings and types annotation. Which basically a kind of a static testing.
6. I decided to implement searching mechanism utilizing hooks in the MainPage component.
7. I've added dummy chart component in visualization purposes. I choose React-vis library from the Uber team for that because it's popular and good looking.