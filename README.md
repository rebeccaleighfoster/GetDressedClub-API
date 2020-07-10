# Get Dressed Club
https://getdressedclubclient.vercel.app/

## Summary

The Get Dressed Club a self care fullstack CRUD app for friends to take care of themselves and eachother during quarantine. Users can get outfit themes for the day, submit daily logs of their self care routine, and offer or ask for support if they are struggling. 

## Motivation
 
The Get Dressed Club is inspired from a text thread that was started during the begininng of the COVID-19 quaratine. It is intended to give users a place to track their own self care habits, get a fun outfit theme for the day, and provide and ask for support. Instead of traditional social media that mainly focuses on the more notable and exciting moments, this app intended to give users a place to focus on their own self care and create community with their close friends. The app is designed to be reminisent of early 2000s internet to give users a nostalgic feel and remind them of when we were kids and did not have such big worries. 

## API Endpoints
This CRUD app has several endpoints. The get endpoints include one that returns all the daily logs, one that returns an outfit theme for the day. The post end points enable users to create a username, or add a log. The users can also update their log information with a patch endpoint and delete a log with a delete endpoint. 

## Languages/Frameworks Utilized

* [React](https://reactjs.org/)
* [Javascript](https://www.javascript.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)

## API Documentation

# Logs
Returns all weaver profiles
* URL `/themes`

* Method `GET`
* URL Params:
None
* Data Params:
None
* Success Response:
```
    Code: 200
    Content:  {
        "friendname": "Arielle",
        "date": "2020-07-03T05:00:00.000Z",
        "movebody": "jkflsd;",
        "glasseswater": 3,
        "leavehouse": "yes",
        "winofday": "Helping Becca with food",
        "shower": "yes",
        "cleanroom": "yes",
        "dodishes": "yes",
        "washface": "yes",
        "fooddrop": " Reach out to me if you you need someone to drop food off for me.",
        "call": null,
        "distancewalk": null,
        "log_id": 15,
        "imagename": null
    }
```
# Add log
Adds a log
* URL `/dailylog`
* Method `POST`
* Success Response:
```
    Code: 204
    Content: {   {
        "friendname": "Arielle",
        "date": "2020-07-03T05:00:00.000Z",
        "movebody": "jkflsd;",
        "glasseswater": 3,
        "leavehouse": "yes",
        "winofday": "Helping Becca with food",
        "shower": "yes",
        "cleanroom": "yes",
        "dodishes": "yes",
        "washface": "yes",
        "fooddrop": " Reach out to me if you you need someone to drop food off for me.",
        "call": null,
        "distancewalk": null,
        "log_id": 15,
        "imagename": null
    }}
```
 # Edit log
Edits a log
* URL `/dailylog`
* Method `Patch`
* URL Params: `log_id=[integer]`
* Success Response:
```
    Code: 204
    Content: {   {
        "friendname": "Arielle",
        "date": "2020-07-03T05:00:00.000Z",
        "movebody": "jkflsd;",
        "glasseswater": 3,
        "leavehouse": "yes",
        "winofday": "Helping Becca with food",
        "shower": "yes",
        "cleanroom": "yes",
        "dodishes": "yes",
        "washface": "yes",
        "fooddrop": " Reach out to me if you you need someone to drop food off for me.",
        "call": null,
        "distancewalk": null,
        "log_id": 15,
        "imagename": null
    }}
```
### Delete log
Deletes existing log
* URL `/dailylog`
* Method `DELETE`
* URL Params: `log_id=[integer]`
* Data Params: None
* Success Response:
```
    Code: 204
    Content: none
```

### Friends
Returns All Usernames
* URL `/friends`
* Method `GET`
* URL Params: None
* Data Params: None
* Success Response
```
    Code: 200
    Content:{
        "name": "Rebecca Foster",
        "friend_id": 1
    }
    }
```

### Add Username
Adds username
* URL `/friends`
* Method: `POST`
* URL Params none
* Data Params: None
* Success Response:
```
   {
        "name": "Rebecca Foster",
        "friend_id": 1
    }
```

### Delete Username
Deletes Existing Username
* URL `/friends/:id`
* Method `DELETE`
* URL Params: `friend_id=[integer]`
* Data Params: None
* Success Response:
```
    Code: 204
    Content: none
```

### Themes
Returns All Themes
* URL `/themes`
* Method `GET`
* URL Params: None
* Data Params: None
* Success Response
```
    Code: 200
    Content:{
        "themename": "Stripes",
        "theme": 1
    }
    }
```

### Add Theme
Adds Theme
* URL `/themes`
* Method: `POST`
* URL Params none
* Data Params: None
* Success Response:
```
   {
        "themename": "denim",
        "theme_id": 1
    }
```

### Delete THeme
Deletes Existing THeme
* URL `/theme/:id`
* Method `DELETE`
* URL Params: `theme_id=[integer]`
* Data Params: None
* Success Response:
```
    Code: 204
    Content: none
```
## Live App
[Get Dressed Club Live Link](https://getdressedclubclient.vercel.app/)

## Client Repository
[Get Dressed Club Client Repository](https://github.com/rebeccaleighfoster/getdressedclubclient)