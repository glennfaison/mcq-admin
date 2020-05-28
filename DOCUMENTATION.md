## MCQ App Face recognition

This application currently works with both password and face ID recognition.

### How it works

Upon first entry into the application,
* User clicks to signup
* On signup page, user fills in information and proceeds to approve their webcamf
* Their picture is then taken with the use of both the `Video` and `Canvas` APIs provided by `HTML5`
* After their picture is taken, it is then encoded and coverted to a Blob string
* On the of chance that face recognition fails, the User's account is still created with a username and password.
* This data is then passed to the backend by way of HTTP requests.

#### On the backend

* The backend has been updated to make use of Microsoft's Face Recognition 
* Using the `MS API`, 2 methods were implemented on the backend:
* `callMsDetect` which works to build an `msDetectOptions` object which the `MS API` requires to analyze and get data from face images.
* The function signature is as follows:

```js
function callMsDetect(imageData, onSuccess, onError)
```

* The detect options object can be seen below:

```js
    let msDetectOptions = {
        host: config.FACE_API_HOST,
        method: 'POST',
        port: 443,
        path: config.FACE_API_PATH_DETECT,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Length': Buffer.byteLength(imageData),
            'Ocp-Apim-Subscription-Key': config.FACE_API_KEY
        }
    };
```

* We then make a request to the `MS API` using the HTTP protocol as shown below:

```js
    let msDetectReq = https.request(msDetectOptions, function(msDetectResponse) {
        msDetectResponse.setEncoding('utf8');
        msDetectResponse.on('data', function(msDetectData){
            onSuccess(JSON.parse(msDetectData));
        });
    });
```

* On success, we write our Image Data and return that as the result and on error, we return the aforementioned error.
* This method takse the `imageData` from the frontend and two other callback functions for success and errors if any.

*`callMsCompare` which works to compare 2 faces based on their data and determine if they are the same or similar to each other.
* This method's signature is as shown below:

```js
function callMsCompare(faceId1, faceId2, onSuccess, onError))
```

* The verify options object is as follows:

```js
    let msVerifyOptions = {
        host: config.FACE_API_HOST,
        method: 'POST',
        port: 443,
        path: config.FACE_API_PATH_VERIFY,
        headers: {
            'Ocp-Apim-Subscription-Key': config.FACE_API_KEY
        }
    }
```

* We make a request to the `MS API` as follows:

```js
    let msVerifyReq = https.request(msVerifyOptions, function(msVerifyResponse) {
        msVerifyResponse.setEncoding('utf8');
        msVerifyResponse.on('data', function(msVerifyData) {
            onSuccess(JSON.parse(msVerifyData));
        });
    })
```

* More on the Microsoft Face Recognition software can be found [here](https://docs.microsoft.com/en-us/azure/cognitive-services/Face/quickstarts/javascript)