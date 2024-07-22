---
title: AWS CDK Introduction
---

# AWS CDK Introduction

Infrastructure As Code

### Using S3

<aside class="notes">
    N/A
</aside>

---

### Overview

- Intro to IAC (Infrastructure as Code)
- Intro to the AWS CDK (Cloud Development Kit) as a way of doing IAC
- Make and run an example in s3

<aside class="notes">
    N/A
</aside>

---

### Objectives

- Understand why we use IaC
- Understand what CDK is and why we use it
- Create a CDK stack using JavaScript
- Add an s3 bucket to the stack you create using AWS CDK

<aside class="notes">
    N/A
</aside>

---

### AWS sessions list

- AWS + Cloud intro 01 ✅ _1.5hrs_
- AWS + Cloud intro 02 ✅ _1.5hrs_
- AWS 01 S3 - storage (manual) ✅ _1.5hrs_
- AWS 02 CDK intro - with S3 ⬅ _3.0hrs_
- AWS 03 Cloudfront - get files out of s3 _1.5hrs_
- AWS 04 Lambda - running code _3.0hrs_
- AWS 05 Api Gateway - put an API in front of Lambda _3.0hrs_
- AWS 06 Aurora Serverless Postgres - relational db _3.0hrs_
- AWS 07 DynamoDB - non-relational db _3.0hrs_

<aside class="notes">
    This is the list of AWS session done so far, and the following ones
</aside>

---

### Infini-Gigs - Revisited

Lets looks at the S3 storage part of the [Infini Gigs](https://github.com/IW-Academy/infini-gigs-demo-project-ts) architecture:

> See the basic and extended architecture images in the README of [IW-Academy/infini-gigs-demo-project](https://github.com/IW-Academy/infini-gigs-demo-project-ts)

<aside class="notes">
   Demo the diagrams, discuss each.

   Mention how we will automate the "S3" part.

   Skip over the API GW + Lambda details in the advanced diagram.
</aside>

---

### Infini Gigs - S3 buckets

In this session we are looking at putting files in S3, which is this part from [Infini Gigs](https://github.com/IW-Academy/infini-gigs-demo-project-ts):

![](./img/infini-gigs-s3.png)

_but this time - with code not manually._

<aside class="notes">
   Describe how this is going to start building up the picture
</aside>

---

I.e, from the overview diagram:

![](./img/architecture-overview-redacted.png)

Later, in following sessions, we will do more with these files.

<aside class="notes">
   Describe how this is going to start building up the picture
</aside>

---

And from the more detailed one:

![](./img/architecture-details-redacted.png)

There's lots of this we don't need yet.

<aside class="notes">
   Describe how this is going to start building up the picture
</aside>

---

### What is IaC?

Creating the platform through definition files instead of interactive configuration tools (like the AWS Console).

Allows us to define our infrastructure using the same tools and skills that we use for the rest of our development.

<aside class="notes">
    N/A
</aside>

---

### IaC - Concepts

- Files that define what we want to build
- The state of the infrastructure
- A way of creating/updating the infrastructure
- Declarative

<aside class="notes">
    declarative = "infra we want to have" not, "this is what we want to deploy right now" - should reflect final state of infra.

    Ansible works the same way - this is good. Opinions may vary.

    Chef works as "do this now" which can be harder to make work. Opinions may vary.
</aside>

---

### Why is IaC important?

- Repeatable process
- Self-documenting system architecture
- Idempotent (definition and implications to follow)
- Disposable environments
- Dynamic infrastructure
- Can be version-controlled

<aside class="notes">
    Discuss these, try and get some debate going about what they are
</aside>

---

### Why is IaC important?

_Continued..._

- Resilience
- Quickly provision new environments
- Detect out-of-sync environments i.e. "drift" or deviation from desired state
- Easily scalable configuration
- DevOps 😎

<aside class="notes">
    Discuss these, try and get some debate going about what they are
</aside>

---

### DevOps 😎

![](./img/ron-swanson-do-nothing.jpeg)<!-- .element: class="centered" -->

<aside class="notes">
    N/A
</aside>

---

### DevOps 😎

![](./img/drake-automation.jpg)<!-- .element: class="centered" -->

<aside class="notes">
    N/A
</aside>

---

### That's a long list

That was a long list of benefits. Two key ones are:

> _Idempotent_: We can run the same code many times and exactly the same outcome will happen - the same setup will exist afterwards

which in turn leeds to:

> _Burnable_: Well, we didn't call it that, but we can destroy and re-create any set of AWS things we want over and over again

<aside class="notes">
    Discuss these, try and get some debate going about what they are
</aside>

---

### CDK - Cloud Development Kit

![](./img/aws-cdk-logo.png)<!-- .element: class="centered" -->

<aside class="notes">
    N/A
</aside>

---

### Why do we use it?

- Easy to share and reuse your infrastructure as a library
- CDK is a developer-friendly version of CloudFormation
- Code completion within your IDE
- Easy to integrate with our CI/CD process
- We can write JavaScript to control AWS

<aside class="notes">
    N/A
</aside>

---

### CDK - Core Concepts

The AWS CDK is a software development framework from AWS with the purpose of making it easy to define cloud infrastructure and deploy it using AWS CloudFormation.

Effectively, AWS CDK allows us to programmatically create apps that require multiple AWS Products and then deploy said apps through the CLI.

<aside class="notes">
    programmatically = we can write code
</aside>

---

### CDK - Workflow

Here is the main CDK workflow, that we do as engineers:

![](./img/aws-cdk-dev.png)<!-- .element: class="centered" -->

<aside class="notes">
    N/A
</aside>

---

### CDK - Synth Workflow

`synth` converts our JavaScript code (that AWS doesn't understand) into a CloudFormation template (that AWS _does_ understand)

![](./img/cdk-workflow.png)<!-- .element: class="centered" -->

<aside class="notes">
    N/A
</aside>

---

### CDK - Workflow in words

In words the workflow is:

- `Constructs`: The things we want to build like S3 Buckets or Registries for Docker images (ECRs) or Services (ECS)
- `Synthesize`: Get CDK to check it can build a consistent set of Constructs
    - `Assemble`: CDK uses CloudFormation templates
    - `Process`: CDK generates CloudFormation files for us (much easier than by hand!)

<aside class="notes">
    N/A
</aside>

---

### Emoji Check:

On a high level, are you happy with the concepts of the CDK Workflow?

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### Useful links

- https://aws.amazon.com/cdk/ - a good general intro
- https://aws.amazon.com/blogs/developer/aws-cdk-developer-preview/ - developers intro
- https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html - the how-to
- https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-javascript.html - the how-to for JavaScript
- https://docs.aws.amazon.com/cdk/latest/guide/cli.html - list of CDK commands

<aside class="notes">
    Open up each link as we will use the information there
</aside>

---

### Task - set default region

We need to always use the same region in AWS, so we don't lose things like bringing stacks up in Japan instead of `eu-west-1`!

This should be set from the aws-and-cloud-intro sessions, but run it again now to be sure:

```bash
aws configure set region eu-west-1 --profile <profile-name>
```

<aside class="notes">
    Make sure everyone has done it!

    This should be set from aws-and-cloud-intro-02 !!
</aside>

---

### Task - Prepare your code

Before we can get stuck in we need to rename the stack so we don't have a conflict nightmare when deploying.

Create a `GIGS_STACK_NAME` env variable setup in your zsh/bash rc profiles, i.e `~/.zshrc` or `~./bash_profile`:

- Add

```sh
export GIGS_STACK_NAME=<your name>-gigs
```

- Save and exit the file
- Source the file, or close and reopen a new terminal.

> If you run `echo $GIGS_STACK_NAME` in your terminal, does it return something?

<aside class="notes">
    Distribute the code out to the cohort in the file-share channel
</aside>

---

### Task - Install CDK

Via the [getting started](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) guide:

```bash
npm install -g aws-cdk@2
```

Check it with:

```bash
cdk --version
```

<aside class="notes">
    Should only take a few mins
</aside>

---

### Task - open starting folder

- Navigate to the `./exercises` folder in a terminal
- Run `pwd`
    - you should see the right `aws-iac-02-cdk-intro-s3/exercises` folder path
- Run `ls -la`
    - You should see the `gig-flyers` and `client` folders

```text [4,5]
.
..
.gitignore
client
gig-flyers
```

<aside class="notes">
    Should only take a few mins.

    Make sure everyone is in the right place!
</aside>

---

### Code Along - create app

Let's create your first AWS CDK app.

> Make sure you are in the `exercises` folder!

In your terminal, create a new folder called `<your name>-gigs-S3`. Then navigate to the new folder:

```sh
cd exercises
mkdir <your name>-gigs-S3
cd <your name>-gigs-S3
```

<aside class="notes">
    Recommend to the cohort that this is inside their checked-out git repo.

    Remind them to replace 'your name' with their actual name. Someone won't.

    The problem is if two folks make a stack of the same name like `cdk` they will clash and make a mess.
</aside>

---

### Double-check!

> How many people called their directory literally _'your name'_ instead of putting their own name in?

<aside class="notes">
    N/A
</aside>

---

### Folder check!

> Is your folder name definitely of the form `<your name>-gigs-S3`?

If it isn't, what problems might occur if we all make one generically named `myStack` or `cdk-s3` or just `cdk`??

Yes, this slide is here as people keep on not personalizing the names!

<aside class="notes">
    Make sure someone didn't make a folder called `myStack` or say `cdk-s3` or `cdk`.

    One Academite *always* has!

    The problem is if two folks make a stack of the same name like `cdk` they will clash and make a mess.
</aside>

---

### Code Along - generate app

Already done:

```sh
cd <your name>-gigs-S3
```

Now we need to initialise the app:

```sh
cdk init app --language typescript --generate-only
```

This will create some files inside your `<your name>-gigs-S3` directory to help you organise the source code for your first CDK app.

_Note: `--generate-only` ensures we don't make a new git repo in our existing git repo!_

<aside class="notes">
    N/A
</aside>

---

### Show-and-tell

Lets have a look at the files generated by CDK in folder `./exercises/<your name>-gigs-s3`:

> The Instructor will briefly describe each file.

- `package.json` - CDK runs this
- `bin/<your name>-gigs-s3.ts` - stack entry point (what files to run)
- `lib/<your name>-gigs-s3-stack.ts` - the contents of the stack (what to make in AWS)

<aside class="notes">
    Show the generated content in your folder - give a brief description of each file

    "package.json" for cdk it's self
    "bin/<your name>-gigs-s3.ts" which defines the stack and starts it up
    "lib/<your name>-gigs-s3-stack.ts" which defines the things in the stack
</aside>

---

### Task - check the versions

Make sure in `package.json` that `aws-cdk` and `aws-cdk-lib` are the _exactly_ same version!

For example:

```json
  "devDependencies": {
    "aws-cdk": "2.51.1",
    ...
  },
  "dependencies": {
    "aws-cdk-lib": "2.51.1",
    "constructs": "^10.0.0",
    ...
  }
```

<aside class="notes">
    If we don't, a lot of VERY weird errors have been seen.

    Copy code samples to share from the /examples rather than the slides.
</aside>

---

### Code Along - npm

Install all the necessary npm packages:

```sh
npm install
```

We need `npm install` as it's the first time - thereafter we can use `npm ci`.

<aside class="notes">
    N/A
</aside>

---

### Code Along

Next, we are going to list the stacks CDK has made in your app:

```sh
cdk ls
```

If you don't see `YourNameGigsS3Stack`, make sure you named your app's directory `<your name>-gigs-S3`, and you are in that folder!

<aside class="notes">
    If any academites do not see YourNameS3Stack they need to create the app again from scratch. Use the following code block to do this.

    ```bash
        mkdir <your name>-gigs-s3
        cd <your name>-gigs-s3
        cdk init app --language typescript --generate-only
        cdk ls
    ```
</aside>

---

### Emoji Check:

Is your code compiling and the CDK `ls` listing yours??

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### Files we don't want in Git

Some CDK output files will have sensitive AWS information in them.

By default the folder `cdk.out` is ignored, as is `.cdk.staging`.

Ensure these are in your auto-generated `.gitignore`

<aside class="notes">
    IMPORTANT make sure everyone does this.
</aside>

---

### Emoji Check:

Have we all checked `cdk.out` and `.cdk.staging` are in our `.gitignore`?

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### Code Along - get env var

Let's pull our `GIGS_STACK_NAME` env var into the `bin/*.ts` file so we can use it.

At the top of the file, **after the imports**, add the following:

```ts
const stackName: string = process.env.GIGS_STACK_NAME || ''
if (!(stackName && stackName.trim() && stackName.trim().length > 0)) {
  console.error(`PARAMETER $GIGS_STACK_NAME NOT SET, got: '${stackName}'`)
  process.exit(1)
}
```

<aside class="notes">
    Copy code samples to share from the /examples rather than the slides.

    This stops people having the same stack name.
</aside>

---

### Code Along - collect some settings

There are some settings we need to send our stack, so let's set those up next in the `bin/*.ts` file, **after the imports**:

```ts
const settings: GigsSettings = {
  // Inherited from cdk.StackProps
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || 'NOT_SET',
    region: process.env.CDK_DEFAULT_REGION || 'NOT_SET',
  },
  stackName: stackName,
  permissionsBoundaryPolicyName: 'ScopePermissions',
  subDomain: stackName.toLowerCase(),
  // in later sessions we will add more settings
}
```

We will define these environment variables on the next slide.

_We use some environment variables, so we never have our ACCOUNT NUMBER in GitHub!_

Don't worry about the warning for `GigsSettings` type for now.

<aside class="notes">
    Copy code samples to share from the /examples rather than the slides.

    The scope permissions are for security limits on what our code can do. They come from the Academy Core Infra repo's own Cloud Formation deployment.
</aside>

---

### Code Along - collect some settings

And now in our terminal session, or in the `~/.zshrc` or `~/.bash_profile` files, enter the following commands:

```sh
export AWS_PROFILE=<profile-name>
```

> If you run `echo $AWS_PROFILE` in your terminal, does it return something?

Or in `cdk.json`, add the following line:

```json [3]
{
  "app": "npx ts-node --prefer-ts-exts bin/vince-sot-prep-1-gigs-s3.ts",
  "profile": "iw-academy", // or whatever your aws profile name is
  "watch": {
    ...
  },
  "context": {
    ...
  }
}
```

<aside class="notes">
    This step avoids "AWS_PROFILE env var undefined" errors on first deployment
</aside>

---

### What is GigSettings?

In the code we just put in, we have `settings: GigsSettings`, which you may notice is not compiling yet.

Update the import line that refers to the stack file to include it:

```ts
import { YourNameGigsS3Stack, GigsSettings } from '../lib/cdk-stack'
```

This won't compile until we match this into the stack file.

Once we have finished in the `bin` file, then we will do the `lib` file that defines our stack contents and everything should be good.

<aside class="notes">
    Make sure everyone changes the name!

    Copy code samples to share from the /examples rather than the slides.
</aside>

---

### Stack definition

At the bottom of the `bin/<your name>-gig-s3.ts` file we have a default stack setup:

```ts
const app = new cdk.App();
new YourNameGigsS3Stack(app, 'YourNameGigsS3Stack', {
  /* lots of comments here */
});
```

We're going to update this too (See next slide).

<aside class="notes">
    Copy code samples to share from the /examples rather than the slides.
</aside>

---

### Stack definition

In `bin/<your name>-gig-s3.ts` file, change the stack setup to this:

```ts
const app = new cdk.App()
new YourNameGigsS3Stack(app, `${settings.stackName}-TS-CdkStack`, settings)
```

Why have we done this? It ties the stack name to your env var - so that the boilerplate code we build up over all the AWS CDK sessions will build the same stack :-)

<aside class="notes">
    Make sure everyone changes the name!

    Copy code samples to share from the /examples rather than the slides.
</aside>

---

### Check it compiles

> If we run `cdk ls` again, will it compile?

<aside class="notes">
    It shouldn't, as we have not done the `lib` stack file yet!
</aside>

---

### Your bin code should look like this

> For an example of the finished product see `./examples/markm-gigs-s3/bin/*.ts`

Does yours look like that with all the parts in the right order?

<aside class="notes">
    Screen share the example file
</aside>

---

### What have we done?

> The `bin\<your name>-gigs-s3.ts` file defines the entrypoint for CDK to run.
>
> Now we need to define the 'stack' itself in the `lib/<your name>-gigs-s3-stack.ts` file.

<aside class="notes">
    Explain the difference between the two files.

    Explain we will be using the terms "the bin file" and "the stack file" a lot.
</aside>

---

### Code along: define GigsSettings

We need to define the allowed settings for our app.

Add this to the top of the `lib/<your name>-gigs-s3-stack.ts` file, hereafter called "the stack file", **after the imports**:

```ts
export interface GigsSettings extends cdk.StackProps {
  permissionsBoundaryPolicyName: string,
  subDomain: string,
}
```

This allows us to inherit `env` and `stackName` from the default `cdk.StackProps`, and add our own properties for later use.

<aside class="notes">
    Explain we will be using the terms "the bin file" and "the stack file" a lot.

    Mention how `env` and `stackName` are in set up in the "bin" file.
</aside>

---

### Code along: Use GigSettings

Update your stack file constructor to look like this:

```ts
export class YourNameGigsS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: GigsSettings) {
    super(scope, id, props)
    // The code that defines your stack goes here
  }
}
```

Now our custom properties will be available to our stack code to use later.

<aside class="notes">
    Explain we will be using the terms "the bin file" and "the stack file" a lot.

    Mention how "env" and "stackName" are in set up in the "bin" file.
</aside>

---

### Check your new stack name

Our code should now compile. If we run this again:

```sh
cdk ls
```

...then you should see `<your name>-gigs-TS-CdkStack` listed - slightly different to the prior auto-generated one.

<aside class="notes">
    Mention how we customised the name in the bottom of the "bin" file, and this should look slightly different to before.
</aside>

---

### Emoji Check:

Has your app `ls`-ed? And shown `<NAME>-gigs-TS-CdkStack`?

More importantly: At a high level do we understand why we've parametrised our stack names?

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### Next: the real stuff!

> We now have a "shell" CDK stack ready to go.
>
> Soon we can start adding in the use of S3...
>
> ...but first we need a bit _more_ setup.

<aside class="notes">
    Thus far it was all just setup boilerplate...
</aside>

---

### Code Along - Add imports

In your `lib/<your name>-gigs-s3-stack.ts` stack file, update your imports to look like this at the top:

```ts
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment'
```

These are the parts of AWS we will use today (IAM, S3, S3 deployments)

<aside class="notes">
    Copy code samples to share from the /examples rather than the slides.
</aside>

---

### Mine!

Lets Tag everything in our stack with our own names - useful so we can see what is mine and what is yours!

In `lib/<your name>-gigs-s3-stack.ts` put this tag code inside your class `constructor`:

```ts [3,4,5]
 constructor(scope: Construct, id: string, props: GigsSettings) {
    super(scope, id, props)
    // These ones are mine
    cdk.Tags.of(this).add('Name', props.stackName!)
    cdk.Tags.of(this).add('Academy', props.stackName!)
  }
```

<aside class="notes">
    Copy code samples to share from the /examples rather than the slides.

    The "!" tell the compiler we know it will be set - remove them (temporarily) to show how TS complains.
</aside>

---

### Scope permissions - Because security

We need to set our stack permissions to be a limited set, in particular to prevent an _IAM role breakout_.

This is so that our code can't do or access anything outside of basic AWS operations - i.e. limits us to eu-west-1, us-east-1 and some other basic things.

This also prevents us adding IAM roles with wider permissions than our own, so no one can do an IAM role breakout (slowly increasing your own privileges - a _breakout_).

This way no one can get root privileges and run a bitcoin mining farm on our AWS estate :-)

<aside class="notes">
    See next slide!
</aside>

---

### Code Along - Scope permissions

In `lib/<your name>-gigs-s3-stack.ts` put this boundary code after your tags code:

```ts [5,6,7,9,10]
  constructor (scope, id, props) {
    super(scope, id, props);
    // --after tags -- //
    // Set a permissions boundary
    const boundary = iam.ManagedPolicy.fromManagedPolicyName(
      this,
      'Boundary',
      props.permissionsBoundaryPolicyName
    )
    iam.PermissionsBoundary.of(this).apply(boundary)
```

<aside class="notes">
    Copy code samples to share from the /examples rather than the slides.

    This is so that it can't do or access anything outside of basic AWS operations - limits us to eu-west-1, us-east-1 and other things like limiting it to small virtual machines. It also prevents us adding IAM roles with wider permissions than our own, so no can do a IAM role breakout (slowly increasing your own privileges). This way no one can get root and run a bitcoin mining farm on our AWS estate.
</aside>

---

### First deployment!

> We now have an empty stack we can deploy.
>
> Doing this now ensures everything else is ready for us to fill in later.

<aside class="notes">
    Do this yourself (next few slides) and demo it all to the Academites.
</aside>

---

### Code Along - logon

Log in to AWS using the CLI.

> In your terminal run your `aws-logon` alias.

You can also run the full command i.e. `aws-azure-login --profile iw-academy` to log in.

_Start a one hour timer! Else this will time out in the middle of our fun later and cause havoc!_

<aside class="notes">
    Get everyone to log in - we haven't touched AWS yet so haven't needed to do this yet
</aside>

---

### Code Along - synth

Now we need to synthesize the app:

```sh
npx cdk synth
```

The `npx cdk synth` command compiles your app into Cloud Formation yaml.

It is optional (though good practice) to always synthesize before deploying. This verifies your TS is valid before each deployment.

<aside class="notes">
    N/A
</aside>

---

### Emoji Check:

Has your app Synth-ed?

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### Code Along - deploy

> It's deployment time!

```sh
npx cdk deploy
```

`npx cdk deploy` displays progress information as your stack is deployed. You may get a confirmation `Y/N` prompt, depending on what changed.

When it's done, the command prompt reappears.

<aside class="notes">
    At this point, if everything goes to plan they should all be able to see their stacks in the console.
</aside>

---

### Terminal output

The results of your deploy should look a bit like this in the terminal:

![](./img/aws-cdk-deploy-ok.png)

<aside class="notes">
    At this point, if everything goes to plan they should all be able to see their stacks in the console.
</aside>

---

### To the AWS Console!

> Now we can check the results of that in the AWS Console

Things to be aware of in Cloud Formation:

- _List of Stacks:_ Who has set up what
- _Stack manipulation:_ You **can** do stuff in the console, but don't
- _Drift detection:_ See if anyone messed with your stuff

<aside class="notes">
    Show the points above - we can do things in the console too - but we will use the CDK!
</aside>

---

### InfiniGigs!

> Now we are ready to add a bucket and put the flyers in it like [InfiniGigs](https://github.com/IW-Academy/infini-gigs-demo-project-ts)!

![](./img/infini-gigs-s3.png)

<aside class="notes">
    See next slide for the code!
</aside>

---

### Code Along - Add Flyers bucket

Define a new s3 bucket after the boundary code:

```ts
// -- after boundary -- //
// Bucket to put static flyer data in
const flyersBucket = new s3.Bucket(this, 'flyers-hosting', {
  bucketName: `${props.subDomain}-flyers-hosting`,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // security
  encryption: s3.BucketEncryption.S3_MANAGED // security
})
```

<aside class="notes">
    Describe the Construct params here (stack, cdk-id, props).

    Describe the bucket props we have set.

    On the next slide we go into some details.
</aside>

---

### Why 'subDomain' in the name?

> Can you think of some reasons why we used `subDomain` in the `bucketName`?

<aside class="notes">
    We use this over and over again in all the CDK material, so it's good to labour the point.
</aside>

---

### Why 'subDomain' in the name?

As mentioned before, every CDK _construct_ takes a set of config in the 3rd argument.

If we don't specify our own `bucketName`, CDK will use an autogenerated name that is incomprehensible.

As `subDomain` is derived in the bin file from our env var, this makes sure our bucket name is unique, and sensible.

And also - AWS S3 Bucket names must be all _lower case_.

<aside class="notes">
    We use this over and over again in all the CDK material, so it's good to labour the point.
</aside>

---

### Your bucket code should look like this

> For an example of the finished product see `./examples/markm-gigs-s3/lib/*.ts`

Does yours look like that with all the parts in the right order?

<aside class="notes">
    Screen share the example file
</aside>

---

### Construct Parameters - revisit

We have added a `Bucket` construct. Like all constructs, the Bucket class takes three parameters:

- `scope`
- `Id`
- `props`

All constructs take these same three arguments, so it's worth keeping it in mind as you learn about new constructs (like bucket deployments, api gateway, lambda, etc).

<aside class="notes">
    N/A
</aside>

---

### Construct Parameters - revisit

- `scope:` Tells the bucket that the stack is its parent: it is defined within the scope of the stack. You can define constructs inside of constructs, creating a hierarchy (tree).

<aside class="notes">
    N/A
</aside>

---

### Construct Parameters - revisit

- `Id:` The logical ID of the Bucket within your CDK app. This uniquely identifies the bucket across deployments so the CDK can update it if you change how it's defined in your app. Buckets can also have a name, which is separate from this ID (it's the bucketName property).

<aside class="notes">
    N/A
</aside>

---

### Construct Parameters - revisit

- `props:` A bundle of values that define properties of the bucket.

Here we've defined `versioned`, which enables versioning for the files in the bucket, and fixed the `name` so the CDK does not auto-generate a really long one.

We also use `removalPolicy` as some AWS resources (like buckets full of our data files!) one might not always want to wipe out.

<aside class="notes">
    N/A
</aside>

---

### Because (more) security:

This prevents default public access outside of our account. Add this after the bucket definition:

```ts
flyersBucket.addToResourcePolicy( // security
  new iam.PolicyStatement({
    resources: [
      flyersBucket.arnForObjects('*'),
      flyersBucket.bucketArn
    ],
    actions: [ 's3:*' ],
    effect: iam.Effect.DENY,
    conditions: {
      Bool: { 'aws:SecureTransport': 'false' }
    },
    principals: [ new iam.AnyPrincipal() ],
  })
)
```

<aside class="notes">
    This prevents default public access outside of our account
</aside>

---

### Bucket deployment

> So far we have defined a bucket - next we need to deploy files into the bucket with a "bucket deployment"

<aside class="notes">
    N/A
</aside>

---

### Code Along - bucket deployment

Add this in your `constructor` after the bucket definition:

```ts
// -- after bucket security -- //
// Copy flyers into bucket
new s3Deployment.BucketDeployment(this, 'flyers-deployment', {
  destinationBucket: flyersBucket,
  sources: [ s3Deployment.Source.asset('../gig-flyers') ], // relative to CDK folder
  retainOnDelete: false,
  prune: true,
  memoryLimit: 256, // in case folder is big
})
```

<aside class="notes">
    Note the relative path for `...asset()`
</aside>

---

### Outputs

All IaC toolkits have the notion of `Outputs`. This is a way to pull out useful things like **names** and **IDs** - anything programmatically useful, for us or other stacks.

Many of these IDs and DNS are generated by AWS, so we can't predict the values in advance. So, we print them out for use later.

If we have, for example, the Public Bucket DNS of a web-hosting bucket, we can display that to ourselves.

_Example on next slide_

<aside class="notes">
    Describe how in production systems we would usually have several small-medium interrelated stacks to reduce the Blast Radius.
</aside>

---

### Code Along - add outputs

Add this to the end of your stack file constructor:

```ts
// Outputs - typical things are Name, ARNs, IDs, DNS, etc
new cdk.CfnOutput(this, 'FlyersBucketName', {
  value: flyersBucket.bucketName,
})
```

As this bucket isn't web hosting for us, we won't output the web DNS address.

<aside class="notes">
    Copy code samples to share from the /examples rather than the slides.
</aside>

---

### Code Along - Synth

> It's re-deployment time! But what do we do first?

```sh
npx cdk synth
```

This lets us check our code is valid.

<aside class="notes">
    N/A
</aside>

---

### Code Along - Deploy

> It's re-deployment time! You should see your output when it completes:

You may need to run your `aws-logon` again first - check your timer!

```sh
npx cdk deploy
```

This `deploy` will also take a while.

<aside class="notes">
    N/A
</aside>

---

### Successful deployment

You should see something like this in your terminal:

![](./img/aws-cdk-deploy-with-output.png)

<aside class="notes">
    Check everyone got an output
</aside>

---

### Back to the console!

> Now we should be able to see more in the console!

- More Cloud Formation artifacts
- A bucket
- Files in your _sensibly-named_ bucket!

<aside class="notes">
    N/A
</aside>

---

### Emoji Check:

Is your stack deployed, are there files in your bucket?

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### A great start

We have successfully deployed our flyers! Well done!

But there's more...

> Now we need to deploy the React front end.
>
> This is another common S3 use case.

<span>Q: Which part of the React client should we deploy?</span><!-- .element: class="fragment" -->

<span>A: The statically compiled build output</span><!-- .element: class="fragment" -->

<aside class="notes">
    The client we have in this session is cut-down from the full thing - it won't work for a few more sessions anyway!
</aside>

---

### The Infini-Gigs front end?

> In this session, we have a bare-bones Infini Gigs front end - until we add more in following sessions, it wouldn't fully "work" anyway!

To build it, change to the `aws-iac-02-cdk-intro-s3/exercises/client` folder and run this:

```sh
chmod a+x build.sh
./build.sh
ls ./build/*
```

<aside class="notes">
    Make sure everyone is in the correct folder.

    The client we have in this session is cut-down from the full thing - it won't work for a few more sessions anyway!
</aside>

---

For the react build script you should see something like this at the start:

![](./img/react-build-01.png)

Then this at the end:

![](./img/react-build-02.png)

<aside class="notes">
    Make sure everyone gets a good build.

    The client we have in this session is cut-down from the full thing - it won't work for a few more sessions anyway!
</aside>

---

### Breakouts - 20 mins

> Now in your breakouts, also deploy the React front end:

- Add another bucket `clientBucket` with logical name `${subDomain}-client-bucket`
- Add a duplicate security resource profile as per `flyersBucket`
- Add a deployment for the `../client/dist` folder
- Add an output for the new bucket name
- Re-log into AWS in case of session expiry
- Synth & Deploy
- Profit!

<aside class="notes">
    Check how everyone is doing

    More next slide
</aside>

---

### Breakout - deployment

Hopefully when you deploy you will see both your outputs, and the client/dist files in the new bucket in the console:

![](./img/react-build-03.png)

<aside class="notes">
    Check everyone gets this!
</aside>

---

### Emoji Check:

Is your stack re-deployed with two buckets and different files in each?

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### Success!

Now we have two common use cases of S3 set up:

- Static files like images, pdfs, and documents
- Static website hosting

<aside class="notes">
    Check how everyone is doing
</aside>

---

### Infini Gigs - S3 buckets

In this session we have made this part of [Infini Gigs](https://github.com/IW-Academy/infini-gigs-demo-project-ts):

![](./img/infini-gigs-s3.png)

_but this time - with code not manually._

Great work!

<aside class="notes">
   Describe how this is going to start building up the picture
</aside>

---

### Task - Tidy Up

We don't want to leave all of our resources lying around in AWS. We need to clean them up using CDK:

```bash
npx cdk destroy
```

<aside class="notes">
    n/a
</aside>

---

### Emoji Check:

Is your stack destroyed successfully?

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

### Overview - recap

- Intro to IAC (Infrastructure as Code)
- Intro to CDK as a way of having IAC
- Make and run an example in S3

<aside class="notes">
    Give the Academites a little time to reflect on all the cool stuff they have done in this session.
</aside>

---

### Objectives - recap

- Understand what CDK is
- Create a CDK stack
- Add an S3 bucket to your stack

<aside class="notes">
    Give the Academites a little time to reflect on all the cool stuff they have done in this session.
</aside>

---

### Further reading

The same useful links as before:

- https://aws.amazon.com/cdk/ - a good general intro
- https://aws.amazon.com/blogs/developer/aws-cdk-developer-preview/ - developers intro
- https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html - the how-to
- https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-javascript.html - the how-to for JavaScript
- https://docs.aws.amazon.com/cdk/latest/guide/cli.html - list of CDK commands

<aside class="notes">
    N/A
</aside>

---

### Emoji Check:

On a high level, do you think you understand the main concepts of this session? Say so if not!

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>
