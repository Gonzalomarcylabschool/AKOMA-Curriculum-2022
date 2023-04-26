# Authentications and Authorization.    

When we log in to a page we are going through a process called **Authentication**. This means that the application had confirmed that you are who you say you are. But what happens after that, how are we able to stay logged in to our pages. How does the computer/ server know that you are allowed to be on the website you are trying to use? These are thing things that we are going to talk about along with how that happens in an express application.

## Request and Response Cycle Review

What happens when The client makes a request to a server? 

![Request/Response Cycle low level](https://media.geeksforgeeks.org/wp-content/uploads/20210905091508/ImageOfHTTPRequestResponse-660x374.png)

The client Make a 

## Authentication Vs Authorization  

Remember, _authenticated_ means "We have confirmed this person is who they say they are." Once we have been authenticated, we need to check to see if the client sending the request is **Authorized**. This means "This person is who they say the are AND they are allowed to be here." So if we just want a user to be logged into the site to show content, we just check if they're authenticated. However, they wanted to update their profile info, we'd need to make sure they were authorized to do that (e.g. the profile they're updating is their own).