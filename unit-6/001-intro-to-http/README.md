# Intro to HTTP

## The Why

In unit 5 we learned how to create dynamic pages using the DOM and DOM manipulation. 

In this unit we are now going to understand how computer talk to each other and how we can use that to our advantage to do even more as a developer!

## What is the internet

Short answer: a distributed packet-switched network

Long answer: The internet is a vast network of interconnected devices, including servers, routers, and computers, that communicate with each other using standardized communication protocols. Here is a simplified overview of how the internet works:

Data is sent from a device: When you access a website or send an email, your device sends data packets to the internet.

Data is routed: Your data packets are routed through a series of routers, which are specialized computers that direct the packets towards their destination.

Data is transmitted: The data packets are transmitted over the internet using a variety of different communication protocols, such as the Transmission Control Protocol (TCP) and the Internet Protocol (IP).

Data is received: The data packets are received by the destination device, which may be a server hosting a website, a recipient's email server, or another type of device.

Data is reassembled: The data packets are reassembled into their original form, such as a web page or email message, and sent to your device for you to view or interact with.

This process happens in a matter of milliseconds, and it is what enables people to access information, communicate with others, and engage in online activities all over the world.

## Clients and Servers

Clients and servers are two fundamental concepts in the architecture of the internet, they work together to enable communication and data transfer. Clients make requests for data or services, and servers respond by providing the requested data or services. An analogy would be if you go to chipotle, you would be the client who request a burrito the server or chipotle employee responds to  your request and provides the requested burrito. 

A client is a computer or device that makes requests for data or services from another computer or device, known as a server. In other words, a client is a user's device that sends requests to servers over the internet. Examples of clients include web browsers, email clients, and mobile apps.

A server, on the other hand, is a computer or device that responds to client requests and provides the requested data or services. Servers are designed to handle a large number of requests and to provide resources or data to multiple clients simultaneously. Examples of servers include web servers, email servers, file servers, and database servers.

When you browse the internet, for example, your web browser acts as a client, sending requests for web pages to web servers around the world. The web servers respond by sending the requested web pages back to the client, which displays them on the user's device. Lets take a look at what happens when I try to go to google.com

## Request/Response Cycle 

![Request/Response Cycle high level](https://madooei.github.io/cs421_sp20_homepage/assets/client-server-2.png)
Wether it's a mobile device, a desktop or other, there will always be a request sent to the server and it will then send it's response. 


![Request/Response Cycle low level](https://media.geeksforgeeks.org/wp-content/uploads/20210905091508/ImageOfHTTPRequestResponse-660x374.png)



## HTTP 
If we put together everything that we just talked about we now know at a high level what  Hypertext Transfer Protocol is and does. But we focus on the details so lets dive in a little deeper: 

What happens when we want to go to a website, let's say GitHub.com?

* DNS lookup: The browser first performs a DNS lookup to determine the IP address associated with the domain name "GitHub.com". This involves sending a DNS query to a DNS server that is configured on the user's computer or network.
  * Side note: DNS stands for Domain Name System, which is a hierarchical and decentralized naming system for computers, services, or any resource connected to the internet or a private network. DNS maps domain names (such as www.example.com) to IP addresses (such as 192.0.2.1) that are used to identify and locate the corresponding resources.

* HTTP request: Once the IP address has been resolved, the browser sends an HTTP request to the server at that IP address. The request includes the URL "GitHub.com", a request method (such as GET), and various _headers_ that provide additional information about the request.

* Server processing: The server receives the HTTP request and processes it. This involves determining which resource is being requested (in this case, the home page of "GitHub.com"), generating an appropriate response, and sending it back to the client.

* HTTP response: The server sends an HTTP response back to the browser. The response includes a status code (such as 200 OK or 404 Not Found), headers that provide additional information about the response, and a message body that contains the requested resource (in this case, the HTML code that makes up the home page of "GitHub.com").

* Client processing: The browser receives the HTTP response and processes it. This involves checking the status code to determine whether the request was successful, parsing the message body to extract the HTML code, and rendering the page in the browser window.

* Resource retrieval: As the browser renders the page, it may encounter additional resources (such as images, stylesheets, or JavaScript files) that need to be retrieved. For each of these resources, the browser sends additional HTTP requests and follows the same request/response cycle as before.

* Closing the connection: Once all resources have been retrieved and the page has finished rendering, the connection between the browser and the server is closed.

## Ways to make a HTTP request and get a response

1. Browser: When you type a URL (Uniform Resource Locator) to the browser, you send the request to the server and get the HTML, then the browser parses through the HTML and uses the DOM to make the web page that you can see and interact with in the browser. You can see the details about the request and response cycle in the browser using the developer tools. 

2. Terminal: When you use the CLI tool cURL you can make a HTTP request and you will get the text response that you would normally get from the server, however because there is no DOM, it will not parse through the data to make the web page as we would see in the browser. When you make this request you will not be able to see the details about it. 

3. Postman: Postman is a popular API development tool that allows developers to create, test, and manage APIs (Application Programming Interfaces). The app provides a GUI for sending and receiving HTTP requests and responses, making it easier to develop and test APIs. More on this in later lectures.

## Can Website communicate with other Websites?

Short answer: Yes!

As we go on in this unit you will see the importance of one website needing to communicate with another. One example of this we have see when I showed you my weather app. I used the API from  [openweathermap.org](https://openweathermap.org/) to get the information I needed. I sent a `get` request for the information and it sent it back to me in `json` form.

Understanding how to get website to communicate with each other is important to creating even more useful and interactive websites. 

## Dev Tools review / Network

What is the importance of the elements tab in the Developer tools

What is the importance of the Console tab?

What about the Source tab?

### Network tab 

There are a lot of details about the request response cycle that you can get from this tab. As we mentioned before there is a request and response header. You can also get how much time it took for the page to load and every aspect of it. 

## HTTP vs HTTPS

The main difference between HTTP and HTTPS is that HTTPS provides an additional layer of security by encrypting data in transit, making it much harder for anyone to intercept or tamper with the data being transmitted. This makes HTTPS more secure than HTTP and is therefore recommended for any website that collects sensitive information (such as login credentials, credit card information, or personal data).

### Transport Layer Security and SSL

TLS (Transport Layer Security) is a cryptographic protocol used to provide secure communication over the internet. It is the successor to the SSL (Secure Sockets Layer) protocol and is used to encrypt data between a client and a server, providing confidentiality, integrity, and authentication of the data being transmitted.

SSL (Secure Sockets Layer) is also a cryptographic protocol used to provide secure communication over the internet. It was widely used for secure communication before being replaced by TLS.

## Stateless vs Stateful

Stateless and stateful are two terms used in computer networking and programming to describe different types of systems.

### Stateless 

A stateless system is one that does not store any information about previous interactions or transactions. Each request is considered independent and the server does not maintain any information about the client or the previous requests it has made. Stateless systems are usually simpler and more scalable, but may require more data to be transmitted in each request.

Each HTTP request is independent and contains all the necessary information for the server to process the request and send back a response. After the server sends a response, it forgets about the request and the client.


### Stateful

In contrast, a stateful system is one that does store information about previous interactions or transactions. Each request is considered in the context of the previous requests made by the same client. This can allow for more efficient communication between the client and the server since less data needs to be transmitted in each request, but can also make the system more complex and less scalable.

Although HTTP is a stateless protocol, it is possible to build stateful web applications by implementing mechanisms to maintain state between requests. Here are a few common methods for building stateful web applications:

* Sessions
* Cookies
* Asynchronous JavaScript calls, or AJAX

  * Session tokens are unique identifiers that are generated by the server and sent to the client in a cookie or URL parameter. The server can use the session token to retrieve information about the user's session and maintain state between requests.

  * Cookies are small pieces of data that are sent from the server and stored on the client's browser. They can contain information such as session IDs, user preferences, and shopping cart contents. The server can use the cookie information to maintain state between requests.

  * AJAX (Asynchronous JavaScript and XML) is a technique that allows web pages to be updated asynchronously by exchanging data with a web server in the background, without interfering with the display and behavior of the existing page.

## Same Origin Policy and Cross-Origin Resource Sharing

The Same Origin Policy (SOP) is a security concept implemented by web browsers that restricts web pages from making requests to a different origin (combination of protocol, domain, and port) than the one that served the web page. This policy is in place to prevent malicious websites from accessing sensitive data from other websites that a user might be logged into.

![SOP mental model](https://danielmiessler.com/images/opRrw.gif)

Cross-Origin Resource Sharing (CORS) is a mechanism that allows a server to specify which origins are allowed to access its resources. It is used to relax the SOP and enable web pages from different origins to communicate with each other. CORS works by adding additional HTTP headers to the response from the server, which specify which origins are allowed to access the resource.

CORS is used to relax the SOP in a controlled manner to allow web pages to communicate with each other without compromising security.