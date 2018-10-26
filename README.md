# Search using YouTube API v3
Task for Search/sort data fetched using YouTube API v3

## Setting up
After cloning the repo, go to the directory and run the following commands:

```
$ npm install
$ npm start
```

Live demo can be found [here](http://ritwij.me:3000).

### Functions used in the code
* handleKeyPress - Triggers the function for Search when Enter/Return key is pressed.
* handleChange - Changes the State of the Search Query.
* displayTable - Changes the State of the Table, which is hidden initially.
* getResults - Fetches data using YouTube API, stores the response in the State, and triggers displayTable function