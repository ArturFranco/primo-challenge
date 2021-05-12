# `Primo Ebooks API`

## Purpose

The purpose of this document is to provide complete instructions Primo Ebooks API deployment.

# Initial Deploy Setup

### Prerequisites

- You must have an AWS account with a user created and its credentials configured on your machine.
- In addition, to begin deployment, you must have installed:

  - `Node.js` (version 12.x)
  - `yarn` (version 1.22.5) or `npm` (version 7.6.2)
  - `Serverless` (version 2.40.0)

## Environment Variables

- Create a `.env` file on project's root dir, following the example below:

```
ACCESS_KEY=<your-access-key>
SECRET_KEY=<your-secret-key>
```

#### Environment Variables Values Explained

##### ACCESS_KEY

- Your AWS user's access key

##### SECRET_KEY

- Your AWS user's secret access key

### Execute Primo Ebooks API deploy

- Go to the project's root dir via terminal.
- Run one of these commands for install dependencies:
  - `yarn` or `npm i`
- Run one these commands for deploy the Primo Ebooks API to AWS environment:
  - `yarn deploy-dev` or `npm run deploy-dev`
- At the end of the deploy, see the logs and get the `ServiceEndpoint` value below `Stack Outputs`. This value is the URL for access Primo Ebooks API.

### Execute Primo Ebooks API deletion

- Run one of these commands for delete the Primo Ebooks API of AWS environment:
  - `yarn delete-dev` or `npm run delete-dev`