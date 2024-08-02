# AWS DynamoDB with CDK

DynamoDB with CDK & non-relational data.

First we set up the CDK constructs required for the infra.

Then we give them code to add to the lambda to interact with the db:

1. Bootstrap the default data (invoke a lambda)
1. A scan, this will return no data
1. A put that will let them add data by gig_id
1. Query code to get a singular item back

## Objectives

- Learn about NoSQL databases and why we need them
- Get introduced to DynamoDB and learn why we would use it
- Learn about some of DynamoDB's key features
- Batch put data in
- Scan a list of items out
- Get individual items out by ID
- Put individual data in

## Timing

This session is designed to take 3.0 hrs (2 blocks).

## Access to AWS

For setting this up see [README-Instructor-technical-setup.md > AWS Setup section](../README-Instructor-technical-setup.md).

## AWS sessions list

- AWS + Cloud intro 01 ✅ _1.5hrs_
- AWS + Cloud intro 02 ✅ _1.5hrs_
- AWS 01 S3 - storage (manual) ✅ _1.5hrs_
- AWS 02 CDK intro - with S3 ✅ _3.0hrs_
- AWS 03 Cloudfront - get files out of s3 ✅ _1.5hrs_
- AWS 04 Lambda - running code ✅ _3.0hrs_
- AWS 05 Api Gateway - put an API in front of Lambda ✅ _3.0hrs_
- AWS 06 Aurora Serverless Postgres - relational db ✅ _3.0hrs_
- AWS 07 DynamoDB - non-relational db ⬅ _3.0hrs_

### Relationship of CDK exercises and solutions between sessions

See notes in [AWS 01 - README.md](../aws-iac-01-storage-s3-manual/README.md).

## Core Infrastructure prep

See [Instructor technical setup](./README-Instructor-technical-setup.md) > `Instructor Tooling` > `Core Infrastructure repo`.

- This core infra should be set up at the start of the Academy.
- These sessions will rely on that infra being ready.

## Files

- `exercises/*` for the starting point
- `solutions/*` for the Infini Gigs sample code (the lambdas filled in)

## Prep

- Export the presentation to PDF and the zip for distribution using `make generate-session-files f=session_name`
- This session relies on being done in the order above.
- The learners should start from the `./exercises` folder
- The sample stack the Instructor can use for reference is in `./solutions`
- Run the `./setup-demo-db.sh` script to setup a demo DynamoDB table to help illustrate simple vs composite primary keys, and scan vs query searches

## Session

1. We will add a DynamoDB table and populate the lambdas to get and put items.
1. Run the slide deck.
1. Copy code samples to share from the `./solutions` folders rather than the slides.
1. Get the learners to follow along with each step, checking after each that they don't have any mistakes.
1. The breakout sessions involve the learners filling out code in the Lambdas to retrieve data from DynamoDB.
    1. Have small groups of ~3 people in each breakout.
    1. This can also be a project-time exercise if the session is overrunning.

### Environment variables for learners on the course

This master infini gigs demo repo uses `make` to inject the values of two environment variables. During the course from the AWS sessions, learners will need some env vars set up in their terminal profile.

For example in `~/.zshrc`:

```sh
export GIGS_STACK_NAME=markm-gigs
export GIGS_DOMAIN=ngei-sot.academy
# This is a useful default to have set
export AWS_PROFILE=YOUR_AWS_PROFILE
```

If anyone's CDK has issues picking up the correct AWS account and region, the following can be temporarily set in the same file;

```sh
# These should be set by your AWS profile, you should never need these...
export AWS_DEFAULT_REGION=ap-south-1
export AWS_REGION=${AWS_DEFAULT_REGION}
export AWS_ACCOUNT=YOUR_ACCOUNT_NUMBER
# these supposed to be set by cdk - you should never need these...
CDK_DEFAULT_ACCOUNT=${AWS_DEFAULT_REGION}
export CDK_DEFAULT_REGION=${AWS_DEFAULT_REGION}
```