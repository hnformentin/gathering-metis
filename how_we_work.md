# How we work

_Credits_: The following is heavily inspired by the [SCOUT repository](https://github.com/equinor/scout/).

## Issues
All work that is to be done is to be concretized in an issue. And its most
important feature is that it should have a clear description of the end goal.

## The workflow for solving an issue

### Picking up an issue
All issues in the `Todo` column can be picked up by team members. These can either
be found directly in the github repositories, or via the [team
board](https://github.com/equinor/gathering-metis/projects/1).

If this is not possible, you should get a reviewer for this issue immediately and
discuss your approach before you start implementing!

Remember to assign the issue to yourself.

### Create a pull request
As soon as you have written some code, we encourage you to create a pull
request that other team members can see and our CI tooling can evaluate. The PR
should have the format `[#Issue] Name`

Ensure that the pull request will close the issue by using keywords
`fixes #<issue-id>` (or `resolves #<issue-id>`). 

### Request a review
When you consider yourself done with your pull request, verify that you have:
- all tests are passing,
- written sufficient tests,
- solved the issue you picked up and
- go trough the entire diff of your branch and critically evaluate your
  implementation.

When this is done, you are ready to request a review from a team member. To do
this, you move the PR from `In progress` to `Ready for review`. This can be done in the Github project board.

### Reviewing
This is a process that both parties should engage in with respect. Our team
consists of competent team members, all with the goal of creating quality
software for our customers. Ask questions, engage in implementation, but don't
hesitate to request a video discussion if you are lost. Remember to document
the conclusion of video discussions for other team members in the pull request.

### Merge it
If the reviewing process concludes with the issue being resolved by the pull
request in a good manner, and all tests are passing, you are ready to merge
your pull request. Well done!

`goto: Picking up an issue`


## Git usage
We strive to keep a consistent and clean git history and in general:
- all tests should pass on all commits,
- a commit should do one atomic change on the repository and
- the commit message should be descriptive.

For more on commit messages, read [this](https://chris.beams.io/posts/git-commit/).

## Python

### Formatting

We use the uncompromising Python code formatter **Black**: https://black.readthedocs.io/en/stable/